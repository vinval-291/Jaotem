import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
import Markdown from 'react-markdown';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  img: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const postDoc = await getDoc(doc(db, 'posts', id));
        if (postDoc.exists()) {
          setPost({ id: postDoc.id, ...postDoc.data() } as Post);
        } else {
          navigate('/blog');
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `posts/${id}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <SEO title={`${post.title} | Jaotem Foundation`} description={post.excerpt} />
      
      <PageHeader 
        title={post.title}
        subtitle={post.excerpt}
        image={post.img}
        category={post.category}
      />

      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white/70 backdrop-blur-3xl border border-white/40 rounded-[3rem] p-8 md:p-16 shadow-2xl space-y-12">
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-brand-warm-black/5 pb-8">
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30">Posted On</span>
                <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                  <Calendar size={16} /> {post.date}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30">Authored By</span>
                <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                  <User size={16} /> {post.author}
                </div>
              </div>
              <div className="hidden sm:flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30">Read Time</span>
                <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                  <Clock size={16} /> 6 min read
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
               <button className="p-3 bg-brand-cream hover:bg-brand-green hover:text-white rounded-xl transition-all shadow-sm border border-brand-warm-black/5">
                  <Facebook size={18} />
               </button>
               <button className="p-3 bg-brand-cream hover:bg-brand-green hover:text-white rounded-xl transition-all shadow-sm border border-brand-warm-black/5">
                  <Twitter size={18} />
               </button>
               <button className="p-3 bg-brand-cream hover:bg-brand-green hover:text-white rounded-xl transition-all shadow-sm border border-brand-warm-black/5">
                  <Linkedin size={18} />
               </button>
               <button className="p-3 bg-brand-cream hover:bg-brand-green hover:text-white rounded-xl transition-all shadow-sm border border-brand-warm-black/5" title="Copy Link">
                  <Share2 size={18} />
               </button>
            </div>
          </div>

          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-green prose-p:text-brand-warm-black/70 prose-a:text-brand-orange prose-a:font-bold prose-img:rounded-3xl prose-strong:text-brand-green">
             <div className="markdown-body">
                <Markdown>{post.content}</Markdown>
             </div>
          </article>

          <div className="pt-12 border-t border-brand-warm-black/5 flex flex-col sm:flex-row items-center justify-between gap-8">
             <NavLink to="/blog" className="flex items-center gap-2 text-brand-green font-bold hover:text-brand-orange transition-colors">
                <ArrowLeft size={18} /> Back to Impact Stories
             </NavLink>
             
             <div className="flex items-center gap-3 p-4 bg-brand-green/5 rounded-2xl border border-brand-green/10">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">
                   <Heart size={20} fill="currentColor" />
                </div>
                <div>
                   <p className="text-xs font-bold text-brand-green leading-none mb-1">Inspired by this story?</p>
                   <NavLink to="/donate" className="text-[10px] uppercase font-black tracking-widest text-brand-orange hover:underline">Support our mission</NavLink>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;
