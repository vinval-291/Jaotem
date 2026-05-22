import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, isAdmin: false, loading: true });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeAdmin: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      
      // Clear previous admin listener if user changes
      if (unsubscribeAdmin) {
        unsubscribeAdmin();
        unsubscribeAdmin = null;
      }

      if (user) {
        const bootstrappedEmails = [
          'kuteyioluwaloyevincent291@gmail.com',
          'admin@jaotem.com',
          // Add any other administrative email address here for immediate access:
          // 'new-admin@example.com',
        ];

        const isBootstrapped = !!(user.email && bootstrappedEmails.includes(user.email) && user.emailVerified);

        // Use onSnapshot to listen for real-time changes to the admin status
        unsubscribeAdmin = onSnapshot(doc(db, 'admins', user.uid), (docSnap) => {
          setIsAdmin(isBootstrapped || docSnap.exists());
          setLoading(false);
        }, (error) => {
          console.error("Error listening to admin status:", error);
          setIsAdmin(isBootstrapped);
          setLoading(false);
        });
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeAdmin) unsubscribeAdmin();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
