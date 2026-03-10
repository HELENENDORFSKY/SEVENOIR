import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Coins, Globe, Smartphone, ArrowRight } from 'lucide-react';

const futureItems = [
  {
    title: "Consumer App (B2C)",
    icon: <Smartphone className="w-8 h-8 mb-4 text-accent" />,
    features: ["Personal item identity", "Instant recovery", "Global ownership tracking", "Millions of tags in circulation"]
  },
  {
    title: "Hold-to-Use Token",
    icon: <Coins className="w-8 h-8 mb-4 text-accent" />,
    features: ["Access to advanced features", "Rewards for active users", "Community incentives", "Utility-first model"]
  },
  {
    title: "Consumer Ecosystem",
    icon: <Globe className="w-8 h-8 mb-4 text-accent" />,
    features: ["Smart tag marketplace", "Decentralized item identity", "User-controlled auth", "Seamless integration"]
  }
];

const l1Project = {
  title: "SEVENOIR Layer-1 Chain",
  description: "A proprietary lightweight Proof-of-Stake (PoS) blockchain engineered specifically for micro-identity events. It features an autonomous verification engine and native real-world interoperability to secure millions of daily item interactions.",
  tags: ["Blockchain", "PoS", "Identity", "Infrastructure"],
  imagePlaceholderText: "L1 Consensus Visualization"
};

export const Future: React.FC = () => {
  return (
    <section id="future" className="py-24 bg-[#686a6c] dark:bg-[#686a6c] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">The Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Future of Sevenoir</h2>
          <p className="text-gray-100 max-w-2xl">
            Expanding from enterprise infrastructure to a global, decentralized consumer ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {futureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#575b5f] p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="p-3 bg-white/5 w-fit rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{item.title}</h3>
              <ul className="space-y-3">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-gray-100">
                    <ArrowRight className="w-4 h-4 mr-2 text-white/40 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* L1 Chain Featured Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-[#575b5f] rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-lg"
        >
             {/* Text Content */}
             <div className="p-8 lg:p-12 flex flex-col justify-center lg:w-1/2 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-accent/10 rounded-lg">
                        <Layers className="text-accent w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-bold text-white">{l1Project.title}</h3>
                </div>
                <p className="text-gray-100 text-lg leading-relaxed mb-8">
                  {l1Project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {l1Project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
             </div>

             {/* Image Placeholder */}
             <div className="lg:w-1/2 bg-slate-100 dark:bg-white/5 relative overflow-hidden flex items-center justify-center min-h-[300px] lg:min-h-full order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-slate-200 dark:border-white/10 group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-colors duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                 <span className="text-slate-400 dark:text-slate-600 font-medium tracking-wide uppercase text-sm relative z-10">
                   {l1Project.imagePlaceholderText}
                 </span>
             </div>
        </motion.div>

      </div>
    </section>
  );
};