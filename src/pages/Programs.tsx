import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { GraduationCap, HeartPulse, Zap, Globe, BookOpen, ArrowRight, Award, Users, Milestone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BOOK_IMG = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop";
const TOUR_IMG = "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg";
const SKILL_IMG = "https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg";
const GIRL_IMG = "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg";
const MENTOR_IMG = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop";

const programs = [
  {
    id: 'skill-up-empowerment',
    title: 'Skill Up Empowerment Program',
    subtitle: 'Vocational Training & Capacity Building',
    desc: 'Started in 2023, this initiative provides targeted vocational, creative, and technical skill acquisition training for local community members. It is designed to inspire self-reliance, entrepreneurship, and sustainable independent livelihood sources.',
    icon: Zap,
    img: SKILL_IMG,
    color: 'bg-green-50',
    stats: { label: 'Vocational Capacity', value: 'Livelihoods' }
  },
  {
    id: 'excellent-girl',
    title: 'The Excellent Girl',
    subtitle: 'Girl Child Day Celebration',
    desc: 'Celebrated in commemoration of the International Day of the Girl Child. Started in 2023, this outreach focuses on visiting secondary schools to empower, guide, and provide sanitary, educational, and motivational resources specifically to the girl child.',
    icon: Award,
    img: GIRL_IMG,
    color: 'bg-purple-50',
    stats: { label: 'Girl Child Uplift', value: 'Empowered' }
  },
  {
    id: 'jaotem-mentorship',
    title: 'Jaotem Mentorship',
    subtitle: 'Tertiary Institutions Network',
    desc: 'A robust, high-impact mentorship program for students in tertiary institutions across south-west Nigeria. Launched in 2021, and helping students to thrive academically, we possess a proven track record of academic excellence, including outstanding First Class results.',
    icon: Users,
    img: MENTOR_IMG,
    color: 'bg-yellow-50',
    stats: { label: 'First Class Graduates', value: 'Proven Track' }
  },
  {
    id: 'book-thousand-children',
    title: 'Project Book A Thousand Children',
    subtitle: 'Odelemo Day Outreach',
    desc: 'In celebration of Odelemo Day 2019, children were given exercise books in order to encourage them towards academics. This was paired with a powerful, guided talk session highlighting the critical importance of academic excellence.',
    icon: BookOpen,
    img: BOOK_IMG,
    color: 'bg-blue-50',
    stats: { label: 'Books Given', value: '1,000+' }
  },
  {
    id: 'project-25-25',
    title: 'Project 25 across 25',
    subtitle: 'Secondary School Tour',
    desc: 'An intensive outreach visiting 25 secondary schools across the 6 south-west states in Nigeria, where over 5,000 students have been directly impacted with educational mentorship, academic guidelines, and physical study resources between 2022 and 2023.',
    icon: Milestone,
    img: TOUR_IMG,
    color: 'bg-orange-50',
    stats: { label: 'Students Impacted', value: '5,000+' }
  }
];

const Programs: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Our Programs | Jaotem Foundation" description="Discover our key initiatives in education, food security, and empowerment." />
      
      <PageHeader 
        title="Impactful Programs" 
        subtitle="Crafting sustainable solutions for real-world challenges through strategic initiatives and community collaboration."
        image={TOUR_IMG}
        category="Our Core Initiatives"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto divide-y divide-brand-warm-black/5">
        {programs.map((prog, idx) => (
          <div key={prog.id} id={prog.id} className="py-24 first:pt-0 last:pb-0">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
              idx % 2 !== 0 && "lg:flex-row-reverse"
            )}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                      <prog.icon size={28} />
                   </div>
                   <h3 
                     style={idx === 0 ? { color: '#ffffff' } : undefined}
                     className="text-xl font-bold text-brand-orange tracking-widest uppercase"
                   >
                     {prog.subtitle}
                   </h3>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">{prog.title}</h2>
                <p className="text-brand-warm-black/70 text-lg leading-relaxed mb-10">
                  {prog.desc}
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="p-6 bg-brand-cream rounded-3xl border border-brand-warm-black/5">
                    <p className="text-3xl font-serif font-bold text-brand-green mb-1">{prog.stats.value}</p>
                    <p className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest">{prog.stats.label}</p>
                  </div>
                  <div className="p-6 bg-brand-cream rounded-3xl border border-brand-warm-black/5">
                    <p className="text-3xl font-serif font-bold text-brand-green mb-1">Impactful</p>
                    <p className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest">Growth</p>
                  </div>
                </div>

                <NavLink to="/donate" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-warm-black text-white rounded-full font-bold hover:bg-brand-green transition-all shadow-xl">
                  Support This Program <HeartPulse size={18} />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={cn("relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl", idx % 2 !== 0 ? "lg:order-1" : "")}
              >
                <img src={prog.img} alt={prog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-warm-black/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto text-center">
           <Globe className="text-brand-gold mx-auto mb-8 animate-spin-slow" size={60} />
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Let's Expand Our Reach.</h2>
           <p className="text-white/70 text-xl mb-12 font-light leading-relaxed">
             We are constantly looking for partners, donors, and volunteers to scale these programs to more communities. Your support makes the difference.
           </p>
           <div className="flex flex-wrap justify-center gap-6">
              <NavLink to="/donate" className="px-10 py-4 bg-brand-orange text-white rounded-full font-bold shadow-xl shadow-brand-orange/20 hover:scale-105 transition-all">
                Become a Monthly Donor
              </NavLink>
              <NavLink to="/contact" className="px-10 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all">
                Inquire for Partnership
              </NavLink>
           </div>
        </div>
      </section>
    </motion.div>
  );
};

// Helper for dynamic classes
import { cn } from '../lib/utils';

export default Programs;
