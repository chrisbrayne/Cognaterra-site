import React from 'react';

const meshNetworkPattern = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI1MCIgeTE9IjAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iNTAiIHgyPSI1MCIgeTI9IjEwMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI1MCIgeTE9IjEwMCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiIHN0cm9rZS13aWR0aGg9IjAuNSIvPjxsaW5lIHgxPSI1MCIgeTE9IjAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxjaXJjbGUgY3g9IjUwIiBjY3k9IjAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjcuIi8+PGNpcmNsZSBjeD0iMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC43KSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC43KSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC43KSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTU1LDI1NSwyNTUsMC43KSIvPjwvc3ZnPg==';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#0D1117', // Dark base color
        backgroundImage: `radial-gradient(at 0% 100%, rgba(32, 201, 151, 0.1) 0%, transparent 70%), 
                          radial-gradient(at 100% 0%, rgba(13, 110, 253, 0.08) 0%, transparent 70%), 
                          url('${meshNetworkPattern}')`,
        backgroundSize: 'cover, cover, 100px 100px', // Gradients cover, pattern tiles
        backgroundRepeat: 'no-repeat, no-repeat, repeat',
        backgroundPosition: 'left bottom, right top, 0 0', // Positioning for gradients and pattern
      }}
    >
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