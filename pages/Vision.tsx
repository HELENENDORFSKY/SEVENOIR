import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Zap } from 'lucide-react';

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
    icon: <Eye size={28} />,
    title: 'Radical Transparency',
    desc: 'Every physical movement, every custody change — visible and verifiable by every authorized party in the chain.',
  },
  {
    icon: <Target size={28} />,
    title: 'Zero Ambiguity',
    desc: 'Eliminate the grey zones where cargo is lost, misidentified, or fraudulently substituted. One item, one identity, one truth.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Real-time Certainty',
    desc: 'Infrastructure that responds in milliseconds, so operators never have to wait to know what they have, where it is, and who touched it.',
  },
];

export default function Vision() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-3"
      >
        Our Vision
      </motion.p>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl md:text-5xl font-bold text-metallic mb-6"
      >
        A World Where Every
        <br />
        Object Has a Voice
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="max-w-2xl text-white/60 leading-relaxed mb-16 text-lg"
      >
        We believe the physical and digital worlds should speak the same language. Sevenoir is
        building the protocol layer that makes that possible — starting with the industries where
        trust and precision matter most.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3 + i}
            className="silver-border rounded-2xl p-8 bg-white/5"
          >
            <div className="text-white/70 mb-4">{p.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={7}
        className="silver-border rounded-2xl p-10 bg-white/5 max-w-3xl"
      >
        <p className="text-white/80 text-xl leading-relaxed italic">
          "The next great infrastructure opportunity isn't in the cloud — it's in the physical
          world, where billions of assets still lack a reliable digital identity."
        </p>
        <p className="mt-4 text-white/40 text-sm">— Sevenoir Founding Team</p>
      </motion.div>
    </section>
  );
}
