import { useMediaQuery } from 'react-responsive';

function MainPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isMobile && <MobileHero />}
      {isDesktop && <DesktopHero />}
      <ServicesSection isMobile={isMobile} />
      {/* other conditional sections */}
    </>
  );
}

export default function FarmKnow() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-2 focus:rounded-lg focus:ring">Skip to content</a>

      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-slate-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo mark */}
            <svg aria-hidden="true" viewBox="0 0 64 64" className="h-9 w-9">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              <path fill="url(#g)" d="M32 6c8.8 0 16 7.2 16 16 0 10.8-8.1 16.6-13.2 22.7-1.5 1.7-1.9 3.3-2.8 5.8-.6 1.5-1.6 2.5-3 2.5s-2.4-1-3-2.5c-.9-2.5-1.3-4.1-2.8-5.8C24.1 38.6 16 32.8 16 22 16 13.2 23.2 6 32 6z"/>
              <circle cx="32" cy="22" r="6" fill="#fff"/>
            </svg>
            <div>
              <p className="text-xl font-extrabold tracking-tight">FarmKnow</p>
              <p className="text-xs -mt-1 text-slate-500">Grow smarter. Harvest more.</p>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a className="hover:text-emerald-600" href="#services">Services</a></li>
            <li><a className="hover:text-emerald-600" href="#solutions">Solutions</a></li>
            <li><a className="hover:text-emerald-600" href="#projects">Projects</a></li>
            <li><a className="hover:text-emerald-600" href="#pricing">Pricing</a></li>
            <li><a className="hover:text-emerald-600" href="#contact">Contact</a></li>
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-sm font-medium px-4 py-2 rounded-xl hover:bg-slate-100">Demo</a>
            <a href="#quote" className="text-sm font-semibold px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">Request a Quote</a>
          </div>

          {/* Mobile menu trigger (static for this single-file demo) */}
          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-slate-100">
            <span className="i-bars" aria-hidden="true">≡</span>
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute -top-24 -right-24 h-72 w-72 opacity-20" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#22c55e"/>
                <stop offset="100%" stopColor="#0ea5e9"/>
              </linearGradient>
            </defs>
            <path fill="url(#g2)" d="M46.7,-72.9C57.8,-64.3,62.9,-47.8,68.7,-33.1C74.5,-18.5,81,-5.6,80.9,7.9C80.7,21.4,74,35.6,64.8,47.7C55.6,59.8,44,69.7,30.6,75.1C17.2,80.6,2,81.6,-12.4,80C-26.7,78.4,-40.2,74.2,-49.3,64.9C-58.4,55.6,-63.2,41.2,-69.1,26.7C-75.1,12.2,-82.3,-2.3,-79.8,-14C-77.3,-25.7,-65.1,-34.6,-53.6,-44.9C-42,-55.2,-31.1,-66.9,-17.4,-76.8C-3.7,-86.6,13,-94.6,27.7,-92.1C42.4,-89.7,55.6,-76.9,46.7,-72.9Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Precision advice for every field.
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                FarmKnow combines satellite insights, local weather, and agronomy expertise to help farmers make the right call at the right time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#quote" className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
                  Get Started
                </a>
                <a href="#services" className="px-5 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-100">
                  Explore Services
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-white shadow p-4">
                  <dt className="text-xs text-slate-500">Regions Served</dt>
                  <dd className="text-2xl font-bold">25+</dd>
                </div>
                <div className="rounded-2xl bg-white shadow p-4">
                  <dt className="text-xs text-slate-500">Hectares Optimized</dt>
                  <dd className="text-2xl font-bold">120k</dd>
                </div>
                <div className="rounded-2xl bg-white shadow p-4">
                  <dt className="text-xs text-slate-500">Crop Profiles</dt>
                  <dd className="text-2xl font-bold">80+</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-white shadow overflow-hidden ring-1 ring-slate-100">
                {/* Placeholder farm illustration */}
                <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Farm landscape illustration">
                  <defs>
                    <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#e0f2fe"/>
                      <stop offset="100%" stopColor="#bae6fd"/>
                    </linearGradient>
                    <linearGradient id="field" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#bbf7d0"/>
                      <stop offset="100%" stopColor="#86efac"/>
                    </linearGradient>
                  </defs>
                  <rect width="400" height="180" fill="url(#sky)"/>
                  <rect y="180" width="400" height="120" fill="url(#field)"/>
                  <circle cx="70" cy="70" r="22" fill="#fde68a"/>
                  <g fill="#22c55e">
                    <rect x="40" y="210" width="60" height="8" rx="4"/>
                    <rect x="120" y="220" width="60" height="8" rx="4"/>
                    <rect x="200" y="210" width="60" height="8" rx="4"/>
                    <rect x="280" y="220" width="60" height="8" rx="4"/>
                  </g>
                  <g>
                    <rect x="240" y="140" width="80" height="60" fill="#fecaca" stroke="#ef4444"/>
                    <polygon points="240,140 280,110 320,140" fill="#fda4af"/>
                    <rect x="270" y="165" width="20" height="35" fill="#7dd3fc"/>
                  </g>
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white shadow rounded-2xl p-4 ring-1 ring-slate-100">
                <p className="text-xs text-slate-500">Live weather</p>
                <p className="font-semibold">Localized forecasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {['RainSafe','AgriGrid','SoilSense','CropCare','WaterWise'].map((n) => (
            <span key={n} className="text-sm font-semibold tracking-wider uppercase">{n}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <main id="main">
        <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-6 items-end mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Services tailored to your farm</h2>
            <p className="text-slate-600">Actionable guidance across the full season — from soil to storage. Analytics and advice are grounded in agronomy best practices and localized data.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Crop Advisory',
                desc: 'Weekly crop-stage tips and pest alerts for 80+ crops.',
                icon: (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v3H3v7h18v-7h-2V9a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5v3H7V9a5 5 0 0 1 5-5Zm-8 9h16v5H4v-5Z"/></svg>
                )
              },
              {
                title: 'Irrigation Planning',
                desc: 'Water-use schedules from soil moisture & weather trends.',
                icon: (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fill="currentColor" d="M12 2c3 4 7 8 7 12a7 7 0 1 1-14 0c0-4 4-8 7-12Z"/></svg>
                )
              },
              {
                title: 'Soil Testing',
                desc: 'Sampling guidance and lab interpretations you can act on.',
                icon: (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fill="currentColor" d="M7 2h10v2H7V2Zm2 4h6l1 8a4 4 0 1 1-8 0l1-8Z"/></svg>
                )
              },
              {
                title: 'Market Insights',
                desc: 'Local price signals and harvest timing recommendations.',
                icon: (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fill="currentColor" d="M3 3h2v14H3V3Zm4 6h2v8H7V9Zm4-4h2v12h-2V5Zm4 2h2v10h-2V7Zm4-4h2v14h-2V3Z"/></svg>
                )
              }
            ].map((card) => (
              <article key={card.title} className="group rounded-3xl bg-white p-6 shadow hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 grid place-content-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-slate-600">{card.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:underline">
                  Learn more <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="bg-white py-16 md:py-24 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Smart, accessible digital advisory</h2>
              <p className="mt-4 text-slate-600">From USSD to smartphones, FarmKnow meets farmers where they are — with multi‑channel tips, alerts, and seasonal plans.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3"><span className="text-emerald-600">✓</span> Localized weather &amp; pest alerts</li>
                <li className="flex gap-3"><span className="text-emerald-600">✓</span> Offline‑friendly weekly SMS tips</li>
                <li className="flex gap-3"><span className="text-emerald-600">✓</span> Vernacular language options</li>
                <li className="flex gap-3"><span className="text-emerald-600">✓</span> Extension‑agent dashboard</li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="#demo" className="px-5 py-3 rounded-xl border font-semibold hover:bg-slate-50">See a live demo</a>
                <a href="#contact" className="px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700">Talk to us</a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-50 to-sky-50 ring-1 ring-slate-100 p-6">
                {/* Simple dashboard mock */}
                <div className="h-full w-full rounded-2xl bg-white shadow p-4 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-slate-200"/>
                    <div className="h-3 w-16 rounded bg-slate-200"/>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="rounded-xl border p-3">
                        <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-100 to-sky-100"/>
                        <div className="mt-2 h-3 w-20 bg-slate-200 rounded"/>
                        <div className="mt-1 h-3 w-12 bg-slate-200 rounded"/>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border p-3">
                      <div className="h-28 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50"/>
                      <div className="mt-2 h-3 w-24 bg-slate-200 rounded"/>
                    </div>
                    <div className="rounded-xl border p-3">
                      <div className="h-28 rounded-lg bg-gradient-to-br from-sky-100 to-sky-50"/>
                      <div className="mt-2 h-3 w-24 bg-slate-200 rounded"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-6 items-end mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Recent projects</h2>
            <p className="text-slate-600">From smallholders to commercial estates, FarmKnow supports data‑driven decisions that boost resilience and yields.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["Green Valley Co‑op","Lakeview Horticulture","Savanna Grains"].map((name, i) => (
              <article key={name} className="group rounded-3xl bg-white shadow overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-50" />
                <div className="p-5">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-slate-600">Seasonal advisory + water scheduling pilot</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:underline">View case study <span aria-hidden>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-white py-16 md:py-24 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">Simple pricing</h2>
            <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Start free and scale with your farm. Cancel anytime.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {name:'Starter', price:'Free', features:['1 farm profile','Weekly SMS tips','Email support']},
                {name:'Grower', price:'$9/mo', features:['Up to 5 fields','Irrigation planning','Priority support']},
                {name:'Pro', price:'$29/mo', features:['Unlimited fields','Team dashboard','API access']},
              ].map((p, idx) => (
                <div key={p.name} className={`rounded-3xl p-6 shadow ${idx===1? 'ring-2 ring-emerald-600' : ''}`}>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-3xl font-extrabold">{p.price}</p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {p.features.map(f => (
                      <li key={f} className="flex gap-3"><span className="text-emerald-600">✓</span>{f}</li>
                    ))}
                  </ul>
                  <a href="#quote" className="mt-6 inline-flex w-full items-center justify-center px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Choose {p.name}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {[{q:'We cut water use by 22% while keeping yields high.', a:'Operations Lead, Lakeview'}, {q:'Pest alerts landed a week earlier than usual advisories.', a:'Farmer, Nakuru'}, {q:'Setup was fast and the dashboard is simple for our team.', a:'Extension Manager, County Program'}].map((t) => (
              <blockquote key={t.q} className="rounded-3xl bg-white p-6 shadow">
                <p className="text-lg font-semibold">“{t.q}”</p>
                <footer className="mt-3 text-sm text-slate-600">— {t.a}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-16 md:py-24 border-y border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Let’s plan your next season</h2>
              <p className="mt-3 text-slate-600">Tell us about your crops and goals — we’ll share a tailored plan and quote.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3"><span className="text-emerald-600">✓</span> Response within 1 business day</li>
                <li className="flex gap-3"><span className="text-emerald-600">✓</span> No obligation consultation</li>
                <li className="flex gap-3"><span className="text-emerald-600">✓</span> Data privacy first</li>
              </ul>
            </div>
            <form className="rounded-3xl bg-slate-50 p-6 shadow" aria-labelledby="contact-heading">
              <h3 id="contact-heading" className="text-lg font-semibold">Contact form</h3>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm">Full name</span>
                  <input type="text" name="name" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                </label>
                <label className="block">
                  <span className="text-sm">Email</span>
                  <input type="email" name="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                </label>
                <label className="block">
                  <span className="text-sm">What do you grow?</span>
                  <input type="text" name="crops" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., maize, tomatoes" />
                </label>
                <label className="block">
                  <span className="text-sm">Message</span>
                  <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </label>
                <button type="submit" className="w-full rounded-xl bg-emerald-600 text-white font-semibold px-4 py-3 hover:bg-emerald-700">Send message</button>
                <p className="text-xs text-slate-500">By submitting, you agree to our Terms & Privacy Policy.</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <svg aria-hidden="true" viewBox="0 0 64 64" className="h-8 w-8"><defs><linearGradient id="g3" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="#22c55e"/><stop offset="100%" stopColor="#0ea5e9"/></linearGradient></defs><path fill="url(#g3)" d="M32 6c8.8 0 16 7.2 16 16 0 10.8-8.1 16.6-13.2 22.7-1.5 1.7-1.9 3.3-2.8 5.8-.6 1.5-1.6 2.5-3 2.5s-2.4-1-3-2.5c-.9-2.5-1.3-4.1-2.8-5.8C24.1 38.6 16 32.8 16 22 16 13.2 23.2 6 32 6z"/></svg>
              <span className="font-extrabold">FarmKnow</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">Actionable, accessible advisory for farmers and agri‑teams across regions.</p>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-emerald-700">Crop Advisory</a></li>
              <li><a href="#services" className="hover:text-emerald-700">Irrigation Planning</a></li>
              <li><a href="#services" className="hover:text-emerald-700">Soil Testing</a></li>
              <li><a href="#services" className="hover:text-emerald-700">Market Insights</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#projects" className="hover:text-emerald-700">Projects</a></li>
              <li><a href="#pricing" className="hover:text-emerald-700">Pricing</a></li>
              <li><a href="#contact" className="hover:text-emerald-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <form className="mt-3 flex gap-2" aria-label="Newsletter signup">
              <label className="sr-only" htmlFor="email-news">Email</label>
              <input id="email-news" type="email" className="flex-1 rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com"/>
              <button className="rounded-xl bg-emerald-600 text-white font-semibold px-4 py-2 hover:bg-emerald-700">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-500 flex flex-wrap items-center justify-between">
          <p>© {new Date().getFullYear()} FarmKnow. All rights reserved.</p>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:text-emerald-700">Privacy</a></li>
            <li><a href="#" className="hover:text-emerald-700">Terms</a></li>
            <li><a href="#" className="hover:text-emerald-700">Accessibility</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
