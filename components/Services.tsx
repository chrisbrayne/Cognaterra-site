import React from 'react';

interface ServiceCardProps {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const meshNetworkPattern = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJwYXR0ZXJuR3JhZGllbnQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0icmdiYSgzMiwyMDEsMTUxLDAuMDEpIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiYSgxMywxMTAsMjUzLDAuMDA1KSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNwYXR0ZXJuR3JhZGllbnQpIiAvPjxsaW5lIHgxPSIwIiB5MT0iMjAiIHgyPSIyNTAiIHkyPSI3MCIgc3Ryb2tlPSJyZ2JhKDE0NCwyMzgsMTQ0LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNyIvPjxsaW5lIHgxPSIwIiB5MT0iNzAiIHgyPSIyNTAiIHkyPSIyMCIgc3Ryb2tlPSJyZ2JhKDE0NCwyMzgsMTQ0LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNyIvPjxsaW5lIHgxPSIwIiB5MT0iMTcwIiB4Mj0iMjUwIiB5Mj0iMTIwIiBzdHJva2U9InJnYmEoMzIsMTc4LDE3MCwwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjciLz48bGluZSB4MT0iMC4wIiB5MT0iMTIwIiB4Mj0iMjUwIiB5Mj0iMTcwIiBzdHJva2U9InJnYmEoMzIsMTc4LDE3MCwwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjciLz48bGluZSB4MT0iMjAiIHkxPSIwIiB4Mj0iNzAiIHkyPSIyNTAiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTUpIiBzdHJva2Utd2lkdGg9IjAuNiIvPjxsaW5lIHgxPSI3MCIgeTE9IjAiIHgyPSIyMCIgeTI9IjI1MCIgc3Ryb2tlPSJyZ2JhKDcyLDIwOSwyMDQsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC42Ii8+PGxpbmUgeDE9IjEyMCIgeTE9IjAiIHgyPSIxNzAiIHkyPSIyNTAiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTgpIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxsaW5lIHgxPSIxNzAiIHkxPSIwIiB4Mj0iMTIwIiB5Mj0iMjUwIiBzdHJva2U9InJnYmEoNzIsMjA5LDIwNCwwLjE4KSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48bGluZSB4MT0iNTAiIHkxPSIxMDAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSJyZ2JhKDcyLDIwOSwyMDQsMC4xOCkiIHN0cm9rZS13aWR0aD0iMC44Ii8+PGxpbmUgeDE9IjE1MCIgeTE9IjEwMCIgeDI9IjIwMCIgeTI9IjUwIiBzdHJva2U9InJnYmEoNzIsMjA5LDIwNCwwLjE4KSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48bGluZSB4MT0iNzUiIHkxPSIyMDAiIHgyPSIxMjUiIHkyPSIxNTUiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTgpIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxsaW5lIHgxPSIyMjUiIHkxPSIyNTAiIHgyPSIxNzUiIHkyPSIyMDUiIHN0cm9rZT0icmdiYSg3MiwyMDksMjA0LDAuMTgpIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjQ1IiByPSIxLjMiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xMjUpIiAvPjxjaXJjbGUgY3g9IjIzMCIgY3k9IjkwIiByPSIxLjciIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNzUpIiAvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE0MCIgcj0iMS40IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTNpIiAvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTk1IiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMiIpIiAvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIxMCIgcj0iMS42IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIiAvPjwvYXdlZ2E+';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, body, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg group hover:shadow-xl hover:border-brand-accent border border-transparent transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-brand-accent mb-4 text-5xl group-hover:text-[#0D6EFD] group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-montserrat mb-2">{title}</h3>
    <p className="text-gray-600">{body}</p>
  </div>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      title: "Digital Transformation",
      body: "From strategy to implementation, we guide your organisation through a holistic digital evolution.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "AI Strategy & Compliance",
      body: "We help you leverage AI ethically and effectively, establishing robust governance and compliance frameworks.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3M9 6H6m3 12H6m3-6h.01M12 12h.01M15 12h.01M12 9h.01M15 9h.01" /></svg>
    },
    {
      title: "Programme Intelligence",
      body: "Using data-driven insights to enhance decision-making and maximise the impact of your projects.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    {
      title: "Nature & Environmental Digital",
      body: "Applying digital solutions to the unique challenges of conserving and managing natural heritage.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.761 14h8.478M5.282 8.036l.243.243a2 2 0 010 2.828l-1.03 1.03a2 2 0 01-2.828 0l-.243-.243a2 2 0 010-2.828l1.03-1.03a2 2 0 012.828 0zM18.718 8.036l.243.243a2 2 0 000 2.828l-1.03 1.03a2 2 0 00-2.828 0l-.243-.243a2 2 0 000-2.828l1.03-1.03a2 2 0 002.828 0z" /></svg>
    }
  ];

  return (
    <section 
      id="services" 
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat text-white">Our Services</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} body={service.body} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;