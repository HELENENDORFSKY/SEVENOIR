import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

// Explicit page imports
import Home from './pages/Home';
import Products from './pages/Products';
import Vision from './pages/Vision';
import Future from './pages/Future';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top immediately when path changes
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/vision" element={<PageTransition><Vision /></PageTransition>} />
          <Route path="/future" element={<PageTransition><Future /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/investors" element={<PageTransition><Investors /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><Home /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#686a6c] text-white font-sans relative flex flex-col selection:bg-white/20">
        
        {/* Persistent Premium Background Layer */}
        <div className="fixed inset-0 z-0 bg-[#686a6c]">
            {/* Solid Nardo Grey Base */}
            <div className="absolute inset-0 bg-[#686a6c]" />
            
            {/* Subtle Gradient Spotlights */}
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-10" />
            <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none opacity-10" />
            
            {/* Noise Texture Overlay via CSS */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            
            <main className="flex-grow pt-20">
              <AnimatedRoutes />
            </main>
            
            <Footer />
        </div>
      </div>
    </Router>
  );
}