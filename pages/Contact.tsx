import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear all inputs
    const form = e.target as HTMLFormElement;
    form.reset();

    // Trigger success state
    setIsSent(true);
    
    // Reset back to active form after delay
    setTimeout(() => setIsSent(false), 4000);
  };

  const inputClasses = "w-full bg-transparent border-b border-white/20 py-4 text-white text-lg placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors rounded-none disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl w-full mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Speak with our enterprise team.</h1>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="Name" className={inputClasses} required disabled={isSent} />
                <input type="text" placeholder="Company" className={inputClasses} disabled={isSent} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="Role" className={inputClasses} disabled={isSent} />
                <input type="email" placeholder="Email" className={inputClasses} required disabled={isSent} />
            </div>

            <textarea rows={4} placeholder="Message" className={`${inputClasses} resize-none`} required disabled={isSent}></textarea>

            <div className="pt-8 flex justify-center items-center min-h-[88px]">
                <AnimatePresence mode="wait">
                    {!isSent ? (
                        <motion.button 
                          key="submit-btn"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          type="submit" 
                          className="px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all font-semibold tracking-wide uppercase flex items-center justify-center gap-3 min-w-[200px]"
                        >
                            <span>Send Message</span>
                        </motion.button>
                    ) : (
                        <motion.div
                          key="success-msg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-center"
                        >
                            <h3 className="text-white font-semibold uppercase tracking-[0.25em] text-lg mb-2">
                                Success is Inevitable
                            </h3>
                            <p className="text-white/80 text-base font-light">
                                We’ll be in touch shortly.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </form>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="mt-10 text-center text-gray-500 font-mono">
            <a href="mailto:Sevenoir@proton.me" className="hover:text-white transition-colors">Sevenoir@proton.me</a>
        </div>

      </div>
    </div>
  );
}