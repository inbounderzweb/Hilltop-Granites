import React from 'react'
import logo from '../Assets/Logos/logo.png'

function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-sm">

        {/* Logo & Branding */}
        <div>
          <img src={logo} alt="logo" className="w-40 mb-6" />
          <p className="text-gray-400 leading-relaxed">
            Premium Granite & Stone surfaces crafted with excellence.
          </p>
        </div>

        {/* INDIA OFFICE */}
        <div>
          <h4 className="footer-title">INDIA</h4>
          <div className="footer-block">
            <p className="footer-heading">HILLTOP STONES PVT LTD</p>
            <p className="footer-text">
              No 736, Gupta House, 7th Cross Road,<br />
              3rd Block, Koramangala,<br />
              Bengaluru - 560 034, Karnataka
            </p>
            <p className="footer-contact">+91 80 2222 7778</p>
            <p className="footer-email">banglore@hilltopgranite.com</p>
            <a href="#" className="footer-link">Google Map</a>
          </div>
        </div>

        {/* INDIA FACTORY */}
        <div>
          <h4 className="footer-title">FACTORY (INDIA)</h4>

          <div className="footer-block">
            <p className="footer-heading">HILLTOP GRANITE FACTORY</p>
            <p className="footer-text">
              220/2b, Thyagarasanapalli Village,<br />
              NH7 Hosur – Krishnagiri Road,<br />
              Shoolagiri, Krishnagiri, Tamil Nadu - 635117
            </p>
            <p className="footer-contact">+91 89519 43583</p>
            <p className="footer-email">factory@hilltopgranite.com</p>
            <a href="#" className="footer-link">Google Map</a>
          </div>

          <div className="footer-block mt-8">
            <p className="footer-heading">COLORS OF RAINBOW – FACTORY</p>
            <p className="footer-text">
              Sy.no.209/5B & 6B, 321/1 Gollapalli,<br />
              Shoolagiri, Krishnagiri,<br />
              Tamil Nadu – 635117
            </p>
            <p className="footer-contact">+91 89519 43587</p>
            <p className="footer-email">info@colorsofrainbow.in</p>
            <a href="#" className="footer-link">Google Map</a>
          </div>
        </div>

        {/* USA OFFICES */}
        <div>
          <h4 className="footer-title">USA OFFICES</h4>

          <div className="footer-block">
            <p className="footer-heading">Austin</p>
            <p className="footer-text">
              2120 Grand Ave Pkwy #150,<br />
              Austin TX - 78728
            </p>
            <p className="footer-contact">+1 512 220 2140</p>
            <p className="footer-email">austin@hilltopgranite.com</p>
            <a href="#" className="footer-link">Google Map</a>
          </div>

          <div className="footer-block mt-8">
            <p className="footer-heading">Dallas</p>
            <p className="footer-text">
              12401 N Stemmons Fwy #140,<br />
              Farmers Branch TX - 75234
            </p>
            <p className="footer-contact">+1 972 243 3156 / 3157</p>
            <p className="footer-email">dallas@hilltopgranite.com</p>
            <a href="#" className="footer-link">Google Map</a>
          </div>

          <div className="footer-block mt-8">
            <p className="footer-heading">Houston</p>
            <p className="footer-text">
              8760 Clay Rd Suite B,<br />
              Houston TX - 77080
            </p>
            <p className="footer-contact">+1 832 867 9053</p>
            <p className="footer-email">houston@hilltopgranite.com</p>
            <a href="#" className="footer-link">Google Map</a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Hilltop Granite Group. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
