import React, { useState, useEffect } from 'react';
import { Award, X } from 'lucide-react';
import type { Achievement } from '../types';

interface AchievementPopupProps {
  achievement: Achievement;
  onClose: () => void;
}

export function AchievementPopup({ achievement, onClose }: AchievementPopupProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 500);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 max-w-sm w-full transform transition-all duration-500 ${
      show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-indigo-500">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Award className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Achievement Unlocked!</h3>
            <p className="text-sm text-gray-600">{achievement.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}