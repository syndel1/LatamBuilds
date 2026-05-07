/**
 * Brand asset generator for the GTM Hackathon landing.
 *
 * Outputs:
 *   public/og.png         (1200x630, Open Graph)
 *   public/og-twitter.png (1200x600, Twitter)
 *   public/favicon.ico    (16/32/48, multi-size ICO)
 *
 * Pipeline: hand-built SVG -> rsvg-convert -> PNG -> ImageMagick -> ICO.
 * Zero npm deps — uses system tools that ship with most dev machines:
 *   - rsvg-convert (librsvg)
 *   - magick (ImageMagick 7) or convert (IM 6)
 *
 * Run with:  npx tsx scripts/generate-assets.ts
 *            (or)  bun scripts/generate-assets.ts
 *
 * Idempotent: safe to re-run.
 */

import { execFileSync } from "node:child_process"
import { mkdirSync, readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"

const ROOT = resolve(import.meta.dirname ?? __dirname, "..")
const PUBLIC = join(ROOT, "public")
const WORDMARK_PATH = join(PUBLIC, "figma", "the-gtm-hackathon.svg")

const palette = {
  ink: "#0c1119",
  paper: "#fafafa",
  accent: "#e7acff",
  cyan: "#86f4f4",
  magenta: "#f042ff",
  purple: "#7d39eb",
}

function readWordmarkInner(): string {
  const raw = readFileSync(WORDMARK_PATH, "utf8")
  // strip the outer <svg ...> and </svg> so we can re-embed inside our own viewBox
  const inner = raw.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "")
  // recolor any var(--fill-0, #0a0a0a) tokens to paper so the wordmark reads on dark bg
  return inner.replaceAll('var(--fill-0, #0a0a0a)', palette.paper).replaceAll('#0a0a0a', palette.paper)
}

function buildOgSvg(width: number, height: number, wordmark: string): string {
  // wordmark native dims: 956 x 157
  const wmTargetWidth = Math.round(width * 0.62)
  const wmScale = wmTargetWidth / 956
  const wmTargetHeight = Math.round(157 * wmScale)
  const wmX = Math.round((width - wmTargetWidth) / 2)
  const wmY = Math.round(height / 2 - wmTargetHeight / 2 - 28)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="${palette.purple}" stop-opacity="0.42" />
      <stop offset="40%" stop-color="${palette.magenta}" stop-opacity="0.16" />
      <stop offset="100%" stop-color="${palette.ink}" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="rule" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="${palette.paper}" stop-opacity="0" />
      <stop offset="50%" stop-color="${palette.paper}" stop-opacity="0.55" />
      <stop offset="100%" stop-color="${palette.paper}" stop-opacity="0" />
    </linearGradient>
  </defs>

  <!-- base -->
  <rect width="100%" height="100%" fill="${palette.ink}"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>

  <!-- corner crosses (editorial decoration, echoing hero) -->
  <g fill="${palette.paper}" font-family="'IBM Plex Mono', 'Menlo', monospace" font-size="34" font-weight="400">
    <text x="48"  y="74"  opacity="0.55">+</text>
    <text x="${width - 70}" y="74"  opacity="0.55" text-anchor="middle">+</text>
    <text x="48"  y="${height - 44}" opacity="0.55">+</text>
    <text x="${width - 70}" y="${height - 44}" opacity="0.55" text-anchor="middle">+</text>
  </g>

  <!-- top kicker -->
  <g font-family="'IBM Plex Mono', 'Menlo', monospace" fill="${palette.accent}">
    <text x="${width / 2}" y="120" font-size="22" font-weight="700"
          letter-spacing="6" text-anchor="middle" opacity="0.92">
      LATAM · BUILDS · 2026
    </text>
  </g>

  <!-- thin axis line (engineering decoration) -->
  <line x1="${width / 2}" y1="146" x2="${width / 2}" y2="${wmY - 36}" stroke="${palette.paper}" stroke-opacity="0.32" stroke-width="1.4"/>
  <circle cx="${width / 2}" cy="146" r="4" fill="${palette.paper}"/>

  <!-- wordmark (vector) -->
  <g transform="translate(${wmX}, ${wmY}) scale(${wmScale})">
    ${wordmark}
  </g>

  <!-- tagline -->
  <g font-family="'Barlow', 'Inter', 'Helvetica Neue', sans-serif" fill="${palette.paper}">
    <text x="${width / 2}" y="${wmY + wmTargetHeight + 76}" font-size="22" font-weight="700"
          letter-spacing="5" text-anchor="middle" opacity="0.92">
      LATAM&apos;S FIRST GO-TO-MARKET HACKATHON
    </text>
  </g>

  <!-- bottom rule -->
  <line x1="120" y1="${height - 124}" x2="${width - 120}" y2="${height - 124}" stroke="url(#rule)" stroke-width="1"/>

  <!-- bottom dates -->
  <g font-family="'IBM Plex Mono', 'Menlo', monospace" fill="${palette.paper}">
    <text x="120" y="${height - 78}" font-size="20" font-weight="600" letter-spacing="4">
      BOGOTÁ · MAY 9–10
    </text>
    <text x="${width - 120}" y="${height - 78}" font-size="20" font-weight="600" letter-spacing="4" text-anchor="end">
      CDMX · MAY 23–24
    </text>
  </g>
</svg>`
}

function buildFaviconSvg(size: number): string {
  // editorial "+" mark on a dark plate. Use filled rects (not stroked lines) so
  // the gradient renders reliably across rsvg-convert versions.
  const cx = size / 2
  const cy = size / 2
  const arm = Math.round(size * 0.62) // total arm length
  const thick = Math.round(size * 0.16) // arm thickness
  const radius = Math.round(size * 0.18)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"  stop-color="${palette.purple}"/>
      <stop offset="100%" stop-color="${palette.magenta}"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${radius}" fill="${palette.ink}"/>
  <rect x="${cx - arm / 2}" y="${cy - thick / 2}" width="${arm}" height="${thick}" fill="url(#g)"/>
  <rect x="${cx - thick / 2}" y="${cy - arm / 2}" width="${thick}" height="${arm}" fill="url(#g)"/>
</svg>`
}

function rasterize(svg: string, outPng: string, width: number, height: number) {
  const tmp = mkdtempSync(join(tmpdir(), "gtm-asset-"))
  const svgPath = join(tmp, "in.svg")
  writeFileSync(svgPath, svg, "utf8")
  try {
    execFileSync("rsvg-convert", [
      "-w", String(width),
      "-h", String(height),
      "-o", outPng,
      svgPath,
    ], { stdio: "inherit" })
  } finally {
    rmSync(tmp, { recursive: true, force: true })
  }
}

function buildIco(svg: string, outIco: string, sizes: number[]) {
  const tmp = mkdtempSync(join(tmpdir(), "gtm-fav-"))
  try {
    const svgPath = join(tmp, "fav.svg")
    writeFileSync(svgPath, svg, "utf8")
    const pngs = sizes.map((s) => {
      const p = join(tmp, `fav-${s}.png`)
      execFileSync("rsvg-convert", ["-w", String(s), "-h", String(s), "-o", p, svgPath], {
        stdio: "inherit",
      })
      return p
    })
    // ImageMagick 7: `magick image1 image2 ... out.ico`
    execFileSync("magick", [...pngs, outIco], { stdio: "inherit" })
  } finally {
    rmSync(tmp, { recursive: true, force: true })
  }
}

function main() {
  mkdirSync(PUBLIC, { recursive: true })
  const wordmark = readWordmarkInner()

  console.log("> generating og.png (1200x630)…")
  rasterize(buildOgSvg(1200, 630, wordmark), join(PUBLIC, "og.png"), 1200, 630)

  console.log("> generating og-twitter.png (1200x600)…")
  rasterize(buildOgSvg(1200, 600, wordmark), join(PUBLIC, "og-twitter.png"), 1200, 600)

  console.log("> generating favicon.ico (16,32,48)…")
  buildIco(buildFaviconSvg(256), join(PUBLIC, "favicon.ico"), [16, 32, 48])

  console.log("✓ done. wrote og.png, og-twitter.png, favicon.ico to /public")
}

main()
