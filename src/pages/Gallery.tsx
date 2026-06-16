import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Camera, PlayCircle, Maximize2, FolderOpen, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, X, Facebook } from 'lucide-react';
import { cn } from '../lib/utils';

const HERO_IMG = "https://i.postimg.cc/tJtvRRY3/DSC-0004.jpg";

const archiveImages = [
  { src: "https://i.postimg.cc/gjMzWkRb/IMG-5309.jpg" },
  { src: "https://i.postimg.cc/kMwX8wZ3/IMG-5312.jpg" },
  { src: "https://i.postimg.cc/65mWbqtH/IMG-5326.jpg" },
  { src: "https://i.postimg.cc/P5vtgH5B/IMG-5331.jpg" },
  { src: "https://i.postimg.cc/SRK4DFPT/IMG-5281.jpg" },
  { src: "https://i.postimg.cc/TP8RGsym/IMG-5353.jpg" },
  { src: "https://i.postimg.cc/854DRPZn/IMG-5283.jpg" },
  { src: "https://i.postimg.cc/3Nwhn56Q/IMG-5286.jpg" },
  { src: "https://i.postimg.cc/0jNvcR3y/IMG-5289.jpg" },
  { src: "https://i.postimg.cc/2y5Y2RJz/IMG-5291.jpg" },
  { src: "https://i.postimg.cc/mDyZmSgP/IMG-5299.jpg" },
  { src: "https://i.postimg.cc/J0TrL4J8/IMG-5301.jpg" },
  { src: "https://i.postimg.cc/rsyV3tDv/IMG-5304.jpg" },
  { src: "https://i.postimg.cc/ZnYb2y9t/IMG-5307.jpg" },
  { src: "https://i.postimg.cc/Gh23jGwt/IMG-5316.jpg" },
  { src: "https://i.postimg.cc/3Jc8fNY0/IMG-5320.jpg" },
  { src: "https://i.postimg.cc/RCGVfG8v/IMG-5323.jpg" },
  { src: "https://i.postimg.cc/JzH1f8zT/IMG-5329.jpg" },
  { src: "https://i.postimg.cc/rwR8BTp8/IMG-5332.jpg" },
  { src: "https://i.postimg.cc/HLGpHNJW/IMG-5346.jpg" },
  { src: "https://i.postimg.cc/zfmJ5QLb/IMG-5348.jpg" },
  { src: "https://i.postimg.cc/43CJZ0Ks/IMG-5351.jpg" },
  { src: "https://i.postimg.cc/9fGcfBTt/IMG-5357.jpg" },
  { src: "https://i.postimg.cc/cJQdJcYX/IMG-5361.jpg" },
  { src: "https://i.postimg.cc/gJmmL6Hr/IMG-5362.jpg" },
  { src: "https://i.postimg.cc/tTppnVNy/IMG-5364.jpg" },
  { src: "https://i.postimg.cc/9MCCwqY4/IMG-5367.jpg" },
  { src: "https://i.postimg.cc/xCnnNb38/IMG-5369.jpg" },
  { src: "https://i.postimg.cc/50g1BNsY/IMG-5372.jpg" },
  { src: "https://i.postimg.cc/fLDDS0fS/IMG-5451.jpg" }
];

const project25Images = [
  { src: "https://i.postimg.cc/8cBtK8cH/475852315-8966573796787257-6178816737477854592-n.jpg" },
  { src: "https://i.postimg.cc/W30nzRMX/475978691-8966573706787266-7434850610761860668-n.jpg" },
  { src: "https://i.postimg.cc/Kvx9KYp4/476156959-8966573670120603-3281834515414162453-n.jpg" },
  { src: "https://i.postimg.cc/R0kdvCn7/476157564-8966573816787255-1754878334013057852-n.jpg" },
  { src: "https://i.postimg.cc/sxRT4fj3/476233744-8966573896787247-2465392565922513690-n.jpg" },
  { src: "https://i.postimg.cc/CKBJyndV/476304541-8966573736787263-1195893511702577774-n.jpg" },
  { src: "https://i.postimg.cc/Y0fbnc0R/476338719-8966573666787270-4841723710495112259-n.jpg" },
  { src: "https://i.postimg.cc/cCNFB1sj/476347256-8966573680120602-420808821508434986-n.jpg" },
  { src: "https://i.postimg.cc/RFtPtJBx/476524999-8966573780120592-635590793575412584-n.jpg" },
  { src: "https://i.postimg.cc/pdhkN5yH/476612492-8966573730120597-590659803486123820-n.jpg" },
  { src: "https://i.postimg.cc/qqd1xBk5/476612715-8966573980120572-3050085593903085628-n.jpg" },
  { src: "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg" }
];

const skillup2025Images = [
  { src: "https://i.postimg.cc/Y92fM2fW/DSC-9710.jpg" },
  { src: "https://i.postimg.cc/pTZx4vRc/DSC-9822.jpg" },
  { src: "https://i.postimg.cc/tJtvRRY3/DSC-0004.jpg" },
  { src: "https://i.postimg.cc/9M3hQf9B/DSC-9676.jpg" },
  { src: "https://i.postimg.cc/GtdnvSq4/DSC-9673.jpg" },
  { src: "https://i.postimg.cc/vBWdgdLD/DSC-9695.jpg" },
  { src: "https://i.postimg.cc/90ntbqsQ/DSC-9764.jpg" },
  { src: "https://i.postimg.cc/HLY7DYGy/4abbf77b-786a-44c4-841c-df1c4f396724.jpg" },
  { src: "https://i.postimg.cc/h45bRBJK/DSC-9715.jpg" },
  { src: "https://i.postimg.cc/0ygYr0d7/DSC-9724.jpg" },
  { src: "https://i.postimg.cc/XvYgdcXD/DSC-9775.jpg" },
  { src: "https://i.postimg.cc/j5Z0vhhV/DSC-9786.jpg" },
  { src: "https://i.postimg.cc/WzzRyJ9t/DSC-9789.jpg" },
  { src: "https://i.postimg.cc/HnwMfVV5/DSC-9820.jpg" },
  { src: "https://i.postimg.cc/hvmFgqBK/DSC-9824.jpg" },
  { src: "https://i.postimg.cc/fbq19bWW/DSC-9946.jpg" },
  { src: "https://i.postimg.cc/fW91VZGd/DSC-9973.jpg" },
  { src: "https://i.postimg.cc/gkbQRQpL/DSC-9982.jpg" },
  { src: "https://i.postimg.cc/dQ8xj64h/DSC-0003.jpg" },
  { src: "https://i.postimg.cc/RFtb8L9M/DSC-0011.jpg" },
  { src: "https://i.postimg.cc/8kh0m4t5/DSC-0017.jpg" },
  { src: "https://i.postimg.cc/DywP4PDm/DSC-0023.jpg" },
  { src: "https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg" }
];

const excellentImages = [
  { src: "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg" },
  { src: "https://i.postimg.cc/PfvP3670/466846370-18052365919939617-2117216860870530175-n.jpg" },
  { src: "https://i.postimg.cc/ZnNnWR3b/466849251-18052365286939617-2775084372203690106-n.jpg" },
  { src: "https://i.postimg.cc/MZfvPsLV/466871015-18052365139939617-7904433499580482388-n.jpg" },
  { src: "https://i.postimg.cc/Vs0dG7hZ/466871879-18052366003939617-4671179048459699667-n.jpg" },
  { src: "https://i.postimg.cc/zDHVtdQ7/466891927-18052366057939617-7346772575134044440-n.jpg" },
  { src: "https://i.postimg.cc/WpqhW9yW/466900001-18052365850939617-3000447991805453161-n.jpg" },
  { src: "https://i.postimg.cc/QNKH46zc/466900428-18052366030939617-1358317609975642915-n.jpg" },
  { src: "https://i.postimg.cc/Vs0dG7ht/467022971-18052365148939617-7061924297581905393-n.jpg" },
  { src: "https://i.postimg.cc/c1tr9DzT/467036138-18052366072939617-1920907341595837609-n.jpg" },
  { src: "https://i.postimg.cc/SQYJTZ50/excelemt.jpg" }
];

const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = React.useState<{ group: 'archive' | 'project25' | 'skillup2025' | 'excellent'; index: number } | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const limit = isMobile ? 6 : 9;

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

            <div className="pt-4 hidden lg:block">
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
              {archiveImages.slice(0, limit).map((img, index) => {
                const showOverlay = archiveImages.length > limit && index === limit - 1;
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
                      alt="Gallery Photo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    {showOverlay ? (
                      <div className="absolute inset-0 bg-brand-green/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-2 text-white transition-all duration-305 group-hover:bg-brand-green/90">
                        <span className="text-2xl font-black font-serif">+{archiveImages.length - (limit - 1)}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mt-1 text-center">View More</span>
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
            <div className="text-center mt-5">
              <p className="text-xs text-brand-warm-black/50 italic">
                Click on any thumbnail above to enter fullscreen live-archive slideshow memory book
              </p>
            </div>

            {/* Mobile View More Button */}
            <div className="mt-6 flex justify-center lg:hidden">
              <a 
                href="https://drive.google.com/drive/folders/1b-66N2TzWmwkIkLkjT34y8B-0TsASDEU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-white rounded-2xl font-bold shadow-lg shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all w-full justify-center text-sm"
              >
                Open to view all images <FolderOpen size={18} />
              </a>
            </div>

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

            <div className="pt-4 hidden lg:block">
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
              {project25Images.slice(0, limit).map((img, index) => {
                const showOverlay = project25Images.length > limit && index === limit - 1;
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
                      alt="Gallery Photo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    {showOverlay ? (
                      <div className="absolute inset-0 bg-brand-orange/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-2 text-white transition-all duration-305 group-hover:bg-brand-orange/90">
                        <span className="text-2xl font-black font-serif">+{project25Images.length - (limit - 1)}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mt-1 text-center">View More</span>
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
            <div className="text-center mt-5">
              <p className="text-center text-xs text-brand-warm-black/50 italic">
                Click on any thumbnail above to enter fullscreen Project 25 live-archive slideshow
              </p>
            </div>

            {/* Mobile View More Button */}
            <div className="mt-6 flex justify-center lg:hidden">
              <a 
                href="https://web.facebook.com/media/set/?set=a.4699107713533908&type=3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-[#166FE5] hover:scale-105 active:scale-95 transition-all w-full justify-center text-sm"
              >
                <Facebook size={18} className="fill-current" /> View More Images on Facebook <ArrowRight size={18} />
              </a>
            </div>

            <div className="absolute -bottom-6 -right-3 p-3 bg-brand-orange text-white rounded-xl font-black shadow-lg text-[9px] tracking-widest uppercase">
              {project25Images.length} project highlights
            </div>
          </div>
        </div>
      </section>

      {/* SKILL UP 2025 Showcase Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full w-fit mb-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Vocational Milestone 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              Skill Up Empowerment Program 2025 Archive
            </h2>
            
            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              Explore the intensive 2025 vocational masterclasses. Witness on-site snapshots of our facilitators, interactive peer collaborations, and trainees mastering core creative and digital skills to achieve self-reliance.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">Interactive Tech Lab Workshops</h4>
                  <p className="text-xs text-brand-warm-black/50">Trainees getting hands-on with digital literacy, design, and computational tool sets.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
                  <FolderOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">Active Mentorship Desk</h4>
                  <p className="text-xs text-brand-warm-black/50">Coordinators and professional guides delivering step-by-step vocational instructions.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 hidden lg:block">
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
            <div className="absolute -inset-4 bg-brand-orange/5 rounded-[3rem] -z-10 blur-xl" />
            
            {/* Live Interactive Grid of the Skill Up 2025 Photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-2 bg-white rounded-[2.5rem] shadow-xl border border-brand-warm-black/5">
              {skillup2025Images.slice(0, limit).map((img, index) => {
                const showOverlay = skillup2025Images.length > limit && index === limit - 1;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLightbox({ group: 'skillup2025', index })}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm group border border-brand-warm-black/5"
                  >
                    <img 
                      src={img.src} 
                      alt="Gallery Photo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    {showOverlay ? (
                      <div className="absolute inset-0 bg-brand-green/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-2 text-white transition-all duration-305 group-hover:bg-brand-green/90">
                        <span className="text-2xl font-black font-serif">+{skillup2025Images.length - (limit - 1)}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mt-1 text-center">View More</span>
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
            <div className="text-center mt-5">
              <p className="text-center text-xs text-brand-warm-black/50 italic">
                Click on any thumbnail above to enter fullscreen Skill Up 2025 live-archive slideshow
              </p>
            </div>

            {/* Mobile View More Button */}
            <div className="mt-6 flex justify-center lg:hidden">
              <a 
                href="https://drive.google.com/drive/folders/1b-66N2TzWmwkIkLkjT34y8B-0TsASDEU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-white rounded-2xl font-bold shadow-lg shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all w-full justify-center text-sm"
              >
                Open to view all images <FolderOpen size={18} />
              </a>
            </div>

            <div className="absolute -bottom-6 -right-3 p-3 bg-brand-orange text-white rounded-xl font-black shadow-lg text-[9px] tracking-widest uppercase">
              {skillup2025Images.length} project highlights
            </div>
          </div>
        </div>
      </section>

      {/* THE EXCELLENT Showcase Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-warm-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full w-fit mb-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Girls Empowerment Outreach</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
              The Excellent Initiative Showcase
            </h2>
            
            <p className="text-brand-warm-black/70 text-lg leading-relaxed">
              Witness our impactful Girl Child Day celebrations. Our teams visit secondary schools to provide hygiene kits, study notebooks, and guided motivation talks focused on building bold future female leaders.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">School Outreach Support</h4>
                  <p className="text-xs text-brand-warm-black/50">Broad supply drives bringing essential resources directly to classrooms.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-warm-black/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
                  <Facebook size={20} className="fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green">Hygiene & Educational Packs</h4>
                  <p className="text-xs text-brand-warm-black/50">Enabling academic focus through personal health resources and physical supplies.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 hidden lg:block">
              <a 
                href="https://facebook.com/jaotemfoundation" 
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
            
            {/* Live Interactive Grid Of The Excellent Photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-2 bg-white rounded-[2.5rem] shadow-xl border border-brand-warm-black/5">
              {excellentImages.slice(0, limit).map((img, index) => {
                const showOverlay = excellentImages.length > limit && index === limit - 1;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLightbox({ group: 'excellent', index })}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm group border border-brand-warm-black/5"
                  >
                    <img 
                      src={img.src} 
                      alt="Gallery Photo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    {showOverlay ? (
                      <div className="absolute inset-0 bg-brand-orange/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-2 text-white transition-all duration-305 group-hover:bg-brand-orange/90">
                        <span className="text-2xl font-black font-serif">+{excellentImages.length - (limit - 1)}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mt-1 text-center">View More</span>
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
            <div className="text-center mt-5">
              <p className="text-center text-xs text-brand-warm-black/50 italic">
                Click on any thumbnail above to enter fullscreen Excellent Initiative live-archive slideshow
              </p>
            </div>

            {/* Mobile View More Button */}
            <div className="mt-6 flex justify-center lg:hidden">
              <a 
                href="https://facebook.com/jaotemfoundation" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-[#166FE5] hover:scale-105 active:scale-95 transition-all w-full justify-center text-sm"
              >
                <Facebook size={18} className="fill-current" /> View More Images on Facebook <ArrowRight size={18} />
              </a>
            </div>

            <div className="absolute -bottom-6 -right-3 p-3 bg-brand-orange text-white rounded-xl font-black shadow-lg text-[9px] tracking-widest uppercase">
              {excellentImages.length} project highlights
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
          const activeImages = 
            lightbox.group === 'archive' ? archiveImages :
            lightbox.group === 'project25' ? project25Images :
            lightbox.group === 'skillup2025' ? skillup2025Images :
            excellentImages;
          const activeIndex = lightbox.index;
          const titleLabel = 
            lightbox.group === 'archive' ? 'Skill Up memories' :
            lightbox.group === 'project25' ? 'Project 25 highlights' :
            lightbox.group === 'skillup2025' ? 'Skill Up 2025' :
            'The Excellent Girl';
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
                    alt="Gallery Photo"
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
