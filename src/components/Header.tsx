import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white">
      {/* Top bar */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>info@industryworks.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-orange-400">🔥 LOGO 🔥</span>TEST TEXT
            </div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700">
            <nav className="py-4 space-y-4">
              <a href="#home" className="block hover:text-orange-400 transition-colors">Home</a>
              <a href="#services" className="block hover:text-orange-400 transition-colors">Services</a>
              <a href="#about" className="block hover:text-orange-400 transition-colors">About</a>
              <a href="#contact" className="block hover:text-orange-400 transition-colors">Contact</a>
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors w-full text-left">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;