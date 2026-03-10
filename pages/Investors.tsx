import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { MEDIA } from '../content/media';

export default function Investors() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      
      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">Infrastructure with <br/>global leverage.</h1>
                
                <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
                    Sevenoir focuses on enterprise adoption in aviation, logistics, and postal networks. The business model relies on recurring identity infrastructure revenue and long-term verification contracts.
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="border-t border-white/20 pt-4">
                        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Regions</div>
                        <div className="text-xl text-white font-semibold">EU • US • Asia • CIS</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Stage</div>
                        <div className="text-xl text-white font-semibold">Pre-Seed / Seed</div>
                    </div>
                </div>

                <Link to="/contact">
                    <button className="px-10 py-4 bg-white text-black text-lg font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
                        Request Investor Deck
                    </button>
                </Link>
            </motion.div>

            <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
            >
                <PlaceholderFrame label="IMAGE PLACEHOLDER — Investor Metrics" aspect="portrait" src={MEDIA.investors.investorMetrics} fit="cover" />
            </motion.div>
        </div>

      </div>
    </div>
  );
}
