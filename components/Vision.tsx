import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from '../types';

const milestones: Milestone[] = [
  { year: "2024–2025", title: "Enterprise pilots & MVP deployments" },
  { year: "2025–2026", title: "Institutional partners, expansion into EU & US" },
  { year: "2026+", title: "Infrastructure scaling & global automation network" },
];

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-[#686a6c] dark:bg-[#686a6c] overflow-hidden border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our vision</h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              SEVENOIR is building infrastructure where digital identity extends into physical objects.
              We design systems that scale from a single airport to global networks, focusing on precision, automation, and long-term operational reliability.
            </p>
          </div>
          {/* Abstract graphic placeholder */}
          <div className="hidden lg:flex justify-center items-center">
             <div className="w-64 h-64 border border-accent/20 rounded-full flex items-center justify-center relative">
                <div className="absolute w-48 h-48 border border-accent/40 rounded-full animate-pulse" />
                <div className="w-32 h-32 bg-primary/5 dark:bg-primary/20 rounded-full backdrop-blur-sm" />
             </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="relative pt-12">
          {/* Mobile Vertical Line / Desktop Horizontal Line */}
          <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 md:hidden"></div>
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-slate-200 dark:bg-white/10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16 md:pl-0 md:pt-12 text-left md:text-center group"
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 md:left-1/2 md:-top-2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#686a6c] dark:bg-[#686a6c] border-4 border-accent z-10 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{item.year}</h3>
                <p className="text-gray-100 font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};