import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Calendar, MapPin, Clock, ArrowRight, Users, Ticket } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const EVENTS_IMAGE = "/src/assets/images/african_foundation_hero_1779020187354.png";

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
    img: '/src/assets/images/african_volunteer_mission_1779020254330.png'
  },
  {
    id: 3,
    title: 'Youth Empowerment Workshop: Digital Skills',
    date: 'August 12, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'Jaotem Innovation Hub',
    type: 'Educational',
    img: '/src/assets/images/african_women_empowerment_1779020223070.png'
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
