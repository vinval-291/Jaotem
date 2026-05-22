import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Target, ArrowRight, Star, Quote, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';

// Image paths from generator
const HERO_IMAGE = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop";
const EDUCATION_IMG = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop";
const EMPOWERMENT_IMG = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop";
const FOOD_IMG = "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop";

const stats = [
  { label: 'Lives Impacted', value: '50k+', icon: Users },
  { label: 'Communities Reached', value: '120+', icon: Target },
  { label: 'Projects Completed', value: '450+', icon: Star },
  { label: 'Active Volunteers', value: '2.5k+', icon: Heart },
];

const featuredPrograms = [
  {
    title: 'Education Support',
    desc: 'Empowering children with quality learning materials and scholarships.',
    img: EDUCATION_IMG,
    path: '/programs#education'
  },
  {
    title: 'Women Empowerment',
    desc: 'Skill development and micro-grants for aspiring female entrepreneurs.',
    img: EMPOWERMENT_IMG,
    path: '/programs#empowerment'
  },
  {
    title: 'Food Outreach',
    desc: 'Ensuring no family goes hungry through our community kitchens.',
    img: FOOD_IMG,
    path: '/programs#food'
  }
];

const testimonials = [
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
  }
];

const Home: React.FC = () => {
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
          <div className="absolute inset-0 bg-gradient-to-b from-brand-warm-black/60 via-brand-warm-black/40 to-brand-cream/100" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/40 backdrop-blur-md border border-white/40 rounded-full w-fit mx-auto mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green/70">Transforming Lives Together</span>
            </div>
            <h1 className="text-6xl md:text-[84px] font-serif font-medium mb-8 leading-[1.05] tracking-tight text-brand-green">
              Changing Lives, <br />
              <span className="italic text-brand-gold">Building Hope.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-warm-black/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Empowering underserved communities through sustainable outreach, youth development, and compassionate humanitarian support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <NavLink 
                to="/donate" 
                className="group relative px-10 py-5 bg-brand-green text-white rounded-2xl font-bold overflow-hidden shadow-2xl shadow-brand-green/20 transition-transform hover:-translate-y-1"
              >
                Become a Volunteer
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
              <img src={EDUCATION_IMG} alt="Education Impact" className="w-full h-full object-cover" />
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

      {/* Testimonials */}
      <section className="py-24 px-6 bg-brand-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto text-brand-orange mb-8 opacity-20" size={80} />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-brand-green">Voices of Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white/30 backdrop-blur-2xl border border-white/40 p-10 rounded-[2.5rem] shadow-xl text-left relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white" />
                    <div>
                      <h4 className="font-bold text-brand-green">{t.name}</h4>
                      <p className="text-[10px] text-brand-warm-black/40 uppercase font-black tracking-widest">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-brand-warm-black/70 italic leading-relaxed text-sm">"{t.text}"</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

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
