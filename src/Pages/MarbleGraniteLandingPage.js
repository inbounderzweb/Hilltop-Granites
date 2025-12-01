import React from 'react';
import hero from '../Assets/Banners/hilltopbanner.jpg';
import about from '../Assets/about.jpg';
import product1 from '../Assets/Products/product1.jpg';
import product2 from '../Assets/Products/product2.jpeg';
import product3 from '../Assets/Products/product3.jpg';
import product4 from '../Assets/Products/product4.jpg';
import logo from '../Assets/Logos/logo.png'
import Footer from '../components/Footer';

// --- Placeholder Data and Constants ---


const navItems = ['Home', 'About Us', 'Contact',];
const productData = [
  { name: 'Carrara Quartz', description: 'Durable & Pure', img: product1 },
  { name: 'Absolute Black', description: 'Classic Strength', img: product2 },
  { name: 'Calacatta Gold Marble', description: 'Regal Beauty', img: product3 },
  { name: 'Crema Limestone', description: 'Natural Serenity', img: product4 },
];

// --- Helper Components ---

const NavItem = ({ children }) => (
  <a href={`#${children.toLowerCase().replace(' ', '-')}`} className="mx-3 text-sm font-light hover:text-amber-500 transition duration-300">
    {children}
  </a>
);

const ProductCard = ({ name, description, img }) => (
  <div className="flex flex-col items-center p-4">
    <div className="w-full h-48 overflow-hidden mb-4 border-2 border-gray-600">
      <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
    </div>
    <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
    <p className="text-sm text-gray-400 mb-4">{description}</p>
    <a href="#" className="text-sm text-gray-400 border-b border-gray-400 pb-1 hover:text-amber-500 hover:border-amber-500 transition duration-300">
      View Details
    </a>
  </div>
);

// --- Main Component ---

const MarbleGraniteLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-200">

      {/* 1. Header & Hero Section */}
      <header className="relative w-full">
        <div 
          className="h-[600px] w-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${hero})` }}
        >
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Navigation Bar */}
          <nav className="relative z-10 flex justify-between items-center p-6 bg-black bg-opacity-70">
            <div className="text-2xl font-serif text-white border border-gray-600 px-3 py-1 cursor-default">
              <img src={logo} className='w-32' />
            </div>
            <div className="hidden md:flex">
              {navItems.map(item => (
                <NavItem key={item}>{item}</NavItem>
              ))}
            </div>
          </nav>

          {/* Hero Text */}
          <div className="relative z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pt-24">
            <h1 className="text-6xl font-serif text-white tracking-widest uppercase mb-4">
              Hilltop Granites
            </h1>
            <p className="text-xl font-light text-gray-300 italic">
              Crafting Elegance, Enduring Beauty
            </p>
          </div>
        </div>
      </header>

      {/* 2. About Us Section */}
      <section id="about-us" className="max-w-7xl mx-auto py-24 px-6 md:px-12 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-[50%]">
          <img 
            src={about} 
            alt="Craftsman working on stone" 
            className="w-full h-auto object-cover border-4 border-gray-600 shadow-xl"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-serif text-amber-500 mb-6 uppercase tracking-wider">ABOUT US</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded in 1989 by Kamal Giria and Nilesh Giria, Hilltop has established itself as a trusted leader in the stone industry, with over three decades of expertise. Our commitment to excellence has earned us recognition and loyalty from a diverse and growing customer base, making us one of India’s largest manufacturers of granite, marble, and quartz.
At Hilltop, we source high-quality, exquisitely colored stones, including granite, marble, quartz, semi-precious stones, porcelain, and more. Our extensive product range is designed to meet the demands of both local and global markets.

Driven by our customers, we strive to offer the highest quality stones at competitive prices. Our deep industry knowledge, honed over years of consistent sales in India and overseas, ensures that we understand and meet our customers' needs. As experts in natural and engineered stone, Hilltop is dedicated to making your dream spaces perfect in every way.
          </p>
        </div>
      </section>

      {/* 3. Banner/Collection CTA */}
      {/* <div className="bg-[#242424] py-12 px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white tracking-widest uppercase">
            DISCOVER OUR NEW SIGNATURE COLLECTION
          </h2>
        </div>
      </div> */}

    <section id="contact" className="max-w-3xl mx-auto py-24 px-6">
  <h2 className="text-4xl font-semibold text-center mb-12 text-white">
    Request Service
  </h2>

  <div className="relative">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 to-white/5 opacity-30 blur-xl"></div>

    <form className="relative space-y-7 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10">
      
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium mb-2 text-white/80">Full Name</label>
        <input
          type="text"
          className="w-full bg-white/20 text-white border border-white/30 rounded-xl p-3 placeholder-white/60 focus:ring-2 focus:ring-white focus:outline-none"
          placeholder="Enter your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
        <input
          type="email"
          className="w-full bg-white/20 text-white border border-white/30 rounded-xl p-3 placeholder-white/60 focus:ring-2 focus:ring-white focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium mb-2 text-white/80">Phone Number</label>
        <input
          type="number"
          className="w-full bg-white/20 text-white border border-white/30 rounded-xl p-3 placeholder-white/60 focus:ring-2 focus:ring-white focus:outline-none"
          placeholder="Enter your phone"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2 text-white/80">Message</label>
        <textarea
          rows="4"
          className="w-full bg-white/20 text-white border border-white/30 rounded-xl p-3 placeholder-white/60 focus:ring-2 focus:ring-white focus:outline-none"
          placeholder="Write your message..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-white text-black py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition hover:scale-[1.02]"
      >
        Submit Enquiry
      </button>

    </form>
  </div>
</section>


 <Footer/>

    </div>
  );
};

export default MarbleGraniteLandingPage;