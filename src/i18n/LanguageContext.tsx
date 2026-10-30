import { createContext, useContext, useState, type PropsWithChildren } from 'react'

export type Lang = 'ko' | 'en'

const STORAGE_KEY = 'notme-portfolio-lang'

function detectInitialLang(): Lang {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
  if (stored === 'ko' || stored === 'en') return stored
  const browserLang = typeof navigator !== 'undefined' ? navigator.language : 'en'
  return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void } | null>(null)

export function LanguageProvider({ children }: PropsWithChildren) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  function setLang(next: Lang) {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
