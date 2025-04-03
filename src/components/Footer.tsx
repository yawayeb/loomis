
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-loomis-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-loomis-orange">Loomis</span> Fruit
            </h3>
            <p className="mb-4">
              Leading the way in global fruit transport with efficiency, 
              reliability, and commitment to freshness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-loomis-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-loomis-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-loomis-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-loomis-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-loomis-orange transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-loomis-orange transition-colors">Get a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-loomis-orange transition-colors">International Shipping</a>
              </li>
              <li>
                <a href="#" className="hover:text-loomis-orange transition-colors">Temperature Controlled Transport</a>
              </li>
              <li>
                <a href="#" className="hover:text-loomis-orange transition-colors">Express Delivery</a>
              </li>
              <li>
                <a href="#" className="hover:text-loomis-orange transition-colors">Warehousing</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Orchard Street, Loomis, CA 95650, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@loomisfruit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Loomis Fruit Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
