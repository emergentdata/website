import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-8 border-b-4 border-black">
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src="/emergent_data_logo_mark.png"
          alt="Emergent Data Logo"
          className="h-8 md:h-10 w-auto"
        />
        <div className="text-xl md:text-2xl font-black tracking-tighter uppercase">
          Emergent Data Strategies
        </div>
      </div>
      <a 
        href="mailto:hello@emergentdata.co"
        className="font-bold uppercase text-sm md:text-base tracking-widest cursor-pointer bg-black text-white px-6 py-3 hover:bg-accent hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(128,128,128,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px]"
      >
        Book a call
      </a>
    </nav>
  );
};