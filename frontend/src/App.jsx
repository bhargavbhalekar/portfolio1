import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  return (
    <AnimatePresence>
      <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <BlogList />
        <Contact />
        <Footer />
      </motion.main>
    </AnimatePresence>
  )
}
