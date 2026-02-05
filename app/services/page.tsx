'use client';

export default function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Brand Strategy & Design',
      description: 'We create distinctive brand identities that resonate with your audience and stand out in the market.',
      features: [
        'Brand Identity Design',
        'Visual Design Systems',
        'Logo & Typography',
        'Brand Guidelines',
        'Marketing Collateral'
      ],
      color: 'from-orange-400 to-amber-500'
    },
    {
      icon: '💻',
      title: 'Web & App Development',
      description: 'Building scalable, performant digital products with cutting-edge technology and best practices.',
      features: [
        'Web Applications',
        'Mobile Apps (iOS & Android)',
        'E-commerce Solutions',
        'API Development',
        'Cloud Infrastructure'
      ],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🔬',
      title: 'User Research & Testing',
      description: 'Data-driven insights to understand your users and validate design decisions.',
      features: [
        'User Interviews',
        'Usability Testing',
        'Analytics & Insights',
        'Competitive Analysis',
        'Journey Mapping'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '✨',
      title: 'Product Design',
      description: 'Crafting intuitive user experiences that delight users and drive business results.',
      features: [
        'UX/UI Design',
        'Prototyping',
        'Design Systems',
        'Interaction Design',
        'Accessibility'
      ],
      color: 'from-rose-400 to-red-500'
    },
    {
      icon: '🚀',
      title: 'Innovation & R&D',
      description: 'Exploring emerging technologies and experimenting with novel solutions for tomorrow.',
      features: [
        'Technology Consulting',
        'Proof of Concepts',
        'AI/ML Integration',
        'Innovation Workshops',
        'Future Visioning'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: '📊',
      title: 'Digital Strategy',
      description: 'Strategic planning to align your digital initiatives with business objectives.',
      features: [
        'Digital Transformation',
        'Product Strategy',
        'Growth Planning',
        'Market Analysis',
        'Roadmap Development'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      description: 'We start by understanding your business, users, and goals through research and workshops.'
    },
    {
      step: '02',
      title: 'Define',
      description: 'We synthesize insights to define the problem space and establish clear project objectives.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our team creates innovative solutions, iterating through prototypes and user feedback.'
    },
    {
      step: '04',
      title: 'Develop',
      description: 'We build your product with clean code, rigorous testing, and attention to detail.'
    },
    {
      step: '05',
      title: 'Deploy',
      description: 'Launch your product with comprehensive support and post-launch optimization.'
    },
    {
      step: '06',
      title: 'Evolve',
      description: 'Continuous improvement through analytics, user feedback, and iterative enhancements.'
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive solutions to transform your digital presence and achieve your goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-10 hover:scale-[1.02] transition-all duration-500 group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} 
                            flex items-center justify-center text-4xl mb-6
                            group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">Our Process</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-500"
              >
                <div className="text-6xl font-bold gradient-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="glass-card p-16 mb-32 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies We Love
            </h2>
            <p className="text-xl text-neutral-600">
              Working with industry-leading tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Figma', 
              'TailwindCSS', 'AWS', 'PostgreSQL', 'GraphQL', 'Docker', 'AI/ML'].map((tech) => (
              <div
                key={tech}
                className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl
                         p-6 text-center hover:bg-white/30 transition-all duration-300
                         hover:scale-110 cursor-pointer"
              >
                <div className="font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life
          </p>
          <a href="/contact" className="glass-button text-lg inline-block">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
