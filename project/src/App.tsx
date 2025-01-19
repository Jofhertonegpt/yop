import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { Sidebar } from './components/Sidebar';
import { CoursesPage } from './pages/CoursesPage';
import { SchedulePage } from './pages/SchedulePage';

function AppContent() {
  const { user, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = React.useState<'dashboard' | 'courses' | 'schedule'>('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="ml-64">
        {currentPage === 'dashboard' && <div className="p-8">{/* Your existing dashboard content */}</div>}
        {currentPage === 'courses' && <CoursesPage />}
        {currentPage === 'schedule' && <SchedulePage />}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;