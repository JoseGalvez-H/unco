'use client';

export default function Research() {
  const insights = [
    {
      title: 'The Future of Design Systems',
      category: 'Design',
      date: 'January 2026',
      description: 'How AI-powered design systems are transforming the way teams collaborate and build products.',
      tags: ['Design Systems', 'AI', 'Collaboration'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'User Research in the Age of Privacy',
      category: 'Research',
      date: 'December 2025',
      description: 'Balancing user insights with privacy concerns in modern product development.',
      tags: ['Privacy', 'UX Research', 'Ethics'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Sustainable Digital Products',
      category: 'Innovation',
      date: 'November 2025',
      description: 'Exploring how digital products can reduce their environmental footprint.',
      tags: ['Sustainability', 'Green Tech', 'Impact'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'The Rise of Voice Interfaces',
      category: 'Technology',
      date: 'October 2025',
      description: 'Understanding how voice-first design is reshaping user expectations.',
      tags: ['Voice UI', 'Accessibility', 'Innovation'],
      color: 'from-orange-400 to-amber-500'
    },
  ];

  const publications = [
    {
      type: 'White Paper',
      title: 'Building Inclusive Digital Experiences',
      description: 'A comprehensive guide to accessibility in modern web development',
      year: '2025'
    },
    {
      type: 'Case Study',
      title: 'Scaling Design Operations',
      description: 'How we helped a Fortune 500 company transform their design process',
      year: '2024'
    },
    {
      type: 'Research Report',
      title: 'State of UX in 2024',
      description: 'Annual report on UX trends based on 1000+ user interviews',
      year: '2024'
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold">
            Research & <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Exploring the intersection of design, technology, and human behavior 
            to shape the future of digital experiences
          </p>
        </div>

        {/* Featured Insight */}
        <div className="glass-card p-12 mb-32 rounded-3xl hover:scale-[1.02] transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-600 
                           text-sm font-medium mb-6">
                Featured Research
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Evolution of Digital Interfaces
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                A deep dive into how interface design has evolved over the past decade and 
                what it means for the future of human-computer interaction. Based on analysis 
                of 500+ digital products and interviews with leading designers.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Interface Design', 'Research', 'Trends'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/30 
                                           text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="glass-button">
                Read Full Report →
              </button>
            </div>
            <div className="h-96 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 
                          flex items-center justify-center">
              <div className="text-white/20 text-9xl font-bold">R</div>
            </div>
          </div>
        </div>

        {/* Latest Insights */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Latest Insights</h2>
            <button className="glass-button text-sm">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="glass-card group cursor-pointer hover:scale-[1.02] transition-all duration-500"
              >
                <div className={`h-64 rounded-t-3xl bg-gradient-to-br ${insight.color} 
                              relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-8xl font-bold">
                      {insight.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/30 
                                 text-sm font-medium text-white">
                      {insight.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="text-sm text-neutral-500">{insight.date}</div>
                  
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                    {insight.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {insight.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {insight.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/30 text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <span className="inline-flex items-center text-sm font-medium 
                                   group-hover:gap-2 gap-1 transition-all duration-300">
                      Read More
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
        </div>

        {/* Publications */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">Publications</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              In-depth reports and case studies from our research team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-500"
              >
                <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 
                             text-orange-600 text-sm font-medium mb-6">
                  {pub.type}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pub.title}</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">{pub.description}</p>
                <div className="text-sm text-neutral-500 mb-6">{pub.year}</div>
                <button className="text-sm font-medium hover:gap-2 gap-1 inline-flex items-center
                               transition-all duration-300">
                  Download PDF
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="glass-card p-16 mb-32 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Research Areas
            </h2>
            <p className="text-xl text-neutral-600">
              Exploring diverse topics at the forefront of digital innovation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'User Experience',
              'Accessibility',
              'AI & Machine Learning',
              'Design Systems',
              'Performance',
              'Privacy & Security',
              'Sustainability',
              'Future Interfaces'
            ].map((area) => (
              <div
                key={area}
                className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl
                         p-6 text-center hover:bg-white/30 transition-all duration-300
                         hover:scale-105 cursor-pointer"
              >
                <div className="font-semibold">{area}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="text-center space-y-8 glass-card p-16 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            Stay Updated
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest research insights and industry trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-2xl backdrop-blur-lg bg-white/40 
                       border border-white/30 focus:outline-none focus:ring-2 
                       focus:ring-orange-400 text-neutral-900 placeholder-neutral-500"
            />
            <button className="glass-button whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
