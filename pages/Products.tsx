import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { WhyBlockchain } from '../components/WhyBlockchain';
import { MEDIA } from '../content/media';

export default function Products() {
  return (
    <div className="min-h-screen">
      
      {/* HEADER */}
      <section className="pt-20 pb-24 max-w-7xl mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight uppercase">
            The Recovery Stack
          </h1>
          <p className="text-xl text-white leading-relaxed font-light">
            Closing the loop between industrial tracking and passenger verification.
          </p>
        </motion.div>
      </section>

      {/* MODULE 1: HARDWARE */}
      <section className="py-24 border-t border-white/10 bg-[#686a6c]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-xs font-mono text-white uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full mb-6 inline-block">Hardware Spec 01</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hybrid Identity Tag</h2>
                <p className="text-white mb-8 leading-relaxed">
                  Utilizing the **EM4425 dual-interface chip**, Sevenoir tags bridge the gap between UHF long-range automation and NFC close-range verification. Compliant with IATA 753, these tags are designed for aviation’s zero-fail environments.
                </p>
                <ul className="space-y-4 text-sm">
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**IATA 753 Compliant**: Native UHF RFID support for airport belt systems</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Shared Memory**: Data written via RFID is instantly readable via NFC</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Passive Power**: Battery-free operation with 10+ year lifespan</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**TAMPER-EVIDENT**: Secure mechanical binding for high-speed logistics</li>
                </ul>
             </div>
             <div className="order-1 lg:order-2">
                <PlaceholderFrame noFrame label="SPEC SHEET — EM4425 Hybrid Tag" aspect="portrait" src={MEDIA.products.smartIdentityTag} fit="contain" />
             </div>
        </div>
      </section>

      {/* MODULE 2: SOFTWARE */}
      <section className="py-24 border-t border-white/10 bg-[#575b5f]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
                <PlaceholderFrame noFrame label="INTERFACE — SITA WorldTracer Dashboard" aspect="video" src={MEDIA.products.verificationEngine} fit="cover" />
             </div>
              <div className="order-2">
                <span className="text-xs font-mono text-white uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full mb-6 inline-block">Software Stack 02</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Verification Engine</h2>
                <p className="text-white mb-8 leading-relaxed">
                  The brain of global recovery. Our engine synchronizes item status across multiple carriers, validating authenticity and custody without manual oversight.
                </p>
                <ul className="space-y-4 text-sm">
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**SITA Bag Journey API**: Real-time integration with global carrier networks</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Custody Mapping**: Visual logs of every carrier handoff</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Risk Scoring**: Detects anomalous movements or tampering attempts</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**GDPR-Ready**: Privacy-first data storage with off-chain PII protection</li>
                </ul>
             </div>
        </div>
      </section>

      {/* MODULE 3: AUTOMATION */}
      <section className="py-24 border-t border-white/10 bg-[#686a6c]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-xs font-mono text-white uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full mb-6 inline-block">Automation 03</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Automated Recovery</h2>
                <p className="text-white mb-8 leading-relaxed">
                  Reducing manual "Lost & Found" calls by 70%. When an item is found, the system executes recovery protocols, notifies the owner, and prepares insurance documentation automatically.
                </p>
                <ul className="space-y-4 text-sm">
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Instant Triage**: Direct owner-to-operator secure communication</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Handoff Protocols**: Verified courier coordination for item return</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Insurance Proof**: Cryptographic log for verified loss claims</li>
                   <li className="flex items-center text-white"><span className="w-1.5 h-1.5 bg-white rounded-full mr-4"></span>**Scalable ROI**: Reduces liability and staff overhead per incident</li>
                </ul>
             </div>
             <div className="order-1 lg:order-2">
                <PlaceholderFrame noFrame label="WORKFLOW — Automated Return Logic" aspect="video" src={MEDIA.products.automatedRecoveryWorkflow} fit="cover" />
             </div>
        </div>
      </section>

      {/* IMMUTABLE AUDIT TRAIL (Previously Why Blockchain) */}
      <WhyBlockchain />

      {/* ENTERPRISE OUTCOMES */}
      <section className="py-24 border-t border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">Enterprise ROI</h2>
                <p className="text-white">Why world-class airlines choose Sevenoir.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    "Faster recovery times",
                    "Immutable audit logs",
                    "Fraud prevention",
                    "GDPR compliance",
                    "Aviation integration",
                    "Logistics efficiency",
                    "IATA 753 compliance",
                    "Liability reduction"
                ].map((item, idx) => (
                    <div key={idx} className="p-6 border border-white/10 bg-white/10 rounded-lg flex items-center">
                        <div className="w-2 h-2 bg-white/40 rounded-full mr-4"></div>
                        <span className="text-white font-medium text-sm">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}