
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-montserrat mb-4">Guiding Heritage into the Digital Future</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
          Cognaterra is a consultancy dedicated to helping cultural and natural heritage organisations navigate the complexities of the digital age. We provide expert guidance on digital transformation, data strategy, and AI governance, ensuring technology is adopted responsibly and effectively to protect and promote our shared heritage.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
