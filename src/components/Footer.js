import React, { useState } from "react";

const Footer = () => {
  const [openRegion, setOpenRegion] = useState(null);
  const whatsappLink = "https://wa.me/919900064364";

  const toggleRegion = (region) => {
    setOpenRegion((prev) => (prev === region ? null : region));
  };

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* India Address */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60">
            <button
              type="button"
              onClick={() => toggleRegion("india")}
              className="w-full flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4"
            >
              <div className="text-left">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">
                  India
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  Hilltop Granites · India HQ
                </p>
              </div>
              <span className="text-slate-400 text-lg">
                {openRegion === "india" ? "−" : "+"}
              </span>
            </button>

            {openRegion === "india" && (
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-3 text-xs sm:text-sm text-slate-300">
                <p className="leading-relaxed">
                  736, 7th Cross Rd, 3rd Block,
                  <br />
                  Koramangala 4-B Block, Koramangala 3 Block,
                  <br />
                  Koramangala, Bengaluru, Karnataka 560034
                </p>

                {/* Add more India locations if needed */}
                {/* <p>Another India branch address...</p> */}

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-amber-400 transition-colors"
                >
                  Know more on WhatsApp
                  <span className="ml-1 text-[10px]">↗</span>
                </a>
              </div>
            )}
          </div>

          {/* USA Addresses */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60">
            <button
              type="button"
              onClick={() => toggleRegion("usa")}
              className="w-full flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4"
            >
              <div className="text-left">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">
                  USA
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  Hilltop Granite · USA Offices
                </p>
              </div>
              <span className="text-slate-400 text-lg">
                {openRegion === "usa" ? "−" : "+"}
              </span>
            </button>

            {openRegion === "usa" && (
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-3 text-xs sm:text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-slate-100 text-xs sm:text-sm">
                    Austin
                  </p>
                  <p className="leading-relaxed">
                    2120 Grand Ave Pkwy #150,
                    <br />
                    Austin, TX 78728, USA
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-100 text-xs sm:text-sm">
                    Dallas
                  </p>
                  <p className="leading-relaxed">
                    12401 N Stemmons Fwy #140,
                    <br />
                    Farmers Branch, TX 75234, USA
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-100 text-xs sm:text-sm">
                    Houston
                  </p>
                  <p className="leading-relaxed">
                    8760 Clay Rd Suite B,
                    <br />
                    Houston, TX 77080, USA
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-amber-400 transition-colors"
                >
                  Know more on WhatsApp
                  <span className="ml-1 text-[10px]">↗</span>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 pt-6 text-[11px] sm:text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Hilltop Granites. All rights reserved.
          </p>
          <p>
            Temporary preview site for Hilltop Granites – full experience coming
            soon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
