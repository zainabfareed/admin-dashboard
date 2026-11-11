import React from 'react';
import { Users, DollarSign, ShoppingBag } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden p-2 sm:p-4 transition-colors">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        
        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3 w-full min-w-0 transition-colors">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
              <Users size={24} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">Total Users</p>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">1,248</h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3 w-full min-w-0 transition-colors">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
              <DollarSign size={24} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">Total Revenue</p>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">$34,150</h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3 w-full min-w-0 transition-colors sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-3 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
              <ShoppingBag size={24} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">Active Orders</p>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">456</h3>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 w-full min-w-0 transition-colors">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 dark:text-white truncate">Recent Activity</h3>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed truncate w-full">
          Welcome to your dashboard! Here you can monitor performance and metrics.
        </p>
      </div>
    </div>
  );
}