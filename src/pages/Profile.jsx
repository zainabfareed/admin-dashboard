import React, { useState } from 'react';
import { User, Mail, Shield, Camera } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden p-2 sm:p-4 transition-colors">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Profile Settings</h2>
      
      <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 w-full min-w-0 transition-colors space-y-6">
        
        <div className="flex items-center gap-4 pb-4 border-b border-gray-100 dark:border-gray-800 w-full min-w-0">
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-xl font-bold">
              <User size={32} />
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors">
              <Camera size={14} />
            </button>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white truncate">
ZAINAB            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
              Software Engineer & Computer Science Graduate
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full min-w-0 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0">
              <Mail size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
                Email Address
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                ZAINAB@example.com
              </p>
            </div>
          </div>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium shrink-0 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/50 rounded-md">
            Verified
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 w-full min-w-0">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-2 bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-lg shrink-0">
              <Shield size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
                Account Security
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                Two-factor authentication and password settings.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 ${notificationsEnabled ? 'bg-indigo-600' : 'bg-gray-300'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notificationsEnabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>

      </div>
    </div>
  );
}