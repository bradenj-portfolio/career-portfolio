import './index.css'
import { Nav } from './components/nav/Nav'
import { Hero } from './components/hero/Hero'
import { DeadExodus } from './components/deadexodus/DeadExodus'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Skills } from './components/skills/Skills'
import { Education } from './components/education/Education'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'

export default function App() {
  return (
    <>
      <a href="#contact" className="skip">Skip to contact</a>
      <Nav />
      <Hero />
      <DeadExodus />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
