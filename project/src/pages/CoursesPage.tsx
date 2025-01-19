import React from 'react';
import { CourseCard } from '../components/CourseCard';
import type { Course } from '../types';

const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Computer Science',
    description: 'Learn the fundamentals of computer science and programming.',
    modules: [],
    schedule: [],
    progress: 35
  },
  {
    id: '2',
    title: 'Advanced Mathematics',
    description: 'Explore complex mathematical concepts and their applications.',
    modules: [],
    schedule: [],
    progress: 65
  }
];

export function CoursesPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <p className="text-gray-600 mt-2">Continue your learning journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}