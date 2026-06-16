import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Target, ArrowRight, Star, Quote, ChevronRight, Play, ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';

// Image paths from generator
const HERO_IMAGE = "https://i.postimg.cc/9M3hQf9B/DSC-9676.jpg";
const BOOK_IMG = "https://i.postimg.cc/DywP4PDm/DSC-0023.jpg";
const SKILL_IMG = "https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg";
const MENTOR_IMG = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop";
const GIRL_IMG = "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg";
const TOUR_IMG = "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg";

const stats = [
  { label: 'Lives Impacted', value: '50k+', icon: Users },
  { label: 'Communities Reached', value: '120+', icon: Target },
  { label: 'Projects Completed', value: '450+', icon: Star },
  { label: 'Active Volunteers', value: '2.5k+', icon: Heart },
];

const featuredPrograms = [
  {
    title: 'Skill Up Empowerment',
    desc: 'Empowering communities through targeted vocational, creative, and technical skill acquisition training.',
    img: SKILL_IMG,
    path: '/programs/skill-up'
  },
  {
    title: 'The Excellent Girl',
    desc: 'Celebrating International Day of the Girl Child with critical hygiene support, leadership school visits, and academic empowerment.',
    img: GIRL_IMG,
    path: '/programs/excellent-girl'
  },
  {
    title: 'Project 25 across 25',
    desc: 'Our regional school tour visiting 25 secondary schools across 6 south-west Nigerian states to support over 5,000 pupils.',
    img: TOUR_IMG,
    path: '/programs/project-25'
  }
];

const videoTestimonials = [
  {
    id: "1uVkthQYR5cpICk5IZwNnheXgsTUdW1SL",
    name: "Amina Bello",
    title: "Vocational Graduate Success",
  },
  {
    id: "1zjSjtk9h5OEXfT2FTfNcpdRMJnZZo1jc",
    name: "Tunde Alabi",
    title: "Skill Acquisition Impact",
  },
  {
    id: "1ofxELTgDbapBYC3mNL0Y19LEAawnEjFo",
    name: "Deborah Oguntoye",
    title: "Empowerment Program Testimonial",
  },
  {
    id: "1-fhpdkm0wOLjeqEDm-U4b-_8rV0xmASj",
    name: "Chinonso Eze",
    title: "Project 25 Participant Voice",
  },
  {
    id: "1o7ymrZskuJYSoLPfbbOB0wT_kzvYTTN8",
    name: "Fatima Yusuf",
    title: "Capacity Building Success Story",
  }
];

const textTestimonials = [
  {
    name: "Amina Okoro",
    role: "Community Teacher",
    text: "Jaotem Foundation didn't just give us resources; they gave us a future. Our school has transformed completely.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Kofi Mensah",
    role: "Volunteer",
    text: "Being a volunteer here has been the most fulfilling experience of my life. The impact is real and visible.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Alao",
    role: "Scholar's Parent",
    text: "My daughter received school supplies from Project 25. Her confidence in school skyrocketed, and she now aspires to be a solar engineer!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Funmilayo Adebayo",
    role: "Vocational Graduate",
    text: "With the starter kit and sewing training from the Skill Up Program, I launched my backyard sewing venture and can now sponsor my siblings' education.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

const Home: React.FC = () => {
  const [playingVideos, setPlayingVideos] = React.useState<Record<string, boolean>>({});
  const [testimonialType, setTestimonialType] = React.useState<'video' | 'text'>('video');
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = React.useState<string>("");
  const [currentTextIdx, setCurrentTextIdx] = React.useState(0);
  const [currentVideoIdx, setCurrentVideoIdx] = React.useState(0);

  // Auto-cycle written testimonials
  React.useEffect(() => {
    if (testimonialType !== 'text') return;
    const interval = setInterval(() => {
      setCurrentTextIdx((prev) => (prev + 1) % textTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonialType]);

  const nextTestimonial = () => {
    setCurrentTextIdx((prev) => (prev + 1) % textTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTextIdx((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
  };

  const nextVideo = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideoIdx((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Jaotem Foundation | Changing Lives, Building Hope" />

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Foundation impact" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-warm-black/75 via-brand-warm-black/55 to-brand-cream/100" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full w-fit mx-auto mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Transforming Lives Together</span>
            </div>
            <h1 className="text-6xl md:text-[84px] font-serif font-medium mb-8 leading-[1.05] tracking-tight text-white drop-shadow-sm">
              Changing Lives, <br />
              <span className="italic text-brand-gold">Building Hope.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-12 leading-relaxed font-normal drop-shadow-sm">
              Bringing Hope to the future: Raising the next level of global future leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <NavLink 
                to="/donate" 
                className="group relative px-10 py-5 bg-brand-green text-white rounded-2xl font-bold overflow-hidden shadow-2xl shadow-brand-green/20 transition-transform hover:-translate-y-1"
              >
                Become a Sponsor
              </NavLink>
              <NavLink 
                to="/about" 
                className="group px-10 py-5 bg-white/50 backdrop-blur-md border border-white/60 text-brand-green rounded-2xl font-bold hover:bg-white/80 transition-all flex items-center gap-2"
              >
                Our Mission
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Impact Metrics) */}
      <section className="mt-12 relative z-20 px-6 max-w-7xl mx-auto mb-24">
        <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-brand-green/10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "flex flex-col gap-1",
                  idx > 0 && "pt-8 md:pt-0 lg:pl-8"
                )}
              >
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">{stat.label}</h3>
                <p className="text-3xl font-serif text-brand-warm-black">{stat.value}</p>
                <p className="text-[10px] text-brand-warm-black/40 uppercase font-black tracking-tighter">Impact Documented</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">Our Impact Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-brand-green leading-tight">
              Empowering the Next Generation of Changemakers.
            </h2>
            <p className="text-brand-warm-black/70 text-lg leading-relaxed mb-8">
              At Jaotem Foundation, we believe that sustainable change starts with empowerment. We don't just provide aid; we build ecosystems where communities can thrive independently through education, health, and economic support.
            </p>
            <ul className="space-y-4 mb-10">
              {['Holistic Community Development', 'Transparent Financial Stewardship', 'Data-Driven Impact Reporting'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-warm-black/80 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    <ChevronRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <NavLink to="/about" className="text-brand-green font-bold flex items-center gap-2 group">
              Learn More About Our Mission <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white/30">
              <img src={BOOK_IMG} alt="Education Impact" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold/20 rounded-[2rem] -z-0 blur-3xl animate-pulse" />
            <div className="absolute top-10 -left-10 p-6 bg-white/40 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl z-20 max-w-[200px] flex flex-col items-center text-center">
              <p className="text-brand-green font-serif font-bold text-3xl mb-1">98%</p>
              <p className="text-brand-warm-black/60 text-[10px] uppercase font-bold tracking-tighter">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-brand-green py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Sustainable Initiatives for Lasting Change.
              </h2>
            </div>
            <NavLink to="/programs" className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
              View All Programs
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((prog, idx) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] overflow-hidden group flex flex-col h-full shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 font-serif text-white">{prog.title}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed flex-grow text-sm">{prog.desc}</p>
                  <NavLink to={prog.path} className="flex items-center gap-2 text-brand-gold font-bold group-hover:gap-4 transition-all">
                    Explore Program <ArrowRight size={18} />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of Impact Section */}
      <section className="py-24 px-6 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Quote className="mx-auto text-brand-orange mb-4 opacity-20" size={60} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-brand-green leading-tight">
              Voices of Impact
            </h2>
            <p className="text-brand-warm-black/70 text-base md:text-lg leading-relaxed">
              Discover real-life stories of hope, dedication, and growth. Switch between cinematic video stories and written reflections below.
            </p>
          </div>

          {/* Tab Switcher Interface */}
          <div className="flex justify-center mb-16">
            <div className="bg-brand-green/5 p-1.5 rounded-2xl flex gap-1 border border-brand-green/10 shadow-inner">
              <button
                onClick={() => setTestimonialType('video')}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center gap-2",
                  testimonialType === 'video'
                    ? "bg-brand-green text-white shadow-lg shadow-brand-green/20"
                    : "text-brand-green hover:bg-brand-green/10"
                )}
              >
                <Play size={14} className={cn("fill-current", testimonialType === 'video' ? "text-white" : "text-brand-green")} />
                Video Stories
              </button>
              <button
                onClick={() => setTestimonialType('text')}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center gap-2",
                  testimonialType === 'text'
                    ? "bg-brand-green text-white shadow-lg shadow-brand-green/20"
                    : "text-brand-green hover:bg-brand-green/10"
                )}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                Written Voices
              </button>
            </div>
          </div>

          {testimonialType === 'video' ? (
            <div className="relative max-w-4xl mx-auto px-4 md:px-12 py-2">
              <div className="overflow-hidden">
                <motion.div
                  key={currentVideoIdx}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/40 backdrop-blur-2xl border border-white/50 p-6 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row gap-8 items-center transition-all group"
                >
                  {/* Interactive Video Playback Cover/Poster */}
                  <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-inner bg-black border border-brand-warm-black/5 flex-shrink-0 relative">
                    <button
                      onClick={() => {
                        setActiveVideoId(videoTestimonials[currentVideoIdx].id);
                        setActiveVideoTitle(videoTestimonials[currentVideoIdx].title);
                      }}
                      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-green via-brand-green/90 to-brand-orange/40 text-white group/btn transition-all duration-300 hover:from-brand-green/95 hover:to-brand-orange/50 p-6 overflow-hidden cursor-pointer"
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/5 scale-50 group-hover/btn:scale-100 transition-transform duration-700 blur-xl pointer-events-none" />
                      
                      <div className="relative bg-white/20 backdrop-blur-md text-brand-gold p-4 rounded-full border border-white/30 shadow-lg group-hover/btn:scale-110 group-hover/btn:bg-white/35 transition-all duration-300 flex items-center justify-center animate-pulse">
                        <Play size={24} className="fill-current text-white translate-x-[1.5px]" />
                      </div>
                      
                      <span className="relative mt-4 text-[10px] font-black uppercase tracking-widest text-[#fce8cc]/90 group-hover/btn:text-white transition-colors duration-300">
                        Play Fullscreen Video
                      </span>
                      
                      <span className="relative text-[9px] text-white/50 mt-1 pointer-events-none">
                        Cinematic Fullscreen Player
                      </span>
                    </button>
                  </div>

                  {/* Text details for the video story */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between text-left self-stretch py-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#cf762b] bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-4">
                        Verified Impact Video
                      </span>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-brand-green leading-snug">
                        {videoTestimonials[currentVideoIdx].title}
                      </h4>
                      <p className="text-base text-brand-warm-black/70 font-medium mt-3">
                        Featuring: <span className="text-brand-green font-bold">{videoTestimonials[currentVideoIdx].name}</span>
                      </p>
                      <p className="text-sm text-brand-warm-black/60 leading-relaxed mt-4">
                        Watch this inspiring testimonial detailing how Jaotem Foundation's specialized scholarship program provided tools and mentorship to facilitate lifelong leadership.
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-brand-warm-black/5 flex items-center justify-between">
                      <span className="text-xs text-brand-warm-black/40 font-mono font-medium">
                        Video Story {currentVideoIdx + 1} of {videoTestimonials.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-8 px-2">
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {videoTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentVideoIdx(idx)}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                        idx === currentVideoIdx 
                          ? "bg-brand-green w-8" 
                          : "bg-brand-green/20 hover:bg-brand-green/45"
                      )}
                      aria-label={`Go to video story ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={prevVideo}
                    className="p-3 rounded-full bg-white/80 backdrop-blur border border-brand-green/10 text-brand-green hover:bg-brand-green/10 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                    aria-label="Previous video story"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="p-3 rounded-full bg-white/80 backdrop-blur border border-brand-green/10 text-brand-green hover:bg-brand-green/10 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                    aria-label="Next video story"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative max-w-4xl mx-auto px-4 md:px-12 py-2">
              {/* Main Active Testimonial Card with responsive auto-height */}
              <div className="overflow-hidden">
                <motion.div
                  key={currentTextIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-white/40 backdrop-blur-2xl border border-white/50 p-8 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="text-brand-orange opacity-25" size={48} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#cf762b] bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10">
                        Verified Impact Story
                      </span>
                    </div>
                    <p className="text-brand-warm-black/80 italic leading-relaxed text-base md:text-xl lg:text-2xl mb-8 min-h-[100px] flex items-center">
                      "{textTestimonials[currentTextIdx].text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-brand-warm-black/5">
                    <img 
                      src={textTestimonials[currentTextIdx].avatar} 
                      alt={textTestimonials[currentTextIdx].name} 
                      className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm" 
                    />
                    <div>
                      <h4 className="font-bold text-brand-green text-base md:text-lg">
                        {textTestimonials[currentTextIdx].name}
                      </h4>
                      <p className="text-[10px] md:text-xs text-brand-warm-black/50 uppercase font-black tracking-widest mt-0.5">
                        {textTestimonials[currentTextIdx].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 px-2">
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {textTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTextIdx(idx)}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                        idx === currentTextIdx 
                          ? "bg-brand-green w-8" 
                          : "bg-brand-green/20 hover:bg-brand-green/45"
                      )}
                      aria-label={`Get testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white/80 backdrop-blur border border-brand-green/10 text-brand-green hover:bg-brand-green/10 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                    aria-label="Previous story"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white/80 backdrop-blur border border-brand-green/10 text-brand-green hover:bg-brand-green/10 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                    aria-label="Next story"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Full-Screen Video Modal Overlay - Play on clicked */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-brand-warm-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => {
              setActiveVideoId(null);
              // Clean up local playing indicators if any
              setPlayingVideos({});
            }}
          />
          <div className="bg-neutral-950 w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/10 z-10 aspect-video flex items-center justify-center transition-transform scale-100">
            {/* Close Button overlay */}
            <button 
              onClick={() => {
                setActiveVideoId(null);
                setPlayingVideos({});
              }}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/20 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
              title="Close Video"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              src={`https://drive.google.com/file/d/${activeVideoId}/preview?autoplay=1`}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="w-full h-full border-0 absolute inset-0"
              title={activeVideoTitle || "Cinematic Testimony Video Player"}
            />
          </div>
        </div>
      )}

      {/* Donation CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-white/30 backdrop-blur-3xl border border-white/40 p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#e3e9d2] opacity-40 blur-[100px] -z-10 rounded-full" />
          <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#fce8cc] opacity-40 blur-[100px] -z-10 rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-serif font-medium mb-8 text-brand-green">Ready to Make an Impact?</h2>
            <p className="text-brand-warm-black/70 text-xl max-w-2xl mx-auto mb-12">
              Your contribution, no matter the size, helps us build a brighter future for those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <NavLink to="/donate" className="px-12 py-5 bg-brand-green text-white rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-green/20">
                Start Donating
              </NavLink>
              <NavLink to="/contact" className="px-12 py-5 bg-white/50 backdrop-blur-md border border-white/60 text-brand-green rounded-2xl font-bold text-lg hover:bg-white/80 transition-all flex items-center gap-2">
                Become a Partner
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
