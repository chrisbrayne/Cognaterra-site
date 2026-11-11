import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Insights from './components/Insights';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [pathname, setPathname] = useState<string>(() => {
    return window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname.toLowerCase().replace(/\/$/, '') || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isPrivacy = pathname === '/privacy';

  useEffect(() => {
    if (isPrivacy) {
      window.scrollTo(0, 0);
    }
  }, [isPrivacy]);

  return (
    <div className="bg-[#F8F9FA] text-[#212529] min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        {isPrivacy ? (
          <PrivacyPolicy />
        ) : (
          <>
            <Hero />
            <Introduction />
            <Services />
            <Insights />
            <About />
            <CTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
