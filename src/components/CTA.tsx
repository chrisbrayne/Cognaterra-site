import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 cta-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-montserrat mb-4">Ready to start your journey?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-100">
          Get in touch for an exploratory consultation to discuss how Cognaterra can support your digital strategy, data governance, and responsible AI adoption.
        </p>
        <a 
          href="mailto:contact@cognaterra.co.uk"
          className="bg-white text-[var(--color-brand-accent)] font-bold font-montserrat py-3 px-8 rounded-full hover:bg-gray-100 hover:text-[var(--color-brand-accent-hover)] transition-all duration-300 text-lg shadow-lg transform hover:scale-105 inline-block"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTA;
