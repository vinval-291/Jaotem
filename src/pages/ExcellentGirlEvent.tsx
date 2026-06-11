import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Award, HeartPulse, GraduationCap, ChevronRight, Gift, Calendar, Sparkles, AlertCircle, HeartHandshake } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const GIRL_IMG = "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg";

export default function ExcellentGirlEvent() {
  const objectives = [
    { title: "Menstrual Hygiene Advocacy", desc: "Providing premium sanitary resource kits directly to young girls, ensuring they never miss school due to lack of hygienic supplies." },
    { title: "Self-Belief & Leadership Guides", desc: "Hosting focused motivational sessions addressing body confidence, ethical standing, academic focus, and career milestones." },
    { title: "Academic Starter Resources", desc: "Equipping young schoolgirls with branded notebooks, stationery, writing accessories, and study kits." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 bg-brand-cream/30"
    >
      <SEO 
        title="The Excellent Girl Outreach | Jaotem Foundation" 
        description="Empowering the girl child with sanitary resources, leadership packages, and academic study kits." 
      />

      <PageHeader 
        title="The Excellent Girl" 
        subtitle="Celebrating International Day of the Girl Child with hygiene support, leadership school visits, and academic empowerment."
        image={GIRL_IMG}
        category="Special Completed Event Archive"
      />

      {/* Main Narrative Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 border border-purple-200 rounded-full">
              <Award size={14} className="text-purple-700" />
              <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 font-sans">Estd. 2023</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Championing the Education and Hygiene of the Girl Child.
            </h2>

            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              Every school term, countless young girls face severe interruptions to their secondary academic journey simply due to period poverty or lack of personal hygiene supplies. 
              <strong> The Excellent Girl</strong> initiative was founded in 2023 to bridge this gap. 
              Held in honor of the <em>International Day of the Girl Child</em>, our field teams visit public and private secondary schools across southwest Nigeria to empower girls with physical care kits and mental health instruction.
            </p>

            <div className="p-6 bg-white border border-brand-warm-black/5 rounded-3xl space-y-4">
              <h4 className="font-bold text-brand-green flex items-center gap-2">
                <AlertCircle size={18} className="text-brand-orange" /> Combatting Classroom Outages
              </h4>
              <p className="text-sm text-brand-warm-black/60 leading-relaxed">
                We believe that hygiene support is directly connected to educational success. Providing standard sanitary items acts as a key retention factor, allowing female pupils to attend classes with confidence and dignity.
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <NavLink to="/gallery" className="px-8 py-4 bg-brand-green text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm">
                View Event Photos
              </NavLink>
              <NavLink to="/donate" className="px-8 py-4 border border-brand-green/10 text-brand-green bg-white font-bold rounded-full hover:bg-brand-green hover:text-white transition-all text-sm">
                Sponsor Future Kits
              </NavLink>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-white border border-brand-warm-black/5 rounded-[2.5rem] shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-brand-green pb-4 border-b border-brand-warm-black/5">Direct Outreach Pillars</h3>
              
              <div className="space-y-6">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green">{obj.title}</h4>
                      <p className="text-xs text-brand-warm-black/60 mt-1 leading-relaxed">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden aspect-[4/2.5] bg-brand-green rounded-[2.5rem] text-white p-10 flex flex-col justify-between shadow-lg">
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Our Real-World Footprint</span>
                <p className="text-3xl font-serif font-bold text-white mt-2">Dignity for Every Scholar</p>
              </div>
              <p className="text-xs text-white/70 leading-relaxed max-w-sm">
                Active in southwest Nigeria, collaborating closely with secondary schools and certified health facilitators to promote female reproductive security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Impact Statistics */}
      <section className="py-24 bg-brand-warm-black text-white rounded-[4rem] mx-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
            <span className="text-brand-orange text-xs font-black uppercase tracking-widest block mb-4">Empowering Outcomes</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Annual Outreach Metrics</h2>
            <p className="text-white/60 text-lg mt-4">We are committed to full metric measurement and transparent data recording across our school visit events.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-2">1,500+</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Pupils Educated on Hygiene</p>
              <p className="text-white/70 text-sm leading-relaxed">Highly interactive lectures and guided instruction panels on girl child health, sanitization, and body confidence.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-2">1,000+</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Hygiene Care Packs Handed Out</p>
              <p className="text-white/70 text-sm leading-relaxed">Direct pack deliverables comprising certified pads, hygiene literature booklets, body care essentials, and writing utensils.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-2">15+</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Participating Institutions</p>
              <p className="text-white/70 text-sm leading-relaxed">Collaborating fully with local school principals, counselors, and southwest regional educational development desks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-brand-green text-center text-white p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Support A Golden Mind and Body.</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            A small direct contribution allows our administrative teams to order raw items in high volumes, curate custom girl packages, and host impactful school site outreaches.
          </p>
          <NavLink to="/donate" className="px-10 py-5 bg-brand-orange text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20 inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
            Sponsor Hygiene Kits <HeartHandshake size={20} />
          </NavLink>
        </div>
      </section>
    </motion.div>
  );
}
