
import React from 'react';

interface CognaterraLogoProps {
  className?: string;
}

const CognaterraLogo: React.FC<CognaterraLogoProps> = ({ className }) => {
  return (
    <img 
      src="/logo.svg" 
      alt="Cognaterra Logo" 
      className={className} 
    />
  );
};

export default CognaterraLogo;
