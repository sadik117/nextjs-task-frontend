"use client";

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center bg-white rounded-lg">
              <img 
                src="/SGE-Logo.png" 
                alt="Shabuj Global Education" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm">
              Empowering students to achieve their global education dreams since 2010. 
              We provide comprehensive guidance for university admissions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/study-destination" className="text-gray-300 hover:text-white text-sm">
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link href="/test-prep" className="text-gray-300 hover:text-white text-sm">
                  Test Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-destination/usa" className="text-gray-300 hover:text-white text-sm">
                  Study in USA
                </Link>
              </li>
              <li>
                <Link href="/study-destination/uk" className="text-gray-300 hover:text-white text-sm">
                  Study in UK
                </Link>
              </li>
              <li>
                <Link href="/study-destination/canada" className="text-gray-300 hover:text-white text-sm">
                  Study in Canada
                </Link>
              </li>
              <li>
                <Link href="/study-destination/australia" className="text-gray-300 hover:text-white text-sm">
                  Study in Australia
                </Link>
              </li>
              <li>
                <Link href="/study-destination/germany" className="text-gray-300 hover:text-white text-sm">
                  Study in Germany
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <p>123 Education Road, Academic District, Dhaka 1207, Bangladesh</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone />
                <p>+880 1234 567890</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope />
                <p>info@shabujglobal.edu</p>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-white text-sm rounded-l-md focus:outline-none w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shabuj Global Education. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;