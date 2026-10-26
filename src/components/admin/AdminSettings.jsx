import React, { useState } from 'react';
import { Save, CheckCircle2, RotateCcw, AlertTriangle, Shield, User, Globe2 } from 'lucide-react';
import { getStoredProfile, saveStoredProfile, resetStoreToDefaults } from '../../data/store';

export default function AdminSettings() {
  const [profileData, setProfileData] = useState(getStoredProfile());
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSocialChange = (key, value) => {
    setProfileData((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [key]: value,
      },
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveStoredProfile(profileData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Warning: This will reset all inquiries, custom projects, and profile settings to factory defaults. Proceed?')) {
      resetStoreToDefaults();
      setProfileData(getStoredProfile());
      alert('All portfolio data restored to factory defaults.');
    }
  };

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <div className="pb-4 border-b border-white/[0.06]">
        <h3 className="font-monument text-2xl text-white tracking-wide">
          SYSTEM PARAMETERS & PROFILE CONFIG
        </h3>
        <p className="font-tech text-xs text-zinc-400 uppercase">
          CONFIGURE LIVE AVAILABILITY, CONTACT CHANNELS & CREDENTIALS
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Availability Badge Config */}
        <div className="double-bezel-card">
          <div className="double-bezel-inner p-6 bg-[#08080c] border border-white/[0.04] space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06] font-tech text-xs text-crimson-400 uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>LIVE AVAILABILITY STATUS</span>
            </div>

            <div>
              <label className="block font-tech text-xs text-zinc-300 uppercase mb-1.5">
                Current Hero Badge Text:
              </label>
              <input
                type="text"
                value={profileData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                placeholder="e.g. Available for freelance & international projects"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-crimson-500"
              />
              <p className="font-tech text-[10px] text-zinc-500 mt-1 uppercase">
                Appears in the header badge on the live portfolio hero section.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Inquiries Channels */}
        <div className="double-bezel-card">
          <div className="double-bezel-inner p-6 bg-[#08080c] border border-white/[0.04] space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06] font-tech text-xs text-crimson-400 uppercase">
              <User className="w-3.5 h-3.5" />
              <span>CONTACT & CHANNELS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-tech text-xs text-zinc-300 uppercase mb-1.5">
                  Business Email:
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-crimson-500"
                />
              </div>

              <div>
                <label className="block font-tech text-xs text-zinc-300 uppercase mb-1.5">
                  WhatsApp Contact Link / URL:
                </label>
                <input
                  type="text"
                  value={profileData.whatsapp}
                  onChange={(e) => handleChange('whatsapp', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block font-tech text-xs text-zinc-300 uppercase mb-1.5">
                  GitHub Profile URL:
                </label>
                <input
                  type="text"
                  value={profileData.socials?.github || ''}
                  onChange={(e) => handleSocialChange('github', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                />
              </div>

              <div>
                <label className="block font-tech text-xs text-zinc-300 uppercase mb-1.5">
                  LinkedIn Profile URL:
                </label>
                <input
                  type="text"
                  value={profileData.socials?.linkedin || ''}
                  onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-between pt-2">
          {savedSuccess ? (
            <div className="flex items-center gap-2 font-tech text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>CONFIG SAVED & SYNCED TO LIVE SITE</span>
            </div>
          ) : (
            <span className="font-tech text-xs text-zinc-500">Changes persist in local cache</span>
          )}

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument text-lg tracking-wider flex items-center gap-2 shadow-glow-crimson transition-all active:scale-[0.98]"
          >
            <Save className="w-4 h-4" />
            <span>SAVE PARAMETERS</span>
          </button>
        </div>
      </form>

      {/* Danger Zone: Reset Data */}
      <div className="pt-8 border-t border-red-950/40">
        <div className="double-bezel-card border border-red-900/30">
          <div className="double-bezel-inner p-6 bg-[#0a0507] border border-red-900/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-tech text-red-400 uppercase tracking-wider mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>FACTORY RESET PROTOCOL</span>
              </div>
              <p className="text-xs text-zinc-400 font-sans">
                Restore all project data, inquiries, and settings to the initial clean repository state.
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-800 text-red-300 hover:text-white font-tech text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              RESTORE FACTORY DEFAULTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
