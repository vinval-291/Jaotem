import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Zap, Users, GraduationCap, ChevronRight, Gift, Calendar, Sparkles, Building2, HeartHandshake, Camera, Maximize2, ChevronLeft, ChevronRight as ChevronRightIcon, X, Facebook, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SKILL_IMG = "https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg";

const featuredImages = [
  { src: "https://i.postimg.cc/9M3hQf9B/DSC-9676.jpg", title: "Skill Up 2025 Summit Class", desc: "Interactive capacity training and theoretical lectures for community members." },
  { src: "https://i.postimg.cc/GtdnvSq4/DSC-9673.jpg", title: "Practical Learning Dialogues", desc: "Facilitators reviewing trainee project sheets and blueprints with candidates." },
  { src: "https://i.postimg.cc/vBWdgdLD/DSC-9695.jpg", title: "Educational Resources Library", desc: "Laying out specialized manuals, workbooks, and resource kits." },
  { src: "https://i.postimg.cc/90ntbqsQ/DSC-9764.jpg", title: "Group Learning Brainstorm", desc: "Collaborating in peer groups to master contemporary digital paradigms." },
  { src: "https://i.postimg.cc/SRK4DFPT/IMG-5281.jpg", title: "Skill Up Summit Launch", desc: "Opening session of the 2024 intensive training program." },
  { src: "https://i.postimg.cc/854DRPZn/IMG-5283.jpg", title: "Classroom Mentorship", desc: "Expert tutors guiding direct practical steps in digital literacy." },
  { src: "https://i.postimg.cc/3Nwhn56Q/IMG-5286.jpg", title: "Creative Design Focus", desc: "Trainees collaborating on visual design blueprints." },
  { src: "https://i.postimg.cc/0jNvcR3y/IMG-5289.jpg", title: "Empowered Scholars", desc: "Passionate classroom reactions and direct participation." }
];

export default function SkillUpProgram() {
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const highlights = [
    { title: "Empowerment Summit 2025", desc: "Our latest flagship edition focused on digital freelancing, hands-on handcraft, web configuration tools, and typing speed capabilities.", date: "June 2025" },
    { title: "Skill Up Summit 2024", desc: "Comprehensive vocational training and testimonies covering fashion, tech-foundations, craftwork, and enterprise mentorship.", date: "October 2024" },
    { title: "Inaugural Launch 2023", desc: "First vocational hub launch and local cohort startup funding to kickstart dozens of independent neighborhood enterprises.", date: "November 2023" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 bg-brand-cream/30"
    >
      <SEO 
        title="Skill Up Empowerment Program | Jaotem Foundation" 
        description="Providing intensive vocational, tech, and craft acquisition training sessions to inspire independent livelihoods." 
      />

      <PageHeader 
        title="Skill Up Empowerment Program" 
        subtitle="Vocational Training, Tech Mastery & Capacity Building initiatives driving local community self-reliance."
        image={SKILL_IMG}
        category="Special Completed Program Archive"
      />

      {/* Overview Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full">
              <Zap size={14} className="text-brand-green" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">Estd. 2023</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green leading-tight">
              Fueling Indigene Independence Through Skills.
            </h2>

            <p className="text-brand-warm-black/70 text-base md:text-lg leading-relaxed">
              Launched in 2023, the <strong>Skill Up Empowerment Program</strong> is Jaotem Foundation's premier vocational training ecosystem. 
              Our focus centers directly on eliminating local unemployment and encouraging high-growth small business creation. 
              By delivering physical handcraft training alongside fundamental computer applications, we empower trainees to establish independent, rewarding livelihoods.
            </p>

            <blockquote className="border-l-4 border-brand-orange pl-6 py-2 italic text-brand-warm-black/65 font-medium bg-brand-orange/5 rounded-r-2xl pr-4">
              "We don't merely distribute relief items; we equip individuals with permanent technical abilities. That is the only recipe for durable, multi-generational wealth."
            </blockquote>

            <div className="flex gap-4">
              <a href="#gallery-section" className="px-8 py-4 bg-brand-green text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm">
                Explore Program Photos
              </a>
              <NavLink to="/donate" className="px-8 py-4 border border-brand-green/10 text-brand-green bg-white font-bold rounded-full hover:bg-brand-green hover:text-white transition-all text-sm">
                Support Next Cohort
              </NavLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-green/5 rounded-[3.5rem] -z-10 blur-xl" />
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-brand-warm-black/5 space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green pb-4 border-b border-brand-warm-black/5">Program Core Modules</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold text-brand-green">Advanced Technical Competence</h4>
                    <p className="text-xs text-brand-warm-black/60 mt-1">Teaching fundamental digital tools, creative website assembly, remote workspace operations, and client management.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold text-brand-green">Vocational Handcraft & Fashion</h4>
                    <p className="text-xs text-brand-warm-black/60 mt-1">Intensive physical masterclasses in modern design, dressmaking, accessories, and culinary crafts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold text-brand-green">Micro-Business Mentorship</h4>
                    <p className="text-xs text-brand-warm-black/60 mt-1">Sustained sessions focusing on basic ledger keeping, pricing, digital marketing, and local sales avenues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestone Milestones timeline */}
      <section className="py-24 bg-brand-warm-black text-white rounded-[4rem] mx-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-orange text-xs font-black uppercase tracking-widest block mb-4">Milestone Timeline</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">The Journey of Skill Up</h2>
            <p className="text-white/60 text-base md:text-lg mt-4">Reviewing our consecutive annual summits and their direct impact footprint on community capacity building.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-transform duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 bg-brand-orange text-white text-[10px] font-black uppercase rounded-lg">
                      {item.date}
                    </div>
                    <span className="text-white/20 text-3xl font-serif font-black">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold font-serif text-brand-gold">{item.title}</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-8 border-t border-white/5 mt-8 flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  Impact Action Completed <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Photo Galleries Section */}
      <section id="gallery-section" className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5 scroll-mt-20">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full mb-3">
            <Camera size={12} className="text-brand-green" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">On-Site Visual Archives</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Inside the Skill Up Workshops</h2>
          <p className="text-brand-warm-black/70 text-base md:text-lg">
            Witness our physical capacity building programs in action. Tap on any thumbnail below to enter full-screen immersive slideshow display.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLightbox(idx)}
                className="relative aspect-square rounded-[1.5rem] overflow-hidden cursor-pointer group shadow-sm border border-brand-warm-black/5 bg-white"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 size={24} className="text-white transform scale-75 group-hover:scale-100 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Redirect to Gallery */}
        <div className="text-center pt-4">
          <NavLink 
            to="/gallery" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm group"
          >
            <span>Explore Entire Photo Gallery Album</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white border border-brand-warm-black/5 rounded-[2.5rem] shadow-sm">
            <p className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-2">350+</p>
            <p className="text-xs uppercase font-black text-brand-warm-black/40 tracking-wider">Vocational Graduates</p>
          </div>
          <div className="p-8 bg-white border border-brand-warm-black/5 rounded-[2.5rem] shadow-sm">
            <p className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-2">45+</p>
            <p className="text-xs uppercase font-black text-brand-warm-black/40 tracking-wider">Businesses Seeded</p>
          </div>
          <div className="p-8 bg-white border border-brand-warm-black/5 rounded-[2.5rem] shadow-sm">
            <p className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-2">100%</p>
            <p className="text-xs uppercase font-black text-brand-warm-black/40 tracking-wider">Free Scholarship Seats</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-brand-green text-center text-white p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/20 to-transparent -z-10" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">  Invest in Sustainable Human Capacity. </h2>
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Your generous donations directly sponsor training material kits, laptop configurations, expert trainers, and micro-grant starter packs for ambitious local participants.
          </p>
          <NavLink to="/donate" className="px-10 py-5 bg-brand-orange text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20 inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
            Sponsor a Vocational Student <HeartHandshake size={20} />
          </NavLink>
        </div>
      </section>

      {/* Immersive Sandbox Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const activeIndex = lightbox;
          const activeImg = featuredImages[activeIndex];

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-warm-black/95 z-50 flex flex-col justify-between py-8 px-6 backdrop-blur-md"
            >
              {/* Top Bar info */}
              <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-white border-b border-white/10 pb-4 shrink-0">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-brand-gold text-brand-green rounded-xl flex items-center justify-center font-bold shrink-0">
                    {activeIndex + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] text-brand-gold uppercase tracking-wider block font-bold">Skill Up Workshops</span>
                    <h4 className="font-bold text-white tracking-wide text-sm md:text-base truncate">{activeImg?.title}</h4>
                    <p className="text-xs text-white/60 hidden sm:block truncate">{activeImg?.desc}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setLightbox(null)}
                  className="ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all hover:scale-110 active:scale-95 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Stage viewport flex override */}
              <div className="flex-1 flex items-center justify-between gap-2 md:gap-6 max-w-7xl mx-auto w-full py-4 overflow-hidden">
                <button 
                  onClick={() => setLightbox((activeIndex - 1 + featuredImages.length) % featuredImages.length)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="relative flex-1 max-h-[60vh] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl p-2 bg-black/40">
                  <motion.img 
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={activeImg?.src} 
                    alt={activeImg?.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[55vh] max-w-full object-contain rounded-2xl" 
                  />
                </div>

                <button 
                  onClick={() => setLightbox((activeIndex + 1) % featuredImages.length)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronRightIcon size={24} />
                </button>
              </div>

              {/* Bottom indicators */}
              <div className="max-w-7xl mx-auto w-full flex justify-center gap-1.5 overflow-x-auto py-2 shrink-0">
                {featuredImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </motion.div>
  );
}
