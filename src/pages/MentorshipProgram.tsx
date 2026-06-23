import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { 
  GraduationCap, Users, BookOpen, Sparkles, Compass, HeartHandshake, 
  Camera, Maximize2, ChevronLeft, ChevronRight as ChevronRightIcon, 
  X, Award, CheckCircle, Lightbulb, TrendingUp, Zap 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MENTOR_IMG = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop";

const mentorshipImages = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    title: "Tertiary Academic Excellence Seminars",
    desc: "Interactive webinars and physical summits detailing first-class grading blueprints."
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    title: "Guided Peer Mentorship Sessions",
    desc: "Scholars and top-tier graduates convening to map consistency routines."
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    title: "One-on-One Counseling",
    desc: "Recovering students being paired with proven achievers to rebuild confidence."
  }
];

export default function MentorshipProgram() {
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const whatWeDoList = [
    {
      title: "Academic Excellence Guidance",
      desc: "We provide practical strategies, insights, and personalized guidance to help students develop effective study habits and achieve exceptional academic performance.",
      icon: BookOpen,
      color: "from-emerald-500/10 to-teal-500/10",
      textColor: "text-emerald-700"
    },
    {
      title: "Accountability Platform",
      desc: "We create a supportive environment that encourages consistency, discipline, and accountability, helping students stay focused on their academic goals.",
      icon: CheckCircle,
      color: "from-blue-500/10 to-indigo-500/10",
      textColor: "text-blue-700"
    },
    {
      title: "Student Development and Discovery",
      desc: "We help students identify the skills, habits, and resources they need to succeed academically and personally.",
      icon: Lightbulb,
      color: "from-amber-500/10 to-orange-500/10",
      textColor: "text-amber-700"
    },
    {
      title: "Academic Recovery and Growth",
      desc: "For students facing academic challenges or poor results, we provide mentorship and support to help them regain confidence, rediscover their strengths, and improve their performance.",
      icon: TrendingUp,
      color: "from-red-500/10 to-rose-500/10",
      textColor: "text-rose-700"
    },
    {
      title: "Mentorship Sessions with Proven Achievers",
      desc: "We organize impactful sessions featuring individuals with outstanding academic records who share their experiences, strategies, and success stories to inspire and guide students.",
      icon: Award,
      color: "from-purple-500/10 to-violet-500/10",
      textColor: "text-violet-700"
    },
    {
      title: "Maximizing Student Potential",
      desc: "We empower students to achieve academic success while maintaining a balanced and fulfilling school life, enabling them to reach their highest potential both academically and personally.",
      icon: Zap,
      color: "from-cyan-500/10 to-sky-500/10",
      textColor: "text-cyan-700"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 bg-brand-cream/30"
    >
      <SEO 
        title="Jaotem Mentorship Program | Jaotem Foundation" 
        description="Helping students across tertiary institutions achieve academic excellence through structured guidance, accountability, and mentorship." 
      />

      <PageHeader 
        title="Jaotem Mentorship Program" 
        subtitle="Bridging the gap between aspiration and realization through structured personal guidance."
        image={MENTOR_IMG}
        category="Academic Excellence & Growth"
      />

      {/* Overview Intro Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/25 rounded-full">
              <GraduationCap size={14} className="text-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#cf762b]">Tertiary Scholarship & Mentorship</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Empowering Minds, Securing First-Class Futures
            </h2>

            <p className="text-brand-warm-black/70 text-base md:text-lg leading-relaxed">
              Jaotem Mentorship is committed to helping students across tertiary institutions achieve academic excellence through structured guidance, accountability, and mentorship.
            </p>

            <p className="text-brand-warm-black/70 text-base md:text-lg leading-relaxed">
              With a track record of supporting students in reaching outstanding academic results, we provide the resources, support, and mentorship needed for students to unlock their full potential and excel in their educational journey.
            </p>

            <blockquote className="border-l-4 border-brand-green pl-6 py-4 italic text-brand-warm-black/75 font-medium bg-brand-green/5 rounded-r-2xl pr-4 leading-relaxed">
              "We provide the supportive framework, constant follow-up, and strategy reviews required to turn academic struggles into verified success stories."
            </blockquote>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#what-we-do-section" className="px-8 py-4 bg-brand-green text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm">
                Discover What We Do
              </a>
              <NavLink to="/contact" className="px-8 py-4 border border-brand-green/20 text-brand-green bg-white font-bold rounded-full hover:bg-brand-green hover:text-white transition-all text-sm">
                Join our Mentorship Circle
              </NavLink>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-brand-green/5 rounded-[3.5rem] -z-10 blur-xl" />
            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-brand-warm-black/5 text-center">
              <Sparkles className="text-brand-orange mx-auto mb-6" size={40} />
              <h3 className="text-2xl font-serif font-bold text-brand-green mb-4">Proven Academic Record</h3>
              <p className="text-brand-warm-black/60 text-sm leading-relaxed mb-6">
                Our guided members consistently elevate their grade point averages, with multiple scholars testifying to advancing from lower divisions directly to graduating with clear First-Class Honors.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-brand-warm-black/5 pt-6">
                <div>
                  <p className="text-3xl font-serif font-bold text-brand-green">100%</p>
                  <p className="text-[10px] text-brand-warm-black/50 uppercase font-black tracking-wider mt-1">Consistency Support</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-brand-orange">First Class</p>
                  <p className="text-[10px] text-brand-warm-black/50 uppercase font-black tracking-wider mt-1">Aspirations Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section id="what-we-do-section" className="py-24 bg-white border-y border-brand-warm-black/5 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange text-xs font-black uppercase tracking-widest block mb-4">Core Framework</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green">What We Do</h2>
            <p className="text-brand-warm-black/60 text-base md:text-lg mt-4">
              Our structured approach combines strict educational accountability with deep guidance mapping to ensure consistent progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoList.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-brand-cream/10 border border-brand-warm-black/5 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} ${item.textColor} flex items-center justify-center mb-6 shadow-inner`}>
                      <IconComponent size={24} className="stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-green mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-brand-warm-black/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assembly Moments Galleries / Showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full mb-3">
            <Camera size={12} className="text-brand-green" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">Moments of Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Inside the Mentorship Journey</h2>
          <p className="text-brand-warm-black/70 text-base md:text-lg">
            Visualizing our seminars, high-impact review accountability targets, and student celebratory assemblies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorshipImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightbox(idx)}
              className="relative aspect-video rounded-[2rem] overflow-hidden cursor-pointer group shadow-md border border-brand-warm-black/5 bg-white"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 size={20} className="text-white mb-2" />
                <h4 className="text-white font-bold text-base leading-snug">{img.title}</h4>
                <p className="text-white/80 text-xs mt-1 leading-relaxed">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Gallery */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-orange transition-colors cursor-pointer p-4"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[4/3] w-full max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={mentorshipImages[lightbox].src} 
                  alt={mentorshipImages[lightbox].title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Left/Right controls */}
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer transition-all hover:scale-105 active:scale-95 border border-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) => (prev !== null ? (prev - 1 + mentorshipImages.length) % mentorshipImages.length : null));
                  }}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer transition-all hover:scale-105 active:scale-95 border border-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) => (prev !== null ? (prev + 1) % mentorshipImages.length : null));
                  }}
                  aria-label="Next photo"
                >
                  <ChevronRightIcon size={24} />
                </button>
              </div>

              <div className="text-center text-white mt-8 space-y-2">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-gold">
                  {mentorshipImages[lightbox].title}
                </h3>
                <p className="text-sm text-white/70 max-w-2xl mx-auto">
                  {mentorshipImages[lightbox].desc}
                </p>
                <span className="text-xs text-white/40 block font-mono font-bold mt-2">
                  Image {lightbox + 1} of {mentorshipImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
