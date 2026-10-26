import React from 'react';
import BackgroundSection from './BackgroundSection';

const Introduction: React.FC = () => {
  return (
    <BackgroundSection 
      id="introduction" 
      className="py-20"
      isFixed={false}
    >
      <div className="text-center relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold font-montserrat mb-4 text-white">Guiding Heritage into the Digital Future</h2>
        <div className="w-24 h-1 bg-[var(--color-brand-accent)] mx-auto mb-8"></div>
        <p className="max-w-4xl mx-auto text-white leading-relaxed font-sourcesanspro text-lg mb-12">
          Cognaterra is an executive consultancy dedicated to helping cultural and natural heritage organisations navigate the complexities of the digital era. We provide expert, independent guidance on digital transformation, data strategy, and responsible AI governance—ensuring technology is adopted with clarity, rigor, and public benefit.
        </p>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-800">
          <div className="p-4">
            <h3 className="text-lg font-bold font-montserrat text-[var(--color-brand-accent)] mb-2">Independent Advisory</h3>
            <p className="text-gray-400 text-sm font-sourcesanspro">Objective, vendor-neutral counsel grounded in sector realities and statutory standards.</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold font-montserrat text-[var(--color-brand-accent)] mb-2">Evidence-Based R&D</h3>
            <p className="text-gray-400 text-sm font-sourcesanspro">Testing real-world architectures, algorithmic transparency, and empirical performance.</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold font-montserrat text-[var(--color-brand-accent)] mb-2">Public Benefit Focus</h3>
            <p className="text-gray-400 text-sm font-sourcesanspro">Safeguarding curatorial integrity, accessibility, and environmental proportionality.</p>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default Introduction;
