import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ShieldCheck, Users, Globe, Database, Cpu, AlertCircle } from 'lucide-react';
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
                  <>Total peace of mind for <span className="text-gray-400 italic">every journey.</span></>
                )}
              </h1>

              <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-light">
                {viewMode === 'enterprise' ? (
                  "Closing the $5.9B gap in mishandled logistics. Hybrid UHF/NFC identity tags integrated directly with SITA WorldTracer and IATA 753 standards."
                ) : (
                  "Your property, verified globally. Automated recovery that connects with airlines to find and return your luggage before you even realize it's missing."
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
               The $5 Billion Information Blindness.
             </h2>
             
             <p className="text-lg text-white mb-8 leading-relaxed">
               In 2024, the aviation industry mishandled 33.4 million bags. While internal UHF RFID tracks assets for carriers, passengers remain blind to their property's custody. Sevenoir bridges this gap with hybrid hardware and API-first audit trails.
             </p>

             <div className="space-y-6">
                {[
                  "33.4M bags mishandled annually (SITA Data)",
                  "$150+ Average operational cost per incident",
                  "Critical IATA 753 compliance gaps in networks",
                  "Lack of cross-industry identity interoperability"
                ].map((item, i) => (
                  <div key={i} className="flex items-center group">
                    <AlertCircle className="text-red-500/80 mr-4 shrink-0" size={20} />
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
                label="SYSTEM ARCHITECTURE — IATA 753 Integration" 
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
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Infrastructure-as-a-Service</h2>
             <p className="text-gray-400">Precision hardware meeting automated recovery logic.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Hybrid Tag */}
              <div className="flex flex-col h-full bg-[#575b5f] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden">
                 <div className="p-8 pb-0">
                    <Cpu className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">1. Hybrid Identity Tag</h3>
                    <p className="text-xs text-gray-200 uppercase tracking-widest mb-6">Hardware (EM4425)</p>
                    <ul className="space-y-2 mb-8 text-white text-sm">
                       <li>• Dual UHF RFID (IATA 753) + NFC</li>
                       <li>• Shared-memory chip architecture</li>
                       <li>• Battery-free permanent identity</li>
                       <li>• Industrial-grade durability</li>
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
              <div className="flex flex-col h-full bg-[#575b5f] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden">
                 <div className="p-8 pb-4">
                    <Database className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">2. Verification Engine</h3>
                    <p className="text-xs text-gray-200 uppercase tracking-widest mb-6">API & Software</p>
                    <ul className="space-y-2 mb-6 text-white text-sm">
                       <li>• SITA WorldTracer API Integration</li>
                       <li>• Automated Bag Journey mapping</li>
                       <li>• Cryptographic custody proofs</li>
                       <li>• Anomaly detection & triage</li>
                    </ul>
                 </div>
                 <div className="mt-4 px-4 pb-4">
                    <PlaceholderFrame 
                      noFrame 
                      label="SOFTWARE — Operator Dashboard" 
                      aspect="video" 
                      src={MEDIA.products.verificationEngine} 
                      fit="cover" 
                    />
                 </div>
              </div>

              {/* Card 3: Automated Recovery */}
              <div className="flex flex-col h-full bg-[#575b5f] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden">
                 <div className="p-8 pb-4">
                    <Globe className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">3. Recovery Operations</h3>
                    <p className="text-xs text-gray-200 uppercase tracking-widest mb-6">Automation & ROI</p>
                    <ul className="space-y-2 mb-6 text-white text-sm">
                       <li>• Automated insurance claim logic</li>
                       <li>• Instant passenger notifications</li>
                       <li>• Global carrier handoff protocol</li>
                       <li>• ROI-driven operational scaling</li>
                    </ul>
                 </div>
                 <div className="mt-4 px-4 pb-4">
                    <PlaceholderFrame 
                      noFrame 
                      label="WORKFLOW — Recovery Automation" 
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
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Technical Foundation</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 transition-all">
               <div className="text-center group">
                 <p className="text-white font-bold text-2xl transition-colors group-hover:text-gray-300">SAFAROFF Agency</p>
                 <p className="text-[10px] text-gray-200 uppercase tracking-widest mt-2">Digital Integration since 2004</p>
               </div>
               <div className="h-10 w-px bg-white/20 hidden md:block"></div>
               <div className="text-center group">
                 <p className="text-white font-bold text-2xl transition-colors group-hover:text-gray-300">Stuart Prestedge</p>
                 <p className="text-[10px] text-gray-200 uppercase tracking-widest mt-2">Strategic Advisor</p>
               </div>
               <div className="h-10 w-px bg-white/20 hidden md:block"></div>
               <div className="text-center group">
                 <p className="text-white font-bold text-2xl transition-colors group-hover:text-gray-300">Munich Business School</p>
                 <p className="text-[10px] text-gray-200 uppercase tracking-widest mt-2">Academic Hub</p>
               </div>
            </div>
        </div>
      </section>

      {/* OPERATIONAL LOGIC */}
      <section className="py-24 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">Operational Logic</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", label: "IATA Registration" },
                { step: "02", label: "Checkpoint Handoff" },
                { step: "03", label: "SITA Synchronization" },
                { step: "04", label: "Verified Recovery" }
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
