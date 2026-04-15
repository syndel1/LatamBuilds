"use client"

const footerLinks = [
  { label: "Schedule", href: "schedule" },
  { label: "Prizes", href: "prizes" },
  { label: "Sponsors", href: "sponsors" },
  { label: "Team", href: "team" },
]

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer>
      <div className="footer-logo">
        GTM <span>&times;</span> Hackathon
      </div>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a key={link.href} onClick={() => scrollToSection(link.href)}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer-by">By makers &times; 30X · 2026</div>
    </footer>
  )
}
