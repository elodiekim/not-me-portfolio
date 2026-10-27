import Nav from './components/Nav'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Walkthrough from './sections/Walkthrough'
import AdminShowcase from './sections/AdminShowcase'
import Engineering from './sections/Engineering'
import TechStack from './sections/TechStack'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Walkthrough />
        <AdminShowcase />
        <Engineering />
        <TechStack />
      </main>
      <Footer />
    </>
  )
}

export default App
