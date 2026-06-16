import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { MapPin, Users, BookOpen, ChevronRight, Milestone, Sparkles, Compass, ShieldAlert, HeartHandshake, Camera, Maximize2, ChevronLeft, ChevronRight as ChevronRightIcon, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TOUR_IMG = "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg";

const project25Images = [
  {
    src: "https://i.postimg.cc/8cBtK8cH/475852315-8966573796787257-6178816737477854592-n.jpg",
    title: "National Educational Outreach",
    desc: "Distributing primary educational resources and learning aids directly to school children."
  },
  {
    src: "https://i.postimg.cc/W30nzRMX/475978691-8966573706787266-7434850610761860668-n.jpg",
    title: "On-Ground Community Assessment",
    desc: "Engaging in field dialogue to map regional social and economic support requirements."
  },
  {
    src: "https://i.postimg.cc/Kvx9KYp4/476156959-8966573670120603-3281834515414162453-n.jpg",
    title: "Youth Dialogue Facilitation",
    desc: "Facilitating constructive brainstorming sessions on digital empowerment and development."
  },
  {
    src: "https://i.postimg.cc/R0kdvCn7/476157564-8966573816787255-1754878334013057852-n.jpg",
    title: "Practical Learning Seminars",
    desc: "Providing interactive classroom sessions for capacity building and skill exhibition."
  },
  {
    src: "https://i.postimg.cc/sxRT4fj3/476233744-8966573896787247-2465392565922513690-n.jpg",
    title: "Strategic Partner Meetings",
    desc: "Collaborating with community elders and program coordinators to establish key milestones."
  },
  {
    src: "https://i.postimg.cc/CKBJyndV/476304541-8966573736787263-1195893511702577774-n.jpg",
    title: "Digital Capability Training",
    desc: "Introducing essential computer skills to scholars to broaden their academic scope."
  },
  {
    src: "https://i.postimg.cc/Y0fbnc0R/476338719-8966573666787270-4841723710495112259-n.jpg",
    title: "Direct Educational Aid Delivery",
    desc: "Supplying classrooms with custom study modules, folders, and notebooks."
  },
  {
    src: "https://i.postimg.cc/cCNFB1sj/476347256-8966573680120602-420808821508434986-n.jpg",
    title: "On-Site Guidance Workshops",
    desc: "Guiding youth through vocational blueprints and standard entrepreneurship lessons."
  },
  {
    src: "https://i.postimg.cc/RFtPtJBx/476524999-8966573780120592-635590793575412584-n.jpg",
    title: "Classroom Motivation Assemblies",
    desc: "Inspiring secondary pupils to target academic excellence and higher pursuits."
  },
  {
    src: "https://i.postimg.cc/pdhkN5yH/476612492-8966573730120597-590659803486123820-n.jpg",
    title: "Empowering Independent Paths",
    desc: "Assisting youth to acquire sustainable vocational skills for direct self-reliance."
  },
  {
    src: "https://i.postimg.cc/qqd1xBk5/476612715-8966573980120572-3050085593903085628-n.jpg",
    title: "Local Outreach Launch",
    desc: "Unifying program efforts to drive extensive grassroots transformation."
  },
  {
    src: "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg",
    title: "Project Impact Validation",
    desc: "Documenting localized field improvements and compiling regional success."
  }
];

export default function Project25Program() {
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const regionalStates = [
    { state: "Lagos State", schools: "Primary & Secondary hubs", focus: "Early coding and study guidelines" },
    { state: "Ogun State", schools: "Host academic centers", focus: "Secondary reading techniques and materials" },
    { state: "Oyo State", schools: "Community public halls", focus: "Career maps and higher-education readiness" },
    { state: "Osun State", schools: "Rural border schools", focus: "Math and Science confidence boosters" },
    { state: "Ondo State", schools: "Coastal secondary setups", focus: "Moral clarity and entrepreneurship panels" },
    { state: "Ekiti State", schools: "Educational hub visits", focus: "First Class strategies and digital tool kits" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 bg-brand-cream/30"
    >
      <SEO 
        title="Project 25 Across 25 | Jaotem Foundation" 
        description="Providing educational guidelines, scholastic mentorship, and study materials across 25 secondary schools in Southwest Nigeria." 
      />

      <PageHeader 
        title="Project 25 across 25" 
        subtitle="Our regional school tour visiting 25 secondary schools across 6 south-west Nigerian states to support over 5,000 pupils."
        image={TOUR_IMG}
        category="Special Completed Program Archive"
      />

      {/* Main Breakdown Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 border border-orange-200 rounded-full">
              <Milestone size={14} className="text-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Southwest Nigeria Tour</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green leading-tight">
              Bridging the Educational Infrastructure Void.
            </h2>

            <p className="text-brand-warm-black/70 text-base md:text-lg leading-relaxed">
              Between 2022 and 2023, Jaotem Foundation executed one of its most ambitious educational campaign series: <strong>Project 25 across 25</strong>. 
              Our teams traveled thousands of kilometers to engage, inspire, and physically equip secondary pupils situated in hard-to-reach, underserved public schools. 
              Over the course of the tour, we directly provided 5,000+ students with verified study kits, career navigation guidelines, and personal leadership models.
            </p>

            <blockquote className="border-l-4 border-brand-orange pl-6 py-2 italic text-brand-warm-black/65 font-medium bg-brand-orange/5 rounded-r-2xl pr-4">
              "We realized that quality mentorship should not be restricted to top urban areas. Our local talents in country-border classrooms require resources just as much."
            </blockquote>

            <div className="flex gap-4">
              <a href="#gallery-section" className="px-8 py-4 bg-brand-green text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm">
                Explore Gallery Snapshots
              </a>
              <NavLink to="/donate" className="px-8 py-4 border border-brand-green/10 text-brand-green bg-white font-bold rounded-full hover:bg-brand-green hover:text-white transition-all text-sm">
                Sponsor Next Tour
              </NavLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/5 rounded-[3.5rem] -z-10 blur-xl" />
            
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-brand-warm-black/5 space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green pb-4 border-b border-brand-warm-black/5 flex items-center gap-2">
                <Compass size={22} className="text-brand-orange" /> States Highlight & Coverage
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regionalStates.map((st, i) => (
                  <div key={i} className="p-4 bg-brand-cream/50 rounded-2xl border border-brand-warm-black/5">
                    <p className="font-bold text-brand-green flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-brand-orange shrink-0" /> {st.state}
                    </p>
                    <p className="text-[11px] text-brand-warm-black/50 mt-1">{st.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Data Highlights */}
      <section className="py-24 bg-brand-warm-black text-white rounded-[4rem] mx-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-orange text-xs font-black uppercase tracking-widest block mb-4">Tour Footprint Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Project 25 Metrics</h2>
            <p className="text-white/60 text-base md:text-lg mt-4">Reviewing the transparent educational parameters and support delivery items completed throughout the multi-state tour.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">25</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Targeted Secondary Schools</p>
              <p className="text-white/70 text-sm leading-relaxed">Systematically visiting both suburban and remote host institutions across all 6 southwestern Nigerian sovereign states.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">5,000+</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Scholars Mentored</p>
              <p className="text-white/70 text-sm leading-relaxed">Students attending intensive, live interactive briefings regarding moral strength, study plans, and career options.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:translate-y-[-4px] transition-all">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">1,000s</h3>
              <p className="text-xs font-black tracking-wider text-white/50 uppercase mb-4">Exercise Notebooks & Supplies</p>
              <p className="text-white/70 text-sm leading-relaxed">Providing high-grade, physical notebooks, writing accessories, stationery, and math calculators directly to top pupils.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Photo Galleries Section */}
      <section id="gallery-section" className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5 scroll-mt-20">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 border border-orange-200 rounded-full mb-3">
            <Camera size={12} className="text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Tour Photo Archives</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">On the Field with Project 25</h2>
          <p className="text-brand-warm-black/70 text-base md:text-lg">
            See our classroom distribution campaigns, mentorship circles, and team logistics across Nigerian secondary classrooms. Tap any frame to expand.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project25Images.map((img, idx) => (
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
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">  Invest in Southwest Classroom Futures. </h2>
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            By supporting our next regional academic tours, you directly finance the procurement of high-grade calculators, workbook templates, maps, and coordinate packages.
          </p>
          <NavLink to="/donate" className="px-10 py-5 bg-brand-orange text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20 inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
            Sponsor Next Secondary School Tour <HeartHandshake size={20} />
          </NavLink>
        </div>
      </section>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const activeIndex = lightbox;
          const activeImg = project25Images[activeIndex];

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
                  <div className="w-10 h-10 bg-brand-orange text-white rounded-xl flex items-center justify-center font-bold shrink-0">
                    {activeIndex + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] text-brand-gold uppercase tracking-wider block font-bold">Project 25 across 25 Tour</span>
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
                  onClick={() => setLightbox((activeIndex - 1 + project25Images.length) % project25Images.length)}
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
                  onClick={() => setLightbox((activeIndex + 1) % project25Images.length)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronRightIcon size={24} />
                </button>
              </div>

              {/* Bottom indicators */}
              <div className="max-w-7xl mx-auto w-full flex justify-center gap-1.5 overflow-x-auto py-2 shrink-0">
                {project25Images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand-orange' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
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
