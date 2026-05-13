'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-earth/5 to-green-emerald/5 blur-3xl"
            style={{
              left: '10%',
              top: '20%',
            }}
          />
          <div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-emerald/5 to-green-earth/5 blur-3xl"
            style={{
              right: '10%',
              bottom: '20%',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Green Earth
              <br />
              <span className="text-gradient">3D BioWorks</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-600 mt-6">
              Decompose, Digest, Derive
            </p>
          </div>

          <p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Transform organic waste into clean energy. Sustainable, scalable, and profitable biogas solutions for India.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <button className="bg-green-earth text-white px-8 py-4 rounded-full font-medium hover:bg-green-800 transition-all duration-300 hover:shadow-lg">
              Explore Solutions
            </button>
            <button className="border-2 border-green-earth text-green-earth px-8 py-4 rounded-full font-medium hover:bg-green-earth/5 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: 1 - scrollY / 300 }}
          >
            <p className="text-sm text-gray-500 font-light">Scroll to explore</p>
            <svg className="w-5 h-5 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 1: Environmental Impact */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 rounded-full bg-green-earth/5 blur-3xl"
            style={{
              left: '5%',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <span className="text-green-earth font-medium text-sm tracking-wide">ENVIRONMENTAL IMPACT</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">Reduce emissions,<br/>Save the planet</h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              Our biogas plant converts 50 tons of organic waste daily, preventing 1,200 tons of CO2 emissions annually. That's equivalent to planting 20,000 trees.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-4xl font-bold text-green-earth">1,200</p>
                <p className="text-sm text-gray-500 font-light">Tons CO2 saved yearly</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-earth">50</p>
                <p className="text-sm text-gray-500 font-light">Tons waste processed daily</p>
              </div>
            </div>
          </div>

          <div
            className="scroll-reveal h-96 rounded-3xl bg-gradient-to-br from-green-earth/10 to-green-emerald/10 flex items-center justify-center border border-green-earth/10 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105"
            onMouseEnter={() => setHoveredSection('env')}
            onMouseLeave={() => setHoveredSection(null)}
            style={{
              transform: hoveredSection === 'env' ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
            }}
          >
            <div className="text-center">
              <img 
                src="/images/CBG_Logo.png" 
                alt="Environmental Benefits" 
                className="h-32 w-32 object-contain transition-transform duration-500" 
                style={{
                  transform: hoveredSection === 'env' ? 'scale(1.2)' : 'scale(1)',
                }}
              />
              <p className="text-gray-600 font-light mt-4">Environmental Benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Economic Benefits */}
      <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 rounded-full bg-green-emerald/5 blur-3xl"
            style={{
              right: '5%',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="scroll-reveal h-96 rounded-3xl bg-gradient-to-br from-green-emerald/10 to-green-earth/10 flex items-center justify-center border border-green-earth/10 order-2 md:order-1 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105"
            onMouseEnter={() => setHoveredSection('econ')}
            onMouseLeave={() => setHoveredSection(null)}
            style={{
              transform: hoveredSection === 'econ' ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
            }}
          >
            <div className="text-center">
              <img 
                src="/images/CBG_Logo.png" 
                alt="Revenue Generation" 
                className="h-32 w-32 object-contain transition-transform duration-500" 
                style={{
                  transform: hoveredSection === 'econ' ? 'scale(1.2)' : 'scale(1)',
                }}
              />
              <p className="text-gray-600 font-light mt-4">Revenue Generation</p>
            </div>
          </div>

          <div className="scroll-reveal order-1 md:order-2">
            <span className="text-green-earth font-medium text-sm tracking-wide">ECONOMIC BENEFITS</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">Generate Revenue,<br/>Scale Impact</h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              Convert waste into valuable biogas. Sell to the market and generate consistent revenue while reducing waste management costs.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-4xl font-bold text-green-earth">500</p>
                <p className="text-sm text-gray-500 font-light">MMBtu daily output</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-earth">99.5%</p>
                <p className="text-sm text-gray-500 font-light">System uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Excellence */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 rounded-full bg-green-earth/5 blur-3xl"
            style={{
              left: '10%',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <span className="text-green-earth font-medium text-sm tracking-wide">TECHNICAL EXCELLENCE</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">Innovation,<br/>Reliability, Efficiency</h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              State-of-the-art anaerobic digestion technology with real-time monitoring. Optimized for maximum biogas yield and minimal environmental impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="glass p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-lg"
                onMouseEnter={() => setHoveredSection('tech1')}
                onMouseLeave={() => setHoveredSection(null)}
                style={{
                  transform: hoveredSection === 'tech1' ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                <p className="text-3xl font-bold text-green-earth">37°C</p>
                <p className="text-sm text-gray-500 font-light mt-2">Optimal Temperature</p>
              </div>
              <div
                className="glass p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-lg"
                onMouseEnter={() => setHoveredSection('tech2')}
                onMouseLeave={() => setHoveredSection(null)}
                style={{
                  transform: hoveredSection === 'tech2' ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                <p className="text-3xl font-bold text-green-earth">30</p>
                <p className="text-sm text-gray-500 font-light mt-2">Days Retention</p>
              </div>
            </div>
          </div>

          <div
            className="scroll-reveal h-96 rounded-3xl bg-gradient-to-br from-green-earth/10 to-green-emerald/10 flex items-center justify-center border border-green-earth/10 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105"
            onMouseEnter={() => setHoveredSection('tech')}
            onMouseLeave={() => setHoveredSection(null)}
            style={{
              transform: hoveredSection === 'tech' ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
            }}
          >
            <div className="text-center">
              <img 
                src="/images/CBG_Logo.png" 
                alt="Cutting-Edge Technology" 
                className="h-32 w-32 object-contain transition-transform duration-500" 
                style={{
                  transform: hoveredSection === 'tech' ? 'scale(1.2)' : 'scale(1)',
                }}
              />
              <p className="text-gray-600 font-light mt-4">Cutting-Edge Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-green-earth to-green-emerald text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Ready to Transform Waste into Energy?</h2>
          <p className="text-xl font-light mb-12 text-white/80">Join us in building a sustainable future</p>
          <button className="bg-white text-green-earth px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
}