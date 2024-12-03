import React from 'react';
import { TrendingUp, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function Hero() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Master the <span className="text-indigo-600">Stock Market</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Learn to invest with confidence. From basic concepts to advanced trading strategies,
            we'll guide you every step of the way.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to={isAuthenticated ? "/courses" : "/register"}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                {isAuthenticated ? "Browse Courses" : "Start Learning"}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-indigo-600" />}
            title="Comprehensive Courses"
            description="Structured learning paths from basics to advanced trading strategies."
          />
          <FeatureCard
            icon={<TrendingUp className="h-6 w-6 text-indigo-600" />}
            title="Real-time Analysis"
            description="Practice with live market data and interactive charts."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6 text-indigo-600" />}
            title="Community Support"
            description="Learn alongside peers and get guidance from experienced traders."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 mx-auto">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}