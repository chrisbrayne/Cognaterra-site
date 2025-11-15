import React from 'react';

const Hero: React.FC = () => {
  const heroBackgroundPattern = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0Y4RjlGQSIvPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIxIiBmaWxsPSIjRTBFM0U0IiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjUiIHJheD0iMSIgZmlsbD0iI0UwRTNFNCIgb3BhY2l0eT0iMC4zIi8+PHRleHQgeD0iNSIgY3k9IjMiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI1IiBmaWxsPSIjRTBFM0U0IiBvcGFjaXR5PSIwLjEiPjwvZGV4dD48Y2lyY2xlIGN4PSI1NSIgY3k9IjUiIHI9IjEiIGZpbGw9IiNFMEUzRTQiIG9wYWNpdHk9IjAuMyIvPjxjaXJjbGUgY3g9IjUiIGN5PSIzMCIgcj0iMSIgZmlsbD0iI0UwRTNFNCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iI0UwRTNFNCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iNTUiIGN5PSAzMCIgcj0iMSIgZmlsbD0iI0UwRTNFNCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjU1IiByPSIxIiBmaWxsPSIjRTBFM0U0IiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjU1IiByPSIxIiBmaWxsPSIjRTBFM0U0IiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSI1NSIgY3k9IjU1IiByPSIxIiBmaWxsPSIjRTBFM0U0IiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=";

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `url("${heroBackgroundPattern}")`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-[#F8F9FA] opacity-70"></div> {/* Semi-transparent overlay */}
      <div className="container mx-auto px-6 text-center relative z-10"> {/* Ensure content is above overlay */}
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-[#212529] leading-tight mb-4">
          Clarity, Trust, Impact.
          <br />
          <span className="brand-accent">Digital Transformation for Heritage.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We help cultural and natural heritage organisations adopt digital, data, and AI solutions responsibly.
        </p>
      </div>
    </section>
  );
};

export default Hero;