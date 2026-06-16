import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { 
  GraduationCap, HeartPulse, Zap, Globe, BookOpen, ArrowRight, Award, 
  Users, Milestone, Calendar, MapPin, Clock, Ticket, Sparkles 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const BOOK_IMG = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop";
const TOUR_IMG = "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg";
const SKILL_IMG = "https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg";
const GIRL_IMG = "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg";
const MENTOR_IMG = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop";

const upcomingPrograms = [
  {
    id: 1,
    title: 'Jaotem Annual Fundraising Gala',
    date: 'June 28, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, City Plaza',
    type: 'Fundraiser',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    desc: 'Join our founders, community partners, and sponsors for an impactful dinner to power future grassroots educational programs.'
  },
  {
    id: 2,
    title: 'Weekend Community Clean-up & Health Fair',
    date: 'July 15, 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Central Community Park',
    type: 'Outreach',
    img: 'https://images.unsplash.com/photo-1559027615-cd2428ee0a2a?q=80&w=1200&auto=format&fit=crop',
    desc: 'Bringing medical checkups, primary hygiene materials, and active sanitation mentoring to community households.'
  },
  {
    id: 3,
    title: 'Youth Empowerment Workshop: Digital Skills',
    date: 'August 24, 2026',
    time: '10:00 AM - 3:00 PM',
    location: 'Jaotem Innovation Hub',
    type: 'Educational',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop',
    desc: 'An interactive seminar teaching high-impact digital tools, typing mechanics, and freelancing avenues to regional graduates.'
  }
];

const programs = [
  {
    id: 'skill-up-empowerment',
    title: 'Skill Up Empowerment Program',
    subtitle: 'Vocational Training & Capacity Building',
    desc: 'Started in 2023, this initiative provides targeted vocational, creative, and technical skill acquisition training for local community members. It is designed to inspire self-reliance, entrepreneurship, and sustainable independent livelihood sources.',
    icon: Zap,
    img: SKILL_IMG,
    color: 'bg-green-50',
    stats: { label: 'Graduates Powered', value: '350+' },
    path: '/programs/skill-up',
    actionLabel: 'View Detailed Program & Gallery'
  },
  {
    id: 'excellent-girl',
    title: 'The Excellent Girl',
    subtitle: 'Girl Child Day Celebration',
    desc: 'Celebrated in commemoration of the International Day of the Girl Child. Started in 2023, this outreach focuses on visiting secondary schools to empower, guide, and provide sanitary, educational, and motivational resources specifically to the girl child.',
    icon: Award,
    img: GIRL_IMG,
    color: 'bg-purple-50',
    stats: { label: 'Sanitary Packs Delivered', value: '1,000+' },
    path: '/programs/excellent-girl',
    actionLabel: 'Explore Program Outreach Gallery'
  },
  {
    id: 'jaotem-mentorship',
    title: 'Jaotem Mentorship Network',
    subtitle: 'Tertiary Institutions Network',
    desc: 'A robust, high-impact mentorship program for students in tertiary institutions across south-west Nigeria. Launched in 2021, and helping students to thrive academically, we possess a proven track record of academic excellence, including outstanding First Class results.',
    icon: Users,
    img: MENTOR_IMG,
    color: 'bg-yellow-50',
    stats: { label: 'Active Scholars', value: '150+' },
    path: null,
    actionLabel: null
  },
  {
    id: 'book-thousand-children',
    title: 'Project Book A Thousand Children',
    subtitle: 'Odelemo Day Outreach',
    desc: 'In celebration of Odelemo Day 2019, children were given exercise books in order to encourage them towards academics. This was paired with a powerful, guided talk session highlighting the critical importance of academic excellence.',
    icon: BookOpen,
    img: BOOK_IMG,
    color: 'bg-blue-50',
    stats: { label: 'Study Aid Distributed', value: '1,000+' },
    path: null,
    actionLabel: null
  },
  {
    id: 'project-25-25',
    title: 'Project 25 across 25',
    subtitle: 'Secondary School Tour',
    desc: 'An intensive outreach visiting 25 secondary schools across the 6 south-west states in Nigeria, where over 5,000 students have been directly impacted with educational mentorship, academic guidelines, and physical study resources between 2022 and 2023.',
    icon: Milestone,
    img: TOUR_IMG,
    color: 'bg-orange-50',
    stats: { label: 'Students Mentored', value: '5,000+' },
    path: '/programs/project-25',
    actionLabel: 'View Field Tour Photo Album'
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
      <SEO title="Our Programs | Jaotem Foundation" description="Discover our key community initiatives and stay updated with our upcoming campaigns." />
      
      <PageHeader 
        title="Our Programs" 
        subtitle="Unifying academic mentorship, vocational skills, girl-child advocacy, and community outreach. Experience our active and upcoming campaigns."
        image={TOUR_IMG}
        category="Our Impact Footprint"
      />

      {/* Upcoming Programs Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20" id="upcoming-programs">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-3">
              <Sparkles size={12} className="text-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Active Campaigns</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Upcoming Programs & Gatherings
            </h2>
            <p className="text-brand-warm-black/60 mt-3 text-lg leading-relaxed">
              Mark your calendar and join us. There is an opportunity for volunteers, mentors, and sponsors to experience real on-the-field change.
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            <span className="px-6 py-2.5 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <Calendar size={14} /> Active Agenda 2026
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingPrograms.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-warm-black/5 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-brand-orange text-white px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest">
                    {event.type}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest mb-3">
                    <Calendar size={14} /> {event.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-green leading-tight mb-3 group-hover:text-brand-orange transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-brand-warm-black/60 text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="pt-6 border-t border-brand-warm-black/5 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-brand-warm-black/40 text-xs font-semibold">
                      <Clock size={12} /> {event.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-warm-black/40 text-xs font-semibold">
                      <MapPin size={12} className="shrink-0" /> {event.location}
                    </div>
                  </div>
                  <NavLink 
                    to="/contact" 
                    className="p-3 bg-brand-cream text-brand-green rounded-full hover:bg-brand-green hover:text-white transition-all hover:scale-110"
                    title="Inquire / RSVP"
                  >
                    <Ticket size={18} />
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">Sustainable Foundations</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight"> Our Core Program Footprints</h2>
          <p className="text-brand-warm-black/70 mt-4 text-lg">
            Below is the full lineage of our established social-impact initiatives. Select any active program to view its accomplishments, field files, and galleries.
          </p>
        </div>

        <div className="divide-y divide-brand-warm-black/5">
          {programs.map((prog, idx) => (
            <div key={prog.id} id={prog.id} className="py-20 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn("lg:col-span-7", idx % 2 !== 0 ? "lg:order-2" : "")}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                      <prog.icon size={28} />
                    </div>
                    <span className="text-xs font-black text-brand-orange tracking-widest uppercase">
                      {prog.subtitle}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">{prog.title}</h2>
                  <p className="text-brand-warm-black/70 text-base leading-relaxed mb-10">
                    {prog.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div className="p-6 bg-brand-cream rounded-3xl border border-brand-warm-black/5">
                      <p className="text-3xl font-serif font-bold text-brand-green mb-1">{prog.stats.value}</p>
                      <p className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest">{prog.stats.label}</p>
                    </div>
                    <div className="p-6 bg-brand-cream rounded-3xl border border-brand-warm-black/5">
                      <p className="text-3xl font-serif font-bold text-brand-green mb-1">Impactful</p>
                      <p className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest">Active Model</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <NavLink to="/donate" className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-brand-green text-white rounded-full font-bold hover:bg-brand-green/90 transition-all shadow-lg text-sm">
                      Sponsor Program <HeartPulse size={16} />
                    </NavLink>
                    {prog.path && prog.actionLabel && (
                      <NavLink 
                        to={prog.path} 
                        className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-full font-bold hover:bg-brand-orange/90 transition-all shadow-lg text-sm group"
                      >
                        <span>{prog.actionLabel}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </NavLink>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={cn("lg:col-span-5 relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-warm-black/5 max-w-lg mx-auto w-full", idx % 2 !== 0 ? "lg:order-1" : "")}
                >
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-warm-black/30 to-transparent" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="text-brand-gold mx-auto mb-8 animate-spin-slow" size={60} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Let's Expand Our Reach.</h2>
          <p className="text-white/70 text-xl mb-12 font-light leading-relaxed">
            We are constantly looking for partners, donors, and volunteers to scale these programs to more communities. Your support makes the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink to="/donate" className="px-10 py-4 bg-brand-orange text-white rounded-full font-bold shadow-xl shadow-brand-orange/20 hover:scale-105 transition-all text-sm">
              Become a Monthly Donor
            </NavLink>
            <NavLink to="/contact" className="px-10 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all text-sm">
              Inquire for Partnership
            </NavLink>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Programs;
