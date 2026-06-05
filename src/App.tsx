import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';
import { AuthProvider } from './lib/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Components
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { SEO } from './components/SEO';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminPostEditor from './pages/AdminPostEditor';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<div className="h-screen flex items-center justify-center bg-brand-cream text-brand-green font-serif animate-pulse text-2xl">Jaotem...</div>}>
      {children}
    </React.Suspense>
  );
}

function Layout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && <NavBar />}
      <main className={`flex-grow ${!isAdminPage ? 'pt-20 lg:pt-0' : ''}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageContainer><Home /></PageContainer>} />
            <Route path="/about" element={<PageContainer><About /></PageContainer>} />
            <Route path="/programs" element={<PageContainer><Programs /></PageContainer>} />
            <Route path="/blog" element={<PageContainer><Blog /></PageContainer>} />
            <Route path="/blog/:id" element={<PageContainer><BlogPost /></PageContainer>} />
            <Route path="/events" element={<PageContainer><Events /></PageContainer>} />
            <Route path="/gallery" element={<PageContainer><Gallery /></PageContainer>} />
            <Route path="/donate" element={<PageContainer><Donate /></PageContainer>} />
            <Route path="/contact" element={<PageContainer><Contact /></PageContainer>} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<PageContainer><AdminLogin /></PageContainer>} />
            <Route element={<ProtectedRoute />}>
               <Route path="/admin" element={<PageContainer><AdminDashboard /></PageContainer>} />
               <Route path="/admin/dashboard" element={<PageContainer><AdminDashboard /></PageContainer>} />
               <Route element={<ProtectedRoute adminOnly />}>
                  <Route path="/admin/posts/new" element={<PageContainer><AdminPostEditor /></PageContainer>} />
                  <Route path="/admin/posts/edit/:id" element={<PageContainer><AdminPostEditor /></PageContainer>} />
               </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <WhatsAppWidget />}
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <SEO />
          <ScrollToTop />
          <Layout />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

