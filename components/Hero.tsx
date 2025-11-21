import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="py-24 md:py-32">
      <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1] font-black tracking-tighter uppercase" style={{ wordSpacing: '0.20em' }}>
        Using <span className="text-accent">Data</span> and <span className="text-accent">AI</span> to drive your business forward.
      </h1>
    </div>
  );
};