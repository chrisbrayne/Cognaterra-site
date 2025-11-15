
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-montserrat mb-4">Our Mission</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
          Our core mission is to empower heritage organisations with the clarity and confidence to thrive in a digital world. We believe in building trust through transparent processes and delivering a lasting, positive impact on the sector.
        </p>
      </div>
    </section>
  );
};

export default About;
