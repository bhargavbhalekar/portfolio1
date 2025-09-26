export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-600">
      <div className="flex items-center justify-center gap-4 mb-2">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="link-underline">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
        <a href="#contact" className="link-underline">Contact</a>
      </div>
      <div>© {new Date().getFullYear()} Bhargav Bhalekar</div>
    </footer>
  )
}
