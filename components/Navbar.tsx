'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`glass-nav transition-all duration-500 rounded-full px-6 py-4 ${
            isScrolled ? 'shadow-2xl' : 'shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-black rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">un<br/>co</span>
                </div>
              </div>
              <span className="font-bold text-xl hidden sm:block">UNCO</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-neutral-700 
                        hover:bg-white/40 hover:text-neutral-900 transition-all duration-300
                          hover:shadow-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="glass-button text-sm font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 
                              opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl glass-button"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 animate-slide-up">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-2xl text-sm font-medium text-neutral-700 
                          hover:bg-white/40 hover:text-neutral-900 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="glass-button text-sm font-semibold text-center mt-2"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
