import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-warm-black text-brand-soft-gray pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2 group">
              <img 
                src="https://i.postimg.cc/Ss13r2Nh/JAOTEM-LOGO-NEW.png" 
                alt="Jaotem Foundation Logo" 
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <span className="font-sans text-xl font-bold tracking-tight text-white uppercase">
                Jaotem <span className="font-light text-brand-soft-gray/60">Foundation</span>
              </span>
            </NavLink>
            <p className="text-brand-soft-gray/60 leading-relaxed max-w-xs text-sm">
              Bringing Hope to the future: Raising the next level of global future leaders.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com/jaotemfoundation" Icon={Instagram} />
              <SocialLink href="https://facebook.com/jaotemfoundation" Icon={Facebook} />
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-soft-gray/60 text-sm">
              <li><NavLink to="/about" className="hover:text-brand-orange transition-colors">About Us</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-brand-orange transition-colors">Our Programs</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-brand-orange transition-colors">Media Gallery</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-brand-orange transition-colors">Latest News</NavLink></li>
              <li><NavLink to="/donate" className="hover:text-brand-orange transition-colors">Donate Now</NavLink></li>
              <li><NavLink to="/admin/login" className="text-white/10 hover:text-brand-orange transition-colors">Admin Portal</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-brand-soft-gray/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0" size={18} />
                <span>Road 5, Ifeloju CDA,<br />Akingbala titun, Aregbe, Abeokuta, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={18} />
                <span>+2347017239744</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={18} />
                <span>admin@jaotem.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-brand-soft-gray/60 text-sm mb-4">Stay updated with our latest impact stories and events.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-orange text-white rounded-xl py-3 text-sm font-bold hover:bg-brand-orange/90 transition-all active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-soft-gray/40 text-xs">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} Jaotem Foundation. All rights reserved.</p>
            <span className="hidden md:inline text-white/10">|</span>
            <p>
              Website created by{' '}
              <a 
                href="https://linkedin.com/in/kuteyi-oluwaloye-vincent" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-orange text-brand-soft-gray/60 transition-colors font-semibold"
              >
                Kuteyi Vincent
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-soft-gray">Privacy Policy</a>
            <a href="#" className="hover:text-brand-soft-gray">Terms of Service</a>
            <a href="#" className="hover:text-brand-soft-gray">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, Icon }: { href: string; Icon: any }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);
