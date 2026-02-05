'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    services: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. 
            Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* Contact Form */}
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-lg bg-white/40 
                           border border-white/30 focus:outline-none focus:ring-2 
                           focus:ring-orange-400 text-neutral-900 placeholder-neutral-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-lg bg-white/40 
                           border border-white/30 focus:outline-none focus:ring-2 
                           focus:ring-orange-400 text-neutral-900 placeholder-neutral-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-lg bg-white/40 
                           border border-white/30 focus:outline-none focus:ring-2 
                           focus:ring-orange-400 text-neutral-900 placeholder-neutral-500"
                  placeholder="Your Company Inc."
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Project Budget
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-lg bg-white/40 
                           border border-white/30 focus:outline-none focus:ring-2 
                           focus:ring-orange-400 text-neutral-900"
                >
                  <option value="">Select a range</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Services Interested In
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Design', 'Development', 'Research', 'Strategy', 'Branding', 'Consulting'].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                        ${formData.services.includes(service)
                          ? 'bg-orange-500/30 border-2 border-orange-400 text-neutral-900'
                          : 'backdrop-blur-lg bg-white/30 border-2 border-white/30 text-neutral-700 hover:bg-white/40'
                        }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-lg bg-white/40 
                           border border-white/30 focus:outline-none focus:ring-2 
                           focus:ring-orange-400 text-neutral-900 placeholder-neutral-500 resize-none"
                  placeholder="Share your vision, goals, and any specific requirements..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full glass-button text-lg py-4 group relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 
                              opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 
                                flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:hello@unco.agency" 
                       className="text-neutral-600 hover:text-orange-500 transition-colors">
                      hello@unco.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 
                                flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+1234567890" 
                       className="text-neutral-600 hover:text-orange-500 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 
                                flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Office</div>
                    <p className="text-neutral-600">
                      123 Innovation Street<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Twitter', icon: 'T', color: 'from-blue-400 to-cyan-500' },
                  { name: 'LinkedIn', icon: 'in', color: 'from-blue-600 to-blue-700' },
                  { name: 'Instagram', icon: 'IG', color: 'from-pink-500 to-rose-500' },
                  { name: 'Dribbble', icon: 'D', color: 'from-pink-400 to-rose-400' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-lg 
                             bg-white/30 border border-white/30 hover:bg-white/40 
                             transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} 
                                  flex items-center justify-center text-white text-sm font-bold
                                  group-hover:scale-110 transition-transform`}>
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
              
              <div className="space-y-3 text-neutral-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="glass-card p-8 rounded-3xl">
          <div className="h-96 rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300 
                        flex items-center justify-center">
            <div className="text-center text-neutral-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium">Map Placeholder</p>
              <p className="text-sm">123 Innovation Street, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
