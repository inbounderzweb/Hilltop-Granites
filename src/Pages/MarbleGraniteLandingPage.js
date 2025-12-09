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
  { label: 'Live Inventory', href: 'https://hilltopstones.stoneprofitsweb.com/' },
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

  const whatsappNumber = '+919900064364';
  const whatsappLink = `https://wa.me/919900064364`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
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

      {/* UNDER CONSTRUCTION NOTICE (inline instead of popup) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 sm:px-6 sm:py-4 flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-lg">
            🛠️
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-700 uppercase">
              Site Update
            </p>
            <p className="text-sm font-medium text-slate-900">
              This site is currently under construction.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              We&apos;re polishing the details and will be live very soon. Thank you for your
              patience — you&apos;re viewing a temporary preview of the Hilltop Granites website.
            </p>
          </div>
        </div>
      </section>

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
              {[
                'Granite & Marble',
                'Quartz Surfaces',
                'Export-Ready Stock',
                'Custom Thickness & Finish',
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERP / DEALER PORTAL */}
      <section id="erp-portal" className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] items-center">
            {/* Text Block */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-300 uppercase mb-2">
                ERP · India & USA Live Inventory
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                Hilltop Stones ERP access for teams, dealers & partners.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
                Check live stock, track orders, manage quotes and access product information
                directly through our dedicated ERP portal. Built for internal teams,
                distributors and fabrication partners who need real-time data, including
                USA live inventory.
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
                <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-100">
                  USA live inventory access
                </span>
              </div>

              <a
                href="https://hilltopstones.stoneprofitsweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors"
              >
                Live Inventory
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
                    <div className="flex items-center justify-between text-[11px] text-slate-200">
                      <span>USA live inventory</span>
                      <span className="font-semibold">Updated daily</span>
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

            {/* Direct Contact Details */}
            <div className="space-y-1 text-sm sm:text-base text-slate-700">
              <p className="font-semibold text-slate-800 text-sm">
                Contact us directly
              </p>
              <p className="text-xs sm:text-sm">
                Phone:{' '}
                <a
                  href={`tel:${whatsappNumber}`}
                  className="font-medium text-amber-700 hover:text-amber-800"
                >
                  +91 99000 64364
                </a>
              </p>
              <p className="text-xs sm:text-sm">
                Email:{' '}
                <a
                  href="mailto:armaan@hilltopgranite.com"
                  className="font-medium text-amber-700 hover:text-amber-800"
                >
                  armaan@hilltopgranite.com
                </a>
              </p>
            </div>

            <div className="grid gap-4 text-sm text-slate-600 pt-3">
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

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-4 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label="Chat with Hilltop on WhatsApp"
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16 4C9.935 4 5 8.935 5 15c0 2.16.64 4.166 1.75 5.86L6 27l6.3-1.63A10.8 10.8 0 0016 26c6.065 0 11-4.935 11-11S22.065 4 16 4zm0 2c4.963 0 9 4.037 9 9s-4.037 9-9 9a8.8 8.8 0 01-3.7-.82l-.27-.13-3.74.96.99-3.64-.17-.28A8.7 8.7 0 017 15c0-4.963 4.037-9 9-9zm4.37 11.78c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.13.2-.55.2-1.01.14-1.11-.06-.1-.22-.16-.46-.28z"
          />
        </svg>
      </a>
    </div>
  );
};

export default MarbleGraniteLandingPage;
