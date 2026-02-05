'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-black rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-base">un<br/>co</span>
                  </div>
                </div>
                <span className="font-bold text-2xl">UNCO</span>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Design, Research & Development Agency creating exceptional digital experiences.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Navigate</h3>
              <ul className="space-y-2">
                {['Home', 'Work', 'Services', 'About', 'Research', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>Brand Strategy</li>
                <li>Product Design</li>
                <li>Development</li>
                <li>User Research</li>
                <li>Innovation Lab</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="mailto:hello@unco.agency" className="hover:text-neutral-900 transition-colors">
                    hello@unco.agency
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-neutral-900 transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
              
              <div className="flex space-x-4 mt-6">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full backdrop-blur-lg bg-white/20 border border-white/30
                             flex items-center justify-center hover:bg-white/40 transition-all duration-300
                             hover:scale-110"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600">
              © {currentYear} UNCO Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-neutral-600">
              <Link href="/privacy" className="hover:text-neutral-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-neutral-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
