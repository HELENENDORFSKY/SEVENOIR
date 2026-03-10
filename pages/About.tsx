import React from 'react';
import { motion } from 'framer-motion';
import { type Founder } from '../types';
import { Linkedin, Github } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const founders: Founder[] = [
  {
    name: 'Alex Mercer',
    role: 'CEO & Co-Founder',
    bio: [
      'Former Director of Digital Operations at a major European airline group.',
      '15+ years building identity and tracking systems for high-stakes industries.',
    ],
    imagePlaceholderText: 'AM',
    socials: { linkedin: '#', github: '#' },
    email: 'alex@sevenoir.com',
  },
  {
    name: 'Elena Dorfsky',
    role: 'CTO & Co-Founder',
    bio: [
      'Led engineering teams at enterprise blockchain and IoT companies.',
      'Expert in cryptographic identity systems and distributed ledger infrastructure.',
    ],
    imagePlaceholderText: 'ED',
    socials: { linkedin: '#' },
    email: 'elena@sevenoir.com',
  },
  {
    name: 'Marcus Chen',
    role: 'COO & Co-Founder',
    bio: [
      'Previously scaled operations at a global logistics unicorn to 40+ countries.',
      'Deep expertise in supply-chain compliance and airport ground operations.',
    ],
    imagePlaceholderText: 'MC',
    socials: { linkedin: '#' },
    email: 'marcus@sevenoir.com',
  },
];

export default function About() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-3"
      >
        The Team
      </motion.p>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl md:text-5xl font-bold text-metallic mb-6"
      >
        Built by Operators,
        <br />
        for Operators
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="max-w-2xl text-white/60 leading-relaxed mb-16"
      >
        The Sevenoir founding team brings together deep domain expertise in aviation, logistics,
        blockchain, and enterprise software. We've lived the problem we're solving.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3 + i}
            className="silver-border rounded-2xl p-8 bg-white/5 flex flex-col"
          >
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center text-xl font-bold text-white mb-5">
              {founder.imagePlaceholderText}
            </div>

            <h3 className="text-white font-bold text-xl">{founder.name}</h3>
            <p className="text-white/50 text-sm mb-4">{founder.role}</p>

            <ul className="space-y-2 flex-grow">
              {founder.bio.map((line, j) => (
                <li key={j} className="text-white/60 text-sm leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {founder.socials?.linkedin && (
                <a
                  href={founder.socials.linkedin}
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {founder.socials?.github && (
                <a
                  href={founder.socials.github}
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
