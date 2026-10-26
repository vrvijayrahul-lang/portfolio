import React from 'react';

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep OLED background */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Atmospheric Violet Radial Gradient - Top Center/Right */}
      <div
        className="absolute -top-[20%] right-[10%] w-[650px] h-[650px] rounded-full bg-violet-600/[0.12] blur-[140px] transform-gpu animate-float-slow"
      />

      {/* Secondary Lavender Glow - Left Center */}
      <div
        className="absolute top-[40%] -left-[15%] w-[550px] h-[550px] rounded-full bg-indigo-600/[0.10] blur-[130px] transform-gpu animate-float-delayed"
      />

      {/* Subtle Pink / Violet Accent - Bottom Right */}
      <div
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-700/[0.08] blur-[120px] transform-gpu"
      />

      {/* Ultra-subtle geometric grid lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"
      />

      {/* Fixed tactile film grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-60 mix-blend-overlay" />
    </div>
  );
}
