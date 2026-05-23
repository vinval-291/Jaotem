import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { Plus, Edit2, Trash2, ExternalLink, FileText, Calendar, User as UserIcon, MessageSquare, Mail, Tag, BookOpen, Inbox } from 'lucide-react';
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

interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: string;
  message: string;
  createdAt: any;
}

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);
  const [activeTab, setActiveTab] = useState<'posts' | 'submissions'>('posts');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  
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

    const subQ = query(collection(db, 'submissions'), orderBy('createdAt', 'desc'));
    const unsubscribeSub = onSnapshot(subQ, (snapshot) => {
      const subsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Submission[];
      setSubmissions(subsData);
      setLoadingSubmissions(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'submissions');
      setLoadingSubmissions(false);
    });

    return () => {
      unsubscribe();
      unsubscribeSub();
    };
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      await deleteDoc(doc(db, 'posts', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `posts/${id}`);
    }
  };

  const handleDeleteSubmission = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete the submission from "${name}"?`)) return;

    try {
      await deleteDoc(doc(db, 'submissions', id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `submissions/${id}`);
    }
  };

  const formatSubmissionDate = (createdAt: any) => {
    if (!createdAt) return 'Just now';
    if (createdAt.seconds) {
      return format(new Date(createdAt.seconds * 1000), 'MMM dd, yyyy h:mm a');
    }
    return format(new Date(createdAt), 'MMM dd, yyyy h:mm a');
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
      <SEO title="Admin Dashboard | Jaotem Foundation" description="Manage foundation stories, news, and form submissions." />
      
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-warm-black/5 pb-8">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Management Portal</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-green">Admin Dashboard</h1>
          </div>
          
          <div className="flex gap-4">
            <NavLink 
              to="/admin/posts/new"
              className="flex items-center gap-2 px-6 py-3 bg-brand-green text-white rounded-xl font-bold shadow-lg shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all text-sm"
            >
              <Plus size={16} />
              Create Story Post
            </NavLink>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-6 border-b border-brand-warm-black/5 pb-1">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-2 pb-4 px-2 font-serif font-bold text-lg select-none transition-all border-b-2 relative ${
              activeTab === 'posts' 
                ? 'text-brand-green border-brand-orange' 
                : 'text-brand-warm-black/40 hover:text-brand-green border-transparent'
            }`}
          >
            <BookOpen size={18} />
            Stories & Articles
            <span className="text-[10px] bg-brand-green/10 text-brand-green px-2.5 py-0.5 rounded-full font-sans font-black">
              {posts.length}
            </span>
          </button>
          
          <button
            onClick={() => {
              setActiveTab('submissions');
              if (submissions.length > 0 && !selectedSubmission) {
                setSelectedSubmission(submissions[0]);
              }
            }}
            className={`flex items-center gap-2 pb-4 px-2 font-serif font-bold text-lg select-none transition-all border-b-2 relative ${
              activeTab === 'submissions' 
                ? 'text-brand-green border-brand-orange' 
                : 'text-brand-warm-black/40 hover:text-brand-green border-transparent'
            }`}
          >
            <Inbox size={18} />
            Form Submissions
            <span className="text-[10px] bg-brand-orange/10 text-brand-orange px-2.5 py-0.5 rounded-full font-sans font-black">
              {submissions.length}
            </span>
          </button>
        </div>

        {activeTab === 'posts' ? (
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
                          <NavLink to={`/blog/${post.id}`} className="p-2.5 hover:bg-white rounded-xl text-brand-warm-black/40 hover:text-brand-green transition-all shadow-sm border border-transparent hover:border-brand-warm-black/5" title="View Public Post border-brand-warm-black/5">
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
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left list pane */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-xs font-black uppercase tracking-wider text-brand-warm-black/40">Inboxes Receipts</h2>
              {loadingSubmissions ? (
                <div className="glass rounded-[2rem] p-12 text-center text-brand-warm-black/40">Loading submissions...</div>
              ) : submissions.length === 0 ? (
                <div className="glass rounded-[2rem] p-12 text-center text-brand-warm-black/40 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 bg-brand-warm-black/5 rounded-full flex items-center justify-center text-brand-warm-black/20">
                    <MessageSquare size={20} />
                  </div>
                  <p className="text-sm">No messages submitted yet.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                  {submissions.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubmission(sub)}
                      className={`w-full text-left p-6 rounded-[2rem] transition-all border flex flex-col gap-3 ${
                        selectedSubmission?.id === sub.id
                          ? 'bg-brand-green text-white border-brand-green shadow-xl shadow-brand-green/10'
                          : 'bg-white hover:bg-brand-orange/5 border-brand-warm-black/5 hover:border-brand-orange/20 shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className={`font-bold transition-colors ${selectedSubmission?.id === sub.id ? 'text-white' : 'text-brand-green'}`}>
                            {sub.firstName} {sub.lastName}
                          </h4>
                          <span className={`text-[10px] font-medium ${selectedSubmission?.id === sub.id ? 'text-white/60' : 'text-brand-warm-black/40'}`}>
                            {sub.email}
                          </span>
                        </div>
                        <span className={`px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full leading-relaxed shrink-0 ${
                          selectedSubmission?.id === sub.id
                            ? 'bg-white/20 text-white'
                            : 'bg-brand-orange/10 text-brand-orange'
                        }`}>
                          {sub.inquiryType.split(' ')[0]}
                        </span>
                      </div>
                      <p className={`text-xs line-clamp-2 leading-relaxed ${selectedSubmission?.id === sub.id ? 'text-white/80' : 'text-brand-warm-black/60'}`}>
                        {sub.message}
                      </p>
                      
                      <div className="flex justify-between items-center mt-2 border-t pt-3 border-current/10">
                        <span className={`text-[9px] font-bold ${selectedSubmission?.id === sub.id ? 'text-white/60' : 'text-brand-warm-black/40'}`}>
                          {formatSubmissionDate(sub.createdAt)}
                        </span>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteSubmission(sub.id, `${sub.firstName} ${sub.lastName}`);
                          }}
                          className={`p-1.5 rounded-lg transition-colors border ${
                            selectedSubmission?.id === sub.id
                              ? 'bg-white/10 hover:bg-red-500/20 border-white/10 hover:border-red-500 text-white'
                              : 'bg-red-50 hover:bg-red-100 border-red-50 text-red-500 hover:text-red-700'
                          }`}
                          title="Delete submission"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right details reader pane */}
            <div className="lg:col-span-7">
              <h2 className="text-xs font-black uppercase tracking-wider text-brand-warm-black/40 mb-4">Submission Details</h2>
              {selectedSubmission ? (
                <div className="glass rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/40 space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl -z-10" />
                  
                  <div className="border-b border-brand-warm-black/5 pb-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-[10px] font-bold rounded-full uppercase tracking-widest">
                        {selectedSubmission.inquiryType}
                      </span>
                      <span className="text-xs text-brand-warm-black/40 font-bold">
                        Received: {formatSubmissionDate(selectedSubmission.createdAt)}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-brand-green">
                        {selectedSubmission.firstName} {selectedSubmission.lastName}
                      </h3>
                      <a 
                        href={`mailto:${selectedSubmission.email}`} 
                        className="text-sm font-medium text-brand-orange hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        <Mail size={14} />
                        {selectedSubmission.email}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-warm-black/30 block">Message Body</span>
                    <div className="bg-white/50 border border-brand-warm-black/5 rounded-2xl p-6 md:p-8 text-brand-warm-black/80 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                      {selectedSubmission.message}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-warm-black/5 flex justify-between items-center">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedSubmission.email);
                        alert(`Copied email address (${selectedSubmission.email}) to clipboard!`);
                      }}
                      className="px-6 py-3 bg-brand-green/5 hover:bg-brand-green/10 text-brand-green transition-all rounded-xl font-bold text-xs uppercase tracking-widest"
                    >
                      Copy Contactor Email
                    </button>
                    
                    <button
                      onClick={() => handleDeleteSubmission(selectedSubmission.id, `${selectedSubmission.firstName} ${selectedSubmission.lastName}`)}
                      className="px-6 py-3 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white border border-red-100 hover:border-transparent transition-all rounded-xl font-bold text-xs uppercase tracking-widest"
                    >
                      Delete Submission
                    </button>
                  </div>
                </div>
              ) : (
                <div className="glass rounded-[3rem] p-12 text-center text-brand-warm-black/30 border border-white/40 py-32 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-brand-warm-black/5 rounded-full flex items-center justify-center text-brand-warm-black/10">
                    <Mail size={28} />
                  </div>
                  <h4 className="font-serif font-bold text-brand-green text-lg">Select a Submission</h4>
                  <p className="text-sm max-w-xs mx-auto">
                    Click on a submission from the inbox list to read the complete form message and take necessary action.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
