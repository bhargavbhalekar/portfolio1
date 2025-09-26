import { motion } from 'framer-motion'

export default function Hero() {

  return (
    <section className="relative overflow-hidden pt-16 pb-24 bg-gradient-to-b from-white to-red-50">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(circle,var(--primary),transparent)'}} />
      <div className="container mx-auto px-6">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <img src="/signature.svg" alt="Bhargav signature" className="w-48 mb-4" />
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight">
            Hi, I’m <span className="text-[var(--primary)]">Bhargav Bhalekar</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            I build playful, interactive web experiences with React and Python.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded bg-[var(--primary)] text-white text-sm">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded border border-red-200 text-sm">Contact</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 rounded border border-red-200 text-sm">View Resume</a>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <WidgetCard title="Availability">
            <p className="text-sm text-gray-700">Open to Frontend / Full‑stack roles · Remote‑friendly</p>
            <div className="mt-3 flex gap-2">
              <a href="#contact" className="px-3 py-1 rounded border text-sm">Contact</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-[var(--primary)] text-white text-sm">Resume</a>
            </div>
          </WidgetCard>

          <WidgetCard title="Tech Stack">
            <div className="flex flex-wrap gap-2 text-sm">
              {['React','TypeScript','Tailwind','Framer Motion','Python','Django','DRF','Docker'].map(s => (
                <span key={s} className="px-2 py-1 rounded-full border border-red-200 bg-white shadow-sm">{s}</span>
              ))}
            </div>
          </WidgetCard>

          <WidgetCard title="Highlights">
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="p-2 rounded border"><div className="font-serif text-xl font-bold">15+</div><div className="text-gray-600">Projects</div></div>
              <div className="p-2 rounded border"><div className="font-serif text-xl font-bold">3</div><div className="text-gray-600">Blog posts</div></div>
              <div className="p-2 rounded border"><div className="font-serif text-xl font-bold">2</div><div className="text-gray-600">Hackathons</div></div>
            </div>
          </WidgetCard>
        </div>
      </div>
    </section>
  )
}

function WidgetCard({ title, children }) {
  return (
    <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}}
      className="rounded-xl border border-red-100 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md">
      <div className="font-semibold mb-2">{title}</div>
      {children}
    </motion.div>
  )
}
