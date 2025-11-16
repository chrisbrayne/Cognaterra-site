import React from 'react';

const meshNetworkPattern = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI1MCIgeTE9IjAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iNTAiIHgyPSI1MCIgeTI9IjEwMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI1MCIgeTE9IjEwMCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjUwIiB5MT0iMCIgeDI9IjUwIiB5Mj0iMTAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSI1MCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC43KSIvPjxjaXJjbGUgY3g9IjAiIGN5PSI1MCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNykiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI1MCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNykiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNykiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC43KSIvPjwvc3ZnPg==';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundColor: '#0D1117', // Dark base color
        backgroundImage: `radial-gradient(at 0% 100%, rgba(32, 201, 151, 0.1) 0%, transparent 70%), 
                          radial-gradient(at 100% 0%, rgba(13, 110, 253, 0.08) 0%, transparent 70%), 
                          url('${meshNetworkPattern}')`,
        backgroundSize: 'cover, cover, 100px 100px', // Gradients cover, pattern tiles
        backgroundRepeat: 'no-repeat, no-repeat, repeat',
        backgroundPosition: 'left bottom, right top, 0 0', // Positioning for gradients and pattern
        backgroundAttachment: 'fixed' // Parallax for the entire background including the mesh
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