import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArrowUpRight } from 'lucide-react';

const SERVICES_DATA = {
  ai: {
    id: '01',
    title: 'AI Development',
    description: 'We design and build LLM-powered solutions tailored to your business. From AI strategy and governance to custom GenAI tools, we help you harness the power of large language models responsibly and effectively.',
  },
  data: {
    id: '02',
    title: 'Data Engineering',
    description: 'We build robust data foundations - pipelines, warehouses, and reporting infrastructure - that support analytics, machine learning, and operational insight at scale.',
  },
  strategy: {
    id: '03',
    title: 'Strategy and Roadmaps',
    description: "We partner with your business and executive teams to develop a data & AI strategy, roadmap and implementation plan to enable your technology vision.",
  }
};

type ServiceKey = keyof typeof SERVICES_DATA;

const App: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleServiceInteraction = (key: ServiceKey, isHover: boolean = false) => {
    if (isTouchDevice && isHover) return; // Ignore hover events on touch devices

    if (isTouchDevice) {
      // On touch devices, toggle
      setActiveService(activeService === key ? null : key);
    } else {
      // On desktop, just set
      setActiveService(key);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <Navbar />
        <Hero />

        {/* Info Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-4 border-black mb-24">
          {/* Block 1: Headquarters */}
          <div className="py-8 md:py-12 pr-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-gray-400">Headquarters</h3>
            <p className="text-xl md:text-2xl font-bold">Brooklyn, NY</p>
          </div>

          {/* Block 2: Speciality */}
          <div className="py-8 md:py-12 md:px-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-gray-400">Speciality</h3>
            <p className="text-xl md:text-2xl font-bold">GenAI, Data Engineering, Strategy Consulting</p>
          </div>

          {/* Block 3: Leadership */}
          <div className="py-8 md:py-12 md:pl-8">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-gray-400">Leadership</h3>
            <a 
              href="https://www.linkedin.com/in/ilanman/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl md:text-2xl font-bold hover:text-accent transition-colors inline-flex items-center gap-1 group"
            >
              Ilan Man
              <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 pb-32">
        {/* Services Section - Full Width Accordion Stack */}
        <div className="border-t-4 border-black">
          {(Object.keys(SERVICES_DATA) as ServiceKey[]).map((key) => {
            const service = SERVICES_DATA[key];
            const isActive = activeService === key;

            return (
              <div
                key={key}
                onMouseEnter={() => handleServiceInteraction(key, true)}
                onMouseLeave={() => !isTouchDevice && setActiveService(null)}
                onClick={() => handleServiceInteraction(key)}
                className="group relative border-b-4 border-black cursor-pointer md:cursor-default transition-colors duration-300"
              >
                {/* Header Row */}
                <div className="flex items-baseline py-10 md:py-16 w-full relative z-10">
                  <span className="text-lg md:text-3xl font-bold mr-4 md:mr-16 group-hover:text-accent transition-colors duration-300">
                    {service.id}
                  </span>

                  {/* Solid Black Text - Hovers to Accent */}
                  <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h2>

                  <div className="ml-auto transition-transform duration-500 group-hover:rotate-45 group-hover:text-accent flex-shrink-0">
                    <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={3} />
                  </div>
                </div>

                {/* Accordion Content (Text Only) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'max-h-80 opacity-100 mb-16' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Spacer to align text with title approx */}
                    <div className="hidden md:block md:col-span-2"></div>
                    
                    <div className="md:col-span-8">
                      <p className="text-xl md:text-3xl font-medium leading-tight text-black">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 flex justify-center">
          <a 
            href="mailto:hello@emergentdata.co"
            className="inline-block font-black uppercase text-2xl md:text-4xl tracking-widest bg-black text-white px-12 py-8 hover:bg-accent hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(128,128,128,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px]"
          >
            Let's build together
          </a>
        </div>

      </div>
    </div>
  );
};

export default App;