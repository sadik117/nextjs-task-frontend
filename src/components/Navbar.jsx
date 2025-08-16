"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src="/SGE-Logo.png"
                alt="Shabuj Global Education"
                width={250}
                height={50}
                priority 
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/study-destination"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Study Destination
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Services
              </Link>
              
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/admin"
                className="text-sky-700 font-medium hover:text-blue-600 px-3 py-2 text-sm"
              >
                Admin
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-4 ml-6">
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Registration
              </Link>
              <Link
                href="/login"
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 px-2 pt-2">
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/study-destination"
                onClick={toggleMenu}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Study Destination
              </Link>
              <Link
                href="/services"
                onClick={toggleMenu}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>
              
              <Link
                href="/about-us"
                onClick={toggleMenu}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </Link>

              <Link
                href="/admin"
                onClick={toggleMenu}
                className="text-gray-700 font-medium hover:bg-gray-100 block px-3 py-2 rounded-md text-base"
              >
                Admin
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex space-x-4 mt-4 px-2">
              <Link
                href="/register"
                onClick={toggleMenu}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex-1 text-center"
              >
                Registration
              </Link>
              <Link
                href="/login"
                onClick={toggleMenu}
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium flex-1 text-center"
              >
                Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
