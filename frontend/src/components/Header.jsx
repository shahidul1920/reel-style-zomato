import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="sticky top-0 z-40 backdrop-blur dark:bg-slate-900/70 border-b border-slate-200/70 dark:border-slate-800/70 bg-transparent">
			<div className="mx-auto max-w-6xl px-4">
				<div className="h-14 flex items-center justify-between">
					{/* Brand */}
					<Link to="/home" className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
						<span className="inline-block h-8 w-8 rounded-xl bg-slate-900 dark:bg-slate-100" />
						<span>Reel Zomato</span>
					</Link>

					{/* Nav */}
					<nav className="hidden sm:flex items-center gap-1 text-sm">
						<NavLink
							to="/home"
							className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
						>
							Home
						</NavLink>

						<NavLink
							to="/support"
							className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
						>
							Support
						</NavLink>


						<NavLink
							to="/about"
							className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
						>
							About
						</NavLink>
					</nav>

					{/* CTA */}
					<div className="flex items-center gap-2">
						<Link
							to="/user/register"
							className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:ring-slate-600"
						>
							Get started
						</Link>
						<Link
							to="/food-partner/register"
							className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-900/80 dark:focus-visible:ring-slate-700"
						>
							Become a partner
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

