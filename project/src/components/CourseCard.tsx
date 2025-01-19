import React, { useState } from 'react';
import { BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
          <p className="text-gray-600 mt-2">{course.description}</p>
        </div>
        <div className={`transform transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
          <BookOpen className="w-6 h-6 text-indigo-600" />
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Course Progress</span>
          <span className="text-indigo-600 font-medium flex items-center gap-1">
            {course.progress}%
            {course.progress === 100 && (
              <CheckCircle2 className="w-4 h-4 text-green-500 animate-bounce" />
            )}
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{course.modules.length} modules</span>
        </div>
      </div>
      
      <div className="mt-4">
        <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm group flex items-center gap-1">
          View Course 
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </button>
      </div>
    </div>
  );
}