

import React from 'react';

const Introduction: React.FC = () => {
  const introductionImage = "https://images.unsplash.com/photo-1517032732959-b1d8e1c667a4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section id="introduction" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${introductionImage}")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold font-montserrat mb-4 text-white">Guiding Heritage into the Digital Future</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="max-w-4xl mx-auto text-white leading-relaxed">
          Cognaterra is a consultancy dedicated to helping cultural and natural heritage organisations navigate the complexities of the digital age. We provide expert guidance on digital transformation, data strategy, and AI governance, ensuring technology is adopted responsibly and effectively to protect and promote our shared heritage.
        </p>
      </div>
    </section>
  );
};

export default Introduction;