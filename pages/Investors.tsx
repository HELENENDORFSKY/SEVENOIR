import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, BarChart2 } from 'lucide-react';
import { type Stat } from '../types';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const stats: Stat[] = [
  { label: 'Global Air Cargo Market', value: '$128B+' },
  { label: 'Untracked Shipments Annually', value: '4.2B' },
  { label: 'Aviation Identity Gap Cost', value: '$6B/yr' },
  { label: 'Target Markets (Phase 1)', value: '12' },
];

const reasons = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Massive Untapped Market',
    desc: 'Physical asset identity remains a $100B+ problem with no dominant solution. We are first-movers in aviation and airport operations.',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Strong Unit Economics',
    desc: 'SaaS-style recurring revenue per identity issued. Negative churn as customers expand to more asset types.',
  },
  {
    icon: <Users size={24} />,
    title: 'Proven Team',
    desc: 'Founders with direct operator experience and prior exits in adjacent markets.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Network Effects',
    desc: 'Every new partner strengthens the provenance network, creating a compounding moat against competitors.',
  },
];

export default function Investors() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-3"
      >
        Investor Relations
      </motion.p>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl md:text-5xl font-bold text-metallic mb-6"
      >
        Invest in the Identity
        <br />
        Infrastructure of Tomorrow
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="max-w-2xl text-white/60 leading-relaxed mb-16"
      >
        We are currently raising our Series A. If you're a fund or angel interested in deep
        tech infrastructure with real-world impact, we'd love to connect.
      </motion.p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3 + i}
            className="silver-border rounded-2xl p-6 bg-white/5 text-center"
          >
            <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-white/50 text-xs leading-snug">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Reasons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7 + i}
            className="silver-border rounded-2xl p-8 bg-white/5 flex gap-5"
          >
            <div className="text-white/60 mt-1 flex-shrink-0">{r.icon}</div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={12}
        className="silver-border rounded-2xl p-8 bg-white/5 text-center"
      >
        <p className="text-white/70 mb-4 text-lg">Interested in learning more?</p>
        <a
          href="mailto:investors@sevenoir.com"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#686a6c] font-semibold text-sm hover:bg-white/90 transition-colors"
        >
          Request Deck
        </a>
      </motion.div>
    </section>
  );
}
