import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Blog', path: '/blog' },
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
          <img 
            src="https://i.postimg.cc/Ss13r2Nh/JAOTEM-LOGO-NEW.png" 
            alt="Jaotem Foundation Logo" 
            className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <span className={cn(
            "font-sans text-xl font-bold tracking-tight uppercase transition-colors duration-300 text-brand-green",
            scrolled ? "lg:text-brand-green" : "lg:text-white"
          )}>
            Jaotem <span className={cn(
              "font-light transition-colors duration-300 text-brand-warm-black",
              scrolled ? "lg:text-brand-warm-black" : "lg:text-white/90"
            )}>Foundation</span>
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
                  'text-[11px] font-bold uppercase tracking-widest transition-all relative py-1 duration-300',
                  isActive 
                    ? (scrolled ? 'text-brand-green' : 'text-white') 
                    : (scrolled ? 'text-brand-warm-black/60 hover:text-brand-green' : 'text-white/80 hover:text-white')
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
