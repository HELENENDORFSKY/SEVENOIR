import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { MEDIA } from '../content/media';

const FUTURE_IMAGES = MEDIA.future;

interface FutureMediaSlotProps {
  variant: 'phone' | 'wide';
  src?: string;
  label: string;
}

const FutureMediaSlot: React.FC<FutureMediaSlotProps> = ({ variant, src, label }) => {
  const aspectClass = variant === 'phone' ? 'aspect-[9/16]' : 'aspect-[16/10]';
  
  return (
    <div className={`w-full ${aspectClass} relative rounded-2xl overflow-hidden bg-transparent`}>
      {src ? (
        <img 
          src={src} 
          alt={label} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6 border border-white/5 bg-white/[0.02] rounded-2xl">
          <div className="text-white/10 font-mono text-[10px] uppercase tracking-[0.3em] text-center">
            {label} Prototype
          </div>
        </div>
      )}
    </div>
  );
};

export default function Future() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center md:text-left border-b border-white/10 pb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">The Recovery <br/><span className="text-gray-500">Ecosystem Scaling.</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-start">
            
            {/* Card 1: Consumer App */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#575b5f] border border-white/10 p-2 rounded-3xl flex flex-col group hover:border-white/20 transition-all duration-300 shadow-2xl"
            >
                <div className="p-8 pb-4">
                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Consumer App</h2>
                    <p className="text-gray-100 text-base leading-relaxed font-light">A universal recovery dashboard for passengers.</p>
                </div>
                <div className="mt-4 px-4 pb-4">
                    <FutureMediaSlot 
                      variant="phone" 
                      src={FUTURE_IMAGES.consumerApp} 
                      label="Passenger App" 
                    />
                </div>
            </motion.div>

            {/* Card 2: Enterprise Marketplace */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#575b5f] border border-white/10 p-2 rounded-3xl flex flex-col group hover:border-white/20 transition-all duration-300"
            >
                <div className="p-8 pb-4">
                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Operator Hub</h2>
                    <p className="text-gray-100 text-base leading-relaxed font-light">Inter-airline handoff and liability management.</p>
                </div>
                <div className="mt-4 px-4 pb-4">
                    <FutureMediaSlot 
                      variant="wide" 
                      src={FUTURE_IMAGES.holdToUseToken} 
                      label="Operator Console" 
                    />
                </div>
            </motion.div>

            {/* Card 3: Logistics API Scaling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#575b5f] border border-white/10 p-2 rounded-3xl flex flex-col group hover:border-white/20 transition-all duration-300"
            >
                <div className="p-8 pb-4">
                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Global API Layer</h2>
                    <p className="text-gray-100 text-base leading-relaxed font-light">Connecting courier, airline, and postal databases.</p>
                </div>
                <div className="mt-4 px-4 pb-4">
                    <FutureMediaSlot 
                      variant="wide" 
                      src={FUTURE_IMAGES.sevenoirL1Chain} 
                      label="Global API Dashboard" 
                    />
                </div>
            </motion.div>
        </div>

        <div className="w-full pt-12 border-t border-white/5">
            <h3 className="text-white text-sm font-mono mb-8 uppercase tracking-[0.4em] opacity-40">System Interoperability Map</h3>
            <PlaceholderFrame 
              label="TECHNICAL MAP — Global Carrier Mesh Network" 
              aspect="video" 
              src={FUTURE_IMAGES.systemArchitecture} 
              fit="cover" 
            />
        </div>

      </div>
    </div>
  );
}