import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Address Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 text-xs sm:text-sm text-slate-700">
          
          {/* INDIA OFFICE */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-700 mb-3">
              India
            </h4>
            <div className="space-y-1.5">
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                Hilltop Stones Pvt Ltd
              </p>
              <p className="text-slate-600 leading-relaxed">
                No 736, Gupta House, 7th Cross Road, 3rd Block, Koramangala,
                Bengaluru - 560 034, Karnataka
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Phone:</span> +91 80 2222 7778
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:banglore@hilltopgranite.com"
                  className="underline underline-offset-2 decoration-slate-400 hover:decoration-amber-500 hover:text-amber-700 transition-colors"
                >
                  banglore@hilltopgranite.com
                </a>
              </p>
              <a
                href="#"
                className="inline-flex items-center text-slate-600 hover:text-amber-700 text-[11px] font-medium mt-0.5"
              >
                Google Map <span className="ml-1 text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* FACTORIES (INDIA) */}
          <div className="flex-1 min-w-[240px]">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-700 mb-3">
              Factory · India
            </h4>

            <div className="space-y-1.5">
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                Hilltop Granite Factory
              </p>
              <p className="text-slate-600 leading-relaxed">
                220/2b, Thyagarasanapalli Village, NH7 Hosur – Krishnagiri Road,
                Shoolagiri, Krishnagiri, Tamil Nadu - 635117
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Phone:</span> +91 89519 43583
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:factory@hilltopgranite.com"
                  className="underline underline-offset-2 decoration-slate-400 hover:decoration-amber-500 hover:text-amber-700 transition-colors"
                >
                  factory@hilltopgranite.com
                </a>
              </p>
              <a
                href="#"
                className="inline-flex items-center text-slate-600 hover:text-amber-700 text-[11px] font-medium mt-0.5"
              >
                Google Map <span className="ml-1 text-[10px]">↗</span>
              </a>
            </div>

            <div className="border-t border-slate-200 mt-4 pt-3 space-y-1.5">
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                Colors of Rainbow – Factory
              </p>
              <p className="text-slate-600 leading-relaxed">
                Sy.no.209/5B &amp; 6B, 321/1 Gollapalli, Shoolagiri, Krishnagiri,
                Tamil Nadu – 635117
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Phone:</span> +91 89519 43587
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:info@colorsofrainbow.in"
                  className="underline underline-offset-2 decoration-slate-400 hover:decoration-amber-500 hover:text-amber-700 transition-colors"
                >
                  info@colorsofrainbow.in
                </a>
              </p>
              <a
                href="#"
                className="inline-flex items-center text-slate-600 hover:text-amber-700 text-[11px] font-medium mt-0.5"
              >
                Google Map <span className="ml-1 text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* USA OFFICES (GROUPED) */}
          <div className="flex-1 min-w-[260px]">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-700 mb-3">
              USA Offices
            </h4>

            {/* Austin */}
            <div className="space-y-1.5">
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                Austin
              </p>
              <p className="text-slate-600 leading-relaxed">
                2120 Grand Ave Pkwy #150, Austin TX - 78728
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Phone:</span> +1 512 220 2140
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:austin@hilltopgranite.com"
                  className="underline underline-offset-2 decoration-slate-400 hover:decoration-amber-500 hover:text-amber-700 transition-colors"
                >
                  austin@hilltopgranite.com
                </a>
              </p>
              <a
                href="#"
                className="inline-flex items-center text-slate-600 hover:text-amber-700 text-[11px] font-medium mt-0.5"
              >
                Google Map <span className="ml-1 text-[10px]">↗</span>
              </a>
            </div>

            {/* Dallas */}
            <div className="border-t border-slate-200 mt-4 pt-3 space-y-1.5">
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                Dallas
              </p>
              <p className="text-slate-600 leading-relaxed">
                12401 N Stemmons Fwy #140, Farmers Branch TX - 75234
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Phone:</span> +1 972 243 3156 / 3157
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:dallas@hilltopgranite.com"
                  className="underline underline-offset-2 decoration-slate-400 hover:decoration-amber-500 hover:text-amber-700 transition-colors"
                >
                  dallas@hilltopgranite.com
                </a>
              </p>
              <a
                href="#"
                className="inline-flex items-center text-slate-600 hover:text-amber-700 text-[11px] font-medium mt-0.5"
              >
                Google Map <span className="ml-1 text-[10px]">↗</span>
              </a>
            </div>

            {/* Houston */}
            <div className="border-t border-slate-200 mt-4 pt-3 space-y-1.5">
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                Houston
              </p>
              <p className="text-slate-600 leading-relaxed">
                8760 Clay Rd Suite B, Houston TX - 77080
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Phone:</span> +1 832 867 9053
              </p>
              <p className="text-slate-600">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:houston@hilltopgranite.com"
                  className="underline underline-offset-2 decoration-slate-400 hover:decoration-amber-500 hover:text-amber-700 transition-colors"
                >
                  houston@hilltopgranite.com
                </a>
              </p>
              <a
                href="#"
                className="inline-flex items-center text-slate-600 hover:text-amber-700 text-[11px] font-medium mt-0.5"
              >
                Google Map <span className="ml-1 text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Hilltop Granite Group. All rights reserved.
          </p>
          <p>Global stone solutions for architects, fabricators & homeowners.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
