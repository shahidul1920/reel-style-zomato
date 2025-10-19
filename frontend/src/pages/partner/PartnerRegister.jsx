import React from 'react'
import { Link } from 'react-router-dom'

export const PartnerRegister = () => {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col justify-center px-6 py-16">
        <section className="w-full rounded-3xl border border-slate-200/80 bg-white/80 p-12 shadow-sm backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/60">
          <header className="mb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Become a food partner</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight">Share your kitchen with the city</h1>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Tell us about your brand so diners can discover you.</p>
          </header>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Business name</span>
                <input
                  type="text"
                  placeholder="Reel Style Kitchen"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Business email</span>
                <input
                  type="email"
                  placeholder="contact@yourkitchen.com"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Contact person</span>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Phone number</span>
                <input
                  type="tel"
                  placeholder="+1 123 456 7890"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Business address</span>
              <textarea
                rows={3}
                placeholder="Street, City, ZIP"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
              />
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Cuisine focus</span>
                <input
                  type="text"
                  placeholder="Fusion, Vegan, Desserts..."
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Website or menu link</span>
                <input
                  type="url"
                  placeholder="https://"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Password</span>
              <input
                type="password"
                placeholder="Create a secure password"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
              />
            </label>

            <button
              type="button"
              className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus:ring-slate-600"
            >
              Submit application
            </button>
          </form>

          <footer className="mt-10 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Already collaborating with us?</span>
            <Link to="/food-partner/login" className="font-semibold text-slate-900 underline-offset-4 transition hover:underline dark:text-slate-200">
              Sign in instead
            </Link>
          </footer>
        </section>
      </div>
    </main>
  )
}
