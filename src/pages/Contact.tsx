import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const CONTACT_IMG = "https://images.unsplash.com/photo-1559027615-cd2428ee0a2a?q=80&w=1200&auto=format&fit=crop";

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Contact Us | Jaotem Foundation" description="Get in touch with Jaotem Foundation. We're here to answer your questions and explore partnerships." />
      
      <PageHeader 
        title="Get in Touch" 
        subtitle="Have a question, a partnership proposal, or just want to say hello? Our team is ready to connect with you."
        image={CONTACT_IMG}
        category="Connect With Us"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">Communication Channels</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-8 leading-tight">
              We Value Every Voice.
            </h2>
            <p className="text-brand-warm-black/70 text-lg leading-relaxed mb-12">
              Whether you're a potential partner, a future volunteer, or someone seeking support, we are here to listen and engage. Our response time is typically within 24 hours.
            </p>

            <div className="space-y-8">
              <ContactInfoItem 
                Icon={Mail} 
                title="Email Us" 
                detail="hello@jaotem.org" 
                subDetail="For general inquiries and support"
              />
              <ContactInfoItem 
                Icon={Phone} 
                title="Call Us" 
                detail="+1 (234) 567-890" 
                subDetail="Mon-Fri, 9am - 6pm EST"
              />
              <ContactInfoItem 
                Icon={MapPin} 
                title="Visit Us" 
                detail="123 Foundation Street, Hope Plaza" 
                subDetail="Community City, World"
              />
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6">
                <div className="p-6 bg-brand-cream rounded-3xl border border-brand-warm-black/5">
                    <Clock className="text-brand-orange mb-4" size={24} />
                    <h4 className="font-bold text-brand-green mb-1">Quick Response</h4>
                    <p className="text-xs text-brand-black/50 leading-relaxed font-black">Within 24 business hours guaranteed.</p>
                </div>
                <div className="p-6 bg-brand-cream rounded-3xl border border-brand-warm-black/5">
                    <Globe className="text-brand-orange mb-4" size={24} />
                    <h4 className="font-bold text-brand-green mb-1">Global Scale</h4>
                    <p className="text-xs text-brand-black/50 leading-relaxed font-black">Support available in English, French & Spanish.</p>
                </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
            <h3 className="text-3xl font-serif font-bold text-brand-green mb-8 flex items-center gap-3">
              <MessageSquare className="text-brand-orange" size={28} />
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all" />
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Inquiry Type</label>
                  <select className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer">
                     <option>General Inquiry</option>
                     <option>Partnership Proposal</option>
                     <option>Volunteering Opportunities</option>
                     <option>Media & Press</option>
                  </select>
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Your Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all resize-none"></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-brand-green text-white rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20 flex items-center justify-center gap-3"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-24">
         <div className="max-w-7xl mx-auto h-[500px] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531615!3d-37.81732767975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1580814981442!5m2!1sen!2sau" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
      </section>
    </motion.div>
  );
};

const ContactInfoItem = ({ Icon, title, detail, subDetail }: { Icon: any; title: string; detail: string; subDetail: string }) => (
  <div className="flex items-start gap-6 group">
    <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-xl font-serif font-bold text-brand-green mb-1">{detail}</p>
      <p className="text-sm text-brand-warm-black/40 font-medium">{subDetail}</p>
    </div>
  </div>
);

export default Contact;
