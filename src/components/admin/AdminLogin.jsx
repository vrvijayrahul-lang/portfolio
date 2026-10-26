import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, KeyRound, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

export default function AdminLogin({ onLogin, onBackToSite }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default passcodes accepted: rahul2026, admin, admin123
    if (password === 'rahul2026' || password === 'admin' || password === 'admin123') {
      onLogin();
    } else {
      setError('Access Denied. Passcode incorrect. (Hint: rahul2026 or click Quick Demo Unlock below)');
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
            className="flex items-center gap-2 font-tech text-xs text-zinc-400 hover:text-white mb-6 transition-colors"
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
                ADMIN CONSOLE
              </h2>
              <p className="font-tech text-[10px] text-crimson-400 uppercase tracking-widest">
                PROTOCOL // SECURITY GATE
              </p>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans">
            Authorized access only for S Rahul. Manage live client inquiries, projects, profile availability, and site metrics.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-pass" className="block font-tech text-xs uppercase tracking-wider text-zinc-300 mb-1.5">
                ACCESS PASSCODE:
              </label>
              <div className="relative">
                <input
                  id="admin-pass"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter passcode (e.g. rahul2026)"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-crimson-500 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-1 focus:ring-crimson-500 transition-all font-tech"
                />
                <KeyRound className="absolute right-3.5 top-3.5 w-4 h-4 text-zinc-500" />
              </div>
              {error && (
                <p className="text-[11px] text-crimson-400 mt-2 flex items-center gap-1.5 font-tech">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument text-base tracking-wider shadow-glow-crimson flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <span>AUTHORIZE SESSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Unlock Divider */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] text-center">
            <button
              type="button"
              onClick={handleQuickUnlock}
              className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-crimson-500/40 text-xs font-tech text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-crimson-400" />
              <span>QUICK DEMO UNLOCK (ONE-CLICK ACCESS)</span>
            </button>
            <p className="font-tech text-[10px] text-zinc-500 mt-2 uppercase">
              DEFAULT PASSCODE: <code className="text-crimson-400 font-mono">rahul2026</code>
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
