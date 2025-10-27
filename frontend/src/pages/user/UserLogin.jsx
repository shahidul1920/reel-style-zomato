import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserLogin = () => {

  const navigate = useNavigate();
  const userLogin = async (e)=>{
    e.preventDefault();

    const targt = e.target;
    const email = targt.mail.value;
    const password = targt.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login/",{
      email,
      password
    },{
      withCredentials: true
    })
    console.log(response.data);
    navigate("/home")
  }



  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center px-6 py-16">
        <section className="w-full rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-sm backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/60">
          <header className="mb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight">Sign in to continue</h1>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Access your personalised feed and orders in one place.</p>
          </header>

          <form onSubmit={userLogin} className="space-y-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Email address</span>
              <input
              name='mail'
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Password</span>
              <input
              name='password'
                type="password"
                placeholder="********"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-slate-500 dark:focus:ring-slate-800"
              />
            </label>

            <div className="flex items-center justify-between text-sm">
              {/* <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-slate-700"
                />
                <span className="text-slate-500 dark:text-slate-400">Keep me signed in</span>
              </label> */}
              <Link to="/forgot-password" className="font-semibold text-slate-900 underline-offset-4 transition hover:underline dark:text-slate-200">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus:ring-slate-600"
            >
              Sign in
            </button>
          </form>

          <footer className="mt-10 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>New to Reel Style Zomato?</span>
            <Link to="/user/register" className="font-semibold text-slate-900 underline-offset-4 transition hover:underline dark:text-slate-200">
              Create account
            </Link>
          </footer>
        </section>
      </div>
    </main>
  )
}
