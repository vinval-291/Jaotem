import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { GraduationCap, Coffee, HeartPulse, Zap, Globe, BookOpen, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const EDUCATION_IMG = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop";
const EMPOWERMENT_IMG = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop";
const FOOD_IMG = "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop";

const programs = [
  {
    id: 'education',
    title: 'Education Support',
    subtitle: 'Bright Futures Initiative',
    desc: 'Providing scholarships, school supplies, and vocational training to children and youth in underserved communities. We believe education is the ultimate equalizer.',
    icon: GraduationCap,
    img: EDUCATION_IMG,
    color: 'bg-blue-50',
    stats: { label: 'Students Funded', value: '1,200+' }
  },
  {
    id: 'empowerment',
    title: 'Women Empowerment',
    subtitle: 'Rise & Thrive Program',
    desc: 'Supporting female entrepreneurs with micro-loans, business mentorship, and digital literacy training. Empowering a woman is empowering a community.',
    icon: Zap,
    img: EMPOWERMENT_IMG,
    color: 'bg-orange-50',
    stats: { label: 'Businesses Started', value: '450+' }
  },
  {
    id: 'food',
    title: 'Food Outreach',
    subtitle: 'No Hungry Neighbor',
    desc: 'Establishing community kitchens and sustainable agriculture programs to ensure food security for vulnerable families and the elderly.',
    icon: Coffee,
    img: FOOD_IMG,
    color: 'bg-green-50',
    stats: { label: 'Meals Provided', value: '150k+' }
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
        image={EDUCATION_IMG}
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
                   <h3 className="text-xl font-bold text-brand-orange tracking-widest uppercase">{prog.subtitle}</h3>
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
