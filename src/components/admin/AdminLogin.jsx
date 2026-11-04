import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, KeyRound, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

export default function AdminLogin({ onLogin, onBackToSite }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validCodes = ['metia2026', 'metia', 'admin', 'admin123', 'rahul2026'];
    if (validCodes.includes(password.toLowerCase().trim())) {
      onLogin();
    } else {
      setError('Access Denied. Passcode incorrect. (Hint: metia2026 or click Quick Demo Unlock below)');
    }
  };

  const handleQuickUnlock = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#050507] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-crimson-600/[0.12] blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md double-bezel-card relative z-10 border border-crimson-600/30"
      >
        <div className="double-bezel-inner p-8 sm:p-10 bg-[#08080c] border border-white/[0.04]">

          {/* Top Return Button */}
          <button
            type="button"
            onClick={onBackToSite}
            className="flex items-center gap-2 font-tech text-xs text-zinc-400 hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO LIVE SITE</span>
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-crimson-600 flex items-center justify-center text-white shadow-glow-crimson">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-monument text-2xl tracking-wide text-white">
                AGENCY CONSOLE
              </h2>
              <p className="font-tech text-[10px] text-crimson-400 uppercase tracking-widest">
                METIA DIGITAL // SECURITY GATE
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-tech text-zinc-400 uppercase tracking-wider mb-2">
                ADMIN PASSCODE
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter passcode..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 font-mono"
                  autoFocus
                />
                <KeyRound className="absolute right-3.5 top-3.5 w-4 h-4 text-zinc-500 pointer-events-none" />
              </div>
              {error && (
                <div className="mt-2 text-xs font-tech text-crimson-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-tech text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-crimson transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>AUTHENTICATE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Demo Unlock Shortcut */}
          <div className="mt-6 pt-6 border-t border-white/[0.06] text-center">
            <button
              type="button"
              onClick={handleQuickUnlock}
              className="w-full py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] text-xs font-tech text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              QUICK DEMO UNLOCK (ONE-CLICK)
            </button>
            <span className="block text-[10px] font-tech text-zinc-400 mt-2">
              Default passcode: <code className="text-crimson-400">metia2026</code>
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
