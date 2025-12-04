import React, { useState } from 'react';
import hero from '../Assets/Banners/hilltopbanner.jpg';
import about from '../Assets/about.jpg';
import product1 from '../Assets/Products/product1.jpg';
import product2 from '../Assets/Products/product2.jpeg';
import product3 from '../Assets/Products/product3.jpg';
import product4 from '../Assets/Products/product4.jpg';
import logo from '../Assets/Logos/logo.png';
import Footer from '../components/Footer';

// --- Data ---

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Collections', href: '#collections' },
  { label: 'Contact', href: '#contact' },
];

// --- Helper Components ---

const NavItem = ({ label, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-slate-700 hover:text-amber-700 transition-colors duration-200"
  >
    {label}
  </a>
);

const ProductCard = ({ name, description, img }) => (
  <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
    <div className="relative h-52 overflow-hidden">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{name}</h3>
      <p className="text-sm text-slate-500 flex-1">{description}</p>
      <button className="mt-4 inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800">
        View details
        <span className="ml-1 text-xs">↗</span>
      </button>
    </div>
  </div>
);

// --- Main Component ---

const MarbleGraniteLandingPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true); // popup state

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Under Construction Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-md rounded-3xl bg-white shadow-2xl border border-slate-200 p-6 sm:p-7">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 text-sm"
              aria-label="Close popup"
            >
              ✕
            </button>

            <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-600 uppercase mb-2">
              Coming Soon
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
              This site is currently under construction.
            </h2>
            <p className="text-sm text-slate-600 mb-5">
              We&apos;re polishing the details and will be live very soon. 
              Thank you for your patience — our team will get back to you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
            >
              Enter temporary preview
            </button>
          </div>
        </div>
      )}

      {/* HEADER + HERO */}
      <header
        id="home"
        className="relative isolate overflow-hidden bg-white/60 backdrop-blur-sm border-b border-slate-100"
      >
        {/* Top Nav */}
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Hilltop Granites Logo" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Hilltop Granites
              </p>
              <p className="text-[11px] text-slate-400">
                Crafting elegance since 1989
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-amber-600 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-700 transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-[5px]">
              <span className="block h-[2px] w-5 bg-slate-800 rounded-full" />
              <span className="block h-[2px] w-4 bg-slate-800 rounded-full" />
              <span className="block h-[2px] w-6 bg-slate-800 rounded-full" />
            </div>
          </button>
        </nav>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <NavItem
                    label={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  />
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-amber-600 bg-amber-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-amber-700 transition-colors duration-200"
              >
                Request a Quote
              </a>
            </div>
          </div>
        )}

        {/* HERO Content */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid gap-10 lg:grid-cols-2 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 border border-amber-100 tracking-wide">
                INDIA’S LEADING STONE SPECIALISTS · SINCE 1989
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Natural stone & quartz surfaces for spaces that endure.
              </h1>

              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
                Hilltop Granites is one of India’s largest manufacturers and exporters of granite,
                marble, and quartz — delivering precision-crafted stone for residential, commercial,
                and luxury projects across the globe.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md pt-2">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-3">
                  <p className="text-xl font-semibold text-slate-900">35+</p>
                  <p className="text-xs text-slate-500">Years of expertise</p>
                </div>
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-3">
                  <p className="text-xl font-semibold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500">Stone variants</p>
                </div>
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-3">
                  <p className="text-xl font-semibold text-slate-900">20+</p>
                  <p className="text-xs text-slate-500">Countries served</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#collections"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 shadow-sm"
                >
                  View collections
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-400"
                >
                  Talk to our team
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={hero}
                  alt="Stone slabs in a premium setting"
                  className="w-full h-full max-h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="hidden sm:flex absolute -bottom-6 left-6">
                <div className="rounded-2xl bg-white shadow-lg border border-slate-100 px-4 py-3 flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-lg">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      End-to-end selection support
                    </p>
                    <p className="text-[11px] text-slate-500">
                      From quarry to installation, handled with care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section
        id="about-us"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1.4fr] items-start">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={about}
                alt="Craftsman working on stone"
                className="w-full h-full max-h-[420px] object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-5 right-5 rounded-2xl bg-white shadow-md border border-slate-100 px-4 py-3">
              <p className="text-xs font-semibold text-slate-800">
                Trusted by architects, fabricators & homeowners.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-700 uppercase mb-3">
              About Hilltop
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Three decades of stone craftsmanship, shaped by precision & trust.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Founded in 1989 by Kamal Giria and Nilesh Giria, Hilltop has grown into one of
              India&apos;s most respected manufacturers of granite, marble, and quartz. Our legacy is
              built on consistency, integrity, and an uncompromising focus on quality.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              We curate and process a wide spectrum of natural and engineered stones — including
              granite, marble, quartz, semi-precious stones, and porcelain — tailored for both
              domestic and international markets.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              With deep industry knowledge and years of export experience, our team understands
              the nuances of every project — from luxury residences and hospitality spaces to large
              commercial developments. At Hilltop, we don&apos;t just supply stone; we help you finish
              spaces that feel timeless.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Granite & Marble', 'Quartz Surfaces', 'Export-Ready Stock', 'Custom Thickness & Finish'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ERP / DEALER PORTAL */}
      <section
        id="erp-portal"
        className="bg-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] items-center">
            
            {/* Text Block */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-300 uppercase mb-2">
                ERP · Live Inventory & Orders
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                Hilltop Stones ERP access for teams, dealers & partners.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
                Check live stock, track orders, manage quotes and access product information 
                directly through our dedicated ERP portal. Built for internal teams, 
                distributors and fabrication partners who need real-time data.
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-100">
                  Real-time inventory
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-100">
                  Order & quote tracking
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-100">
                  Dealer / partner login
                </span>
              </div>

              <a
                href="https://hilltopstones.stoneprofitsweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors"
              >
                Open ERP Dashboard
                <span className="ml-2 text-xs">↗</span>
              </a>

              <p className="mt-3 text-[11px] text-slate-300">
                Access is restricted. Please use your registered ERP credentials.
              </p>
            </div>

            {/* Visual / Card Block */}
            <div className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-5 sm:p-6 shadow-xl overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_55%)]" />
                
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-200">
                      ERP Snapshot
                    </p>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-400/40">
                      Live · Online
                    </span>
                  </div>

                  <div className="rounded-2xl bg-black/30 border border-white/10 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-200">
                      <span>Available slabs</span>
                      <span className="font-semibold">5,280+</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-200">
                      <span>Active orders</span>
                      <span className="font-semibold">120+</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-200">
                      <span>Global locations</span>
                      <span className="font-semibold">India · USA</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px]">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                      <p className="text-slate-200 font-medium mb-1">
                        Dealer Portal
                      </p>
                      <p className="text-slate-400">
                        Check price lists, offers & order status in one place.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                      <p className="text-slate-200 font-medium mb-1">
                        Internal Teams
                      </p>
                      <p className="text-slate-400">
                        Streamlined dispatch, invoicing & stock planning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-3 -right-4 text-[10px] text-slate-400">
                *Illustrative snapshot – not actual ERP UI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FORM */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1.3fr] items-start">
          {/* Contact Info / Copy */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-700 uppercase">
              Request Service
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Tell us about your project and we’ll recommend the right stone.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Share a few details about your requirement — our team will help you with material
              selection, availability, and pricing. We work closely with architects, fabricators,
              contractors, and homeowners.
            </p>

            <div className="grid gap-4 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-800 text-sm">Ideal for</p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Countertops · Flooring · Cladding · Staircases · Vanity Tops · Large Format Projects
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3">
                  <p className="font-semibold text-slate-800 text-xs">Project consultation</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Guided selection based on usage, finish & budget.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3">
                  <p className="font-semibold text-slate-800 text-xs">Global shipping</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Export-ready packing and logistics support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/40 via-white to-slate-100/40 rounded-3xl blur-xl -z-10" />
            <form className="relative space-y-5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700 text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700 text-left">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-slate-700 text-left">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-slate-700 text-left">
                  Project Type
                </label>
                <select
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Hospitality</option>
                  <option>Export / Bulk Supply</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-slate-700 text-left">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none resize-none"
                  placeholder="Share your requirements, approximate area, stone preference, etc."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors duration-200"
              >
                Submit enquiry
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                Our team will get back to you within 1–2 business days with the next steps.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarbleGraniteLandingPage;
