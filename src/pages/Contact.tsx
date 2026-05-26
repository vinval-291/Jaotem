import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, CheckCircle2 } from 'lucide-react';
import { doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

const CONTACT_IMG = "https://images.unsplash.com/photo-1559027615-cd2428ee0a2a?q=80&w=1200&auto=format&fit=crop";

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: ''
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all fields before submitting.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');
    try {
      const docId = `sub-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      await setDoc(doc(db, 'submissions', docId), {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        inquiryType: formData.inquiryType,
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: ''
      });
    } catch (e: any) {
      setErrorMsg('Failed to submit form. Please check your connection and try again.');
      try {
        handleFirestoreError(e, OperationType.WRITE, 'submissions');
      } catch (err) {
        // Handled or logged
      }
    } finally {
      setSubmitting(false);
    }
  };

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
                detail="admin@jaotem.com" 
                subDetail="For general inquiries, support, and billing"
              />
              <ContactInfoItem 
                Icon={Phone} 
                title="Call Us" 
                detail="+2347017239744" 
                subDetail="Mon-Fri, 9am - 6pm WAT"
              />
              <ContactInfoItem 
                Icon={MapPin} 
                title="Visit Us" 
                detail="Road 5, Ifeloju CDA, Akingbala titun" 
                subDetail="Aregbe, Abeokuta, Nigeria"
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
            
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-brand-green">Message Sent Successfully!</h4>
                <p className="text-brand-warm-black/60 text-sm max-w-sm mx-auto">
                  Thank you for reaching out to us. Our team has received your inquiry and will connect with you within 24 business hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-3 bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white transition-all rounded-xl font-bold text-xs uppercase tracking-widest"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-semibold border border-red-100">
                    {errorMsg}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">First Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                      disabled={submitting}
                      className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all disabled:opacity-50" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Last Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                      disabled={submitting}
                      className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all disabled:opacity-50" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      disabled={submitting}
                      className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all disabled:opacity-50" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Inquiry Type</label>
                    <select 
                      value={formData.inquiryType}
                      onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                      disabled={submitting}
                      className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer disabled:opacity-50"
                    >
                       <option value="General Inquiry">General Inquiry</option>
                       <option value="Partnership Proposal">Partnership Proposal</option>
                       <option value="Volunteering Opportunities">Volunteering Opportunities</option>
                       <option value="Media & Press">Media & Press</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-warm-black/40 uppercase tracking-widest pl-2">Your Message</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="How can we help you?" 
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      disabled={submitting}
                      className="w-full p-4 bg-white rounded-2xl border border-brand-warm-black/5 focus:outline-none focus:border-brand-orange transition-all resize-none disabled:opacity-50"
                    ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 bg-brand-green text-white rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {submitting ? 'Sending Message...' : 'Send Message'} <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-24">
         <div className="max-w-7xl mx-auto h-[500px] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126610.15082498226!2d3.2917719602330752!3d7.152345638202574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a0ae20ad013bb%3A0x633535bd787ad399!2sAbeokuta%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
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
