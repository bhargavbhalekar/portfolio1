import { useState } from 'react'

const base = import.meta.env.BASE_URL || '/'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-red-100">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-serif font-extrabold text-xl text-[var(--primary)]">Bhargav</a>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">☰</button>
        <ul className="hidden md:flex gap-6 text-sm">
          {items.map(i => (
            <li key={i.href}><a className="link-underline" href={i.href}>{i.label}</a></li>
          ))}
          <li><a className="link-underline" href={`${base}resume.pdf`} target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
      </nav>
      {open && (
        <ul className="md:hidden px-6 pb-3 grid gap-2 text-sm bg-white/90">
          {items.map(i => (
            <li key={i.href}><a className="block py-1" href={i.href} onClick={() => setOpen(false)}>{i.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
