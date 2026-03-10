import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Fraud Prevention",
    points: [
      "Records cannot be retroactively altered",
      "Airlines cannot falsify mishandling times",
      "Insurance claims have cryptographic proof"
    ]
  },
  {
    title: "GDPR Compliance",
    points: [
      "On-chain hashing ensures data integrity",
      "Off-chain storage for private identity data",
      "Privacy-by-design for every handoff"
    ]
  },
  {
    title: "Interoperability",
    points: [
      "Decentralized trust between 500+ carriers",
      "No single point of failure in data logs",
      "Unified standard for global handoffs"
    ]
  }
];

export const WhyBlockchain: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/10 bg-[#686a6c] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Panel Container */}
        <div className="bg-[#575b5f] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 relative shadow-[0_0_60px_rgba(255,255,255,0.03)] overflow-hidden">
            
            {/* Header: Icon + Title */}
            <div className="flex flex-col items-center mb-16 relative z-10">
                 <div className="mb-8 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <ShieldCheck className="w-8 h-8 text-white/90" strokeWidth={1.5} />
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest text-center">
                   Immutable Audit Trail
                 </h2>
            </div>

            {/* Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 relative z-10">
                {features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex flex-col h-full"
                    >
                        <div className="flex justify-center mb-4">
                            <span className="px-5 py-1.5 rounded-full border border-white/20 bg-[#686a6c] text-xs md:text-sm font-mono text-white uppercase tracking-widest shadow-lg z-20">
                                {feature.title}
                            </span>
                        </div>

                        <div className="flex-1 bg-[#797d81] border border-white/10 rounded-2xl p-8 pt-10 hover:border-white/30 transition-colors duration-300 relative group">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                            
                            <ul className="space-y-4 relative z-10">
                                {feature.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start text-white text-sm leading-relaxed">
                                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-1.5 mr-3 shrink-0"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto relative z-10"
            >
                <div className="bg-[#686a6c] border border-white/10 rounded-full py-4 px-6 md:px-12 text-center shadow-lg">
                    <p className="text-white font-light text-sm md:text-base leading-relaxed">
                        By using a <span className="text-white font-medium">cryptographically-verified log</span>, Sevenoir ensures that insurance claims and carrier handoffs are backed by <span className="text-white font-medium">unalterable operational data.</span>
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};