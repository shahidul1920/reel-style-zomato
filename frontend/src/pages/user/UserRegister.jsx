import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserRegister = () => {
  const navigate = useNavigate();
  const userRegister = async (e) => {
    e.preventDefault();
    
    const fullname = e.target.fullname.value;
    const email = e.target.mail.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/register/",{
      fullName: fullname,
      email,
      password
    },
  {
    withCredentials:true
  })
    console.log(response.data);
    navigate('/reel')
        
  }
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-xl flex-col justify-center px-6 py-16">
        <section className="w-full rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-sm backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/60">
          <header className="mb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Create account</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight">Join Reel Style Zomato</h1>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Fill in your details to unlock personalised recommendations.</p>
          </header>

          <form onSubmit={userRegister} className="space-y-6">
            <div className="grid gap-6">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Full name</span>
                <input
                  name='fullname'
                  type="text"
                  placeholder="Jane"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>

              {/* <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Last name</span>
                <input
                  type="text"
                  placeholder="Doe"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label> */}
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Email address</span>
              <input
                name='mail'
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
              />
            </label>

            <div className="grid">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Password</span>
                <input
                  name='password'
                  type="password"
                  placeholder="********"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                />
              </label>
            </div>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-slate-700"
              />
              <span className="text-sm text-slate-500 dark:text-slate-400">I agree to the terms of service and privacy policy.</span>
            </label>

            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus:ring-slate-600"
            >
              Create account
            </button>
          </form>

          <footer className="mt-8 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Already have an account?</span>
            <Link to="/user/login" className="font-semibold text-slate-900 underline-offset-4 transition hover:underline dark:text-slate-200">
              Sign in instead
            </Link>
          </footer>
        </section>
      </div>
    </main>
  )
}
