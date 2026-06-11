import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Calendar, MapPin, Clock, ArrowRight, Users, Ticket, History, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const EVENTS_IMAGE = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop";

const upcomingEvents = [
  {
    id: 1,
    title: 'Jaotem Annual Fundraising Gala',
    date: 'June 20, 2024',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, City Plaza',
    type: 'Fundraiser',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Weekend Community Clean-up & Health Fair',
    date: 'July 05, 2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Central Community Park',
    type: 'Outreach',
    img: 'https://images.unsplash.com/photo-1559027615-cd2428ee0a2a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Youth Empowerment Workshop: Digital Skills',
    date: 'August 12, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'Jaotem Innovation Hub',
    type: 'Educational',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop'
  }
];

const pastEvents = [
  {
    id: 'skill-up-empowerment',
    title: 'Skill Up Empowerment Program',
    date: 'Summits 2023 - 2025',
    type: 'Vocational Training & Tech',
    desc: 'An intensive vocational, digital, and technical capacity-building training program engineered to create sustainable micro-enterprises and local self-reliance.',
    img: 'https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg',
    path: '/events/skill-up',
    stats: '350+ Graduates Powered'
  },
  {
    id: 'excellent-girl',
    title: 'The Excellent Girl',
    date: 'International Day of the Girl Child Outreach',
    type: 'Advocacy & Girls Care',
    desc: 'Empowering schoolgirls through comprehensive hygiene kit distribution, self-esteem workshops, coaching panels, and academic supplies.',
    img: 'https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg',
    path: '/events/excellent-girl',
    stats: '1,000+ Sanitary Packs Delivered'
  },
  {
    id: 'project-25-25',
    title: 'Project 25 across 25',
    date: 'Regional School Tour',
    type: 'Rural Education Mentorship',
    desc: 'Visiting 25 underserved public secondary schools across key states to deliver intensive educational mentorship, reading blueprints, and critical scholastic libraries.',
    img: 'https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg',
    path: '/events/project-25',
    stats: '5,000+ Students Guided'
  }
];

const Events: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Events & Campaigns | Jaotem Foundation" description="Join us in our upcoming events, fundraisers, and community outreach missions." />
      
      <PageHeader 
        title="Join Our Journey" 
        subtitle="Experience the impact first-hand. From galas to field work, there's a way for everyone to participate."
        image={EVENTS_IMAGE}
        category="Events & Campaigns"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">Upcoming Gatherings</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
                Mark Your Calendar for Change.
              </h2>
            </div>
            <div className="flex gap-4">
               <button className="px-6 py-2 rounded-full border border-brand-green/10 text-brand-green font-bold hover:bg-brand-green hover:text-white transition-all">List View</button>
               <button className="px-6 py-2 rounded-full bg-brand-green text-white font-bold">Calendar View</button>
            </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {upcomingEvents.map((event, idx) => (
             <motion.div 
               key={event.id}
               initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="group flex flex-col md:flex-row bg-white rounded-[3rem] overflow-hidden shadow-xl border border-brand-warm-black/5"
             >
                <div className="md:w-2/5 relative overflow-hidden">
                   <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute top-4 left-4 bg-brand-orange text-white px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest">
                      {event.type}
                   </div>
                </div>
                <div className="md:w-3/5 p-10 flex flex-col justify-between">
                   <div className="space-y-4">
                      <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest">
                         <Calendar size={14} /> {event.date}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-brand-green leading-tight">{event.title}</h3>
                      <div className="space-y-2">
                         <div className="flex items-center gap-2 text-brand-warm-black/50 text-sm">
                            <Clock size={16} /> {event.time}
                         </div>
                         <div className="flex items-center gap-2 text-brand-warm-black/50 text-sm">
                            <MapPin size={16} /> {event.location}
                         </div>
                      </div>
                   </div>
                   <div className="mt-8 flex items-center justify-between pt-6 border-t border-brand-warm-black/5">
                      <button className="text-brand-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
                         RSVP Now <ArrowRight size={18} />
                      </button>
                      <button className="p-3 bg-brand-cream rounded-full text-brand-green hover:bg-brand-green hover:text-white transition-all">
                         <Ticket size={20} />
                      </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Completed Special Initiatives & Past Events Archive Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="mb-16">
          <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block flex items-center gap-2">
            <History size={16} /> Completed Special Outreaches
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
            Our Historic Footprints.
          </h2>
          <p className="text-brand-warm-black/60 mt-3 text-lg max-w-3xl leading-relaxed">
            Discover the deep community value created during our landmark educational, vocational, and child advocacy achievements. Select an event below to inspect dedicated highlights, media archives, and on-ground results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((pEvent) => (
            <motion.div 
              key={pEvent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-brand-warm-black/5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={pEvent.img} 
                    alt={pEvent.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-brand-green text-white px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {pEvent.type}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest mb-3">
                    <Calendar size={12} /> {pEvent.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-green leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                    {pEvent.title}
                  </h3>
                  <p className="text-brand-warm-black/60 text-sm leading-relaxed mb-4">
                    {pEvent.desc}
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <div className="pt-6 border-t border-brand-warm-black/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="text-[10px] font-black text-brand-gold bg-brand-green/10 px-3 py-1 rounded-full uppercase tracking-wider">{pEvent.stats}</span>
                  <NavLink 
                    to={pEvent.path} 
                    className="text-brand-green font-bold text-sm flex items-center gap-2 hover:text-brand-orange transition-colors"
                  >
                    View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hosting Section */}
      <section className="px-6 py-24 bg-brand-warm-black text-white rounded-[4rem] mx-6">
         <div className="max-w-4xl mx-auto text-center">
            <Users className="text-brand-orange mx-auto mb-8" size={60} />
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Host a Campaign for Jaotem.</h2>
            <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">
              Want to start your own fundraiser or organize a community drive under our umbrella? We provide the tools, credentials, and support to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="px-12 py-5 bg-brand-orange text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-orange/20">
                  Start a Fundraiser
               </button>
               <button className="px-12 py-5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  Volunteer Handbook
               </button>
            </div>
         </div>
      </section>
    </motion.div>
  );
};

export default Events;
