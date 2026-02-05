'use client';

import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      title: 'TechFlow Dashboard',
      category: 'SaaS Platform',
      description: 'A comprehensive analytics dashboard for modern businesses',
      tags: ['UI/UX', 'React', 'Data Viz'],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Luxe E-commerce',
      category: 'E-commerce',
      description: 'Premium shopping experience for luxury fashion brand',
      tags: ['Branding', 'Next.js', 'Shopify'],
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'HealthHub Mobile',
      category: 'Healthcare',
      description: 'Patient management app for healthcare providers',
      tags: ['Mobile', 'React Native', 'UX Research'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'FinanceAI Platform',
      category: 'FinTech',
      description: 'AI-powered financial planning and investment platform',
      tags: ['AI/ML', 'TypeScript', 'Strategy'],
      color: 'from-orange-400 to-amber-500',
    },
    {
      title: 'EduLearn Portal',
      category: 'EdTech',
      description: 'Interactive learning platform for modern education',
      tags: ['Product Design', 'Vue.js', 'Animation'],
      color: 'from-rose-400 to-red-500',
    },
    {
      title: 'GreenSpace App',
      category: 'Sustainability',
      description: 'Environmental impact tracking for conscious consumers',
      tags: ['Mobile First', 'Flutter', 'IoT'],
      color: 'from-teal-400 to-green-500',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            A showcase of our latest projects and the impact we've created for our clients
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['All', 'Web', 'Mobile', 'Branding', 'Research'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-3 rounded-full glass-card text-sm font-medium
                       hover:bg-white/30 transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card group cursor-pointer hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-80 rounded-t-3xl bg-gradient-to-br ${project.color} 
                            relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-9xl font-bold">
                    {project.title.split(' ')[0].charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 
                              transition-all duration-500" />
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-500">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/30 text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4">
                  <span className="inline-flex items-center text-sm font-medium 
                                 group-hover:gap-2 gap-1 transition-all duration-300">
                    View Case Study
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center space-y-8 glass-card p-16 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            Like What You See?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
          <Link href="/contact" className="glass-button text-lg inline-block">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
