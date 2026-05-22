import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { Plus, Edit2, Trash2, ExternalLink, FileText, Calendar, User as UserIcon } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useAuth } from '../lib/AuthContext';
import { format } from 'date-fns';

interface Post {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  createdAt: any;
}

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'posts');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      await deleteDoc(doc(db, 'posts', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `posts/${id}`);
    }
  };

  if (!isAdmin && !loading) {
     return (
       <div className="min-h-screen bg-brand-cream flex items-center justify-center p-6 text-center">
         <div className="glass p-12 rounded-[3rem] max-w-lg space-y-6 border border-red-100 shadow-2xl">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
               <UserIcon size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-brand-green">Access Restricted</h2>
            <p className="text-brand-warm-black/60 text-sm leading-relaxed">
              You are logged in, but your account hasn't been authorized as an admin yet. 
              Please add your UID to the <code className="bg-brand-green/5 px-2 py-1 rounded text-brand-green font-bold text-xs">admins</code> collection in the Firebase Console.
            </p>
            <div className="bg-white/50 p-4 rounded-xl border border-brand-warm-black/5 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30">Your Unique ID (UID)</p>
              <code className="text-xs font-mono font-bold text-brand-orange break-all select-all focus:bg-brand-orange/10 p-2 block">{auth.currentUser?.uid}</code>
            </div>
            <a 
              href="https://console.firebase.google.com/project/jaotem-foundation/firestore" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-brand-green text-white rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform"
            >
              Open Firebase Console
            </a>
         </div>
       </div>
     );
  }

  return (
    <div className="min-h-screen bg-brand-cream pb-20 pt-32 px-6">
      <SEO title="Admin Dashboard | Jaotem Foundation" description="Manage foundation stories and news." />
      
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Management Portal</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-green">Stories & News</h1>
          </div>
          
          <NavLink 
            to="/admin/posts/new"
            className="flex items-center gap-2 px-8 py-4 bg-brand-green text-white rounded-2xl font-bold shadow-xl shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Plus size={20} />
            Create New Post
          </NavLink>
        </div>

        <div className="glass rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/40 overflow-x-auto">
          {loading ? (
            <div className="py-20 text-center text-brand-warm-black/40">Loading your stories...</div>
          ) : posts.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-brand-warm-black/5 rounded-full flex items-center justify-center text-brand-warm-black/20">
                <FileText size={32} />
              </div>
              <p className="text-brand-warm-black/40 font-medium">No stories published yet. Start by creating your first post!</p>
            </div>
          ) : (
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="border-b border-brand-warm-black/5">
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30 w-1/2">Post Details</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30">Authored By</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30">Category</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-warm-black/5">
                {posts.map((post) => (
                  <tr key={post.id} className="group">
                    <td className="py-6 pr-6">
                      <div className="space-y-1">
                        <h3 className="font-bold text-brand-green group-hover:text-brand-orange transition-colors">{post.title}</h3>
                        <div className="flex items-center gap-4 text-[10px] text-brand-warm-black/40 font-bold uppercase tracking-tight">
                           <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                           <span className="flex items-center gap-1"><span className="w-1 h-1 bg-brand-warm-black/20 rounded-full" /> ID: {post.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2 font-medium text-sm text-brand-warm-black/70">
                         <UserIcon size={14} className="text-brand-warm-black/30" />
                         {post.author}
                      </div>
                    </td>
                    <td className="py-6">
                      <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-[10px] font-bold rounded-full uppercase tracking-widest">
                        {post.category}
                      </span>
                    </td>
                    <td className="py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <NavLink to={`/blog/${post.id}`} className="p-2.5 hover:bg-white rounded-xl text-brand-warm-black/40 hover:text-brand-green transition-all shadow-sm border border-transparent hover:border-brand-warm-black/5" title="View Public Post">
                          <ExternalLink size={18} />
                        </NavLink>
                        <NavLink to={`/admin/posts/edit/${post.id}`} className="p-2.5 hover:bg-white rounded-xl text-brand-warm-black/40 hover:text-brand-orange transition-all shadow-sm border border-transparent hover:border-brand-warm-black/5" title="Edit Post">
                          <Edit2 size={18} />
                        </NavLink>
                        <button 
                          onClick={() => handleDelete(post.id, post.title)}
                          className="p-2.5 hover:bg-red-50 rounded-xl text-brand-warm-black/40 hover:text-red-500 transition-all shadow-sm border border-transparent hover:border-red-100" title="Delete Post">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
