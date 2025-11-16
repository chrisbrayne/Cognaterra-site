

import React from 'react';

const About: React.FC = () => {
  const aboutImage = "https://images.unsplash.com/photo-1470252833075-802c6762319c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${aboutImage}")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold font-montserrat mb-4 text-white">Our Mission</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="max-w-4xl mx-auto text-white leading-relaxed">
          Our core mission is to empower heritage organisations with the clarity and confidence to thrive in a digital world. We believe in building trust through transparent processes and delivering a lasting, positive impact on the sector.
        </p>
      </div>
    </section>
  );
};

export default About;