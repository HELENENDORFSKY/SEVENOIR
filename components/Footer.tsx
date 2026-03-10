import React from 'react';
import { Linkedin, Send, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#686a6c] py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          {/* Brand - Pure White, Minimal */}
          <div className="text-white font-bold tracking-[2px] text-[19px] mb-2">
            SEVENOIR
          </div>

          <div className="text-white/80 text-sm font-normal">
            © 2025 SEVENOIR. All rights reserved.
          </div>
        </div>
        
        <div className="flex space-x-8">
          <a href="https://www.linkedin.com/company/sevenoir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="https://t.me/SEVENOIR" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-500 hover:text-white transition-colors">
             <Send size={20} strokeWidth={1.5} />
          </a>
          <a href="https://www.instagram.com/sevenoir_official" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-white transition-colors">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a href="https://x.com/TheSEVENOIR" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-gray-500 hover:text-white transition-colors">
            {/* Custom SVG for X Logo */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};