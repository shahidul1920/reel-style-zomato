import React from 'react'

const Support = () => {
	return (
		<main className="bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
			<section className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 py-20">
				<header className="space-y-6 text-center">
					<p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-400">
						we're here to help
					</p>
					<h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
						Support for food lovers and partners, tailored to your next launch
					</h1>
					<p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
						Reach our team, explore quick fixes, or schedule a walkthrough to keep your reels, menus, and campaigns running without pause.
					</p>
				</header>

				<section className="grid gap-6 md:grid-cols-2">
					<div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70">
						<h2 className="text-xl font-semibold">Message us</h2>
						<p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
							Chat with a specialist for real-time help on onboarding, menu updates, and analytics.
						</p>
						<div className="mt-6 space-y-4 text-sm">
							<div className="flex items-center gap-3">
								<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">@</span>
								<div>
									<p className="font-semibold">support@reelzomato.com</p>
									<p className="text-slate-500 dark:text-slate-400">Replies under 1 hour</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100">24/7</span>
								<p className="text-slate-500 dark:text-slate-400">Live chat from dashboard</p>
							</div>
						</div>
					</div>

					<div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70">
						<h2 className="text-xl font-semibold">Schedule a call</h2>
						<p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
							Perfect for partners launching new experiences or integrating with our APIs.
						</p>
						<ul className="mt-6 space-y-3 text-sm text-slate-500 dark:text-slate-400">
							<li className="flex items-start gap-3">
								<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">1</span>
								<div>
									<p className="font-semibold text-slate-900 dark:text-slate-100">Launch audit</p>
									<p>Personalised review of your reel playlists and CTA funnels.</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">2</span>
								<div>
									<p className="font-semibold text-slate-900 dark:text-slate-100">Growth roadmap</p>
									<p>Quarterly co-marketing plans and influencer partnerships.</p>
								</div>
							</li>
						</ul>
						<button
							type="button"
							className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:ring-slate-600"
						>
							Book a session
						</button>
					</div>
				</section>

				<section className="rounded-3xl border border-slate-200/70 bg-white/80 p-10 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70">
					<div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<h2 className="text-2xl font-semibold">Frequently asked</h2>
						<p className="text-sm text-slate-500 dark:text-slate-400">Short answers when you need them most.</p>
					</div>
					<div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
						<div>
							<h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">How fast can we publish a new reel campaign?</h3>
							<p className="mt-2">
								Draft, review, and schedule in under 30 minutes. Templates help your team align on story, music, and CTA in one pass.
							</p>
						</div>
						<div>
							<h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Can we integrate existing ordering tools?</h3>
							<p className="mt-2">
								Yes. Use our partner webhooks or embed modules to sync inventory, menu availability, and loyalty programs.
							</p>
						</div>
						<div>
							<h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Where do I track performance?</h3>
							<p className="mt-2">
								Insights live in the "Pulse" dashboard with funnel drop-offs, watch-through rates, and repeat visitor scores.
							</p>
						</div>
					</div>
				</section>
			</section>
		</main>
	)
}

export default Support
