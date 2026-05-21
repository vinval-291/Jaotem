import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Blog', path: '/blog' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on link click
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12',
        scrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 font-serif font-bold text-xl">
            J
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-brand-green uppercase">
            Jaotem <span className="font-light text-brand-warm-black">Foundation</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-[11px] font-bold uppercase tracking-widest transition-all hover:text-brand-green relative py-1',
                  isActive ? 'text-brand-green' : 'text-brand-warm-black/60'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/donate"
            className="px-6 py-2.5 bg-brand-green text-white rounded-full text-sm font-semibold transition-all hover:bg-brand-green/90 hover:scale-105 active:scale-95 shadow-lg shadow-brand-green/20"
          >
            Donate Now
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-warm-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-cream border-t border-brand-warm-black/5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-brand-warm-black/80 hover:text-brand-orange"
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/donate"
                className="w-full py-4 bg-brand-green text-white rounded-2xl text-center font-bold"
              >
                Donate Now
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
