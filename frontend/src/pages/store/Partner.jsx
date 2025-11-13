import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Partner = () => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(()=>{
    axios.get(`http://localhost:3000/api/partner-store/${id}`)
  })

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Cover */}
        <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
          <div className="h-40 w-full bg-[url('https://images.unsplash.com/photo-1543352634-7f3b2c3b9f3a?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center" />

          {/* Header content */}
          <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-6 -mt-12 pb-8">
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
                <div className="relative h-28 w-28 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 mx-auto md:mx-0">
                <img
                  alt="partner avatar"
                  src="https://images.unsplash.com/photo-1541542684-6e85f3b96b58?auto=format&fit=crop&w=400&q=60"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-semibold">Reel Style Kitchen</h1>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Fusion · Vegan · Desserts — New on the platform</p>

                <div className="mt-3 flex items-center justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    ★ 4.8
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">• 1.2 km • 30-40 min</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center md:justify-end">
                <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900">Order</button>
                <button className="rounded-2xl border border-slate-200 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:shadow dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">Follow</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left: main feed of reels/food */}
          <div className="md:col-span-2 space-y-6">
            <section className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Reels</h2>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {/* sample reels - replace src and text with real data */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <article key={i} className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-0 text-sm dark:border-slate-800/60 dark:bg-slate-900/50">
                    <div className="relative h-44 w-full overflow-hidden rounded-t-lg bg-slate-200">
                      <img src={`https://images.unsplash.com/photo-1543352634-7f3b2c3b9f3a?auto=format&fit=crop&w=800&q=60`} alt={`reel ${i}`} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="h-12 w-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center drop-shadow-md">▶</span>
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="font-medium text-sm line-clamp-2">Behind the scenes — Reel {i}</h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Quick look at how this dish comes together — watch for the final reveal.</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <h3 className="text-lg font-semibold">About</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Reel Style Kitchen is a modern cloud kitchen focusing on quick, flavourful meals using locally-sourced ingredients. Open for delivery and pickup.</p>
            </section>
          </div>

          {/* Right: sidebar info */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <h4 className="font-semibold">Location</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">123 Flavor Street, Foodville</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Open: 10:00 — 22:00</p>
              <a className="mt-3 inline-block text-sm font-semibold text-slate-900 dark:text-slate-200">View on map</a>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
              <a className="mt-3 inline-block text-sm font-semibold text-slate-900 dark:text-slate-200">Visit website</a>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <h4 className="font-semibold">Safety & Info</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Contactless delivery available</li>
                <li>Freshly prepared</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
