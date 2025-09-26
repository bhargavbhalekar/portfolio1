export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <h2 className="section-title">Contact</h2>
      <form className="grid gap-4 max-w-xl">
        <input placeholder="Your name" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition" />
        <input placeholder="Your email" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition" />
        <textarea placeholder="Say hello…" rows="5" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition" />
        <button type="button" className="self-start bg-[var(--primary)] text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  )
}
