import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/70 dark:border-slate-800/70">
			<div className="mx-auto max-w-6xl px-4">
				<div className="h-14 flex items-center justify-between">
					{/* Brand */}
					<Link to="/" className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
						<span className="inline-block h-8 w-8 rounded-xl bg-slate-900 dark:bg-slate-100" />
						<span>Reel Style Zomato</span>
					</Link>

					{/* Nav */}
					<nav className="hidden sm:flex items-center gap-1 text-sm">
						<NavLink
							to="/user/login"
							className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
						>
							User Login
						</NavLink>
						<NavLink
							to="/user/register"
							className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
						>
							User Register
						</NavLink>
						<NavLink
							to="/food-partner/login"
							className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
						>
							Partner Login
						</NavLink>
						<NavLink
							to="/food-partner/register"
							className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
						>
							Partner Register
						</NavLink>
					</nav>

					{/* CTA */}
					<div className="flex items-center gap-2">
						<Link to="/user/login" className="hidden sm:inline-flex items-center justify-center h-9 px-3 rounded-xl bg-slate-900 text-white text-sm font-semibold transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white">
							Sign In
						</Link>
						<Link to="/user/register" className="inline-flex sm:hidden items-center justify-center h-9 px-3 rounded-xl bg-slate-900 text-white text-sm font-semibold transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white">
							Start
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

