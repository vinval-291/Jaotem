import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Heart, Target, Sparkles, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const TEAM_IMG = "https://images.unsplash.com/photo-1559027615-cd2428ee0a2a?q=80&w=1200&auto=format&fit=crop";

const values = [
  { title: 'Compassion', desc: 'Heart-led actions in everything we do.', icon: Heart },
  { title: 'Integrity', desc: 'Transparent management of every resource.', icon: ShieldCheck },
  { title: 'Innovation', desc: 'Modern solutions for age-old challenges.', icon: Sparkles },
  { title: 'Sustainability', desc: 'Building systems that outlast us.', icon: TrendingUp },
];

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="About Us | Jaotem Foundation" description="Learn about our mission, vision, and the heart behind Jaotem Foundation." />
      
      <PageHeader 
        title="Our Story of Hope" 
        subtitle="Born from a vision to touch lives and build stronger communities where everyone has a chance to thrive."
        image={TEAM_IMG}
        category="About Jaotem Foundation"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Why We Exist: A Mission Beyond Charity.
            </h2>
            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              Founded in 2018, Jaotem Foundation emerged from a simple observation: charity is temporary, but empowerment is eternal. We saw communities with immense potential but lacking the structural support to unlock it.
            </p>
            <div className="p-8 bg-brand-green text-white rounded-[2rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
               <Target className="text-brand-gold mb-4" size={40} />
               <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
               <p className="text-white/80 leading-relaxed font-light">
                 To create a world where geographical location or economic background doesn't limit a human being's potential for greatness.
               </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 translate-y-8">
                <div className="aspect-square rounded-3xl bg-brand-gold/10 flex flex-col items-center justify-center p-8 text-center group hover:bg-brand-gold hover:text-white transition-all duration-500">
                    <Users className="mb-4 text-brand-gold group-hover:text-white" size={32} />
                    <h4 className="font-bold text-lg mb-1">Community</h4>
                    <p className="text-xs opacity-60 font-medium">Built by people, for people.</p>
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                   <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="community" />
                </div>
             </div>
             <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                   <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="community outreach" />
                </div>
                <div className="aspect-square rounded-3xl bg-brand-green/5 flex flex-col items-center justify-center p-8 text-center border border-brand-green/10">
                    <Heart className="mb-4 text-brand-green" size={32} />
                    <h4 className="font-bold text-lg mb-1 text-brand-green">95%</h4>
                    <p className="text-xs text-brand-green/60 font-medium">Donation Efficiency</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-warm-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-white/40 max-w-xl mx-auto">The guiding principles that drive every single outreach and empowerment project.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-white/10 rounded-3xl hover:border-brand-gold transition-colors group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                  <v.icon size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">The Visionaries</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-green leading-tight">
                Led by Compassion, Driven by Results.
              </h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: 'Dr. Jane Jaotem', role: 'Founder & CEO', bio: 'A humanitarian at heart with 20+ years of experience in community development.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
            { name: 'Kweku Adebayo', role: 'Director of Programs', bio: 'Strategic lead overseeing all our educational and health initiatives.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
            { name: 'Abeni Okafor', role: 'Head of Outreach', bio: 'Mastering the art of field work and volunteer coordination.', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop' }
          ].map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 relative shadow-xl">
                 <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-light italic">"{member.bio}"</p>
                 </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-green">{member.name}</h3>
              <p className="text-brand-orange text-sm font-bold uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
