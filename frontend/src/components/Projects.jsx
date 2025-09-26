import { motion } from 'framer-motion'

const projects = [
  { title: 'Playful UI Kit', desc: 'Animated components with Tailwind + Framer Motion.' },
  { title: 'Weather Dash', desc: 'Open-Meteo powered weather and charts.' },
  { title: 'Spotify Widget', desc: 'Now playing embeds and visualizers.' },
]

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ParallaxCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function ParallaxCard({ title, desc }) {
  return (
    <motion.div whileHover={{y:-6, rotateX:2, rotateY:-2}} className="rounded-xl border border-red-100 p-5 shadow-sm bg-white">
      <div className="font-semibold">{title}</div>
      <div className="text-gray-600 text-sm mt-1">{desc}</div>
      <button className="mt-4 text-sm text-[var(--primary)] link-underline">Learn more</button>
    </motion.div>
  )
}
