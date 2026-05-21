import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Image as ImageIcon, Type, Layout, AlignLeft, Hash, Send, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';
import { format } from 'date-fns';

const CATEGORIES = ['Education', 'Health', 'Community', 'Empowerment', 'Volunteers', 'Success Stories', 'Updates'];

const AdminPostEditor: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: CATEGORIES[0],
    img: ''
  });

  useEffect(() => {
    if (isEdit && id) {
      const fetchPost = async () => {
        try {
          const postDoc = await getDoc(doc(db, 'posts', id));
          if (postDoc.exists()) {
            const data = postDoc.data();
            setFormData({
              title: data.title || '',
              excerpt: data.excerpt || '',
              content: data.content || '',
              author: data.author || '',
              category: data.category || CATEGORIES[0],
              img: data.img || ''
            });
          } else {
            navigate('/admin/dashboard');
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `posts/${id}`);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, isEdit, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    setSaving(true);
    try {
      const postData = {
        ...formData,
        updatedAt: serverTimestamp(),
      };

      if (isEdit && id) {
        await updateDoc(doc(db, 'posts', id), postData);
      } else {
        const newId = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const finalId = `${newId}-${Date.now()}`;
        
        await setDoc(doc(db, 'posts', finalId), {
          ...postData,
          createdAt: serverTimestamp(),
          authorId: auth.currentUser.uid,
          date: format(new Date(), 'MMMM dd, yyyy')
        });
      }
      navigate('/admin/dashboard');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, isEdit ? `posts/${id}` : 'posts');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-brand-cream font-serif text-brand-green">Loading Editor...</div>;
  }

  return (
    <div className="min-h-screen bg-brand-cream pb-20 pt-32 px-6">
      <SEO title={isEdit ? "Edit Post | Admin" : "Create Post | Admin"} description="Create or edit stories for the foundation's impact blog." />
      
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex items-center justify-between gap-6">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 text-brand-warm-black/40 font-bold uppercase tracking-widest text-xs hover:text-brand-green transition-colors"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
          
          <div className="flex items-center gap-4">
             <span className={cn(
               "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
               isEdit ? "bg-brand-orange/10 text-brand-orange border-brand-orange/20" : "bg-brand-green/10 text-brand-green border-brand-green/20"
             )}>
                {isEdit ? 'Modified Original' : 'Drafting Now'}
             </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
           <div className="glass rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/40 space-y-8">
              <div className="space-y-6">
                 {/* Title Field */}
                 <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40">
                       <Type size={14} /> Story Title
                    </label>
                    <input 
                       required
                       type="text"
                       value={formData.title}
                       onChange={e => setFormData({ ...formData, title: e.target.value })}
                       placeholder="Enter a compelling headline..."
                       className="w-full text-2xl md:text-3xl font-serif font-bold text-brand-green bg-white/50 border border-brand-warm-black/5 rounded-2xl p-6 focus:outline-none focus:border-brand-orange transition-all placeholder:text-brand-warm-black/10"
                    />
                 </div>

                 {/* Top Row: Author & Category */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                       <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40">
                          <Layout size={14} /> Category
                       </label>
                       <select 
                          value={formData.category}
                          onChange={e => setFormData({ ...formData, category: e.target.value })}
                          className="w-full p-4 bg-white/50 border border-brand-warm-black/5 rounded-xl focus:outline-none focus:border-brand-orange text-sm font-bold text-brand-green"
                       >
                          {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                       </select>
                    </div>
                    <div className="space-y-3">
                       <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40">
                          <AlignLeft size={14} /> Official Author
                       </label>
                       <input 
                          required
                          type="text"
                          value={formData.author}
                          onChange={e => setFormData({ ...formData, author: e.target.value })}
                          placeholder="e.g. Dr. Jane Jaotem"
                          className="w-full p-4 bg-white/50 border border-brand-warm-black/5 rounded-xl focus:outline-none focus:border-brand-orange text-sm font-bold text-brand-green"
                       />
                    </div>
                 </div>

                 {/* Image URL Field */}
                 <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40">
                       <ImageIcon size={14} /> Featured Image URL
                    </label>
                    <input 
                       required
                       type="url"
                       value={formData.img}
                       onChange={e => setFormData({ ...formData, img: e.target.value })}
                       placeholder="https://..."
                       className="w-full p-4 bg-white/50 border border-brand-warm-black/5 rounded-xl focus:outline-none focus:border-brand-orange text-xs text-brand-warm-black/60"
                    />
                 </div>

                 {/* Excerpt Field */}
                 <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40">
                       <Hash size={14} /> Excerpt / Summary
                    </label>
                    <textarea 
                       required
                       rows={2}
                       value={formData.excerpt}
                       onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                       placeholder="A brief summary for the blog card..."
                       className="w-full p-4 bg-white/50 border border-brand-warm-black/5 rounded-xl focus:outline-none focus:border-brand-orange text-sm leading-relaxed text-brand-warm-black/70"
                    />
                 </div>

                 {/* Content Area */}
                 <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40">
                       <FileText size={14} /> Main Story Content (Markdown Supported)
                    </label>
                    <div className="relative">
                       <textarea 
                          required
                          rows={12}
                          value={formData.content}
                          onChange={e => setFormData({ ...formData, content: e.target.value })}
                          placeholder="Tell the story in detail..."
                          className="w-full p-6 bg-white/50 border border-brand-warm-black/5 rounded-2xl focus:outline-none focus:border-brand-orange text-sm leading-relaxed text-brand-warm-black/70 font-sans min-h-[400px]"
                       />
                       <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest text-brand-warm-black/30 border border-brand-warm-black/5 pointer-events-none">
                          Markdown Active
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex items-center justify-end gap-4">
              <button 
                type="button"
                onClick={() => navigate('/admin/dashboard')}
                className="px-8 py-4 text-brand-warm-black/60 font-bold hover:text-brand-warm-black transition-colors"
                disabled={saving}
              >
                 Discard
              </button>
              <button 
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-12 py-4 bg-brand-green text-white rounded-2xl font-bold shadow-2xl shadow-brand-green/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all"
              >
                 {saving ? 'Publishing...' : (<span>{isEdit ? 'Update Story' : 'Publish Story'} <Save size={18} className="inline ml-2" /></span>)}
              </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPostEditor;
