import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, User, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white dark:bg-gray-950 dark:border-r dark:border-gray-800 min-h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-8 text-center text-indigo-400">Admin Dashboard</h1>
      <nav className="space-y-2 flex-1">
        <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors">
          <User size={20} />
          <span>Profile</span>
        </Link>
        <Link to="/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}