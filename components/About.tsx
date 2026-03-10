import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Send, Mail, Globe, Check } from 'lucide-react';
import { Founder } from '../types';
import { MEDIA } from '../content/media';

const founders: Founder[] = [
  {
    name: "Gleb Shirin",
    role: "Co-Founder & CTO",
    bio: [
      "Deep technical expertise",
      "Behavioral insight driven innovation",
      "Leading high-performing dev teams"
    ],
    imagePlaceholderText: "GS",
    socials: {
      linkedin: "#",
      x: "#",
      github: "#",
      telegram: "#"
    },
    email: "gleb@sevenoir.com",
    website: "shirin.tech"
  },
  {
    name: "Ruhlan Jafarli",
    role: "Founder & CEO",
    bio: [
      "Startup leadership",
      "Complex blockchain/IT challenges",
      "Relationship-driven execution"
    ],
    imagePlaceholderText: "RJ",
    socials: {
      linkedin: "#",
      x: "#",
      telegram: "#"
    },
    email: "ruhlan@sevenoir.com",
    website: "jafarli.me"
  },
  {
    name: "Stuart Prestedge",
    role: "Mentor & Advisor",
    bio: [
      "37 years startup experience",
      "Funding & scaling strategy",
      "Transforming pitfalls into progress"
    ],
    imagePlaceholderText: "SP",
    socials: {
      linkedin: "#",
      x: "#"
    },
    email: "stuart@sevenoir.com",
    website: "prestedge.com"
  }
];

// Helper component for X (Twitter) icon as it's not in Lucide
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const CopyEmail: React.FC<{ email: string }> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/email w-fit"
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div key="check" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <Check size={16} className="text-green-500" />
            </motion.div>
          ) : (
            <motion.div key="mail" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <Mail size={16} className="group-hover/email:text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="text-sm font-medium tracking-tight">
        {copied ? 'Copied' : email}
      </span>
    </button>
  );
};

export const About: React.FC = () => {
  const founderImages = [MEDIA.about.founders.gs, MEDIA.about.founders.rj, MEDIA.about.founders.sp];

  return (
    <section id="team" className="py-24 border-t border-white/10 bg-[#686a6c] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-4">
            Founders & Advisor
          </h2>
          <p className="text-white max-w-2xl">
            Meet the team behind SEVENOIR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founders.map((founder, index) => {
            const imageSrc = founderImages[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#575b5f] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors group flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 font-bold text-lg group-hover:text-white group-hover:bg-white/10 transition-colors shrink-0 overflow-hidden relative">
                    {imageSrc ? (
                       <img 
                          src={imageSrc} 
                          alt={founder.name} 
                          className="w-full h-full object-cover" 
                          loading="lazy" 
                          decoding="async"
                        />
                    ) : (
                       founder.imagePlaceholderText
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                    <p className="text-sm text-gray-100 font-medium uppercase tracking-wider">{founder.role}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-10 flex-grow">
                  {founder.bio.map((point, idx) => (
                    <li key={idx} className="text-sm text-white flex items-start leading-relaxed">
                      <span className="mr-3 text-white/20 mt-1.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Founder Footer: Socials, Email, Website */}
                <div className="pt-8 border-t border-white/5 space-y-6">
                  {/* Social Icons Row */}
                  <div className="flex items-center gap-5">
                    {founder.socials?.linkedin && (
                      <a href={founder.socials.linkedin} className="text-gray-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} strokeWidth={1.5} />
                      </a>
                    )}
                    {founder.socials?.x && (
                      <a href={founder.socials.x} className="text-gray-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <XIcon />
                      </a>
                    )}
                    {founder.socials?.github && (
                      <a href={founder.socials.github} className="text-gray-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Github size={18} strokeWidth={1.5} />
                      </a>
                    )}
                    {founder.socials?.telegram && (
                      <a href={founder.socials.telegram} className="text-gray-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Send size={18} strokeWidth={1.5} />
                      </a>
                    )}
                  </div>

                  {/* Email & Website */}
                  <div className="space-y-3">
                    {founder.email && <CopyEmail email={founder.email} />}
                    {founder.website && (
                      <a 
                        href={`https://${founder.website}`} 
                        className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors group/web w-fit"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Globe size={16} className="group-hover/web:text-white" />
                        <span className="text-sm font-medium tracking-tight">{founder.website}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};