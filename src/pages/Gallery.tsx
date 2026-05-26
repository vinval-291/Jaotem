import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Camera, PlayCircle, Maximize2, FolderOpen, ArrowRight, ExternalLink } from 'lucide-react';

const HERO_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop";
const BOOK_IMG = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop";
const TOUR_IMG = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop";
const SKILL_IMG = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop";
const GIRL_IMG = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop";
const TEAM_IMG = "https://images.unsplash.com/photo-1559027615-cd2428ee0a2a?q=80&w=1200&auto=format&fit=crop";

const items = [
  { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop', title: '2024 Vocational Design Trainee Class', category: '2024 Trainees' },
  { id: 2, type: 'image', src: BOOK_IMG, title: 'Project Book - 1000 Children', category: 'Education' },
  { id: 3, type: 'video', src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop', title: 'Vocational Skills Workshop Reel 2024', category: 'Video Testimonials' },
  { id: 4, type: 'image', src: SKILL_IMG, title: 'Skillup Tech Trainees Workshop', category: '2024 Trainees' },
  { id: 5, type: 'image', src: TEAM_IMG, title: 'Weekend Clean-up & Coordination', category: 'Volunteers' },
  { id: 6, type: 'image', src: GIRL_IMG, title: 'The Excellent School Girls Initiative', category: 'Education' },
  { id: 7, type: 'video', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', title: 'Skillup Trainee Success Video Interview', category: 'Video Testimonials' },
  { id: 8, type: 'image', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', title: 'Digital Literacy Graduate Session', category: '2024 Trainees' },
  { id: 9, type: 'video', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop', title: 'Tertiary Academic Excellence Testimonial', category: 'Video Testimonials' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', '2024 Trainees', 'Video Testimonials', 'Education', 'Volunteers'];

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

      {/* Trainees 2024 & Testimonials Google Drive Showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full w-fit mb-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Live Archive Portal</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Extract of training from 2024: Trainees & Testimonials.
            </h2>
            
            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              We believe in deep transparency and real-world outcomes. Our complete repository of 2024 training photos, individual success snapshots of vocational trainees, and direct testimonial video recordings is safely managed on our official Google Drive archive.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0">
                  <PlayCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">Trainee Voice Testimonials</h4>
                  <p className="text-xs text-brand-warm-black/50">High-resolution video responses and statements from our vocational mechanics, tailors, and computer scholars.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">On-Site Media Records</h4>
                  <p className="text-xs text-brand-warm-black/50">Capture shots of interactive classrooms and actual trainees completing their skill handbooks during 2024.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://drive.google.com/drive/folders/1PG1PoieJ7Wx2VbZEatq2-CQXRj4R1fWe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green text-white rounded-2xl font-bold shadow-xl shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
              >
                Access Google Drive Folder <FolderOpen size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative border-[8px] border-white/60">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop" 
                alt="2024 Trainees" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-brand-green/30 backdrop-blur-[1px] hover:backdrop-blur-none transition-all duration-500 flex items-center justify-center">
                <a 
                  href="https://drive.google.com/drive/folders/1PG1PoieJ7Wx2VbZEatq2-CQXRj4R1fWe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-6 bg-white rounded-full shadow-2xl text-brand-orange hover:scale-110 active:scale-95 transition-all text-center flex flex-col items-center gap-2 group border border-brand-warm-black/5"
                >
                  <ExternalLink size={28} className="translate-x-0.5" />
                </a>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-4 bg-brand-gold text-brand-green rounded-2xl font-bold shadow-lg text-xs tracking-widest uppercase">
              2024 Media Drive
            </div>
          </div>
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
