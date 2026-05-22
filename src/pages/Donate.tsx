import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Heart, CreditCard, ShieldCheck, DollarSign, Gift, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const DONATE_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop";

const donationTiers = [
  { amount: '$25', label: 'Supporter', desc: 'Provides school supplies for one child for a term.', icon: Gift },
  { amount: '$50', label: 'Empowerer', desc: 'Funds one micro-loan for a woman starting a business.', icon: DollarSign, featured: true },
  { amount: '$100', label: 'Champion', desc: 'Feeds a family of four for an entire month.', icon: Heart },
  { amount: 'Custom', label: 'Philanthropist', desc: 'Choose your own amount to make a unique impact.', icon: Sparkles }
];

import { Sparkles } from 'lucide-react';

const Donate: React.FC = () => {
  const [selectedTier, setSelectedTier] = React.useState<string | null>('$50');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Donate | Jaotem Foundation" description="Support our mission with your contribution. Every donation makes a difference." />
      
      <PageHeader 
        title="Fuel the Mission" 
        subtitle="Your generosity is the engine of our impact. Together, we can transform more lives and build stronger communities."
        image={DONATE_IMG}
        category="Support Our Cause"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif font-bold text-brand-green mb-8">Choose Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {donationTiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => setSelectedTier(tier.amount)}
                  className={cn(
                    "p-8 rounded-[2.5rem] border-2 text-left transition-all relative overflow-hidden group backdrop-blur-md",
                    selectedTier === tier.amount 
                      ? "border-brand-orange bg-brand-orange/5 shadow-xl shadow-brand-orange/10" 
                      : "border-white/40 bg-white/30 hover:border-brand-orange/30"
                  )}
                >
                  {tier.featured && selectedTier !== tier.amount && (
                    <span className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Popular</span>
                  )}
                  {selectedTier === tier.amount && (
                    <div className="absolute top-4 right-4 text-brand-orange">
                      <CheckCircle2 size={24} fill="currentColor" fillOpacity={0.1} />
                    </div>
                  )}
                  
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                    selectedTier === tier.amount ? "bg-brand-orange text-white" : "bg-white/40 text-brand-orange border border-white/40"
                  )}>
                    <tier.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand-green mb-2">{tier.amount}</h3>
                  <p className="text-[10px] font-black text-brand-warm-black/40 uppercase tracking-widest mb-4 group-hover:text-brand-orange/60">{tier.label}</p>
                  <p className="text-brand-warm-black/60 text-sm leading-relaxed">{tier.desc}</p>
                </button>
              ))}
            </div>

            <div className="space-y-6">
               <h3 className="text-xl font-serif font-bold text-brand-green">Payment Information</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 focus:outline-none focus:border-brand-orange transition-all placeholder:text-brand-warm-black/30" />
                  <input type="email" placeholder="Email Address" className="w-full p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 focus:outline-none focus:border-brand-orange transition-all placeholder:text-brand-warm-black/30" />
               </div>
               <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-warm-black/30" size={20} />
                  <input type="text" placeholder="Card Number" className="w-full p-4 pl-12 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 focus:outline-none focus:border-brand-orange transition-all placeholder:text-brand-warm-black/30" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" className="w-full p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 focus:outline-none focus:border-brand-orange transition-all placeholder:text-brand-warm-black/30" />
                  <input type="text" placeholder="CVC" className="w-full p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 focus:outline-none focus:border-brand-orange transition-all placeholder:text-brand-warm-black/30" />
               </div>
               <button className="w-full py-5 bg-brand-green text-white rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20">
                  Complete Donation of {selectedTier}
               </button>
               <div className="flex items-center justify-center gap-2 text-brand-warm-black/40 text-xs font-medium">
                  <ShieldCheck size={14} /> Guaranteed secure 256-bit SSL encrypted payment processing.
               </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="glass p-8 rounded-[2.5rem] shadow-xl">
               <h3 className="text-2xl font-serif font-bold text-brand-green mb-6">Transparency Matters</h3>
               <div className="space-y-6">
                 {[
                   { label: 'Programs', value: '85%' },
                   { label: 'Operations', value: '10%' },
                   { label: 'Fundraising', value: '5%' }
                 ].map(item => (
                   <div key={item.label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-bold text-brand-warm-black/60">{item.label}</span>
                        <span className="font-bold text-brand-green">{item.value}</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden border border-white/20">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: item.value }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-brand-gold shadow-[0_0_10px_rgba(212,141,55,0.4)]"
                        />
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-brand-green p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
               <Heart className="absolute -bottom-10 -right-10 text-white/5" size={200} fill="currentColor" />
               <h3 className="text-2xl font-serif font-bold mb-4">Why Give?</h3>
               <p className="text-white/70 text-sm leading-relaxed mb-6">
                 Your donation goes directly into the field. From school books in rural villages to micro-grants for single mothers, your impact is immediate and lasting.
               </p>
               <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-gold" /> Tax-deductible receipts
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-gold" /> Quarterly impact reports
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-gold" /> Cancel anytime (Monthly)
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Donate;
