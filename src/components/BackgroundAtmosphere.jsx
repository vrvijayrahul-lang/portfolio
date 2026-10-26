import React from 'react';

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Atmospheric Crimson Radial Spotlight - Top Right */}
      <div
        className="absolute -top-[15%] right-[5%] w-[750px] h-[750px] rounded-full bg-crimson-600/[0.16] blur-[150px] transform-gpu animate-float-slow"
      />

      {/* Secondary Deep Burgundy Glow - Left Center */}
      <div
        className="absolute top-[35%] -left-[15%] w-[650px] h-[650px] rounded-full bg-crimson-900/[0.22] blur-[140px] transform-gpu animate-float-delayed"
      />

      {/* Lower Center Crimson Ambient Aura */}
      <div
        className="absolute bottom-[5%] left-[20%] w-[600px] h-[600px] rounded-full bg-crimson-700/[0.12] blur-[140px] transform-gpu"
      />

      {/* Image 2 Inspired Concentric Spiral / Target Motif - Subtle Background Layer */}
      <div className="absolute top-[8%] right-[-10%] md:right-[5%] opacity-[0.07] pointer-events-none">
        <svg width="650" height="650" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
          <circle cx="300" cy="300" r="280" stroke="#DC2626" strokeWidth="22" strokeDasharray="30 15" />
          <circle cx="300" cy="300" r="220" stroke="#DC2626" strokeWidth="18" />
          <circle cx="300" cy="300" r="160" stroke="#DC2626" strokeWidth="14" strokeDasharray="20 10" />
          <circle cx="300" cy="300" r="100" stroke="#DC2626" strokeWidth="12" />
          <circle cx="300" cy="300" r="45" fill="#DC2626" />
        </svg>
      </div>

      {/* Ultra-subtle graphic grid lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"
      />

      {/* Fixed tactile film grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-70 mix-blend-overlay" />
    </div>
  );
}
