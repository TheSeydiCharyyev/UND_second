import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-orange-400">Industry</span>Works
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Leading industrial solutions provider delivering innovative engineering services, 
              automation solutions, and operational excellence for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Industrial Engineering</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Safety & Compliance</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Automation Solutions</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Maintenance Services</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Performance Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm">123 Industrial Blvd, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm">info@industryworks.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              © 2025 IndustryWorks. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;