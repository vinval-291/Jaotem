import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Award, HeartPulse, GraduationCap, ChevronRight, Gift, Calendar, Sparkles, AlertCircle, HeartHandshake, Camera, Maximize2, ChevronLeft, ChevronRight as ChevronRightIcon, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const GIRL_IMG = "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg";

const excellentImages = [
  { src: "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg", title: "The Excellent Girl School Outreach", desc: "Visiting school girls to distribute educational and physical kits." },
  { src: "https://i.postimg.cc/PfvP3670/466846370-18052365919939617-2117216860870530175-n.jpg", title: "Guided Talk Sessions", desc: "Empowering female pupils with hygiene guides and moral coaching." },
  { src: "https://i.postimg.cc/ZnNnWR3b/466849251-18052365286939617-2775084372203690106-n.jpg", title: "Hygiene & Care Kits", desc: "Distributing personal care packs to help girls stay in classroom structures." },
  { src: "https://i.postimg.cc/MZfvPsLV/466871015-18052365139939617-7904433499580482388-n.jpg", title: "Interactive Workshop", desc: "Engaging female scholars in goal-setting, confidence metrics, and self-belief workshops." },
  { src: "https://i.postimg.cc/Vs0dG7hZ/466871879-18052366003939617-4671179048459699667-n.jpg", title: "Inspiring Group Mentorship", desc: "Gathering students for motivation talks and group advice sessions." },
  { src: "https://i.postimg.cc/zDHVtdQ7/466891927-18052366057939617-7346772575134044440-n.jpg", title: "Study Pack Distributions", desc: "Encouraging secondary pupils to target core academic excellence." },
  { src: "https://i.postimg.cc/WpqhW9yW/466900001-18052365850939617-3000447991805453161-n.jpg", title: "Leadership Seminars", desc: "Guiding future female icons through career maps and digital possibilities." },
  { src: "https://i.postimg.cc/QNKH46zc/466900428-18052366030939617-1358317609975642915-n.jpg", title: "Supporter Collaborations", desc: "Working alongside community school staff to verify educational progress." },
  { src: "https://i.postimg.cc/Vs0dG7ht/467022971-18052365148939617-7061924297581905393-n.jpg", title: "Classroom Motivation Briefings", desc: "Teaching secondary scholars about integrity, health, and bright futures." },
  { src: "https://i.postimg.cc/c1tr9DzT/467036138-18052366072939617-1920907341595837609-n.jpg", title: "Empowering Next Leaders", desc: "Empowering young girls to champion community growth models." },
  { src: "https://i.postimg.cc/SQYJTZ50/excelemt.jpg", title: "Excellent Girls Union", desc: "Celebrating girl child day and celebrating collective academic strength." }
];

export default function ExcellentGirlProgram() {
  const [lightbox, setLightbox] = React.useState<number | null>(null);

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
        category="Special Completed Program Archive"
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
              <a href="#gallery-section" className="px-8 py-4 bg-brand-green text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm">
                View Program Photos
              </a>
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
            <p className="text-white/60 text-lg mt-4">We are committed to full metric measurement and transparent data recording across our school visit programs.</p>
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

      {/* Interactive Photo Galleries Section */}
      <section id="gallery-section" className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5 scroll-mt-20">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 border border-purple-200 rounded-full mb-3">
            <Camera size={12} className="text-purple-700" />
            <span className="text-[10px] font-black uppercase tracking-widest text-purple-700">Outreach Program Photos</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-brand-green mb-4">Captures from The Excellent Girl Visits</h2>
          <p className="text-brand-warm-black/70 text-lg">
            Glance through live program photographs showcasing school collaborations, pupil orientations, and hygiene kit hand-overs. Tap any frame to enlarge.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {excellentImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightbox(idx)}
              className="relative aspect-square rounded-[1.5rem] overflow-hidden cursor-pointer group shadow-sm border border-brand-warm-black/5 bg-white"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 size={24} className="text-white transform scale-75 group-hover:scale-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-brand-green text-center text-white p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">  Support A Golden Mind and Body. </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            A small direct contribution allows our administrative teams to order raw items in high volumes, curate custom girl packages, and host impactful school site outreaches.
          </p>
          <NavLink to="/donate" className="px-10 py-5 bg-brand-orange text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20 inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
            Sponsor Hygiene Kits <HeartHandshake size={20} />
          </NavLink>
        </div>
      </section>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const activeIndex = lightbox;
          const activeImg = excellentImages[activeIndex];

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-warm-black/95 z-50 flex flex-col justify-between py-8 px-6 backdrop-blur-md"
            >
              {/* Top Bar info */}
              <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-white border-b border-white/10 pb-4 shrink-0">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-[#A855F7] text-white rounded-xl flex items-center justify-center font-bold shrink-0">
                    {activeIndex + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] text-brand-gold uppercase tracking-wider block font-bold">The Excellent Girl Outreach</span>
                    <h4 className="font-bold text-white tracking-wide text-sm md:text-base truncate">{activeImg?.title}</h4>
                    <p className="text-xs text-white/60 hidden sm:block truncate">{activeImg?.desc}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setLightbox(null)}
                  className="ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all hover:scale-110 active:scale-95 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Stage viewport */}
              <div className="flex-1 flex items-center justify-between gap-2 md:gap-6 max-w-7xl mx-auto w-full py-4 overflow-hidden">
                <button 
                  onClick={() => setLightbox((activeIndex - 1 + excellentImages.length) % excellentImages.length)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="relative flex-1 max-h-[60vh] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl p-2 bg-black/40">
                  <motion.img 
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={activeImg?.src} 
                    alt={activeImg?.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[55vh] max-w-full object-contain rounded-2xl" 
                  />
                </div>

                <button 
                  onClick={() => setLightbox((activeIndex + 1) % excellentImages.length)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronRightIcon size={24} />
                </button>
              </div>

              {/* Bottom indicators */}
              <div className="max-w-7xl mx-auto w-full flex justify-center gap-1.5 overflow-x-auto py-2 shrink-0">
                {excellentImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-[#A855F7]' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </motion.div>
  );
}
