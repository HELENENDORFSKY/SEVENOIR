import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ShieldCheck, Users, Globe, Database, Cpu } from 'lucide-react';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { UseCases } from '../components/UseCases';
import { MEDIA } from '../content/media';

export default function Home() {
  const [viewMode, setViewMode] = useState<'enterprise' | 'consumer'>('enterprise');

  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-32 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Toggle Switch */}
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 mb-10">
            <button 
              onClick={() => setViewMode('enterprise')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === 'enterprise' ? 'bg-white text-black shadow-lg' : 'text-gray-200 hover:text-white'}`}
            >
              <BarChart3 size={14} /> B2B / Enterprise
            </button>
            <button 
              onClick={() => setViewMode('consumer')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === 'consumer' ? 'bg-white text-black shadow-lg' : 'text-gray-200 hover:text-white'}`}
            >
              <Users size={14} /> Passenger
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.05]">
                {viewMode === 'enterprise' ? (
                  <>The Global Identity Layer for <span className="text-gray-400 italic">Physical Assets.</span></>
                ) : (
                  <>Verified security for <span className="text-gray-400 italic">everything you own.</span></>
                )}
              </h1>

              <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-light">
                {viewMode === 'enterprise' ? (
                  "Closing the $5.9B information gap between airlines and passengers. A decentralized infrastructure powered by hybrid UHF/NFC technology and IATA 753 compliance."
                ) : (
                  "Your property, verified globally. Automated recovery that connects with airline systems to find your luggage before you even realize it's gone."
                )}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link to="/products" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 py-3.5 md:px-8 md:py-4 bg-white text-black text-sm md:text-lg font-semibold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[160px] md:min-w-[200px] rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Technical Specifications
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 shrink-0" />
                </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 py-3.5 md:px-8 md:py-4 bg-transparent border border-white/20 text-white text-sm md:text-lg font-medium tracking-wide hover:bg-white/5 hover:border-white/40 transition-all min-w-[160px] md:min-w-[200px] rounded-xl md:rounded-2xl">
                    Partner With Us
                </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* THE CRISIS SECTION */}
      <section className="py-24 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               The $5 Billion Information Blindness. [cite: 16]
             </h2>
             
             <p className="text-lg text-gray-300 mb-8 leading-relaxed">
               In 2024, the aviation industry mishandled 33.4 million bags. [cite: 17] While internal UHF RFID tracks assets for carriers, passengers remain disconnected from their property's custody. Sevenoir bridges this gap with hybrid hardware and an API-first audit trail. [cite: 18]
             </p>

             <div className="space-y-6">
                {[
                  "33.4M bags mishandled annually (SITA Data) [cite: 19]",
                  "$150+ Average operational cost per incident [cite: 20]",
                  "Critical IATA 753 compliance gaps in regional networks [cite: 21]",
                  "Lack of cross-industry identity interoperability [cite: 23]"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="h-px w-6 bg-red-500/50 mt-3 mr-4"></div>
                    <span className="text-white font-light text-lg">{item}</span>
                  </div>
                ))}
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
             <PlaceholderFrame 
                label="SYSTEM ARCHITECTURE — IATA 753 & SITA Sync" 
                aspect="square" 
                src={MEDIA.home.heroProblemVisual} 
                fit="cover"
             />
          </motion.div>

        </div>
      </section>

      {/* THREE PART SOLUTION */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Infrastructure-as-a-Service [cite: 33]</h2>
             <p className="text-gray-400">High-precision hardware meeting automated recovery logic. [cite: 34]</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Hybrid Tag */}
              <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden">
                 <div className="p-8 pb-0">
                    <Cpu className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">1. Hybrid Identity Tag [cite: 41]</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Hardware (EM4425) [cite: 42]</p>
                    <ul className="space-y-2 mb-8 text-gray-300 text-sm">
                       <li>• Dual UHF RFID (IATA 753) + NFC [cite: 43]</li>
                       <li>• Shared-memory chip architecture [cite: 45]</li>
                       <li>• Battery-free permanent identity [cite: 46]</li>
                       <li>• Industrial-grade durability [cite: 44]</li>
                    </ul>
                 </div>
                 <div className="mt-auto px-4 pb-0">
                    <PlaceholderFrame 
                      noFrame 
                      label="HARDWARE — EM4425 Dual-Band" 
                      aspect="portrait" 
                      src={MEDIA.products.smartIdentityTag} 
                      fit="contain" 
                    />
                 </div>
              </div>

              {/* Card 2: Verification Engine */}
              <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden">
                 <div className="p-8 pb-4">
                    <Database className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">2. Verification Engine [cite: 47]</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">API & Software [cite: 48]</p>
                    <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                       <li>• SITA WorldTracer API Integration [cite: 49]</li>
                       <li>• Automated Bag Journey mapping [cite: 52]</li>
                       <li>• Cryptographic custody proofs [cite: 54]</li>
                       <li>• Anomaly detection & triage [cite: 56]</li>
                    </ul>
                 </div>
                 <div className="mt-4 px-4 pb-4">
                    <PlaceholderFrame 
                      noFrame 
                      label="SOFTWARE — Verification Audit Trail" 
                      aspect="video" 
                      src={MEDIA.products.verificationEngine} 
                      fit="cover" 
                    />
                 </div>
              </div>

              {/* Card 3: Automated Recovery */}
              <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden">
                 <div className="p-8 pb-4">
                    <Globe className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">3. Recovery Operations [cite: 50]</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Automation & ROI [cite: 57]</p>
                    <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                       <li>• Automated insurance claim logic [cite: 51]</li>
                       <li>• Instant passenger notifications [cite: 53]</li>
                       <li>• Global carrier handoff protocol [cite: 55]</li>
                       <li>• ROI-driven operational scaling [cite: 57]</li>
                    </ul>
                 </div>
                 <div className="mt-4 px-4 pb-4">
                    <PlaceholderFrame 
                      noFrame 
                      label="WORKFLOW — Automated Claims" 
                      aspect="video" 
                      src={MEDIA.products.automatedRecoveryWorkflow} 
                      fit="cover" 
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIP SECTION */}
      <section className="py-24 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-12">Technical Foundation</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
               {/* Здесь можно добавить логотипы, но текстом тоже хорошо */}
               <div className="text-center">
                 <p className="text-white font-bold text-xl">SAFAROFF Agency</p>
                 <p className="text-xs text-gray-500">Digital Integration since 2004</p>
               </div>
               <div className="h-8 w-px bg-white/10 hidden md:block"></div>
               <div className="text-center">
                 <p className="text-white font-bold text-xl">Stuart Prestedge</p>
                 <p className="text-xs text-gray-500">Strategic Advisor</p>
               </div>
               <div className="h-8 w-px bg-white/10 hidden md:block"></div>
               <div className="text-center">
                 <p className="text-white font-bold text-xl">Munich Business School</p>
                 <p className="text-xs text-gray-500">Academic Hub</p>
               </div>
            </div>
        </div>
      </section>

      {/* OPERATIONAL LOGIC */}
      <section className="py-24 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">Operational Logic [cite: 75]</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", label: "IATA Registration [cite: 67]" },
                { step: "02", label: "Checkpoint Handoff [cite: 76]" },
                { step: "03", label: "SITA Synchronization [cite: 79]" },
                { step: "04", label: "Verified Recovery [cite: 80]" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 flex flex-col items-center text-center rounded-xl hover:border-white/30 transition-all">
                   <span className="text-5xl font-mono text-white/10 mb-4">{item.step}</span>
                   <span className="text-lg font-semibold text-white">{item.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* USE CASES */}
      <UseCases />
      
    </div>
  );
}
