import React from 'react';
import { BookOpen, Calendar, Layout, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  onNavigate: (page: 'dashboard' | 'courses' | 'schedule') => void;
  currentPage: string;
}

export function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Layout },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
  ];

  return (
    <div className="w-64 bg-slate-800 h-screen fixed left-0 top-0 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-8 h-8" />
        <h1 className="text-xl font-bold">EduPlatform</h1>
      </div>

      {user && (
        <div className="mb-8 p-4 bg-slate-700 rounded-lg">
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-slate-300">{user.email}</p>
        </div>
      )}
      
      <nav className="space-y-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as 'dashboard' | 'courses' | 'schedule')}
            className={`flex items-center gap-2 p-2 rounded w-full transition-colors ${
              currentPage === item.id
                ? 'bg-indigo-600 text-white'
                : 'hover:bg-slate-700 text-slate-300'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-2 p-2 rounded w-full hover:bg-slate-700 text-slate-300 mt-auto absolute bottom-4 left-4 right-4"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}