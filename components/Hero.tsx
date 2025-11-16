

import React from 'react';

const Hero: React.FC = () => {
  const heroImage = "https://images.unsplash.com/photo-1549298462-95b16954b42b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(32, 201, 151, 0.4), rgba(13, 110, 253, 0.4)), url("${heroImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10 py-16">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white leading-tight mb-6">
          Clarity, Trust, Impact.
          <br />
          <span className="brand-accent">Digital Transformation for Heritage.</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10">
          We empower cultural and natural heritage organisations to adopt digital, data, and AI solutions responsibly.
        </p>
        <a 
          href="#services"
          className="bg-brand-accent text-white font-bold font-montserrat py-3 px-8 rounded-full hover:bg-[#18a27c] transition-all duration-300 text-lg shadow-lg transform hover:scale-105 inline-block"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;