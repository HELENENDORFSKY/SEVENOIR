import React, { useState } from 'react';
import { PlaceholderFrame } from './ui/PlaceholderFrame';
import { RefreshCw, ArrowRight } from 'lucide-react';
import { MEDIA } from '../content/media';

interface UseCaseItem {
  title: string;
  description: string;
  label: string;
}

interface UseCasePair {
  id: number;
  front: UseCaseItem;
  back: UseCaseItem;
}

const useCasePairs: UseCasePair[] = [
  {
    id: 1,
    front: {
      title: "Passports & IDs",
      description: "Fast identification and return of important documents.",
      label: "DOCUMENTS"
    },
    back: {
      title: "Front doors",
      description: "Convenient contact for couriers and visitors, including people with disabilities.",
      label: "ACCESS"
    }
  },
  {
    id: 2,
    front: {
      title: "Vehicles",
      description: "Easy owner contact in emergencies or parking situations.",
      label: "AUTOMOTIVE"
    },
    back: {
      title: "Public transport",
      description: "Simplifies recovery of forgotten items in airplanes, buses, trains, subways, and taxis.",
      label: "TRANSIT"
    }
  },
  {
    id: 3,
    front: {
      title: "Travel & luggage",
      description: "Quick recovery of lost suitcases and bags.",
      label: "TRAVEL"
    },
    back: {
      title: "Hotels",
      description: "Fast identification of item owners in rooms and common areas.",
      label: "HOSPITALITY"
    }
  },
  {
    id: 4,
    front: {
      title: "Everyday essentials",
      description: "Protect phones, wallets, laptops, and other valuables.",
      label: "VALUABLES"
    },
    back: {
      title: "Workplaces",
      description: "Reduces time spent searching for misplaced items and boosts productivity.",
      label: "OFFICE"
    }
  },
  {
    id: 5,
    front: {
      title: "Schools & universities",
      description: "Helps students and staff quickly identify lost belongings.",
      label: "EDUCATION"
    },
    back: {
      title: "Pets",
      description: "Quick owner contact if a pet goes missing.",
      label: "COMPANION"
    }
  }
];

export const UseCases: React.FC = () => {
  const [isFlippedAll, setIsFlippedAll] = useState(false);

  return (
    <section className="py-24 border-t border-white/10 bg-[#686a6c] relative z-10">
      {/* Inline styles for 3D Flip effects to ensure no tailwind config dependency */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col md:flex-row items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
              Use Cases
            </h2>
            
            <button 
                onClick={() => setIsFlippedAll(prev => !prev)}
                className="mt-6 md:mt-0 md:absolute md:right-0 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                aria-label="Toggle use cases"
            >
                {isFlippedAll ? (
                   <>
                     <span>Back</span>
                     <RefreshCw size={14} className="rotate-180" />
                   </>
                ) : (
                   <>
                     <span>Show more</span>
                     <ArrowRight size={14} />
                   </>
                )}
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {useCasePairs.map((pair) => {
            return (
              <div 
                key={pair.id} 
                className="group perspective-1000 h-[420px]"
              >
                <div 
                  className={`relative w-full h-full duration-500 transition-transform transform-style-3d ${isFlippedAll ? 'rotate-y-180' : ''}`}
                >
                  
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-[#797d81] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/30 transition-colors">
                    <div className="p-2">
                       <PlaceholderFrame 
                          label={pair.front.label} 
                          src={MEDIA.useCases[pair.front.label as keyof typeof MEDIA.useCases]}
                          aspect="video" 
                          fit="contain"
                          hideLabelWhenImage={true}
                          className="rounded-xl" 
                       />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                       <h3 className="text-xl font-bold text-white mb-3">{pair.front.title}</h3>
                       <p className="text-white text-sm leading-relaxed">{pair.front.description}</p>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#575b5f] border border-white/20 rounded-2xl overflow-hidden flex flex-col hover:border-white/40 transition-colors">
                    <div className="p-2">
                       <PlaceholderFrame 
                          label={pair.back.label} 
                          src={MEDIA.useCases[pair.back.label as keyof typeof MEDIA.useCases]}
                          aspect="video" 
                          fit="contain"
                          hideLabelWhenImage={true}
                          className="rounded-xl border-white/20" 
                       />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                       <h3 className="text-xl font-bold text-white mb-3">{pair.back.title}</h3>
                       <p className="text-white text-sm leading-relaxed">{pair.back.description}</p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
