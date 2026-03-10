import React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold tracking-widest uppercase text-metallic">
              SEVENOIR
            </span>
            <p className="mt-1 text-xs text-white/40 tracking-wide">
              Identity Layer for the Physical World
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/vision', label: 'Vision' },
              { to: '/about', label: 'About' },
              { to: '/investors', label: 'Investors' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="text-xs text-white/50 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/30 tracking-wide">
            &copy; {year} Sevenoir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
