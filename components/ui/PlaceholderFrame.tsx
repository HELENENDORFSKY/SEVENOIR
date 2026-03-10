import React from 'react';

interface PlaceholderProps {
  label: string;
  className?: string;
  aspect?: 'video' | 'square' | 'portrait' | 'auto';
  src?: string;
  fit?: 'cover' | 'contain';
  hideLabelWhenImage?: boolean;
  alt?: string;
  noFrame?: boolean;
}

export const PlaceholderFrame: React.FC<PlaceholderProps> = ({ 
  label, 
  className = "", 
  aspect = 'video',
  src,
  fit = 'cover',
  hideLabelWhenImage = true,
  alt,
  noFrame = false
}) => {
  const aspectStyles = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    auto: ''
  };

  const showLabel = !src || !hideLabelWhenImage;

  return (
    <div className={`w-full ${aspectStyles[aspect]} relative rounded-xl overflow-hidden ${noFrame ? '' : 'bg-[#575b5f] border border-white/10 shadow-lg'} group ${className}`}>
      {/* Background Gradient - Hidden if noFrame is true */}
      {!noFrame && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
      )}
      
      {/* Subtle Grid Pattern (Only show if no image or if label is showing and NOT noFrame) */}
      {!noFrame && !src && (
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      )}

      {/* Image Rendering */}
      {src && (
        <img 
          src={src} 
          alt={alt || label} 
          loading="lazy" 
          decoding="async"
          className={`absolute inset-0 w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
        />
      )}

      {/* Center Label */}
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className={`px-6 py-3 ${noFrame ? 'bg-white/10' : 'border border-white/10 bg-white/5'} backdrop-blur-md rounded-lg shadow-2xl`}>
            <span className="text-white/60 font-mono text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-center block">
              {label}
            </span>
          </div>
        </div>
      )}

      {/* Decorative Metallic Corners - Hidden if noFrame is true */}
      {!noFrame && (
        <>
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 rounded-tl-xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 rounded-br-xl opacity-50" />
        </>
      )}
    </div>
  );
};