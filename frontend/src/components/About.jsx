import { motion } from 'framer-motion'
import { useState } from 'react'

export default function About() {
  const candidates = ['/profile.jpg','/profile.jpeg','/profile.png','/profile.webp','/profile.svg']
  const [idx, setIdx] = useState(0)
  const src = candidates[idx]
  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <h2 className="section-title">About</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.img whileHover={{rotate:1, scale:1.02}} src={src} onError={() => setIdx(i => Math.min(i+1, candidates.length-1))} alt="Bhargav profile" className="aspect-square object-cover rounded-2xl bg-gradient-to-tr from-red-100 to-white border border-red-100" />
        <div className="text-gray-700 leading-relaxed">
          <p>
            I’m a frontend-focused full‑stack developer who enjoys crafting crisp UI and delightful micro‑interactions.
            I love React, animations, and clean APIs. Outside of coding, I explore design systems and music tech.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#projects" className="px-3 py-2 rounded border border-red-200">See projects</a>
            <a href="#contact" className="px-3 py-2 rounded bg-[var(--primary)] text-white">Let’s talk</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-2 rounded border border-red-200">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
