import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-3"
      >
        Get in Touch
      </motion.p>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl md:text-5xl font-bold text-metallic mb-6"
      >
        Let's Build Together
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="max-w-xl text-white/60 leading-relaxed mb-16"
      >
        Whether you're an airline operator, logistics provider, investor, or potential partner —
        we want to hear from you.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="text-white/50 mt-1">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">General</p>
              <a
                href="mailto:hello@sevenoir.com"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                hello@sevenoir.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-white/50 mt-1">
              <MessageSquare size={20} />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Partnerships</p>
              <a
                href="mailto:partnerships@sevenoir.com"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                partnerships@sevenoir.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-white/50 mt-1">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Investors</p>
              <a
                href="mailto:investors@sevenoir.com"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                investors@sevenoir.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          {submitted ? (
            <div className="silver-border rounded-2xl p-8 bg-white/5 text-center">
              <Send size={32} className="text-white/60 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Message Sent</h3>
              <p className="text-white/50 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="silver-border rounded-2xl p-8 bg-white/5 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-white text-[#686a6c] font-semibold text-sm hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
