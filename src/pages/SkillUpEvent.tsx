import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Zap, Users, GraduationCap, ChevronRight, Gift, Calendar, Sparkles, Building2, HeartHandshake } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SKILL_IMG = "https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg";

export default function SkillUpEvent() {
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
        category="Special Completed Event Archive"
      />

      {/* Overview Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full">
              <Zap size={14} className="text-brand-green" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">Estd. 2023</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Fueling Indigene Independence Through Skills.
            </h2>

            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              Launched in 2023, the <strong>Skill Up Empowerment Program</strong> is Jaotem Foundation's premier vocational training ecosystem. 
              Our focus centers directly on eliminating local unemployment and encouraging high-growth small business creation. 
              By delivering physical handcraft training alongside fundamental computer applications, we empower trainees to establish independent, rewarding livelihoods.
            </p>

            <blockquote className="border-l-4 border-brand-orange pl-6 py-2 italic text-brand-warm-black/65 font-medium bg-brand-orange/5 rounded-r-2xl pr-4">
              "We don't merely distribute relief items; we equip individuals with permanent technical abilities. That is the only recipe for durable, multi-generational wealth."
            </blockquote>

            <div className="flex gap-4">
              <NavLink to="/gallery" className="px-8 py-4 bg-brand-green text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm">
                Explore Event Gallery
              </NavLink>
              <NavLink to="/donate" className="px-8 py-4 border border-brand-green/10 text-brand-green bg-white font-bold rounded-full hover:bg-brand-green hover:text-white transition-all text-sm">
                Support Next Cohort
              </NavLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-green/5 rounded-[3.5rem] -z-10 blur-xl" />
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-brand-warm-black/5 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-brand-green pb-4 border-b border-brand-warm-black/5">Program Core Modules</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green">Advanced Technical Competence</h4>
                    <p className="text-xs text-brand-warm-black/60 mt-1">Teaching fundamental digital tools, creative website assembly, remote workspace operations, and client management.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green">Vocational Handcraft & Fashion</h4>
                    <p className="text-xs text-brand-warm-black/60 mt-1">Intensive physical masterclasses in modern design, dressmaking, accessories, and culinary crafts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green">Micro-Business Mentorship</h4>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold">The Journey of Skill Up</h2>
            <p className="text-white/60 text-lg mt-4">Reviewing our consecutive annual summits and their direct impact footprint on community capacity building.</p>
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
                  <h3 className="text-xl font-serif font-bold text-brand-gold">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-8 border-t border-white/5 mt-8 flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  Impact Action Completed <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white border border-brand-warm-black/5 rounded-[2.5rem] shadow-sm">
            <p className="text-5xl font-serif font-bold text-brand-green mb-2">350+</p>
            <p className="text-xs uppercase font-black text-brand-warm-black/40 tracking-wider">Vocational Graduates</p>
          </div>
          <div className="p-8 bg-white border border-brand-warm-black/5 rounded-[2.5rem] shadow-sm">
            <p className="text-5xl font-serif font-bold text-brand-green mb-2">45+</p>
            <p className="text-xs uppercase font-black text-brand-warm-black/40 tracking-wider">Businesses Seeded</p>
          </div>
          <div className="p-8 bg-white border border-brand-warm-black/5 rounded-[2.5rem] shadow-sm">
            <p className="text-5xl font-serif font-bold text-brand-green mb-2">100%</p>
            <p className="text-xs uppercase font-black text-brand-warm-black/40 tracking-wider">Free Scholarship Seats</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-brand-green text-center text-white p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/20 to-transparent -z-10" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Invest in Sustainable Human Capacity.</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Your generous donations directly sponsor training material kits, laptop configurations, expert trainers, and micro-grant starter packs for ambitious local participants.
          </p>
          <NavLink to="/donate" className="px-10 py-5 bg-brand-orange text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20 inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
            Sponsor a Vocational Student <HeartHandshake size={20} />
          </NavLink>
        </div>
      </section>
    </motion.div>
  );
}
