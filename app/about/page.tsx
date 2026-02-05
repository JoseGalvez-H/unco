'use client';

export default function About() {
  const team = [
    {
      name: 'Dr. Jessica Blaney',
      role: 'Founder & Researcher',
      bio: 'PhD in psychology and over 10 years experience conducting research.',
      color: 'from-orange-400 to-amber-500'
    },
    {
      name: 'Phirom Yim',
      role: 'Founder & UX/UI Designer',
      bio: 'Strategic designer with over 10 plus years of experience building brand identities.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Jose Galvez Hernandez',
      role: 'Founder & Engineer',
      bio: 'Software engineer with over 5 years of experience programming. ',
      color: 'from-blue-400 to-cyan-500'
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Purpose-Driven',
      description: 'Every project starts with understanding the "why" behind it'
    },
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'We believe the best work comes from true partnership'
    },
    {
      icon: '💡',
      title: 'Innovative',
      description: 'Constantly exploring new approaches and technologies'
    },
    {
      icon: '🎨',
      title: 'Craft-Focused',
      description: 'Obsessing over details to create exceptional experiences'
    },
    {
      icon: '🌱',
      title: 'Growth-Minded',
      description: 'Continuously learning and evolving our skills'
    },
    {
      icon: '⚡',
      title: 'Impact-Oriented',
      description: 'Measuring success by the real-world results we create'
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold">
            About <span className="gradient-text">UNCO</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of designers, developers, and researchers united by a passion 
            for creating digital experiences that matter.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-card p-16 mb-32 rounded-3xl">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              Founded in 2025, UNCO emerged from a simple observation: too many digital products 
              were being built without truly understanding the people who would use them. We set out 
              to change that.
            </p>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              What started as a small design studio has evolved into a full-service agency that 
              bridges design, research, and development. We believe that great digital experiences 
              come from the intersection of beautiful design, rigorous research, and solid engineering.
            </p>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              Today, we work with startups and enterprises alike, helping them navigate the 
              complexities of digital transformation. Our approach combines creative thinking with 
              analytical rigor, ensuring that every solution we create is both innovative and grounded 
              in real user needs.
            </p>
          </div>
        </div>

                {/* Team */}
                <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">Meet the Team</h2>
            {/* <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The talented people behind UNCO
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center hover:scale-105 transition-all duration-500 group"
              >
                <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.color} 
                              mb-6 group-hover:scale-110 transition-transform duration-300
                              flex items-center justify-center text-white text-4xl font-bold`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="glass-button inline-block">
              Join Our Team
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">Our Values</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-500"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Stats */}
        {/* <div className="glass-card p-16 mb-32 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '8+', label: 'Years in Business' },
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '20+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Awards */}
        {/* <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">Recognition</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Awards and accolades from the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Webby Award 2024 - Best User Experience',
              'Awwwards Site of the Day (5x)',
              'CSS Design Awards - Innovation Prize',
              'Red Dot Design Award 2023',
              'Fast Company Innovation by Design',
              'FWA Mobile of the Day (3x)'
            ].map((award, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center hover:scale-105 transition-all duration-500"
              >
                <div className="text-4xl mb-4">🏆</div>
                <p className="font-medium text-neutral-700">{award}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you.
          </p>
          <a href="/contact" className="glass-button text-lg inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
