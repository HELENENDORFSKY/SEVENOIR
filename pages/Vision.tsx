import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { CheckCircle2 } from 'lucide-react';
import { MEDIA } from '../content/media';

const roadmap = [
  { phase: "Phase 1", year: "2024", title: "Technical R&D (Dual-Interface Chips)" },
  { phase: "Phase 2", year: "2024–2025", title: "Lufthansa Innovation Hub Pilot" },
  { phase: "Phase 3", year: "2025", title: "SITA WorldTracer API Integration" },
  { phase: "Phase 4", year: "2025–2026", title: "Regional Airline Network Rollout" },
  { phase: "Phase 5", year: "2026", title: "Automated Insurance Handoffs" },
  { phase: "Phase 6", year: "2026+", title: "Global Logistics Scaling" },
  { phase: "Phase 7", year: "Future", title: "Cross-Industry Identity Standard" },
];

const milestones = [
  "IATA 753 Hybrid Tag Pilot",
  "SITA WorldTracer Partnership",
  "Integration-ready API suite",
  "Insurance Fraud Prevention Proof",
  "GDPR-compliant identity engine",
  "EU Aviation Safety Board Audit"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const pulseEase: [number, number, number, number] = [0.25, 1, 0.5, 1]; 
const pulseDuration = 0.25;

export default function Vision() {
  return (
    <div className="min-h-screen">
      
      <section className="pt-24 pb-32 max-w-7xl mx-auto px-6">
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 max-w-4xl mx-auto"
        >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight uppercase">Scale that outlives applications.</h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                Sevenoir is building foundational identity infrastructure for the aviation and logistics industry. We focus on industrial durability, precision verifiability, and native API interoperability.
            </p>
        </motion.div>

        {/* Roadmap */}
        <div className="mb-32">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Strategic Roadmap</h2>
                <div className="h-px flex-1 bg-white/10 ml-8 hidden md:block"></div>
            </div>

            <div className="overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0">
                <div className="min-w-[1000px] relative">
                    <div className="absolute top-[27px] left-0 right-0 h-px bg-white/10 pointer-events-none"></div>
                    
                    <motion.div 
                        className="grid grid-cols-7 gap-4 relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {roadmap.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={itemVariants}
                                className="relative flex flex-col items-start cursor-default group"
                            >
                                <div className="relative mb-6 w-14 h-14 flex items-center justify-center">
                                    <motion.div 
                                        className="absolute rounded-full bg-[#686a6c] border z-10 box-border"
                                        style={{ width: '28px', height: '28px' }}
                                        variants={{
                                            rest: { scale: 1, borderColor: "rgba(255,255,255,0.15)" },
                                            hover: { scale: 1.5, borderColor: "rgba(255,255,255,1)" }
                                        }}
                                        transition={{ duration: pulseDuration, ease: pulseEase }}
                                    />
                                    <div className="relative w-2 h-2 bg-white rounded-full z-20 pointer-events-none" />
                                </div>
                                
                                <div className="pr-4 relative">
                                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1 text-white">
                                        {item.phase}
                                    </div>
                                    <div className="text-sm font-bold mb-2 text-white">
                                        {item.year}
                                    </div>
                                    <div className="text-xs font-light leading-snug text-white">
                                        {item.title}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>

        {/* Milestones */}
        <div className="mb-32">
             <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Operational Benchmarks</h2>
                <p className="text-white">Key performance indicators for our airline partners.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {milestones.map((milestone, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white/[0.03] border border-white/10 p-6 rounded-xl flex items-start hover:bg-white/[0.05] transition-colors"
                    >
                        <CheckCircle2 className="w-5 h-5 text-white/20 mr-4 mt-0.5 shrink-0" />
                        <span className="text-white font-medium text-base">{milestone}</span>
                    </motion.div>
                ))}
             </div>
        </div>

        <div className="max-w-5xl mx-auto">
            <PlaceholderFrame label="OPERATIONAL VISUAL — SITA WorldTracer Environment" aspect="video" src={MEDIA.vision.mainVisual} fit="cover" />
        </div>

      </section>
    </div>
  );
}