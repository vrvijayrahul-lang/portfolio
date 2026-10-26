import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  MessageSquare,
  FolderGit2,
  Settings,
  LogOut,
  ArrowLeft,
  ExternalLink,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import AdminLogin from './AdminLogin';
import AdminAnalytics from './AdminAnalytics';
import AdminInbox from './AdminInbox';
import AdminProjects from './AdminProjects';
import AdminSettings from './AdminSettings';
import { checkAdminAuth, setAdminAuth, getStoredInquiries, getStoredProjects } from '../../data/store';

export default function AdminDashboard({ onBackToSite }) {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAdminAuth());
  const [activeTab, setActiveTab] = useState('analytics');
  const [inquiries, setInquiries] = useState(getStoredInquiries());
  const [projects, setProjects] = useState(getStoredProjects());

  useEffect(() => {
    const handleStorageUpdate = () => {
      setInquiries(getStoredInquiries());
      setProjects(getStoredProjects());
      setIsAuthenticated(checkAdminAuth());
    };
    window.addEventListener('srahul_storage_update', handleStorageUpdate);
    return () => window.removeEventListener('srahul_storage_update', handleStorageUpdate);
  }, []);

  const handleLoginSuccess = () => {
    setAdminAuth(true);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setAdminAuth(false);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLoginSuccess} onBackToSite={onBackToSite} />;
  }

  const unreadInquiriesCount = inquiries.filter((i) => i.status === 'unread').length;

  return (
    <div className="min-h-screen bg-[#050507] text-[#f5f5f7] flex flex-col font-sans selection:bg-crimson-600/40 selection:text-white">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#08080c]/90 backdrop-blur-xl border-b border-crimson-900/30 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo & Console Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-crimson-600 flex items-center justify-center font-monument text-lg text-white shadow-glow-crimson">
              SR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-monument text-xl text-white tracking-wide">
                  ADMIN CONSOLE
                </span>
                <span className="comic-stamp py-0.5 px-2 text-[9px]">
                  INTERNAL // v2.6
                </span>
              </div>
              <span className="font-tech text-[10px] text-zinc-400 block uppercase">
                PORTFOLIO CONTROL MATRIX • S RAHUL
              </span>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToSite}
              className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-tech text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-crimson-400" />
              <span>RETURN TO SITE</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-xl bg-crimson-950/40 hover:bg-crimson-900/60 border border-crimson-800/40 text-xs font-tech text-crimson-300 hover:text-white flex items-center gap-1.5 transition-colors"
              title="Lock Admin Session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">LOCK SESSION</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Dashboard Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8 space-y-8">

        {/* Module Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/[0.06] font-tech text-xs scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2.5 rounded-xl uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'analytics'
                ? 'bg-crimson-600 text-white font-semibold shadow-glow-crimson'
                : 'text-zinc-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>ANALYTICS & TRAFFIC</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('inbox')}
            className={`relative px-4 py-2.5 rounded-xl uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'inbox'
                ? 'bg-crimson-600 text-white font-semibold shadow-glow-crimson'
                : 'text-zinc-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>INCOMING INQUIRIES</span>
            {unreadInquiriesCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-dark-950 text-[10px] font-bold flex items-center justify-center font-mono">
                {unreadInquiriesCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-xl uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'projects'
                ? 'bg-crimson-600 text-white font-semibold shadow-glow-crimson'
                : 'text-zinc-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04]'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>PROJECTS ({projects.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 rounded-xl uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'settings'
                ? 'bg-crimson-600 text-white font-semibold shadow-glow-crimson'
                : 'text-zinc-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>PROFILE & CHANNELS</span>
          </button>
        </div>

        {/* Tab Body Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'analytics' && <AdminAnalytics />}
          {activeTab === 'inbox' && <AdminInbox />}
          {activeTab === 'projects' && <AdminProjects />}
          {activeTab === 'settings' && <AdminSettings />}
        </motion.div>

      </main>

      {/* Admin Footer */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#07070a] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-tech text-[10px] text-zinc-500 uppercase tracking-widest">
          <div>
            S RAHUL PORTFOLIO ARCHITECTURE // SECURE CONTROL WORKSPACE
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-400">DATABASE STATUS: SYNCED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
