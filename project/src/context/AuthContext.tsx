import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthUser, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
    const user = localStorage.getItem('user');
    if (user) {
      setAuthState(prev => ({
        ...prev,
        user: JSON.parse(user),
        isLoading: false,
      }));
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Replace with actual API call
      const user: AuthUser = { id: '1', email, name: email.split('@')[0] };
      localStorage.setItem('user', JSON.stringify(user));
      setAuthState(prev => ({ ...prev, user, isLoading: false }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: 'Invalid credentials',
        isLoading: false,
      }));
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Replace with actual API call
      const user: AuthUser = { id: '1', email, name };
      localStorage.setItem('user', JSON.stringify(user));
      setAuthState(prev => ({ ...prev, user, isLoading: false }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: 'Registration failed',
        isLoading: false,
      }));
    }
  };

  const logout = async () => {
    localStorage.removeItem('user');
    setAuthState({ user: null, isLoading: false, error: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}