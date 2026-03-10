import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Layers, Globe, Shield } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const pillars = [
  {
    icon: <Layers size={28} />,
    title: 'Precision Infrastructure',
    desc: 'End-to-end identity tagging for airlines, airports, and global logistics operators.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Reach',
    desc: 'Seamlessly connecting physical assets across continents with tamper-proof digital identities.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Trusted Provenance',
    desc: 'Every item, every shipment — verified from origin to destination.',
  },
];

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-4"
        >
          Precision Infrastructure
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl md:text-7xl font-bold leading-tight text-metallic mb-6"
        >
          Identity Layer
          <br />
          for the Physical World
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed mb-10"
        >
          Sevenoir builds the trust infrastructure that connects physical assets — across
          airlines, airports, and global logistics — to a verifiable digital identity.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NavLink
            to="/products"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#686a6c] font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            Explore Products <ArrowRight size={16} />
          </NavLink>
          <NavLink
            to="/vision"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white text-sm hover:border-white/50 transition-colors"
          >
            Our Vision
          </NavLink>
        </motion.div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4 + i}
              className="silver-border rounded-2xl p-8 bg-white/5 hover:bg-white/8 transition-colors"
            >
              <div className="text-white/70 mb-4">{p.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
