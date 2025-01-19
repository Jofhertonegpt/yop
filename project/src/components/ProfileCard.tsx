import React from 'react';
import { User, Award, GraduationCap, Trophy } from 'lucide-react';
import type { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="w-8 h-8 text-indigo-600" />
            </div>
          )}
          <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
            {profile.level}
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-indigo-50 rounded-lg">
          <Award className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
          <div className="text-sm font-medium text-gray-600">Achievements</div>
          <div className="text-lg font-bold text-indigo-600">{profile.achievements.length}</div>
        </div>
        <div className="text-center p-3 bg-indigo-50 rounded-lg">
          <GraduationCap className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
          <div className="text-sm font-medium text-gray-600">Certificates</div>
          <div className="text-lg font-bold text-indigo-600">{profile.certificates.length}</div>
        </div>
        <div className="text-center p-3 bg-indigo-50 rounded-lg">
          <Trophy className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
          <div className="text-sm font-medium text-gray-600">Points</div>
          <div className="text-lg font-bold text-indigo-600">{profile.totalPoints}</div>
        </div>
      </div>
    </div>
  );
}