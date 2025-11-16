import React from 'react';

const meshNetworkPattern = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJwYXR0ZXJuR3JhZGllbnQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0icmdiYSgzMiwyMDEsMTUxLDAuMDEpIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiYSgxMywxMTAsMjUzLDAuMDA1KSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNwYXR0ZXJuR3JhZGllbnQpIiAvPjxsaW5lIHgxPSIwIiB5MT0iMjAiIHgyPSIyNTAiIHkyPSI3MCIgc3Ryb2tlPSJyZ2JhKDE0NCwyMzgsMTQ0LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNyIvPjxsaW5lIHgxPSIwIiB5MT0iNzAiIHgyPSIyNTAiIHkyPSIyMCIgc3Ryb2tlPSJyZ2JhKDE0NCwyMzgsMTQ0LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNyIvPjxsaW5lIHgxPSIwIiB5MT0iMTcwIiB4Mj0iMjUwIiB5Mj0iMTIwIiBzdHJva2U9InJnYmEoMzIsMTc4LDE3MCwwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjciLz48bGluZSB4MT0iMC4wIiB5MT0iMTIwIiB4Mj0iMjUwIiB5Mj0iMTcwIiBzdHJva2U9InJnYmEoMzIsMTc4LDE3MCwwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjciLz48bGluZSB4MT0iMjAiIHkxPSIwIiB4Mj0iNzAiIHkyPSIyNTAiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNiIvPjxsaW5lIHgxPSI3MCIgeTE9IjAiIHgyPSIyMCIgeTI9IjI1MCIgc3Ryb2tlPSJyZ2JhKDcyLDIwOSwyMDQsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC42Ii8+PGxpbmUgeDE9IjEyMCIgeTE9IjAiIHgyPSIxNzAiIHkyPSIyNTAiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTgpIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxsaW5lIHgxPSIxNzAiIHkxPSIwIiB4Mj0iMTIwIiB5Mj0iMjUwIiBzdHJva2U9InJnYmEoNzIsMjA5LDIwNCwwLjE4KSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48bGluZSB4MT0iNTAiIHkxPSIxMDAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSJyZ2JhKDcyLDIwOSwyMDQsMC4xOCkiIHN0cm9rZS13aWR0aD0iMC44Ii8+PGxpbmUgeDE9IjE1MCIgeTE9IjEwMCIgeDI9IjIwMCIgeTI9IjUwIiBzdHJva2U9InJnYmEoNzIsMjA5LDIwNCwwLjE4KSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48bGluZSB4MT0iNzUiIHkxPSIyMDAiIHgyPSIxMjUiIHkyPSIxNTUiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTgpIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxsaW5lIHgxPSIyMjUiIHkxPSIyNTAiIHgyPSIxNzUiIHkyPSIyMDUiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTgpIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjQ1IiByPSIxLjMiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xMjUpIiAvPjxjaXJjbGUgY3g9IjIzMCIgY3k9IjkwIiByPSIxLjciIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNzUpIiAvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE0MCIgcj0iMS40IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTNpIiAvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTk1IiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMiIpIiAvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIxMCIgcj0iMS42IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiAvPjwvYXdlZ2E+';

const Introduction: React.FC = () => {
  return (
    <section 
      id="introduction" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#0D1117', // Dark base color
        backgroundImage: `radial-gradient(at 0% 100%, rgba(32, 201, 151, 0.1) 0%, transparent 70%), 
                          radial-gradient(at 100% 0%, rgba(13, 110, 253, 0.08) 0%, transparent 70%), 
                          url('${meshNetworkPattern}')`,
        backgroundSize: 'cover, cover, 250px 250px', // Gradients cover, pattern tiles
        backgroundRepeat: 'no-repeat, no-repeat, repeat',
        backgroundPosition: 'left bottom, right top, 0 0', // Positioning for gradients and pattern
      }}
    >
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