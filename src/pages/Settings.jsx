import React, { useState } from 'react';
import { Mail, Moon } from 'lucide-react';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden p-2 sm:p-4 transition-colors">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">System Settings</h2>
      
      <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 w-full min-w-0 transition-colors space-y-6">
        
        <div className="flex items-center justify-between gap-3 w-full min-w-0 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0">
              <Mail size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
                Email Notifications
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                Receive email updates on new logs and alerts.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setEmailNotifications(!emailNotifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 ${emailNotifications ? 'bg-indigo-600' : 'bg-gray-300'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 w-full min-w-0">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-2 bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-lg shrink-0">
              <Moon size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
                Dark Mode
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                Change dashboard theme appearance.
              </p>
            </div>
          </div>
          
          <button 
            onClick={toggleDarkMode}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 ${isDarkMode ? 'bg-indigo-600' : 'bg-gray-300'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>

      </div>
    </div>
  );
}