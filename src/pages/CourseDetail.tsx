import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, Users, BookOpen, Award } from 'lucide-react';
import { courses } from '../data/courses';
import { useAuthStore } from '../store/authStore';

export function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-8 text-gray-900">{course.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{course.fullDescription}</p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">What You'll Learn</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4">
              {course.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <BookOpen className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {course.requirements.map((req, index) => (
                <li key={index} className="text-gray-600">{req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
            <div className="text-3xl font-bold text-gray-900">${course.price}</div>
            
            <button className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Enroll Now
            </button>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-gray-400" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-5 w-5 mr-2 text-gray-400" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="h-5 w-5 mr-2 text-gray-400" />
                <span>{course.level}</span>
              </div>
            </div>

            <div className="mt-6 border-t pt-6">
              <h3 className="text-sm font-medium text-gray-900">Instructor</h3>
              <div className="mt-2 flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{course.instructor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}