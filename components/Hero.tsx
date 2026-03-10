import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#686a6c]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">digital-trust systems</span> for the physical world.
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A product-first company developing enterprise lost-and-found automation, smart QR/NFC identity systems, and logistics-focused verification infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} className="group !bg-white !text-black hover:!bg-gray-100">
                Talk to us 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Download one-pager 
                <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full bg-[#575b5f] backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/20 overflow-hidden flex items-center justify-center border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              <span className="text-white/40 font-medium tracking-widest text-lg uppercase group-hover:scale-105 transition-transform duration-500">
                Product / Team Photo
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};