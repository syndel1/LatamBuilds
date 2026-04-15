"use client"

import { useEffect, useRef, useCallback } from "react"

export function useReveal() {
  const elementsRef = useRef<Set<Element>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    elementsRef.current.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) {
      elementsRef.current.add(node)
      observerRef.current?.observe(node)
    }
  }, [])

  return ref
}
