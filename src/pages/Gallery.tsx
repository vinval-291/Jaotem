import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Camera, PlayCircle, Maximize2 } from 'lucide-react';

const EDUCATION_IMG = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop";
const EMPOWERMENT_IMG = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop";
const FOOD_IMG = "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop";
const HERO_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop";
const TEAM_IMG = "https://images.unsplash.com/photo-1559027615-cd2428ee0a2a?q=80&w=1200&auto=format&fit=crop";

const items = [
  { id: 1, type: 'image', src: HERO_IMG, title: 'Annual Gala 2024', category: 'Events' },
  { id: 2, type: 'image', src: EDUCATION_IMG, title: 'Library Opening', category: 'Education' },
  { id: 3, type: 'video', src: FOOD_IMG, title: 'Food Drive Highlights', category: 'Community' },
  { id: 4, type: 'image', src: EMPOWERMENT_IMG, title: 'Skills Workshop', category: 'Empowerment' },
  { id: 5, type: 'image', src: TEAM_IMG, title: 'Weekend Clean-up', category: 'Volunteers' },
  { id: 6, type: 'image', src: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Health Mission', category: 'Healthcare' },
  { id: 7, type: 'video', src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Empowering Youth', category: 'Youth' },
  { id: 8, type: 'image', src: 'https://images.unsplash.com/photo-1627733857321-4f0f63b27670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Community Garden', category: 'Sustainability' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Events', 'Education', 'Community', 'Empowerment', 'Volunteers', 'Healthcare'];

  const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Media Gallery | Jaotem Foundation" description="A visual journey through our impact, outreach, and community transformations." />
      
      <PageHeader 
        title="Visual Impact" 
        subtitle="Every picture tells a story of hope, resilience, and transformation. Witness the real changes happening on the ground."
        image={HERO_IMG}
        category="Our Media Wall"
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 animate-fade-in">
           {categories.map(c => (
             <button
               key={c}
               onClick={() => setFilter(c)}
               className={cn(
                 "px-8 py-3 rounded-full text-sm font-bold transition-all border border-transparent",
                 filter === c 
                   ? "bg-brand-green text-white shadow-xl shadow-brand-green/20" 
                   : "bg-brand-cream text-brand-green hover:bg-brand-green hover:text-white"
               )}
             >
               {c}
             </button>
           ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
           {filteredItems.map((item, idx) => (
             <motion.div
               layout
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               key={item.id}
               className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer break-inside-avoid"
             >
                <img src={item.src} alt={item.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center text-white">
                   {item.type === 'video' ? <PlayCircle size={48} className="mb-4" /> : <Maximize2 size={48} className="mb-4" />}
                   <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">{item.category}</span>
                   <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                </div>
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center">
                     <PlayCircle size={20} />
                  </div>
                )}
             </motion.div>
           ))}
        </div>
      </section>

      {/* Social Feed Callout */}
      <section className="px-6 py-24 bg-brand-cream">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-brand-green mb-8 tracking-tight">Follow Our Live Journey</h2>
            <p className="text-brand-warm-black/60 text-lg mb-12">Get daily updates and behind-the-scenes moments from our field missions on social media.</p>
            <div className="flex justify-center gap-6">
               <SocialFollowBtn Icon={Camera} label="Instagram" color="#E1306C" />
               <SocialFollowBtn Icon={PlayCircle} label="YouTube" color="#FF0000" />
            </div>
         </div>
      </section>
    </motion.div>
  );
};

const SocialFollowBtn = ({ Icon, label, color }: { Icon: any; label: string; color: string }) => (
  <a href="#" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:scale-105 transition-all group">
     <Icon size={24} style={{ color }} />
     <span className="font-bold text-brand-warm-black group-hover:text-brand-green transition-colors">{label}</span>
  </a>
);

import { cn } from '../lib/utils';
export default Gallery;
