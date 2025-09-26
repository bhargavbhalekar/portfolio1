import { useEffect, useState } from 'react'
import { fetchBlogs } from '../lib/api'

export default function BlogList() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(null)
  const [prev, setPrev] = useState(null)
  const [loading, setLoading] = useState(true)

  const load = (p = 1) => {
    setLoading(true)
    fetchBlogs(p).then(r => {
      setItems(r.data.results || r.data)
      setNext(r.data.next)
      setPrev(r.data.previous)
    }).finally(() => setLoading(false))
  }

  useEffect(() => { load(1) }, [])

  return (
    <section id="blog" className="container mx-auto px-6 py-16">
      <h2 className="section-title">Blog</h2>
      {loading ? (
        <div className="space-y-3">
          <div className="h-6 w-1/2 bg-red-100 animate-pulse rounded" />
          <div className="h-6 w-2/3 bg-red-100 animate-pulse rounded" />
          <div className="h-6 w-1/3 bg-red-100 animate-pulse rounded" />
        </div>
      ) : (
        <div className="space-y-6">
          {items.length === 0 ? (
            <div className="p-6 rounded-xl border border-dashed border-red-200 text-sm text-gray-600">
              No posts yet. I’ll be sharing notes on animations, React patterns, and Python tricks here soon.
            </div>
          ) : (
            items.map(b => (
              <article key={b.id} className="p-5 rounded-xl border border-red-100 bg-white">
                <h3 className="font-serif text-2xl font-bold">{b.title}</h3>
                <p className="text-gray-700 mt-2">{b.excerpt}</p>
              </article>
            ))
          )}
          <div className="flex gap-3">
            <button disabled={!prev} onClick={() => { setPage(p => Math.max(1, p-1)); load(page-1) }} className="px-3 py-1 rounded border disabled:opacity-50">Prev</button>
            <button disabled={!next} onClick={() => { setPage(p => p+1); load(page+1) }} className="px-3 py-1 rounded border disabled:opacity-50">Next</button>
          </div>
        </div>
      )}
    </section>
  )
}
