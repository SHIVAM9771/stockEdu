import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, BarChart2, GraduationCap, Users, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Navigation() {
  const { user, isAuthenticated, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BarChart2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">StockEdu</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink to="/" icon={<BookOpen className="h-5 w-5" />} text="Learn" />
            <NavLink to="/courses" icon={<GraduationCap className="h-5 w-5" />} text="Courses" />
            <NavLink to="/community" icon={<Users className="h-5 w-5" />} text="Community" />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="ml-2">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link to={to} className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
}