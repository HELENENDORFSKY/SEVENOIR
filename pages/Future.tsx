import React from 'react';
import { motion } from 'framer-motion';
import { type FutureItem } from '../types';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const roadmap: FutureItem[] = [
  {
    title: '2024 — Foundation',
    items: [
      'Core identity platform (SevenCore) — alpha release',
      'First airline pilot with regional carrier',
      'Series A fundraising',
    ],
  },
  {
    title: '2025 — Expansion',
    items: [
      'SevenTag production rollout across partner airports',
      'SevenChain mainnet integration',
      'Europe and MENA market entry',
    ],
  },
  {
    title: '2026 — Scale',
    items: [
      '1 billion identity events processed',
      'Full supply-chain integrations (freight, customs, last-mile)',
      'Open developer SDK release',
    ],
  },
  {
    title: '2027+ — Protocol',
    items: [
      'Industry-wide identity standard proposal',
      'Cross-border regulatory compliance automation',
      'Decentralized governance of the SevenChain ledger',
    ],
  },
];

export default function Future() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-3"
      >
        The Road Ahead
      </motion.p>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl md:text-5xl font-bold text-metallic mb-6"
      >
        Future Roadmap
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="max-w-2xl text-white/60 leading-relaxed mb-16"
      >
        Our journey from proving the concept to becoming the world's default identity layer for
        physical assets — step by step.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roadmap.map((phase, i) => (
          <motion.div
            key={phase.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3 + i}
            className="silver-border rounded-2xl p-8 bg-white/5"
          >
            <h3 className="text-white font-bold text-lg mb-4">{phase.title}</h3>
            <ul className="space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
