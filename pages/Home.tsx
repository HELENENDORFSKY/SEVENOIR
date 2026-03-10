import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Users,
  Globe,
  Database,
  Cpu,
  AlertCircle,
} from 'lucide-react';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { UseCases } from '../components/UseCases';
import { MEDIA } from '../content/media';

const ICON_SIZE_SM = 16;
const ICON_SIZE_MD = 32;

type ViewMode = 'enterprise' | 'consumer';

type CrisisPoint = {
  text: string;
};

type Partner = {
  name: string;
  subtext: string;
};

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>('enterprise');

  const crisisPoints: CrisisPoint[] = useMemo(
    () => [
      { text: '33.4M bags mishandled annually across the industry.' },
      { text: '$150+ average operational cost per incident.' },
      { text: 'IATA 753 compliance gaps persist in regional handoffs.' },
      { text: 'No cross-industry identity interoperability for physical assets.' },
    ],
    []
  );

  const partners: Partner[] = useMemo(
    () => [
      { name: 'SAFAROFF Agency', subtext: 'Digital Integration since 2004' },
      { name: 'Stuart Prestedge', subtext: 'Strategic Advisor' },
      { name: 'Munich Business School', subtext: 'Academic Hub' },
    ],
    []
  );

  const hero = useMemo(() => {
    if (viewMode === 'enterprise') {
      return {
        title: (
          <> 
            The Global Identity Layer for{' '}
            <span className="text-slate-300 italic">Physical Assets.</span>
          </>
        ),
        body:
          'Industrial-grade identity for baggage, cargo, and high-value equipment—built on the EM4425 hybrid chip (UHF/NFC), aligned to IATA 753, and designed for airline-scale operations.',
      };
    }

    return {
      title: (
        <> 
          Verified security for{' '}
          <span className="text-slate-300 italic">everything you own.</span>
        </>
      ),
      body:
        'A passenger-grade layer that links your property to the same enterprise systems airlines use—so recovery starts immediately, with transparent verification you can trust.',
    };
  }, [viewMode]);

  return (
    <div className="flex flex-col bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-32 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          {/* Toggle Switch */}
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 mb-10">
            <button
              onClick={() => setViewMode('enterprise')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                viewMode === 'enterprise'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-200 hover:text-white'
              }`}
              type="button"
            >
              <BarChart3 size={ICON_SIZE_SM} /> B2B / Enterprise
            </button>
            <button
              onClick={() => setViewMode('consumer')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                viewMode === 'consumer'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-200 hover:text-white'
              }`}
              type="button"
            >
              <Users size={ICON_SIZE_SM} /> Passenger
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
                {hero.title}
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed font-light">
                {hero.body}
              </p>

              {/* Required enterprise hero line (kept verbatim) */}
              {viewMode === 'enterprise' ? (
                <p className="text-sm md:text-base text-slate-300/90 max-w-3xl leading-relaxed">
                  <span className="font-semibold text-white">
                    The Global Identity Layer for Physical Assets.
                  </span>{' '}
                  Built for EM4425 hybrid UHF/NFC identity, IATA 753 compliance, SITA WorldTracer integration,
                  and Layer 2 Blockchain Audit Trails.
                </p>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link to="/products" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-5 py-3.5 md:px-8 md:py-4 bg-white text-black text-sm md:text-lg font-semibold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[160px] md:min-w-[220px] rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.10)]"
                type="button"
              >
                Technical Specifications
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 shrink-0" />
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-5 py-3.5 md:px-8 md:py-4 bg-transparent border border-white/20 text-white text-sm md:text-lg font-medium tracking-wide hover:bg-white/5 hover:border-white/40 transition-all min-w-[160px] md:min-w-[220px] rounded-xl md:rounded-2xl"
                type="button"
              >
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
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Information Blindness Gap
            </h2>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Airlines can track assets internally with UHF RFID, but passengers and partner networks often
              cannot verify custody or see the journey. Sevenoir closes that gap with EM4425 hybrid identity
              (UHF/NFC), IATA 753 alignment, SITA WorldTracer connectivity, and Layer 2 blockchain audit trails.
            </p>

            <div className="space-y-4">
              {crisisPoints.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl border border-white/10 bg-black/40 px-5 py-4 pl-12 overflow-hidden"
                >
                  {/* Intentional red accent: left border + controlled strike line */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-red-500/70" />
                  <div className="absolute left-10 right-4 top-1/2 h-px bg-red-500/25" />

                  <AlertCircle
                    size={ICON_SIZE_SM}
                    className="absolute left-4 top-4 text-red-400"
                  />
                  <span className="text-white/90 text-base leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:justify-self-end"
          >
            <PlaceholderFrame
              label="SYSTEM ARCHITECTURE — IATA 753 + SITA WorldTracer + L2 Audit Trails"
              aspect="square"
              src={MEDIA.home.heroProblemVisual}
              fit="cover"
            />
          </motion.div>
        </div>
      </section>

      {/* THREE PART SOLUTION */}
      <section className="py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure-as-a-Service
            </h2>
            <p className="text-gray-400 max-w-3xl">
              Hardware-grade identity meets verifiable software: SITA WorldTracer integrations and Layer 2
              blockchain audit trails—built to operate under IATA 753 workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Hybrid Tag */}
            <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl group hover:border-white/20 transition-all overflow-hidden">
              <div className="p-8 pb-0">
                <Cpu className="text-white mb-4" size={ICON_SIZE_MD} />
                <h3 className="text-xl font-bold text-white mb-2">1. Hybrid Identity Tag</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
                  Hardware — EM4425 Hybrid Chip
                </p>
                <ul className="space-y-2 mb-8 text-gray-300 text-sm">
                  <li>• Dual-band identity: UHF RFID + NFC</li>
                  <li>• Built to match IATA 753 handling checkpoints</li>
                  <li>• Battery-free, permanent identifier</li>
                  <li>• Industrial-grade durability for travel and logistics</li>
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
                <Database className="text-white mb-4" size={ICON_SIZE_MD} />
                <h3 className="text-xl font-bold text-white mb-2">2. Verification Engine</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
                  API &amp; Software
                </p>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li>• SITA WorldTracer integration</li>
                  <li>• Layer 2 blockchain audit trails for custody events</li>
                  <li>• Cryptographic verification of handoffs</li>
                  <li>• Anomaly detection and operational triage</li>
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
                <Globe className="text-white mb-4" size={ICON_SIZE_MD} />
                <h3 className="text-xl font-bold text-white mb-2">3. Recovery Operations</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
                  Automation &amp; ROI
                </p>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li>• Automated claims and recovery workflows</li>
                  <li>• Real-time passenger notifications</li>
                  <li>• Carrier handoff protocol aligned to IATA 753</li>
                  <li>• Operational scaling based on measured outcomes</li>
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
        </motion.div>
      </section>

      {/* TECHNICAL FOUNDATION (PARTNERS) */}
      <section className="py-24 border-t border-white/10 bg-white/[0.01]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-6 flex flex-col items-center"
        >
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
            Technical Foundation
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 bg-black/40 px-8 py-8 text-center"
              >
                <p className="text-white font-extrabold text-xl tracking-tight">{p.name}</p>
                <p className="text-sm text-slate-400 mt-2">{p.subtext}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OPERATIONAL LOGIC */}
      <section className="py-24 border-t border-white/10 bg-white/[0.02]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">
            Operational Logic
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', label: 'IATA Registration' },
              { step: '02', label: 'Checkpoint Handoff' },
              { step: '03', label: 'SITA Synchronization' },
              { step: '04', label: 'Verified Recovery' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 p-8 flex flex-col items-center text-center rounded-xl hover:border-white/30 transition-all"
              >
                <span className="text-5xl font-mono text-white/10 mb-4">
                  {item.step}
                </span>
                <span className="text-lg font-semibold text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* USE CASES */}
      <UseCases />
    </div>
  );
}