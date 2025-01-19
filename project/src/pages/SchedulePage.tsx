import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import type { Schedule } from '../types';

const sampleSchedule: Schedule[] = [
  {
    id: '1',
    title: 'Introduction to Programming Lecture',
    date: new Date('2024-03-15T10:00:00'),
    type: 'lecture',
    description: 'Fundamentals of programming concepts'
  },
  {
    id: '2',
    title: 'Mathematics Exam',
    date: new Date('2024-03-20T14:00:00'),
    type: 'exam',
    description: 'Mid-term examination'
  }
];

export function SchedulePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
        <p className="text-gray-600 mt-2">Your upcoming classes and events</p>
      </div>
      
      <div className="space-y-4">
        {sampleSchedule.map(event => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${
                event.type === 'exam' ? 'bg-red-100' : 'bg-indigo-100'
              }`}>
                {event.type === 'exam' ? (
                  <Clock className="w-6 h-6 text-red-600" />
                ) : (
                  <Calendar className="w-6 h-6 text-indigo-600" />
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-gray-600 mt-1">{event.description}</p>
                <div className="mt-2 text-sm text-gray-500">
                  {event.date.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}