import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  Phone,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';
import { profile } from '../data/profile';

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

    // Simulate reliable packaging and construct prefilled mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open user's default email client pre-populated with their exact input
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
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-violet-600/[0.08] blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-medium tracking-widest uppercase mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-2xl mb-4">
          Let's make something{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-200 via-violet-300 to-purple-400">
            matter.
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Have a website to build, a brand to grow, or an idea you want to explore? Tell me about it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Direct Channels & Information (col-span-5) */}
        <div className="lg:col-span-5 space-y-6">

          {/* Direct Email Card */}
          <div className="double-bezel-card">
            <div className="double-bezel-inner p-6 sm:p-7 bg-[#0a0a14]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                  Direct Inbox
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={profile.socials.email}
                className="text-lg sm:text-xl font-display font-bold text-white hover:text-violet-300 transition-colors flex items-center gap-2 group"
              >
                <span>{profile.email}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-violet-300 transition-colors" />
              </a>

              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Direct inquiries answered within 24 hours. Feel free to send specifications or RFP briefs directly.
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Option */}
          <div className="double-bezel-card">
            <div className="double-bezel-inner p-6 sm:p-7 bg-[#0a0a14]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm">
                    WhatsApp Chat
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Quick messaging & discussions
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Prefer a fast, synchronous chat? Reach out directly via WhatsApp for swift project scoping.
              </p>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-all"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="double-bezel-card">
            <div className="double-bezel-inner p-6 sm:p-7 bg-[#0a0a14]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                Verified Profiles
              </h3>

              <div className="flex flex-col gap-2.5">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-violet-400" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-violet-400" />
                    <span className="font-medium">GitHub Repositories</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form (col-span-7) */}
        <div className="lg:col-span-7 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-9 bg-[#090912]">

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display font-bold text-2xl text-white">
                  Inquiry Packaged & Dispatched!
                </h3>

                <p className="text-zinc-300 text-sm max-w-md leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your default email client was opened with your message. If it didn't open automatically, you can also email directly to <span className="text-violet-300">{profile.email}</span>.
                </p>

                <div className="pt-4">
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
                    className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-xs font-medium text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Fill out the parameters below and we'll connect swiftly.
                  </p>
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    I need help with:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceSelect(service)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          formData.service === service
                            ? 'bg-violet-600 text-white shadow-[0_0_15px_-3px_rgba(139,92,246,0.6)]'
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
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.name ? 'border-red-500/70' : 'border-white/[0.08] focus:border-violet-500/60'
                      } text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-violet-500/60 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Email Address <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.email ? 'border-red-500/70' : 'border-white/[0.08] focus:border-violet-500/60'
                      } text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-violet-500/60 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Optional Budget / Scope Select */}
                <div>
                  <label htmlFor="budget" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Estimated Project Budget (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e18] border border-white/[0.08] focus:border-violet-500/60 text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-violet-500/60 transition-all"
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
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Goals & Requirements <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you're looking to build or achieve, target timeline, and any specific inspiration..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      errors.message ? 'border-red-500/70' : 'border-white/[0.08] focus:border-violet-500/60'
                    } text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-violet-500/60 transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button (Button-in-Button Architecture) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-between px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-violet-500 to-purple-600 text-white font-medium text-sm shadow-[0_0_25px_-5px_rgba(139,92,246,0.6)] hover:shadow-[0_0_35px_0px_rgba(139,92,246,0.85)] active:scale-[0.99] disabled:opacity-50 transition-all duration-300"
                >
                  <span className="tracking-wide">
                    {isSubmitting ? 'Packaging Inquiry...' : 'Send Inquiry to S Rahul'}
                  </span>

                  <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/30">
                    <Send className="w-3.5 h-3.5 text-white" />
                  </span>
                </button>

                <p className="text-[11px] text-center text-zinc-400 leading-normal">
                  Zero spam. Submitting opens a direct mail dialogue with your pre-filled inquiry.
                </p>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
