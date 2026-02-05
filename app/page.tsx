"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span
              className="inline-block px-6 py-2 rounded-full glass-card text-sm font-medium mb-8
                         animate-slide-up border-orange-400/30"
            >
              🚀 Design, Research & Development
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold leading-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafting Digital
            <br />
            <span className="gradient-text">Excellence</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            We&apos;re a forward-thinking agency that transforms ideas into
            extraordinary digital experiences through innovative design, rigorous
            research, and cutting-edge development.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up pt-8"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/contact"
              className="glass-button text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500
                           opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              />
            </Link>

            <Link
              href="/work"
              className="px-8 py-4 rounded-2xl text-lg font-medium text-neutral-700
                         hover:text-neutral-900 transition-all duration-300 border-2 border-transparent
                         hover:border-white/40 hover:bg-white/20"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold">What We Do</h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Comprehensive services to bring your vision to life
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Brand & Design",
                description:
                  "Creating distinctive visual identities and memorable user experiences",
                color: "from-orange-400 to-amber-500",
              },
              {
                icon: "💻",
                title: "Development",
                description:
                  "Building robust, scalable solutions with cutting-edge technology",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: "🔬",
                title: "Research",
                description:
                  "Data-driven insights to inform strategic decision-making",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: "🚀",
                title: "Product Strategy",
                description: "Defining roadmaps and positioning for market success",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: "📱",
                title: "Digital Innovation",
                description:
                  "Exploring emerging technologies and future possibilities",
                color: "from-rose-400 to-red-500",
              },
              {
                icon: "⚡",
                title: "Consulting",
                description:
                  "Expert guidance to accelerate your digital transformation",
                color: "from-yellow-400 to-orange-500",
              },
            ].map((service, index) => (
              <Reveal key={service.title} delayMs={index * 80} offsetY={28}>
                <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group cursor-pointer">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color}
                                flex items-center justify-center text-3xl mb-6
                                group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="glass-card p-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { number: "150+", label: "Projects Delivered" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "8+", label: "Years Experience" },
                  { number: "20+", label: "Team Members" },
                ].map((stat, index) => (
                  <Reveal
                    key={stat.label}
                    delayMs={index * 80}
                    offsetY={20}
                    durationMs={600}
                  >
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-neutral-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold">
              Ready to Create
              <br />
              Something <span className="gradient-text">Amazing</span>?
            </h2>
          </Reveal>

          <Reveal delayMs={80}>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Let&apos;s collaborate to turn your vision into reality. Get in
              touch and let&apos;s start building the future together.
            </p>
          </Reveal>

          <Reveal delayMs={140}>
            <Link
              href="/contact"
              className="glass-button text-lg inline-block group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500
                           opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}









// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Reveal from "@/components/Reveal";


// export default function Home() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative">
//         <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
//           <div className="inline-block">
//             <span
//               className="inline-block px-6 py-2 rounded-full glass-card text-sm font-medium mb-8
//                          animate-slide-up border-orange-400/30"
//             >
//               🚀 Design, Research & Development
//             </span>
//           </div>

//           <h1
//             className="text-6xl md:text-8xl font-bold leading-tight animate-slide-up"
//             style={{ animationDelay: "0.1s" }}
//           >
//             Crafting Digital
//             <br />
//             <span className="gradient-text">Excellence</span>
//           </h1>

//           <p
//             className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             We&apos;re a forward-thinking agency that transforms ideas into
//             extraordinary digital experiences through innovative design, rigorous
//             research, and cutting-edge development.
//           </p>

//           <div
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up pt-8"
//             style={{ animationDelay: "0.3s" }}
//           >
//             <Link
//               href="/contact"
//               className="glass-button text-lg group relative overflow-hidden"
//             >
//               <span className="relative z-10">Start a Project</span>
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500
//                            opacity-0 group-hover:opacity-30 transition-opacity duration-300"
//               />
//             </Link>

//             <Link
//               href="/work"
//               className="px-8 py-4 rounded-2xl text-lg font-medium text-neutral-700
//                          hover:text-neutral-900 transition-all duration-300 border-2 border-transparent
//                          hover:border-white/40 hover:bg-white/20"
//             >
//               View Our Work →
//             </Link>
//           </div>
//         </div>

//         {/* Floating Cards Preview */}
//         {/*
//         <div
//           className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4
//                     hidden lg:block pointer-events-none"
//         >
//           <div className="relative h-64">
//             <div
//               className="absolute left-0 top-0 glass-card p-6 w-72 rotate-[-5deg]
//                         hover:rotate-0 transition-transform duration-500 shadow-2xl"
//             >
//               <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl mb-4" />
//               <h3 className="font-bold text-lg mb-2">Innovation</h3>
//               <p className="text-sm text-neutral-600">
//                 Pushing boundaries with cutting-edge solutions
//               </p>
//             </div>

//             <div
//               className="absolute right-0 top-0 glass-card p-6 w-72 rotate-[5deg]
//                         hover:rotate-0 transition-transform duration-500 shadow-2xl"
//             >
//               <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl mb-4" />
//               <h3 className="font-bold text-lg mb-2">Precision</h3>
//               <p className="text-sm text-neutral-600">
//                 Meticulous attention to every detail
//               </p>
//             </div>

//             <div
//               className="absolute left-1/2 -translate-x-1/2 bottom-0 glass-card p-6 w-72
//                         hover:scale-105 transition-transform duration-500 shadow-2xl z-10"
//             >
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl mb-4" />
//               <h3 className="font-bold text-lg mb-2">Excellence</h3>
//               <p className="text-sm text-neutral-600">
//                 Delivering exceptional results every time
//               </p>
//             </div>
//           </div>
//         </div>
//         */}
//       </section>

//       {/* Services Grid */}
//       <section className="py-32 px-4 relative">
//         <div className="max-w-7xl mx-auto">
//           <Reveal>
//           <div className="text-center mb-20 space-y-4">
//             <h2 className="text-5xl md:text-6xl font-bold">What We Do</h2>
//             <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
//               Comprehensive services to bring your vision to life
//             </p>
//           </div>
//           </Reveal>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🎨",
//                 title: "Brand & Design",
//                 description:
//                   "Creating distinctive visual identities and memorable user experiences",
//                 color: "from-orange-400 to-amber-500",
//               },
//               {
//                 icon: "💻",
//                 title: "Development",
//                 description:
//                   "Building robust, scalable solutions with cutting-edge technology",
//                 color: "from-blue-400 to-cyan-500",
//               },
//               {
//                 icon: "🔬",
//                 title: "Research",
//                 description:
//                   "Data-driven insights to inform strategic decision-making",
//                 color: "from-purple-400 to-pink-500",
//               },
//               {
//                 icon: "🚀",
//                 title: "Product Strategy",
//                 description: "Defining roadmaps and positioning for market success",
//                 color: "from-green-400 to-emerald-500",
//               },
//               {
//                 icon: "📱",
//                 title: "Digital Innovation",
//                 description: "Exploring emerging technologies and future possibilities",
//                 color: "from-rose-400 to-red-500",
//               },
//               {
//                 icon: "⚡",
//                 title: "Consulting",
//                 description:
//                   "Expert guidance to accelerate your digital transformation",
//                 color: "from-yellow-400 to-orange-500",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-8 hover:scale-105 transition-all duration-500 group cursor-pointer"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div
//                   className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color}
//                               flex items-center justify-center text-3xl mb-6
//                               group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                 <p className="text-neutral-600 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-32 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="glass-card p-16">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//               {[
//                 { number: "150+", label: "Projects Delivered" },
//                 { number: "50+", label: "Happy Clients" },
//                 { number: "8+", label: "Years Experience" },
//                 { number: "20+", label: "Team Members" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-neutral-600 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 px-4">
//         <div className="max-w-4xl mx-auto text-center space-y-8">
//           <h2 className="text-5xl md:text-6xl font-bold">
//             Ready to Create
//             <br />
//             Something <span className="gradient-text">Amazing</span>?
//           </h2>

//           <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
//             Let&apos;s collaborate to turn your vision into reality. Get in touch
//             and let&apos;s start building the future together.
//           </p>

//           <Link
//             href="/contact"
//             className="glass-button text-lg inline-block group relative overflow-hidden"
//           >
//             <span className="relative z-10">Get Started Today</span>
//             <div
//               className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500
//                         opacity-0 group-hover:opacity-30 transition-opacity duration-300"
//             />
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }





// // 'use client';

// // import Link from 'next/link';
// // import { useState, useEffect } from 'react';

// // export default function Home() {
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       setMousePosition({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative">
// //         <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
// //           <div className="inline-block">
// //             <span className="inline-block px-6 py-2 rounded-full glass-card text-sm font-medium mb-8
// //                            animate-slide-up border-orange-400/30">
// //               🚀 Design, Research & Development
// //             </span>
// //           </div>
          
// //           <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-slide-up"
// //               style={{ animationDelay: '0.1s' }}>
// //             Crafting Digital
// //             <br />
// //             <span className="gradient-text">Excellence</span>
// //           </h1>
          
// //           <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
// //           style={{ animationDelay: '0.2s' }}>
// //             We're a forward-thinking agency that transforms ideas into extraordinary 
// //             digital experiences through innovative design, rigorous research, and cutting-edge development.
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up pt-8"
// //               style={{ animationDelay: '0.3s' }}>
// //             <Link href="/contact" className="glass-button text-lg group relative overflow-hidden">
// //               <span className="relative z-10">Start a Project</span>
// //               <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 
// //                             opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
// //             </Link>
// //             <Link href="/work" 
// //                   className="px-8 py-4 rounded-2xl text-lg font-medium text-neutral-700
// //                            hover:text-neutral-900 transition-all duration-300 border-2 border-transparent
// //                            hover:border-white/40 hover:bg-white/20">
// //               View Our Work →
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Floating Cards Preview */}
// //         {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 
// //                       hidden lg:block pointer-events-none">
// //           <div className="relative h-64">
// //             <div className="absolute left-0 top-0 glass-card p-6 w-72 rotate-[-5deg] 
// //                           hover:rotate-0 transition-transform duration-500 shadow-2xl">
// //               <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl mb-4" />
// //               <h3 className="font-bold text-lg mb-2">Innovation</h3>
// //               <p className="text-sm text-neutral-600">Pushing boundaries with cutting-edge solutions</p>
// //             </div>
            
// //             <div className="absolute right-0 top-0 glass-card p-6 w-72 rotate-[5deg] 
// //                           hover:rotate-0 transition-transform duration-500 shadow-2xl">
// //               <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl mb-4" />
// //               <h3 className="font-bold text-lg mb-2">Precision</h3>
// //               <p className="text-sm text-neutral-600">Meticulous attention to every detail</p>
// //             </div>
            
// //             <div className="absolute left-1/2 -translate-x-1/2 bottom-0 glass-card p-6 w-72
// //                           hover:scale-105 transition-transform duration-500 shadow-2xl z-10">
// //               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl mb-4" />
// //               <h3 className="font-bold text-lg mb-2">Excellence</h3>
// //               <p className="text-sm text-neutral-600">Delivering exceptional results every time</p>
// //             </div>
// //           </div>
// //         </div> */}
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-32 px-4 relative">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-20 space-y-4">
// //             <h2 className="text-5xl md:text-6xl font-bold">What We Do</h2>
// //             <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
// //               Comprehensive services to bring your vision to life
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 icon: '🎨',
// //                 title: 'Brand & Design',
// //                 description: 'Creating distinctive visual identities and memorable user experiences',
// //                 color: 'from-orange-400 to-amber-500'
// //               },
// //               {
// //                 icon: '💻',
// //                 title: 'Development',
// //                 description: 'Building robust, scalable solutions with cutting-edge technology',
// //                 color: 'from-blue-400 to-cyan-500'
// //               },
// //               {
// //                 icon: '🔬',
// //                 title: 'Research',
// //                 description: 'Data-driven insights to inform strategic decision-making',
// //                 color: 'from-purple-400 to-pink-500'
// //               },
// //               {
// //                 icon: '🚀',
// //                 title: 'Product Strategy',
// //                 description: 'Defining roadmaps and positioning for market success',
// //                 color: 'from-green-400 to-emerald-500'
// //               },
// //               {
// //                 icon: '📱',
// //                 title: 'Digital Innovation',
// //                 description: 'Exploring emerging technologies and future possibilities',
// //                 color: 'from-rose-400 to-red-500'
// //               },
// //               {
// //                 icon: '⚡',
// //                 title: 'Consulting',
// //                 description: 'Expert guidance to accelerate your digital transformation',
// //                 color: 'from-yellow-400 to-orange-500'
// //               },
// //             ].map((service, index) => (
// //               <div
// //                 key={index}
// //                 className="glass-card p-8 hover:scale-105 transition-all duration-500 group cursor-pointer"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} 
// //                               flex items-center justify-center text-3xl mb-6 
// //                               group-hover:scale-110 transition-transform duration-300`}>
// //                   {service.icon}
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
// //                 <p className="text-neutral-600 leading-relaxed">{service.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section className="py-32 px-4">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="glass-card p-16">
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
// //               {[
// //                 { number: '150+', label: 'Projects Delivered' },
// //                 { number: '50+', label: 'Happy Clients' },
// //                 { number: '8+', label: 'Years Experience' },
// //                 { number: '20+', label: 'Team Members' },
// //               ].map((stat, index) => (
// //                 <div key={index} className="text-center">
// //                   <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
// //                     {stat.number}
// //                   </div>
// //                   <div className="text-neutral-600 font-medium">{stat.label}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-32 px-4">
// //         <div className="max-w-4xl mx-auto text-center space-y-8">
// //           <h2 className="text-5xl md:text-6xl font-bold">
// //             Ready to Create
// //             <br />
// //             Something <span className="gradient-text">Amazing</span>?
// //           </h2>
// //           <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
// //             Let's collaborate to turn your vision into reality. Get in touch and let's start building the future together.
// //           </p>
// //           <Link href="/contact" className="glass-button text-lg inline-block group relative overflow-hidden">
// //             <span className="relative z-10">Get Started Today</span>
// //             <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 
// //                           opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
// //           </Link>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }
