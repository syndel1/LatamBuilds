"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Lang, t } from "@/lib/translations"

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  tr: typeof t["en"]
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  tr: t["en"],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
