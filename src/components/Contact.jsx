import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Linkedin,
  Github,
  MessageSquare,
  Phone,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { profile } from '../data/profile';
import { addInquiry } from '../data/store';

const serviceOptions = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing & SEO",
  "WordPress Development",
  "Graphic Design & Canva",
  "AI Tools & Automation",
  "General Consultation",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
    budget: '$500 - $2,000',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your project';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters of detail';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({ ...prev, service }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Save inquiry to persistent admin store
      addInquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service,
        budget: formData.budget,
        message: formData.message.trim(),
      });

      const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Rahul,\n\nMy name is ${formData.name} (${formData.email}).\n\nI'm reaching out regarding: ${formData.service}\nEstimated Budget: ${formData.budget}\n\nProject Details:\n${formData.message}\n\nLooking forward to speaking with you!`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto">
      {/* Background glow accent */}
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-crimson-600/[0.1] blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="comic-stamp mb-4">
          INDEX 05 // TRANSMISSION & INQUIRY
        </div>

        <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none max-w-2xl mb-4">
          LET'S MAKE SOMETHING{' '}
          <span className="text-crimson-500 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">
            MATTER.
          </span>
        </h2>

        <p className="font-tech text-xs sm:text-sm text-zinc-400 max-w-xl uppercase tracking-wider">
          HAVE A WEBSITE TO BUILD, A BRAND TO GROW, OR AN IDEA YOU WANT TO EXPLORE? TELL ME ABOUT IT.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Direct Channels & Information (col-span-5) */}
        <div className="lg:col-span-5 space-y-6">

          {/* Direct Email Card */}
          <div className="double-bezel-card">
            <div className="double-bezel-inner p-6 sm:p-7 bg-[#08080c] border border-white/[0.04]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.06] font-tech">
                <span className="text-xs uppercase tracking-wider text-crimson-400">
                  // DIRECT INBOX
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-[10px] text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/[0.04] border border-white/[0.08] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-crimson-400" />
                      <span className="text-crimson-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={profile.socials.email}
                className="text-lg sm:text-xl font-monument tracking-wider text-white hover:text-crimson-400 transition-colors flex items-center gap-2 group"
              >
                <span>{profile.email}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-crimson-400 transition-colors" />
              </a>

              <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-sans">
                Direct inquiries answered within 24 hours. Send project specs or RFP briefs directly.
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Option */}
          <div className="double-bezel-card">
            <div className="double-bezel-inner p-6 sm:p-7 bg-[#08080c] border border-white/[0.04]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-crimson-600/15 border border-crimson-500/30 flex items-center justify-center text-crimson-400">
                  <Phone className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-monument text-lg text-white tracking-wide">
                    WHATSAPP DIRECT
                  </h3>
                  <p className="font-tech text-[10px] text-zinc-400 uppercase">
                    RAPID MESSAGING & DISCUSSIONS
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-4 leading-relaxed font-sans">
                Prefer a fast chat? Connect via WhatsApp for immediate project scoping.
              </p>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-crimson-950/50 hover:bg-crimson-900/50 border border-crimson-600/40 text-crimson-300 font-monument text-xs tracking-wider transition-all"
              >
                <span>MESSAGE ON WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="double-bezel-card">
            <div className="double-bezel-inner p-6 sm:p-7 bg-[#08080c] border border-white/[0.04]">
              <h3 className="font-tech text-xs uppercase tracking-wider text-zinc-400 mb-4 pb-2 border-b border-white/[0.06]">
                // VERIFIED PROFILES
              </h3>

              <div className="flex flex-col gap-2.5 font-tech text-xs">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-crimson-500/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-crimson-400" />
                    <span className="font-medium">LINKEDIN // PROFILE</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-crimson-500/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-crimson-400" />
                    <span className="font-medium">GITHUB // REPOSITORY</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form (col-span-7) */}
        <div className="lg:col-span-7 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-9 bg-[#08080c] border border-white/[0.04]">

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-crimson-600/20 border border-crimson-500/40 flex items-center justify-center text-crimson-400 shadow-glow-crimson">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-monument text-3xl text-white tracking-wide">
                  INQUIRY PACKAGED & DISPATCHED
                </h3>

                <p className="text-zinc-300 text-sm max-w-md leading-relaxed font-sans">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your default email client was opened with your message. You can also email directly to <span className="text-crimson-400">{profile.email}</span>.
                </p>

                <div className="pt-4 font-tech">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Web Development',
                        message: '',
                        budget: '$500 - $2,000',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs uppercase font-medium text-white transition-colors"
                  >
                    SEND ANOTHER NOTE
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-monument text-2xl text-white tracking-wide mb-1">
                    SEND A PROJECT INQUIRY
                  </h3>
                  <p className="font-tech text-xs text-zinc-400 uppercase">
                    FILL OUT SPECIFICATIONS TO INITIATE COLLABORATION
                  </p>
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block font-tech text-xs uppercase tracking-wider text-zinc-300 mb-2">
                    DISCIPLINE REQUIRED:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceSelect(service)}
                        className={`px-3 py-1.5 rounded-lg font-tech text-xs uppercase tracking-wider transition-all ${
                          formData.service === service
                            ? 'bg-crimson-600 text-white shadow-glow-crimson'
                            : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-tech text-xs text-zinc-300 mb-1.5 uppercase">
                      NAME <span className="text-crimson-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.name ? 'border-crimson-500' : 'border-white/[0.08] focus:border-crimson-500'
                      } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-crimson-500 transition-all font-sans`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-crimson-400 mt-1 flex items-center gap-1 font-tech">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-tech text-xs text-zinc-300 mb-1.5 uppercase">
                      EMAIL ADDRESS <span className="text-crimson-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.email ? 'border-crimson-500' : 'border-white/[0.08] focus:border-crimson-500'
                      } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-crimson-500 transition-all font-sans`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-crimson-400 mt-1 flex items-center gap-1 font-tech">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Optional Budget / Scope Select */}
                <div>
                  <label htmlFor="budget" className="block font-tech text-xs text-zinc-300 mb-1.5 uppercase">
                    ESTIMATED BUDGET SCOPE (OPTIONAL)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0b12] border border-white/[0.08] focus:border-crimson-500 text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-crimson-500 transition-all font-tech"
                  >
                    <option value="Under $500">Under $500 (Small Sprint / Fix)</option>
                    <option value="$500 - $2,000">$500 - $2,000 (Standard Website / Branding Kit)</option>
                    <option value="$2,000 - $5,000">$2,000 - $5,000 (Full-Stack App / End-to-End System)</option>
                    <option value="$5,000+">$5,000+ (Ongoing Retainer / Enterprise Scope)</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>

                {/* Project Details Textarea */}
                <div>
                  <label htmlFor="message" className="block font-tech text-xs text-zinc-300 mb-1.5 uppercase">
                    PROJECT GOALS & REQUIREMENTS <span className="text-crimson-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you're looking to build or achieve, target timeline, and any specific inspiration..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      errors.message ? 'border-crimson-500' : 'border-white/[0.08] focus:border-crimson-500'
                    } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-crimson-500 transition-all resize-y font-sans`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-crimson-400 mt-1 flex items-center gap-1 font-tech">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-between px-6 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument text-lg tracking-wider shadow-glow-crimson active:scale-[0.99] disabled:opacity-50 transition-all duration-300"
                >
                  <span>
                    {isSubmitting ? 'PACKAGING TRANSMISSION...' : 'SEND INQUIRY TO S RAHUL'}
                  </span>

                  <span className="w-7 h-7 rounded-lg bg-black/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <Send className="w-3.5 h-3.5 text-white" />
                  </span>
                </button>

                <p className="text-[10px] font-tech text-center text-zinc-400 uppercase">
                  ZERO SPAM // SUBMITTING OPENS A DIRECT MAIL DIALOGUE WITH YOUR DETAILS
                </p>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
