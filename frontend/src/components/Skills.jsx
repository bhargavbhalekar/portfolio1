const skills = ['React', 'Tailwind', 'Framer Motion', 'TypeScript', 'Python', 'Django', 'DRF', 'Docker']

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 className="section-title">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="px-3 py-2 rounded-full border border-red-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow transition text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  )}
