import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ShieldCheck, Users } from 'lucide-react';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { UseCases } from '../components/UseCases';
import { MEDIA } from '../content/media';

export default function Home() {
  const [viewMode, setViewMode] = useState<'enterprise' | 'consumer'>('enterprise');

  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-32 max-w-7xl mx-auto px-6 w-full">
        {/* ИСПРАВЛЕНИЕ #1: Добавили text-center и mx-auto, чтобы центрировать текстовый блок */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center" 
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

              <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-light mx-auto">
                {viewMode === 'enterprise' ? (
                  "Closing the $5.9B information gap between airlines and passengers. A decentralized infrastructure powered by hybrid UHF/NFC technology and IATA 753 compliance."
                ) : (
                  "Your property, verified globally. Automated recovery that connects with airline systems to find your luggage before you even realize it's gone."
                )}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
            <Link to="/products" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 py-3.5 md:px-8 md:py-4 bg-white text-black text-sm md:text-lg font-semibold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[160px] md:min-w-[200px] rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] whitespace-normal text-center">
                    Technical Specifications
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 shrink-0" />
                </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 py-3.5 md:px-8 md:py-4 bg-transparent border border-white/20 text-white text-sm md:text-lg font-medium tracking-wide hover:bg-white/5 hover:border-white/40 transition-all min-w-[160px] md:min-w-[200px] rounded-xl md:rounded-2xl whitespace-normal text-center">
                    Partner With Us
                </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* THE CRISIS SECTION */}
      {/* ИСПРАВЛЕНИЕ #3: Добавили max-w-7xl, чтобы сбалансировать блок и центрировать контент */}
      <section className="py-24 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left" 
          >
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight mx-auto lg:mx-0">
               <span className="line-through decoration-red-500">The $5B Information Blindness.</span>
             </h2>
             
             <p className="text-lg text-gray-300 mb-8 leading-relaxed mx-auto lg:mx-0">
               In 2024, the aviation industry mishandled 33.4 million bags. Industrial UHF RFID tracks items for internal systems, but passengers remain disconnected from their property's custody. Sevenoir bridges this gap with hybrid hardware and an API-first audit trail.
             </p>

             <div className="space-y-6 w-full flex flex-col items-center lg:items-start">
               {/* ИСПРАВЛЕНИЕ #4 (Баг): Добавили span line-through на проблемные слова */}
                {[
                  <>In 2024, the aviation industry mishandled 33.4 million bags. Industrial UHF RFID tracks items for internal systems, but passengers remain <span className="line-through decoration-red-500">blind to their property's custody</span>. Sevenoir bridges this gap with hybrid hardware and an API-first audit trail.</>,
                  <>33.4M bags mishandled annually (SITA Data)</>,
                  <>$150+ Average operational <span className="line-through decoration-red-500">cost</span> per incident</>,
                  <>Critical IATA 753 compliance <span className="line-through decoration-red-500">gaps</span> in regional networks</>,
                  <>Insurance <span className="line-through decoration-red-500">fraud</span> via unverified loss claims</>,
                  <>Lack of cross-industry identity interoperability <span className="line-through decoration-red-500">lack</span></>
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
              className="w-full max-w-xl mx-auto" 
          >
             {/* ИСПРАВЛЕНИЕ #3: Изменили aspect со square на video, чтобы Placeholder перестал быть огромным */}
             <PlaceholderFrame 
                label="TECHNICAL OVERVIEW — IATA 753 Integration" 
                aspect="video" 
                src={MEDIA.home.heroProblemVisual} 
                fit="cover"
             />
          </motion.div>

        </div>
      </section>

      {/* THREE PART SOLUTION */}
      <section className="py-24 border-t border-white/10 max-w-7xl mx-auto px-6 w-full">
        {/* ИСПРАВЛЕНИЕ #5: Добавили mx-auto и text-center, чтобы центрировать заголовок */}
           <div className="mb-16 text-center max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Infrastructure-as-a-Service</h2>
             <p className="text-gray-400">High-precision hardware meeting automated recovery logic.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch w-full"> 
              {/* Card 1: Hybrid Tag */}
              {/* ИСПРАВЛЕНИЕ #6: Добавили text-center, чтобы выровнять контент карточки */}
              <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden text-center items-center">
                 <div className="p-8 pb-0">
                    <h3 className="text-xl font-bold text-white mb-2">1. Hybrid Identity Tag</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Hardware (EM4425)</p>
                    <ul className="space-y-2 mb-8 text-gray-300 text-sm flex flex-col items-center">
                       <li>• Dual UHF RFID (IATA 753) + NFC</li>
                       <li>• Industrial-grade durability</li>
                       <li>• Shared-memory chip architecture</li>
                       <li>• Battery-free permanent identity</li>
                    </ul>
                 </div>
                 <div className="mt-auto px-4 pb-0">
                    {/* ИСПРАВЛЕНИЕ #6: Изменили aspect с portrait на video, чтобы выровнять высоту карточек */}
                    <PlaceholderFrame 
                      noFrame 
                      label="HARDWARE — EM4425 Dual-Band" 
                      aspect="video" 
                      src={MEDIA.products.smartIdentityTag} 
                      fit="contain" 
                    />
                 </div>
              </div>

              {/* Card 2: Verification Engine */}
              <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden text-center items-center">
                 <div className="p-8 pb-4">
                    <h3 className="text-xl font-bold text-white mb-2">2. Verification Engine</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">API & Software</p>
                    <ul className="space-y-2 mb-6 text-gray-300 text-sm flex flex-col items-center">
                       <li>• SITA WorldTracer API Integration</li>
                       <li>• Automated Bag Journey mapping</li>
                       <li>• Cryptographic custody proofs</li>
                       <li>• Anomaly detection & triage</li>
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
              <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden text-center items-center">
                 <div className="p-8 pb-4">
                    <h3 className="text-xl font-bold text-white mb-2">3. Recovery Operations</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Automation & ROI</p>
                    <ul className="space-y-2 mb-6 text-gray-300 text-sm flex flex-col items-center">
                       <li>• Automated insurance claim logic</li>
                       <li>• Instant passenger notifications</li>
                       <li>• Global carrier handoff protocol</li>
                       <li>• ROI-driven operational scaling</li>
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
              {/* Логотипы партнеров */}
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
