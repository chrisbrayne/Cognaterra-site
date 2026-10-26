import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212529] text-gray-400 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://www.linkedin.com/company/cognaterra" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.488 2.5C1.096 6 0 4.881 0 3.5S1.096 1 2.492 1C3.87 1 4.98 2.119 4.98 3.5zm-.049 3.5h-2.48V24h2.48V7zM18 6.5s-4.225-2.227-6.289-2.09c-2.427.164-3.711 1.942-3.711 5.3v13.29h2.481V13.882c0-2.583.565-3.889 2.82-3.889 2.254 0 2.372 1.961 2.372 4.025V24H24V13.578c0-6.19-2.73-7.587-5.992-7.078z"/>
            </svg>
          </a>
          <a 
            href="mailto:contact@cognaterra.co.uk" 
            aria-label="Email" 
            className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
        <p className="mb-2 text-sm text-gray-400">
          &copy; 2026 Cognaterra Limited. All rights reserved.
        </p>
        <p className="mb-4 text-xs text-gray-500">
          Cognaterra Limited &bull; Registered in England & Wales &bull; Company No. 16858068
        </p>
        <div className="flex justify-center space-x-4 text-xs text-gray-500">
          <span>Clarity, Trust, Impact</span>
          <span>&bull;</span>
          <span>Digital Transformation for Heritage</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
