import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { MapPin, Users, BookOpen, ChevronRight, Milestone, Sparkles, Compass, ShieldAlert, HeartHandshake } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TOUR_IMG = "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg";

export default function Project25Event() {
  const regionalStates = [
    { state: "Lagos State", schools: "Primary & Secondary hubs", focus: "Early coding and study guidelines" },
    { state: "Ogun State", schools: "Host academic centers", focus: "Secondary reading techniques and materials" },
    { state: "Oyo State", schools: "Community public halls", focus: "Career maps and higher-education readiness" },
    { state: "Osun State", schools: "Rural border schools", focus: "Math and Science confidence boosters" },
    { state: "Ondo State", schools: "Coastal secondary setups", focus: "Moral clarity and entrepreneurship panels" },
    { state: "Ekiti State", schools: "Educational hub visits", focus: "First Class strategies and digital tool kits" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 bg-brand-cream/30"
    >
      <SEO 
        title="Project 25 Across 25 | Jaotem Foundation" 
        description="Providing educational guidelines, scholastic mentorship, and study materials across 25 secondary schools in Southwest Nigeria." 
      />

      <PageHeader 
        title="Project 25 across 25" 
        subtitle="Our regional school tour visiting 25 secondary schools across 6 south-west Nigerian states to support over 5,000 pupils."
        image={TOUR_IMG}
        category="Special Completed Event Archive"
      />

      {/* Main Breakdown Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 border border-orange-200 rounded-full">
              <Milestone size={14} className="text-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Southwest Nigeria Tour</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Bridging the Educational Infrastructure Void.
            </h2>

            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              Between 2022 and 2023, Jaotem Foundation executed one of its most ambitious educational campaign series: <strong>Project 25 across 25</strong>. 
              Our teams traveled thousands of kilometers to engage, inspire, and physically equip secondary pupils situated in hard-to-reach, underserved public schools. 
              Over the course of the tour, we directly provided 5,000+ students with verified study kits, career navigation guidelines, and personal leadership models.
            </p>

            <blockquote className="border-l-4 border-brand-orange pl-6 py-2 italic text-brand-warm-black/65 font-medium bg-brand-orange/5 rounded-r-2xl pr-4">
              "We realized that quality mentorship should not be restricted to top urban areas. Our local talents in country-border classrooms require resources just as much."
            </blockquote>

            <div className="flex gap-4">
              <NavLink to="/gallery" className="px-8 py-4 bg-brand-green text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm">
                Explore Gallery Snapshots
              </NavLink>
              <NavLink to="/donate" className="px-8 py-4 border border-brand-green/10 text-brand-green bg-white font-bold rounded-full hover:bg-brand-green hover:text-white transition-all text-sm">
                Sponsor Next Tour
              </NavLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/5 rounded-[3.5rem] -z-10 blur-xl" />
            
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-brand-warm-black/5 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-brand-green pb-4 border-b border-brand-warm-black/5 flex items-center gap-2">
                <Compass size={22} className="text-brand-orange" /> States Highlight & Coverage
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regionalStates.map((st, i) => (
                  <div key={i} className="p-4 bg-brand-cream/50 rounded-2xl border border-brand-warm-black/5">
                    <p className="font-bold text-brand-green flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-brand-orange shrink-0" /> {st.state}
                    </p>
                    <p className="text-[11px] text-brand-warm-black/50 mt-1">{st.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Data Highlights */}
      <section className="py-24 bg-brand-warm-black text-white rounded-[4rem] mx-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-orange text-xs font-black uppercase tracking-widest block mb-4">Tour Footprint Outcomes</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Project 25 Metrics</h2>
            <p className="text-white/60 text-lg mt-4">Reviewing the transparent educational parameters and support delivery items completed throughout the multi-state tour.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-2">25</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Targeted Secondary Schools</p>
              <p className="text-white/70 text-sm leading-relaxed">Systematically visiting both suburban and remote host institutions across all 6 southwestern Nigerian sovereign states.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-2">5,000+</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Scholars Mentored</p>
              <p className="text-white/70 text-sm leading-relaxed">Students attending intensive, live interactive briefings regarding moral strength, study plans, and career options.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-2">1,000s</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Exercise Notebooks & Supplies</p>
              <p className="text-white/70 text-sm leading-relaxed">Providing high-grade, physical notebooks, writing accessories, stationery, and math calculators directly to top pupils.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-brand-green text-center text-white p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">  Invest in Southwest Classroom Futures. </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            By supporting our next regional academic tours, you directly finance the procurement of high-grade calculators, workbook templates, maps, and coordinate packages.
          </p>
          <NavLink to="/donate" className="px-10 py-5 bg-brand-orange text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20 inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
            Sponsor Next Secondary School Tour <HeartHandshake size={20} />
          </NavLink>
        </div>
      </section>
    </motion.div>
  );
}
