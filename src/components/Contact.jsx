import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Send,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { profile } from '../data/profile';
import { addInquiry } from '../data/store';

const serviceOptions = [
  "Custom Website Design",
  "E-Commerce Development",
  "SEO Optimization",
  "Website Maintenance",
  "Digital Marketing",
  "Web Applications",
  "Other / General Inquiry",
];

const budgetOptions = [
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom Website Design',
    budget: '$3,000 - $5,000',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a few project details';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of detail';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      addInquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service,
        budget: formData.budget,
        message: formData.message.trim(),
      });

      // Prepare mailto fallback link for client convenience
      const mailSubject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
      const mailBody = encodeURIComponent(
        `Hi Metia Digital Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}\n`
      );
      const mailtoLink = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Open pre-populated mail client fallback as well
        window.open(mailtoLink, '_blank');
      }, 600);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  const copyWhatsApp = () => {
    navigator.clipboard.writeText("90114441204");
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Direct Contact & Guarantees (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="font-monument text-4xl sm:text-6xl text-white tracking-tight leading-[0.95] mb-4">
            BUILD YOUR <span className="text-crimson-500">DREAM WEBSITE</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed mb-8">
            Let us create a modern digital experience for your business. Tell us about your goals and we will prepare a tailored proposal within 24 hours.
          </p>

          {/* Direct WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#08080c] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors mb-6 shadow-lg shadow-emerald-950/20">
            <span className="text-[10px] font-tech text-emerald-400 uppercase tracking-widest flex items-center gap-2 mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              DIRECT WHATSAPP TRANSMISSION
            </span>
            <div className="flex items-center justify-between gap-3">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-tech text-white hover:text-emerald-400 transition-colors font-semibold flex items-center gap-2.5 group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>+91 90114441204</span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 font-tech text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                  title="Open WhatsApp Chat"
                >
                  <span>CHAT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={copyWhatsApp}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  title="Copy WhatsApp number"
                >
                  {copiedWhatsApp ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Response SLA Guarantees */}
          <div className="space-y-4 text-xs font-tech text-zinc-300">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-crimson-500" />
              <span>Guaranteed Response Time: Under 24 Hours</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-crimson-500" />
              <span>Strict Non-Disclosure and IP Protection</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-crimson-500" />
              <span>Free Architecture Consultation and Scope Estimate</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Project Inquiry Terminal (col-span-7) */}
        <div className="lg:col-span-7 double-bezel-card">
          <div className="double-bezel-inner p-8 sm:p-10 bg-[#08080c] border border-white/[0.08]">
            {submitted ? (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-crimson-600/20 border border-crimson-500/50 flex items-center justify-center text-crimson-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-monument text-3xl text-white tracking-wide">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-sm text-zinc-300 max-w-md font-sans">
                  Thank you for contacting Metia Digital. Your inquiry has been registered in our project pipeline and our engineering director will respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-xs font-tech text-zinc-300 uppercase tracking-wider"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-zinc-300 mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-crimson-500' : 'border-white/[0.1] focus:border-crimson-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] font-tech text-crimson-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-zinc-300 mb-2">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-crimson-500' : 'border-white/[0.1] focus:border-crimson-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] font-tech text-crimson-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Picker */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-zinc-300 mb-2">
                    PRIMARY SERVICE REQUIRED
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d14] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-crimson-500 transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0d0d14] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-zinc-300 mb-2">
                    ESTIMATED BUDGET TIER
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-2 px-3 rounded-lg text-xs font-tech tracking-wider uppercase border transition-colors cursor-pointer ${
                          formData.budget === tier
                            ? 'bg-crimson-600/30 border-crimson-500 text-white font-semibold'
                            : 'bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-zinc-300 mb-2">
                    PROJECT SCOPE & TIMELINE *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current website, key goals, target timeline, or reference websites..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-crimson-500' : 'border-white/[0.1] focus:border-crimson-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] font-tech text-crimson-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-tech text-xs tracking-wider uppercase font-semibold shadow-glow-crimson transition-all duration-300 active:scale-[0.98] cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'TRANSMITTING INQUIRY...' : 'START YOUR PROJECT'}</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
