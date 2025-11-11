import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Role = 'user' | 'listener' | null;

interface User {
  email?: string;
  role?: Role;
  // add other persisted fields if needed
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isListener: boolean;
  login: (opts?: { role?: Role; email?: string }) => void;
  logout: () => void;
  setUser: (u: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'heard_auth_v1';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) as User : null;
    } catch {
      return null;
    }
  });

  const isAuthenticated = !!user;
  const isListener = !!user?.role && user.role === 'listener';

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
  }, [user]);

  const login = (opts?: { role?: Role; email?: string }) => {
    // In a real app, replace this with your auth API result.
    setUser({
      email: opts?.email,
      role: opts?.role ?? 'user',
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isListener, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
