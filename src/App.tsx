import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Walkthrough from './sections/Walkthrough'
import AdminShowcase from './sections/AdminShowcase'
import Engineering from './sections/Engineering'
import TechStack from './sections/TechStack'
import Footer from './sections/Footer'

function App() {
  // On a hard/direct load with a hash in the URL (e.g. /#walkthrough), the browser's
  // native anchor scroll fires before this is a client-rendered SPA — there's no
  // matching element in the initial HTML, so it silently does nothing and leaves the
  // page at the top. Scroll to the target manually once it exists in the DOM.
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    target?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])

  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Walkthrough />
        <AdminShowcase />
        <Engineering />
        <Problem />
        <TechStack />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
