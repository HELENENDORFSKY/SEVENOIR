
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
// Added Variants type import to ensure proper typing for motion variants
import { motion, AnimatePresence, Variants } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Vision', href: '/vision' },
    { name: 'Future', href: '/future' },
    { name: 'About us', href: '/about' },
    { name: 'Investors', href: '/investors' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Mobile Menu Variants - added explicit Variants typing to satisfy strict easing string checks
  const menuVariants: Variants = {
    closed: { 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  // Link Variants - added explicit Variants typing to satisfy strict easing string checks
  const linkVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-0' : 'py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex items-center justify-between px-8 py-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? 'shadow-2xl' : ''
          }`}>
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-white font-bold tracking-[2px] text-[19px] relative z-50">
                SEVENOIR
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive(link.href) 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="w-px h-6 bg-white/10 mx-2" />

              <Link
                to="/contact"
                className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300"
              >
                Contact us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden z-50">
              <button 
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[60] bg-[#686a6c] flex flex-col md:hidden"
          >
            {/* Overlay Header (Logo + Close) - Fixed Height */}
            <div className="flex-none flex items-center justify-between px-6 py-5 border-b border-white/5">
                <span className="text-white font-bold tracking-[2px] text-[19px]">
                    SEVENOIR
                </span>
                <button 
                  className="text-white p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
            </div>

            {/* Nav Links - Scrollable Area */}
            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">
              <div className="my-auto space-y-6 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                      key={link.name}
                      custom={i}
                      variants={linkVariants}
                  >
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group block relative text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-300 ${
                          isActive(link.href) ? 'text-white font-normal' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {/* Active Indicator Line */}
                        {isActive(link.href) && (
                            <motion.div 
                              layoutId="mobile-nav-indicator"
                              className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-white" 
                              initial={{ height: 0 }}
                              animate={{ height: 24 }}
                            />
                        )}
                        
                        <div className="flex items-center justify-between w-full">
                          <span>{link.name}</span>
                          {/* Hover Arrow */}
                          <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                               <ArrowRight size={20} className="text-white/50" />
                          </div>
                        </div>
                      </Link>
                  </motion.div>
                ))}

                <div className="w-full h-px bg-white/10 my-6" />

                <motion.div
                   custom={navLinks.length}
                   variants={linkVariants}
                >
                   <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-lg text-white font-medium border border-white/20 rounded-lg p-3 text-center hover:bg-white hover:text-black transition-colors duration-300 whitespace-normal"
                   >
                      Contact us
                   </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile Footer / Copyright Area */}
            <div className="flex-none px-6 py-6 border-t border-white/5 bg-[#686a6c]">
              <div className="flex flex-col items-center justify-center space-y-1">
                <div className="text-white font-bold tracking-[2px] text-sm">
                  SEVENOIR
                </div>
                <div className="text-white/50 text-xs font-normal">
                  © 2025 SEVENOIR. All rights reserved.
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
