import React from 'react';
import { Stat } from '../types';
import { CheckCircle2 } from 'lucide-react';

const stats: Stat[] = [
  { label: "Current Focus", value: "EU, US, Asia, CIS" },
  { label: "Stage", value: "Pre-seed / Seed" },
  { label: "Products", value: "1 (Enterprise)" },
];

const points = [
  "Looking for smart capital to scale enterprise deployments.",
  "Open to strategic pilots with airlines, airports, and postal operators.",
  "Detailed business plans, market sizing models, and technical documentation available under NDA."
];

export const Investors: React.FC = () => {
  return (
    <section id="investors" className="py-24 bg-[#686a6c] dark:bg-[#686a6c] text-white relative overflow-hidden">
      {/* Texture/Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide text-primary dark:text-black bg-white rounded-full uppercase">
              Partner with us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">For investors & partners</h2>
            
            <ul className="space-y-6">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100 text-lg font-light leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-b border-white/10 last:border-0 pb-6 last:pb-0">
                  <p className="text-gray-200 text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};