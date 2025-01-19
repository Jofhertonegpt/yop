import React, { useState } from 'react';
import { Award, Lock, Sparkles } from 'lucide-react';
import type { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isUnlocked = achievement.unlockedAt !== undefined;
  const progressPercentage = (achievement.progress / achievement.requiredProgress) * 100;

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-4 transform transition-all duration-300 ${
        isHovered ? 'scale-105' : ''
      } ${isUnlocked ? 'border-2 border-indigo-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg transition-colors duration-300 ${
          isUnlocked ? 'bg-indigo-100 hover:bg-indigo-200' : 'bg-gray-100'
        }`}>
          {isUnlocked ? (
            <div className="relative">
              <Award className="w-6 h-6 text-indigo-600" />
              {isHovered && (
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
              )}
            </div>
          ) : (
            <Lock className="w-6 h-6 text-gray-400" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
          
          <div className="mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="text-indigo-600 font-medium">
                {achievement.progress}/{achievement.requiredProgress}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          
          {isUnlocked && (
            <div className="mt-2 text-sm text-indigo-600 flex items-center gap-1">
              <span>Unlocked on {achievement.unlockedAt.toLocaleDateString()}</span>
              {isHovered && <Sparkles className="w-4 h-4 animate-spin" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}