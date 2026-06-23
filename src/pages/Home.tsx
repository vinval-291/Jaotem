import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Target, ArrowRight, Star, Quote, ChevronRight, Play, ChevronLeft, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';

// Image paths from generator
const HERO_IMAGE = "https://i.postimg.cc/9M3hQf9B/DSC-9676.jpg";
const BOOK_IMG = "https://i.postimg.cc/DywP4PDm/DSC-0023.jpg";
const SKILL_IMG = "https://i.postimg.cc/8PNnKvYg/IMG-20260611-WA0012.jpg";
const MENTOR_IMG = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop";
const GIRL_IMG = "https://i.postimg.cc/rs4sDmWw/466631038-18052364986939617-6262507189763328855-n.jpg";
const TOUR_IMG = "https://i.postimg.cc/pTj0j5tB/476612979-8966573803453923-7390491861252115043-n.jpg";

const stats = [
  { label: 'Lives Impacted', value: '50k+', icon: Users },
  { label: 'Communities Reached', value: '120+', icon: Target },
  { label: 'Projects Completed', value: '450+', icon: Star },
  { label: 'Active Volunteers', value: '2.5k+', icon: Heart },
];

const featuredPrograms = [
  {
    title: 'Jaotem Mentorship Program',
    desc: 'Providing structured guidance, career path maps, college prep, and value meetings to raise tomorrow\'s civic leaders.',
    img: MENTOR_IMG,
    path: '/programs/mentorship'
  },
  {
    title: 'Skill Up Empowerment',
    desc: 'Empowering communities through targeted vocational, creative, and technical skill acquisition training.',
    img: SKILL_IMG,
    path: '/programs/skill-up'
  },
  {
    title: 'The Excellent Girl',
    desc: 'Celebrating International Day of the Girl Child with critical hygiene support, leadership school visits, and academic empowerment.',
    img: GIRL_IMG,
    path: '/programs/excellent-girl'
  },
];

const textTestimonials = [
  {
    name: "Oladipupo Akinbo",
    role: "Jaotem Mentorship Beneficiary",
    text: `I'm grateful for you, Queen Joy and JAOTEM mentorship.
           Thank you for providing an enabling environment to make me see the results I desire, and empowering with not just knowledge of what to do, but also things that seem good but are detrimental to avoid to get the desired results.
           The sessions were not some read, perspire to maguire sessions. They were rather empowering and propelling.
           They refuelled at times when I felt weary and wanted to divert my attention to something else.
           You taught balance, and I'm grateful I can testify to graduating with a first-class result now, despite engaging in other things.
           I pray that God continually bless you and multiply the region of your influence.
           Thank you for taking it upon yourself to impact lives positively.`,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sulaiman Aishat",
    role: "Jaotem Mentorship Beneficiary",
    text: `Jaotem mentorship has really helped me in achieving this academic excellence.( graduated with first class), a journey that seems impossible at first.
    I remembered my aim then when I joined this group was to focus more on my academics and pass my exams but that orientation changed through one of the sessions I had, all thanks to  Queen Joy  for bringing different sessions which really impacted positively and there is no way you will attend those sessions without gaining something tangible.
    One of the quotes I love 'when you think you can, then you can ' there is absolutely power in the quote, really helped in achieving most of my target both in academics and real life situations.
    The amazing thing about this mentorship is follow-up, guidance and counseling. Even if you are the unserious type, you will definitely have to change because Queen Joy is someone who put all her efforts in making sure there is progress in your academic journey. More to discuss but allow me stop here for now.
    I'm really grateful towards this achievements.
    There is still more to learn.
    Thanks for all you do.
    God bless.`,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Obi Chioma",
    role: "Jaotem Mentorship Beneficiary",
    text: `I'm thrilled to share my incredible journey with Jaotem Mentorship, which has been instrumental in my academic success at the university. I've witnessed tremendous growth and achieved my ultimate goal which is to graduate with a First Class degree.
    Before joining Jaotem Mentorship, I struggled with managing my coursework, setting clear academic goals, and staying motivated. However, everything changed when I met my mentor. Through Queen Laposh  guidance, expertise, and unwavering support, I was able to:
    Develop a tailored study plan, ensuring I stayed on track with my coursework;
    Improve my time management skills, balancing academics and extracurricular activities.
    Build confidence in my academic abilities.
    Through regular seminars, check-ins, constructive feedback, and encouragement by my mentor Queen Laposh I was able to overcome obstacles and push beyond my limits.which according to her only exist in my mind 😌
    Thanks to Jaotem Mentorship. I am so grateful for all the support .`,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ojo Dorcas",
    role: "Jaotem Mentorship Beneficiary",
    text: `I’m standing here today just because of You.
    My convocation is beautiful just because of your support.
    Maaaaaaa it was when I joined ur group, my results boosted from second class lower to upper.
    Thank you so so much ma🙏🙏 Ma`,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Mustapha Adejoke",
    role: "Beneficiary, Tie and Dye",
    text: `Jaotem Foundation gave me the privilege to be among the beneficiaries of the empowerment programme. It was an incredible privilege to be a part of such an educational and enriching program.
    I would like to express my gratitude for the inclusivity and accessibility of this training. By offering it free of charge, the Jaotem Foundation has shown a remarkable commitment to empowering individuals and promoting skill development within the community.
    Each session was engaging and interactive, encouraging us to explore our artistic abilities and experiment with various techniques. The hands-on experience we gained during the practical sessions was invaluable, and it has given me the confidence to pursue tie and dye (Adire making) further.
    The training has not only expanded my skill set but has also ignited a passion within me for the art of tie and dye (Adire making). I am eager to apply the knowledge gained and share it with others, thereby contributing to the preservation and promotion of this traditional craft.
    I am truly grateful for the transformative experience I had with the Jaotem Foundation.`,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Omotosho Philip Ouwaseyi",
    role: "Adire & Batik Design",
    text: `I honestly can’t thank Jaotem Foundation enough for giving me the opportunity to be part of the Skill Up Programme.
    I joined a month after the programme began due to the preparation for my second semester examinations, but within two months, I had grown tremendously.
    Thanks to my passion, consistency, and love for creativity, I have not only learned Adire and batik making, but I can now confidently create beautiful fabric designs on my own.
    This journey truly empowered me.
    Thank you so much, and God bless you.`,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

const Home: React.FC = () => {
  const [currentTextIdx, setCurrentTextIdx] = React.useState(0);

  // Auto-cycle written testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIdx((prev) => (prev + 1) % textTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTextIdx((prev) => (prev + 1) % textTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTextIdx((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Jaotem Foundation | Changing Lives, Building Hope" />

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Foundation impact" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-warm-black/75 via-brand-warm-black/55 to-brand-cream/100" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full w-fit mx-auto mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Transforming Lives Together</span>
            </div>
            <h1 className="text-6xl md:text-[84px] font-serif font-medium mb-8 leading-[1.05] tracking-tight text-white drop-shadow-sm">
              Changing Lives, <br />
              <span className="italic text-brand-gold">Building Hope.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-12 leading-relaxed font-normal drop-shadow-sm">
              Bringing Hope to the future: Raising the next level of global future leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <NavLink 
                to="/donate" 
                className="group relative px-10 py-5 bg-brand-green text-white rounded-2xl font-bold overflow-hidden shadow-2xl shadow-brand-green/20 transition-transform hover:-translate-y-1"
              >
                Become a Sponsor
              </NavLink>
              <NavLink 
                to="/about" 
                className="group px-10 py-5 bg-white/50 backdrop-blur-md border border-white/60 text-brand-green rounded-2xl font-bold hover:bg-white/80 transition-all flex items-center gap-2"
              >
                Our Mission
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Impact Metrics) */}
      <section className="mt-12 relative z-20 px-6 max-w-7xl mx-auto mb-24">
        <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-brand-green/10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "flex flex-col gap-1",
                  idx > 0 && "pt-8 md:pt-0 lg:pl-8"
                )}
              >
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">{stat.label}</h3>
                <p className="text-3xl font-serif text-brand-warm-black">{stat.value}</p>
                <p className="text-[10px] text-brand-warm-black/40 uppercase font-black tracking-tighter">Impact Documented</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">Our Impact Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-brand-green leading-tight">
              Empowering the Next Generation of Changemakers.
            </h2>
            <p className="text-brand-warm-black/70 text-lg leading-relaxed mb-8">
              At Jaotem Foundation, we believe everyone deserves the opportunity to thrive. Through impactful programs in mentorship, education, entrepreneurship, and community empowerment, we equip individuals with the knowledge, skills, and support they need to build a better future.
            </p>
            <NavLink to="/about" className="text-brand-green font-bold flex items-center gap-2 group">
              Learn More About Our Mission <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white/30">
              <img src={BOOK_IMG} alt="Education Impact" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold/20 rounded-[2rem] -z-0 blur-3xl animate-pulse" />
            <div className="absolute top-10 -left-10 p-6 bg-white/40 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl z-20 max-w-[200px] flex flex-col items-center text-center">
              <p className="text-brand-green font-serif font-bold text-3xl mb-1">98%</p>
              <p className="text-brand-warm-black/60 text-[10px] uppercase font-bold tracking-tighter">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-brand-green py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Sustainable Initiatives for Lasting Change.
              </h2>
            </div>
            <NavLink to="/programs" className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
              View All Programs
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((prog, idx) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] overflow-hidden group flex flex-col h-full shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 font-serif text-white">{prog.title}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed flex-grow text-sm">{prog.desc}</p>
                  <NavLink to={prog.path} className="flex items-center gap-2 text-brand-gold font-bold group-hover:gap-4 transition-all">
                    Explore Program <ArrowRight size={18} />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of Impact Section */}
      <section className="py-24 px-6 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Quote className="mx-auto text-brand-orange mb-4 opacity-20" size={60} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-brand-green leading-tight">
              Voices of Impact
            </h2>
            <p className="text-brand-warm-black/70 text-base md:text-lg leading-relaxed">
              Discover real-life stories of hope, dedication, and growth from our program beneficiaries.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-12 py-2">
            {/* Main Active Testimonial Card with responsive auto-height */}
            <div className="overflow-hidden">
              <motion.div
                key={currentTextIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white/40 backdrop-blur-2xl border border-white/50 p-8 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="text-brand-orange opacity-25" size={48} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#cf762b] bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10">
                      Verified Impact Story
                    </span>
                  </div>
                  <p className="text-brand-warm-black/80 italic leading-relaxed text-base md:text-xl lg:text-2xl mb-8 min-h-[100px] flex items-center">
                    "{textTestimonials[currentTextIdx].text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-brand-warm-black/5">
                  <div className="w-14 h-14 rounded-full border-2 border-white bg-gradient-to-br from-brand-green/10 to-brand-green/20 text-brand-green flex items-center justify-center shadow-md shrink-0">
                    <User size={24} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green text-base md:text-lg">
                      {textTestimonials[currentTextIdx].name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-brand-warm-black/50 uppercase font-black tracking-widest mt-0.5">
                      {textTestimonials[currentTextIdx].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8 px-2">
              {/* Dots indicator */}
              <div className="flex gap-2">
                {textTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTextIdx(idx)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                      idx === currentTextIdx 
                        ? "bg-brand-green w-8" 
                        : "bg-brand-green/20 hover:bg-brand-green/45"
                    )}
                    aria-label={`Get testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/80 backdrop-blur border border-brand-green/10 text-brand-green hover:bg-brand-green/10 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                  aria-label="Previous story"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/80 backdrop-blur border border-brand-green/10 text-brand-green hover:bg-brand-green/10 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                  aria-label="Next story"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-white/30 backdrop-blur-3xl border border-white/40 p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#e3e9d2] opacity-40 blur-[100px] -z-10 rounded-full" />
          <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#fce8cc] opacity-40 blur-[100px] -z-10 rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-serif font-medium mb-8 text-brand-green">Ready to Make an Impact?</h2>
            <p className="text-brand-warm-black/70 text-xl max-w-2xl mx-auto mb-12">
              Your contribution, no matter the size, helps us build a brighter future for those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <NavLink to="/donate" className="px-12 py-5 bg-brand-green text-white rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-green/20">
                Start Donating
              </NavLink>
              <NavLink to="/contact" className="px-12 py-5 bg-white/50 backdrop-blur-md border border-white/60 text-brand-green rounded-2xl font-bold text-lg hover:bg-white/80 transition-all flex items-center gap-2">
                Become a Partner
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
