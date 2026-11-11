import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="bg-white dark:bg-gray-900 dark:border-b dark:border-gray-800 shadow-sm h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10 transition-colors gap-4">
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex-1 max-w-xs sm:max-w-md">
        <Search size={18} className="text-gray-400 shrink-0" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent outline-none w-full text-sm dark:text-white min-w-0"
        />
      </div>
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <button className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 p-1">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-sm shrink-0">
          Z
        </div>
      </div>
    </header>
  );
}