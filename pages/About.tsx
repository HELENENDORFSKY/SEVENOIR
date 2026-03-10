import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { About as FoundersSection } from '../components/About';

export default function About() {
  // Exact button styles from Home.tsx
  const primaryBtnClass = "w-full sm:w-auto px-5 py-3.5 md:px-8 md:py-4 bg-white text-black text-sm md:text-lg font-semibold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[160px] md:min-w-[200px] rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] whitespace-normal text-center";

  const features = [
    {
      title: "Durable Smart Tags",
      desc: "NFC/QR identity layer designed for real-world conditions."
    },
    {
      title: "Verified Checkpoints",
      desc: "Trusted handoffs, status synchronization, and auditable events."
    },
    {
      title: "Automated Recovery",
      desc: "Owner contact and recovery workflows built for scale."
    }
  ];

  return (
    <div className="min-h-screen">
       {/* Hero */}
       <section className="pt-32 pb-20 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="max-w-4xl"
          >
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
                About SEVENOIR
             </h1>
             
             {/* Pills */}
             <div className="flex flex-wrap gap-3 mb-8">
                {["Smart Identity Tag", "Recovery Network", "Enterprise-ready"].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm text-gray-200 font-medium tracking-wide">
                    {tag}
                  </span>
                ))}
             </div>

             <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed font-light max-w-3xl">
               We build smart identity tags and a recovery network that reconnects owners with lost items — fast, secure, and enterprise-ready.
             </p>
          </motion.div>
       </section>

       {/* Mission */}
       <section className="py-24 border-t border-white/10 bg-white/[0.02]">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
                <span className="text-sm font-mono text-white uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full mb-8 inline-block">Mission</span>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight max-w-5xl">
                  Make identity and recovery <span className="text-gray-100">effortless for people</span> and <span className="text-gray-100">scalable for enterprises</span> — with durable tags, verifiable checkpoints, and automated recovery flows.
                </h2>
            </motion.div>
         </div>
       </section>

       {/* What we build */}
       <section className="py-24 border-t border-white/10 bg-[#686a6c]">
          <div className="max-w-7xl mx-auto px-6">
             <div className="mb-12">
               <h2 className="text-3xl font-bold text-white mb-4">What we build</h2>
               <p className="text-white">Core infrastructure components.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-[#575b5f] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors flex flex-col h-full"
                  >
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
             </div>
          </div>
       </section>

       {/* Founders / Team Section */}
       <FoundersSection />

       {/* Bottom CTA */}
       <section className="py-24 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let’s talk enterprise integration.</h2>
               <div className="flex justify-center">
                  <Link to="/contact" className="w-full sm:w-auto">
                     <button className={primaryBtnClass}>
                        Contact us
                     </button>
                  </Link>
               </div>
             </motion.div>
          </div>
       </section>
    </div>
  );
}