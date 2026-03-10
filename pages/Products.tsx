import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Cpu, Network } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const products = [
  {
    icon: <Tag size={32} />,
    title: 'SevenTag',
    subtitle: 'Physical Identity Labels',
    description:
      'High-durability smart labels embedding cryptographic identities into any physical asset. Designed for extreme conditions — from tarmac heat to cargo hold cold.',
    tags: ['NFC', 'Tamper-evident', 'Aviation-grade'],
    type: 'b2b' as const,
  },
  {
    icon: <Cpu size={32} />,
    title: 'SevenCore',
    subtitle: 'Identity Platform',
    description:
      'The backbone API and dashboard that issues, manages, and verifies digital identities for millions of physical items in real time.',
    tags: ['REST API', 'Real-time', 'Scalable'],
    type: 'b2b' as const,
  },
  {
    icon: <Network size={32} />,
    title: 'SevenChain',
    subtitle: 'Provenance Ledger',
    description:
      'An immutable provenance ledger anchored to public blockchain infrastructure, giving stakeholders end-to-end traceability and audit-ready records.',
    tags: ['Blockchain', 'Audit', 'Immutable'],
    type: 'blockchain' as const,
  },
];

const tagColor: Record<string, string> = {
  b2b: 'bg-white/10 text-white/70',
  b2c: 'bg-blue-500/20 text-blue-300',
  blockchain: 'bg-purple-500/20 text-purple-300',
};

export default function Products() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-3"
      >
        Product Suite
      </motion.p>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl md:text-5xl font-bold text-metallic mb-4"
      >
        Built for the Physical World
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="max-w-2xl text-white/60 leading-relaxed mb-16"
      >
        Every product in the Sevenoir suite is engineered to give physical assets a persistent,
        verifiable, and tamper-proof digital identity.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3 + i}
            className="silver-border rounded-2xl p-8 bg-white/5 hover:bg-white/8 transition-colors flex flex-col"
          >
            <div className={`mb-5 ${tagColor[p.type]} w-fit px-2 py-1 rounded text-xs font-medium`}>
              {p.type.toUpperCase()}
            </div>
            <div className="text-white/70 mb-4">{p.icon}</div>
            <h3 className="text-white font-bold text-xl mb-1">{p.title}</h3>
            <p className="text-white/50 text-sm mb-3">{p.subtitle}</p>
            <p className="text-white/60 text-sm leading-relaxed flex-grow">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
