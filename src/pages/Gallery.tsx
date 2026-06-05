import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Camera, PlayCircle, Maximize2, FolderOpen, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, X, Facebook } from 'lucide-react';
import { cn } from '../lib/utils';

const HERO_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop";

const archiveImages = [
  { src: "https://i.postimg.cc/SRK4DFPT/IMG-5281.jpg", title: "Skill Up Summit Launch", desc: "Opening session of the 2024 intensive training program." },
  { src: "https://i.postimg.cc/854DRPZn/IMG-5283.jpg", title: "Classroom Mentorship", desc: "Expert tutors guiding direct practical steps in digital literacy." },
  { src: "https://i.postimg.cc/3Nwhn56Q/IMG-5286.jpg", title: "Creative Design Focus", desc: "Trainees collaborating on visual design blueprints." },
  { src: "https://i.postimg.cc/0jNvcR3y/IMG-5289.jpg", title: "Empowered Scholars", desc: "Passionate classroom reactions and direct participation." },
  { src: "https://i.postimg.cc/2y5Y2RJz/IMG-5291.jpg", title: "Group Synergy Class", desc: "Cooperative peer-to-peer training projects." },
  { src: "https://i.postimg.cc/mDyZmSgP/IMG-5299.jpg", title: "Tech Skill Acquisition", desc: "Deep focus on practical technical and structural handbooks." },
  { src: "https://i.postimg.cc/J0TrL4J8/IMG-5301.jpg", title: "Youth Development", desc: "Future leaders collaborating during interactive workshop hours." },
  { src: "https://i.postimg.cc/rsyV3tDv/IMG-5304.jpg", title: "Vocational Inspiration", desc: "Engaged attendees taking key notes during motivational talks." },
  { src: "https://i.postimg.cc/ZnYb2y9t/IMG-5307.jpg", title: "Interactive Workshop", desc: "Practical hands-on lab sessions designed for self-reliance." },
  { src: "https://i.postimg.cc/gjMzWkRb/IMG-5309.jpg", title: "Classroom Engagement", desc: "Dedicated student sessions fostering strong future prospects." },
  { src: "https://i.postimg.cc/kMwX8wZ3/IMG-5312.jpg", title: "Fostering Innovation", desc: "Scholars building creative assets and business prototypes." },
  { src: "https://i.postimg.cc/Gh23jGwt/IMG-5316.jpg", title: "Skill Exhibition Session", desc: "Demonstration of practical milestones completed by cohort teams." },
  { src: "https://i.postimg.cc/3Jc8fNY0/IMG-5320.jpg", title: "Mentorship Circle", desc: "Direct one-on-one professional guidance and support loops." },
  { src: "https://i.postimg.cc/RCGVfG8v/IMG-5323.jpg", title: "Dynamic Lecture Hall", desc: "Impactful presentations during the core summit hours." },
  { src: "https://i.postimg.cc/65mWbqtH/IMG-5326.jpg", title: "Empowerment Cohort", desc: "Trainees showcasing certificates and completed study modules." },
  { src: "https://i.postimg.cc/JzH1f8zT/IMG-5329.jpg", title: "Bright Future Path", desc: "Young girls expressing gratitude for academic resources." },
  { src: "https://i.postimg.cc/P5vtgH5B/IMG-5331.jpg", title: "Practical Workshop Lab", desc: "Classroom environments tailored for immersive technical training." },
  { src: "https://i.postimg.cc/rwR8BTp8/IMG-5332.jpg", title: "Cohort Group Capture", desc: "Socio-economic empowerment sessions uniting enthusiastic minds." },
  { src: "https://i.postimg.cc/HLGpHNJW/IMG-5346.jpg", title: "Leadership Seminars", desc: "Encouraging higher education and standard work ethics." },
  { src: "https://i.postimg.cc/zfmJ5QLb/IMG-5348.jpg", title: "Inspiring Academic Goals", desc: "Special panels directing guides for tertiary excellence." },
  { src: "https://i.postimg.cc/43CJZ0Ks/IMG-5351.jpg", title: "Success Mentoring", desc: "First-class mentorship graduates sharing real success strategies." },
  { src: "https://i.postimg.cc/TP8RGsym/IMG-5353.jpg", title: "Empowerment and Beyond", desc: "Dedicated support structures building generational pathways." },
  { src: "https://i.postimg.cc/9fGcfBTt/IMG-5357.jpg", title: "Global Summit Outreach", desc: "Field coordinators distributing academic manuals and supplies." },
  { src: "https://i.postimg.cc/cJQdJcYX/IMG-5361.jpg", title: "Community Development", desc: "Vibrant and celebratory moments highlighting regional progress." },
  { src: "https://i.postimg.cc/gJmmL6Hr/IMG-5362.jpg", title: "Pistine Program Standards", desc: "Our committed trainers receiving well-deserved acknowledgments." },
  { src: "https://i.postimg.cc/tTppnVNy/IMG-5364.jpg", title: "Celebrating Excellence", desc: "Smiles, awards, and certification moments for peak performers." },
  { src: "https://i.postimg.cc/9MCCwqY4/IMG-5367.jpg", title: "Inspiring the Next Gen", desc: "Direct educational impacts raising future leaders of tomorrow." },
  { src: "https://i.postimg.cc/xCnnNb38/IMG-5369.jpg", title: "Empowering communities", desc: "Vocational trainees celebrating their newfound independent skills." },
  { src: "https://i.postimg.cc/50g1BNsY/IMG-5372.jpg", title: "Unified Under Hope", desc: "Our massive group souvenir capture of Skill Up Summit 2024." },
  { src: "https://i.postimg.cc/fLDDS0fS/IMG-5451.jpg", title: "Strategic Milestones ahead", desc: "Reviewing progress metrics to scale future local impact." }
];

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

const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = React.useState<{ group: 'archive' | 'project25'; index: number } | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Media Gallery | Jaotem Foundation" description="A visual journey through our impact, outreach, and community transformations." />
      
      <PageHeader 
        title="Visual Impact" 
        subtitle="Every picture tells a story of hope, resilience, and transformation. Witness the real changes happening on the ground."
        image={HERO_IMG}
        category="Our Media Wall"
      />

      {/* Trainees 2024 & Testimonials Google Drive Showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full w-fit mb-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Live Archive Portal</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Extract of Skill Up Summit 2024: Trainees & Testimonials.
            </h2>
            
            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              We believe in deep transparency and real-world outcomes. Highlight of our complete repository of 2024 Skill Up Summit photos, individual success snapshots of vocational trainees, and direct testimonial video recordings.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0">
                  <PlayCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">Trainee Voice Testimonials</h4>
                  <p className="text-xs text-brand-warm-black/50">High-resolution video responses and statements from our vocational mechanics, tailors, and computer scholars.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">On-Site Media Records</h4>
                  <p className="text-xs text-brand-warm-black/50">Capture shots of interactive classrooms and actual trainees completing their skill handbooks during 2024.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://drive.google.com/drive/folders/1b-66N2TzWmwkIkLkjT34y8B-0TsASDEU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green text-white rounded-2xl font-bold shadow-xl shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
              >
                Open to view all images <FolderOpen size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-green/5 rounded-[3rem] -z-10 blur-xl" />
            
            {/* Live Interactive Grid of the 2024 Summit Photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-2 bg-white rounded-[2.5rem] shadow-xl border border-brand-warm-black/5">
              {archiveImages.slice(0, 6).map((img, index) => {
                const isLast = index === 5;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLightbox({ group: 'archive', index })}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm group border border-brand-warm-black/5"
                  >
                    <img 
                      src={img.src} 
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    {isLast ? (
                      <div className="absolute inset-0 bg-brand-green/90 backdrop-blur-[2px] flex flex-col items-center justify-center p-2 text-white transition-colors duration-300 group-hover:bg-brand-green/95">
                        <span className="text-xl font-bold font-serif">+{archiveImages.length - 5}</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold text-center">Summit Photos</span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize2 size={20} className="text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            {/* Click Indicator */}
            <p className="text-center text-xs text-brand-warm-black/50 mt-4 italic">
              Click on any thumbnail above to enter fullscreen live-archive slideshow memory book
            </p>

            <div className="absolute -bottom-6 -right-3 p-3 bg-brand-orange text-white rounded-xl font-black shadow-lg text-[9px] tracking-widest uppercase">
              {archiveImages.length} live memories
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 25 ACROSS 25 Showcase Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full w-fit mb-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Project 25 Across 25</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Empowering Nations: The Project 25 Across 25 Archive
            </h2>
            
            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              Discover raw, unfiltered, live on-ground moments from our national youth educational empowerment initiatives. This showcase captures our teams in direct field dialogue, school-supply distributions, and capability building seminars across several regional hubs.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">On-Field Supply Distribution</h4>
                  <p className="text-xs text-brand-warm-black/50">Delivering primary textbooks, workbooks, and core teaching modules directly to future generational minds.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
                  <Facebook size={20} className="fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">Live Community Engagement</h4>
                  <p className="text-xs text-brand-warm-black/50">Capturing our project supervisors working hand-in-hand with regional leaders to scale academic resources.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://web.facebook.com/media/set/?set=a.4699107713533908&type=3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#1877F2] text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:bg-[#166FE5] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
              >
                <Facebook size={20} className="fill-current" /> View More Images on Facebook <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/5 rounded-[3rem] -z-10 blur-xl" />
            
            {/* Live Interactive Grid of the Project 25 Photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-2 bg-white rounded-[2.5rem] shadow-xl border border-brand-warm-black/5">
              {project25Images.slice(0, 6).map((img, index) => {
                const isLast = index === 5;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLightbox({ group: 'project25', index })}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm group border border-brand-warm-black/5"
                  >
                    <img 
                      src={img.src} 
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    {isLast ? (
                      <div className="absolute inset-0 bg-brand-green/90 backdrop-blur-[2px] flex flex-col items-center justify-center p-2 text-white transition-colors duration-300 group-hover:bg-brand-green/95">
                        <span className="text-xl font-bold font-serif">+{project25Images.length - 5}</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold text-center">Project Photos</span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize2 size={20} className="text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            {/* Click Indicator */}
            <p className="text-center text-xs text-brand-warm-black/50 mt-4 italic">
              Click on any thumbnail above to enter fullscreen Project 25 live-archive slideshow
            </p>

            <div className="absolute -bottom-6 -right-3 p-3 bg-brand-orange text-white rounded-xl font-black shadow-lg text-[9px] tracking-widest uppercase">
              {project25Images.length} project highlights
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Callout */}
      <section className="px-6 py-24 bg-brand-cream">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-brand-green mb-8 tracking-tight">Follow Our Live Journey</h2>
            <p className="text-brand-warm-black/60 text-lg mb-12">Get daily updates and behind-the-scenes moments from our field missions on social media.</p>
            <div className="flex justify-center gap-6">
               <SocialFollowBtn Icon={Camera} label="Instagram" color="#E1306C" />
               <SocialFollowBtn Icon={PlayCircle} label="YouTube" color="#FF0000" />
            </div>
         </div>
      </section>

      {/* Immersive Sandbox Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const activeImages = lightbox.group === 'archive' ? archiveImages : project25Images;
          const activeIndex = lightbox.index;
          const titleLabel = lightbox.group === 'archive' ? 'Skill Up memories' : 'Project 25 highlights';
          const activeImg = activeImages[activeIndex];

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
                  <div className="w-10 h-10 bg-brand-gold text-brand-green rounded-xl flex items-center justify-center font-bold shrink-0">
                    {activeIndex + 1}
                  </div>
                  <div className="min-w-0 flex-1">
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
                {/* Prev Button */}
                <button 
                  onClick={() => setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + activeImages.length) % activeImages.length } : null)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Main Image container */}
                <div className="relative flex-1 max-h-[55vh] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl p-2 bg-black/40">
                  <motion.img 
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={activeImg?.src} 
                    alt={activeImg?.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[50vh] max-w-full object-contain rounded-2xl" 
                  />
                </div>

                {/* Next Button */}
                <button 
                  onClick={() => setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % activeImages.length } : null)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Bottom bar carousel */}
              <div className="max-w-7xl mx-auto w-full shrink-0">
                <div className="flex items-center justify-between text-white/40 text-[10px] uppercase tracking-wider mb-2">
                  <span>SCROLL {titleLabel}</span>
                  <span>{activeIndex + 1} / {activeImages.length}</span>
                </div>
                <div className="flex gap-2 overflow-x-auto py-2 scrollbar-none justify-start md:justify-center">
                  {activeImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightbox(prev => prev ? { ...prev, index: idx } : null)}
                      className={cn(
                        "relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all hover:scale-105 active:scale-95",
                        activeIndex === idx ? "border-brand-gold scale-105 shadow-md shadow-brand-gold/30" : "border-transparent opacity-50 hover:opacity-100"
                      )}
                    >
                      <img 
                        src={img.src} 
                        alt="" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </motion.div>
  );
};

const SocialFollowBtn = ({ Icon, label, color }: { Icon: any; label: string; color: string }) => (
  <a href="#" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:scale-105 transition-all group">
     <Icon size={24} style={{ color }} />
     <span className="font-bold text-brand-warm-black group-hover:text-brand-green transition-colors">{label}</span>
  </a>
);

export default Gallery;
