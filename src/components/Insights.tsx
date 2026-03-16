import React from 'react';
import BackgroundSection from './BackgroundSection';

interface InsightCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ category, title, excerpt, date }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg group hover:shadow-xl border border-transparent hover:border-[var(--color-brand-accent)] transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-center mb-4">
      <span className="text-xs font-bold font-montserrat tracking-wider uppercase py-1 px-3 bg-[#F8F9FA] text-[var(--color-brand-accent)] rounded-full">
        {category}
      </span>
      <span className="text-xs text-gray-400 font-sourcesanspro">{date}</span>
    </div>
    <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 mb-6 flex-grow font-sourcesanspro leading-relaxed">
      {excerpt}
    </p>
    <button className="text-[var(--color-brand-accent)] font-bold font-montserrat text-sm flex items-center group/btn">
      Read Article
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
);

const Insights: React.FC = () => {
  const insightsData = [
    {
      category: "AI Governance",
      date: "Oct 2025",
      title: "The Heritage Leader’s Guide to the AI Act",
      excerpt: "A practical breakdown of how the latest AI regulations impact cultural organisations and what you need to do to stay compliant."
    },
    {
      category: "Digital Strategy",
      date: "Sep 2025",
      title: "3 Ways AI is Changing Archive Management",
      excerpt: "From automated metadata generation to pattern recognition, explore how AI is unlocking value in historical collections."
    },
    {
      category: "Case Study",
      date: "Aug 2025",
      title: "Clarity in Complexity: A Digital Audit Story",
      excerpt: "How a mid-sized museum identified and resolved data silos to create a unified digital experience for their visitors."
    }
  ];

  return (
    <BackgroundSection 
      id="insights" 
      className="py-20"
      isFixed={false}
    >
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat text-white">Knowledge Hub</h2>
          <p className="text-gray-400 mt-2 font-sourcesanspro">Expert insights at the intersection of heritage and technology.</p>
          <div className="w-24 h-1 bg-[var(--color-brand-accent)] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] font-bold font-montserrat py-2 px-8 rounded-full hover:bg-[var(--color-brand-accent)] hover:text-white transition-all duration-300">
            View All Insights
          </button>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default Insights;
