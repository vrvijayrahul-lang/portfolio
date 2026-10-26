import React, { useState, useEffect } from 'react';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/admin/AdminDashboard';

export default function App() {
  const [isAdminView, setIsAdminView] = useState(() => {
    return window.location.hash === '#admin' || window.location.pathname === '/admin';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setIsAdminView(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openAdmin = () => {
    window.location.hash = 'admin';
    setIsAdminView(true);
  };

  const closeAdmin = () => {
    window.location.hash = '';
    setIsAdminView(false);
  };

  if (isAdminView) {
    return <AdminDashboard onBackToSite={closeAdmin} />;
  }

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#f5f5f7] selection:bg-crimson-600/40 selection:text-white">
      {/* Dynamic atmospheric ambient background */}
      <BackgroundAtmosphere />

      {/* Floating Island Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Selected Projects Portfolio Gallery */}
        <Projects />

        {/* Skills & Toolkit Section */}
        <Skills />

        {/* Contact & Inquiries Section */}
        <Contact />
      </main>

      {/* Site Footer with Admin trigger */}
      <Footer onOpenAdmin={openAdmin} />
    </div>
  );
}
