import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { LogIn, Heart, Mail, Lock, Chrome, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';

const AdminLogin: React.FC = () => {
  const [method, setMethod] = useState<'google' | 'email'>('google');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err);
      setError('Google login failed. Please try again or use email.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError('Login failed. Please ensure Email/Password is enabled in Firebase.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream relative overflow-hidden p-6">
      <SEO title="Admin Login | Jaotem Foundation" description="Secure access for Jaotem Foundation administrators." />
      
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-md w-full text-center space-y-8 relative z-10 border border-white/40"
      >
        <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl">
           <Heart size={32} fill="currentColor" />
        </div>
        
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-green leading-tight">Admin Gateway</h1>
          <p className="text-brand-warm-black/50 text-xs">Enter your credentials to access the command center.</p>
        </div>

        {/* Method Toggle */}
        <div className="flex p-1 bg-brand-warm-black/5 rounded-2xl">
          <button 
            onClick={() => setMethod('google')}
            className={cn(
              "flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              method === 'google' ? "bg-white text-brand-green shadow-sm" : "text-brand-warm-black/40 hover:text-brand-warm-black/60"
            )}
          >
            Google
          </button>
          <button 
            onClick={() => setMethod('email')}
            className={cn(
              "flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              method === 'email' ? "bg-white text-brand-green shadow-sm" : "text-brand-warm-black/40 hover:text-brand-warm-black/60"
            )}
          >
            Email
          </button>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="p-3 bg-red-50 text-red-500 text-[10px] font-bold rounded-xl border border-red-100 flex items-center justify-center gap-2"
          >
            {error}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {method === 'google' ? (
            <motion.div
              key="google"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-white border-2 border-brand-warm-black/5 rounded-2xl text-brand-green font-bold hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                <Chrome size={20} />
                Continue with Google
              </button>
              <p className="text-[10px] text-brand-warm-black/30 leading-relaxed px-4 italic">
                Authorized Google workspace accounts only. Ensure your email is registered in the database.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="email"
              onSubmit={handleEmailLogin}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-4 text-left"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40 ml-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-warm-black/20" />
                  <input 
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="admin@jaotem.org"
                    className="w-full p-4 pl-12 bg-white/50 border border-brand-warm-black/5 rounded-2xl focus:outline-none focus:border-brand-orange text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-warm-black/40 ml-1">Secret Key</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-warm-black/20" />
                  <input 
                    required
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full p-4 pl-12 bg-white/50 border border-brand-warm-black/5 rounded-2xl focus:outline-none focus:border-brand-orange text-sm transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-brand-green text-white rounded-2xl font-bold shadow-xl shadow-brand-green/20 hover:bg-brand-orange transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Sign In Now'}
                {!loading && <ArrowRight size={18} />}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="pt-4 border-t border-brand-warm-black/5">
           <p className="text-[8px] uppercase font-black tracking-[0.3em] text-brand-warm-black/20">
             Jaotem <span className="font-light">Security</span>
           </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
