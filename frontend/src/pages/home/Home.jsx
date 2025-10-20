import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main className="bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto flex min-h-[calc(100vh-56px)] w-full max-w-6xl flex-col justify-center gap-16 px-4 py-20 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-400">
            curated reels
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Discover food experiences in immersive, bite-sized reels
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Showcase your menu, unveil seasonal drops, and connect with food lovers through curated video stories. Reel Style Zomato keeps your brand in motion across web and mobile.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/user/register"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:ring-slate-600"
            >
              Get started
            </Link>
            <Link
              to="/food-partner/register"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-900/80 dark:focus-visible:ring-slate-700"
            >
              Become a partner
            </Link>
          </div>
          <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-400 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">
                01
              </span>
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tailored storytelling</h2>
                <p className="mt-1 text-sm">
                  Launch narrative playlists with scheduling tools and collaborative drafts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">
                02
              </span>
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Deep insights</h2>
                <p className="mt-1 text-sm">
                  Measure viewer intent, conversion funnels, and repeat engagement signals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-lg">
          <div className="pointer-events-none absolute inset-x-0 top-12 translate-x-4 rounded-3xl bg-gradient-to-tr from-slate-300/40 via-white/40 to-transparent blur-3xl dark:from-slate-800/50 dark:via-slate-900/40" />
          <div className="relative rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Pulse</p>
                <p className="mt-3 text-4xl font-semibold">12.4k</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Weekly reel viewers discovering new menus</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900 px-4 py-5 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
                  <p className="text-xs uppercase tracking-[0.3em]">Retention</p>
                  <p className="mt-2 text-2xl font-semibold">87%</p>
                  <p className="mt-1 text-xs text-white/70 dark:text-slate-600">Returning viewers week-over-week</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Featured</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">48</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Spotlight partner campaigns this month</p>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-slate-300/70 p-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Schedule reels, coordinate influencer drops, and sync inventory in real time with collaborative workspace tools.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
