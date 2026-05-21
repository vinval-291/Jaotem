import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Calendar, User, ArrowRight, Search, Tag, Loader2, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

const BLOG_IMAGE = "/src/assets/images/african_foundation_hero_1779020187354.png";

const FALLBACK_POSTS = [
  {
    id: 'fallback-1',
    title: 'The Power of Early Education: A Look into Our Rural Schools',
    excerpt: 'How investing in primary education is changing the demographic landscape of the communities we serve.',
    date: 'May 12, 2024',
    author: 'Dr. Jane Jaotem',
    category: 'Education',
    img: '/src/assets/images/african_education_learning_1779020205943.png'
  },
  {
    id: 'fallback-2',
    title: 'Community Kitchens: More Than Just a Meal',
    excerpt: 'Exploring the social impact of communal dining and food security initiatives in local townships.',
    date: 'April 28, 2024',
    author: 'Kweku Adebayo',
    category: 'Community',
    img: '/src/assets/images/african_community_outreach_food_1779020238830.png'
  }
];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData.length > 0 ? postsData : FALLBACK_POSTS);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'posts');
      setPosts(FALLBACK_POSTS);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <SEO title="Blog & News | Jaotem Foundation" description="Stay updated with the latest stories, success reports, and news from Jaotem Foundation." />
      
      <PageHeader 
        title="Impact Stories" 
        subtitle="Deep dives into our missions, community updates, and the voices of those we serve."
        image={BLOG_IMAGE}
        category="Foundation News"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-16">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4 text-brand-green/40">
                 <Loader2 size={40} className="animate-spin text-brand-orange" />
                 <p className="font-serif italic text-sm">Loading the latest impact stories...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredPosts.map((post, idx) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-lg relative border border-white/40">
                       <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute top-4 left-4">
                          <span className="bg-brand-cream/90 backdrop-blur-sm text-brand-green text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20 shadow-sm">{post.category}</span>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-4 text-[10px] font-bold text-brand-warm-black/40 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5"><Calendar size={14} className="text-brand-orange/40" /> {post.date}</span>
                          <span className="flex items-center gap-1.5"><User size={14} className="text-brand-orange/40" /> {post.author}</span>
                       </div>
                       <h3 className="text-2xl font-serif font-bold text-brand-green group-hover:text-brand-orange transition-colors leading-tight">
                          {post.title}
                       </h3>
                       <p className="text-brand-warm-black/60 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                       </p>
                       <NavLink to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-green font-bold text-sm border-b-2 border-brand-green/10 hover:border-brand-orange hover:text-brand-orange transition-all py-1">
                          Read Story <ArrowRight size={16} />
                       </NavLink>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
            
            {!loading && filteredPosts.length === 0 && (
              <div className="py-20 text-center text-brand-warm-black/40 italic">
                No stories found matching your search.
              </div>
            )}

            {!loading && filteredPosts.length > 0 && (
              <div className="flex justify-center pt-10">
                 <button className="px-10 py-4 border-2 border-brand-warm-black/5 rounded-full text-brand-green font-bold hover:bg-brand-green hover:text-white transition-all shadow-sm active:scale-95">
                    Load More Stories
                 </button>
              </div>
            )}
          </div>

          <aside className="lg:w-1/3 space-y-12">
             <div className="bg-white/30 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl">
                <h4 className="text-xl font-serif font-bold text-brand-green mb-6">Search News</h4>
                <div className="relative">
                   <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-warm-black/30" />
                   <input 
                      type="text" 
                      placeholder="Keywords..." 
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="w-full p-4 pl-12 bg-white/50 rounded-2xl border border-white/40 focus:outline-none focus:border-brand-orange transition-all placeholder:text-brand-warm-black/20 text-sm font-medium" 
                   />
                </div>
             </div>

             <div className="bg-white/30 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl">
                <h4 className="text-xl font-serif font-bold text-brand-green mb-6 flex items-center gap-2">
                   <Tag size={20} className="text-brand-orange" />
                   Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                   {['Education', 'Health', 'Community', 'Empowerment', 'Volunteers', 'Success Stories', 'Updates'].map(cat => (
                     <button 
                       key={cat}
                       onClick={() => setSearchTerm(cat)}
                       className="px-4 py-2 bg-white/50 rounded-xl text-[10px] font-bold text-brand-warm-black/60 border border-white/40 hover:bg-brand-orange hover:text-white transition-all shadow-sm uppercase tracking-widest"
                     >
                        {cat}
                     </button>
                   ))}
                </div>
             </div>

             <div className="bg-brand-green p-8 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl">
                <div className="absolute -bottom-6 -right-6 text-white/5 pointer-events-none">
                  <Sparkles size={160} />
                </div>
                <h4 className="text-xl font-serif font-bold mb-4 relative z-10">Newsletter</h4>
                <p className="text-white/60 text-sm mb-6 leading-relaxed relative z-10">Join 15,000+ others who receive our monthly impact report and success stories.</p>
                <form className="space-y-4 relative z-10">
                   <input type="email" placeholder="Your Email" className="w-full p-4 bg-white/10 rounded-2xl border border-white/10 placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                   <button className="w-full py-4 bg-brand-gold text-brand-green font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">Subscribe Now</button>
                </form>
             </div>
          </aside>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
