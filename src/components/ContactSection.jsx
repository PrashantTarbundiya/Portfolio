import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Linkedin, 
  Github, 
  Terminal, 
  Code2, 
  FileText, 
  ExternalLink, 
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RotateCcw
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactSection({ onCopyEmail, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isNeedsActivation, setIsNeedsActivation] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sectionRef, sectionVisible] = useScrollReveal({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please provide a message.';
    return errs;
  };

  const handleCopy = () => {
    onCopyEmail(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setIsNeedsActivation(false);

    try {
      // Send directly to Prashant's email via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          _subject: `[Portfolio Contact] ${formData.subject.trim()} - from ${formData.name.trim()}`,
          message: formData.message.trim(),
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => null);

      // Check if FormSubmit sent a first-time activation email
      if (data?.message && (data.message.toLowerCase().includes('activation') || data.message.toLowerCase().includes('activate'))) {
        setIsNeedsActivation(true);
        if (showToast) showToast('Activation email sent to ' + personalInfo.email);
        return;
      }

      if (response.ok && (!data || data.success === 'true' || data.success === true)) {
        setIsSubmitted(true);
        if (showToast) showToast('Message delivered directly to Prashant\'s inbox!');
      } else {
        throw new Error(data?.message || 'Server responded with an error.');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX dispatch failed, activating fallback:', err);
      setSubmitError('Direct dispatch encountered an issue. Launching your email client as a reliable fallback...');
      if (showToast) showToast('Launching mail client fallback...');
      
      // Fallback to mailto so the user never loses their drafted message
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Prashant,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
    setIsNeedsActivation(false);
  };

  const socialCards = [
    {
      title: 'LinkedIn Network',
      handle: 'in/prashant-tarbundiya',
      link: personalInfo.socials.linkedin,
      icon: <Linkedin className="w-4 h-4 text-cyan-neon" />,
    },
    {
      title: 'GitHub Repositories',
      handle: 'github.com/prashanttarbundiya',
      link: personalInfo.socials.github,
      icon: <Github className="w-4 h-4 text-white" />,
    },
    {
      title: 'Codeforces Profile',
      handle: 'Pupil Rating',
      link: personalInfo.socials.codeforces,
      icon: <Terminal className="w-4 h-4 text-lime-neon" />,
    },
    {
      title: 'LeetCode Practice',
      handle: 'leetcode.com/u/sRj6itRSrz',
      link: personalInfo.socials.leetcode,
      icon: <Code2 className="w-4 h-4 text-coral-devx" />,
    },
    {
      title: 'Official Resume (PDF)',
      handle: 'Prashant_Tarbundiya_Resume.pdf',
      link: personalInfo.resumeUrl,
      icon: <FileText className="w-4 h-4 text-lime-neon" />,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div 
        ref={sectionRef}
        className={`glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-9 lg:p-14 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9)] reveal-scale ${
          sectionVisible ? 'visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Left Form Area */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-pill text-[11px] sm:text-xs font-mono text-gray-200 uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-lime-neon" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
                Let's Build &amp; Collaborate
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                I am actively seeking Software Engineering Internships and Full-Time Roles for Summer 2026. Reach out directly with technical questions, interview invitations, or system architecture discussions.
              </p>

              {/* One-Click Email Copy Bar (Responsive layout) */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card border border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 sm:mb-8 shadow-inner">
                <div className="flex items-center gap-3 overflow-hidden min-w-0">
                  <div className="p-2 rounded-xl bg-lime-neon/10 border border-lime-neon/30 text-lime-neon shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-gray-100 truncate font-semibold">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="btn-press flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-lime-neon text-black font-mono text-xs font-bold hover:bg-[#d8ff33] transition-all shadow-[0_0_15px_rgba(200,255,0,0.3)] shrink-0"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Contact Form or Success State */}
              {isSubmitted ? (
                <div className="p-6 sm:p-8 rounded-2xl glass-card border border-lime-neon/40 bg-lime-neon/5 flex flex-col items-center text-center space-y-4 shadow-[0_10px_40px_rgba(200,255,0,0.12)]">
                  <div className="w-14 h-14 rounded-full bg-lime-neon/15 border border-lime-neon/40 flex items-center justify-center text-lime-neon shadow-[0_0_25px_rgba(200,255,0,0.3)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5 max-w-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Message Delivered Directly!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                      Thank you for reaching out. Your message has been sent directly to{' '}
                      <span className="font-mono text-lime-neon font-semibold">{personalInfo.email}</span>. Prashant will review and respond promptly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="btn-press mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-semibold transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : isNeedsActivation ? (
                <div className="p-6 sm:p-8 rounded-2xl glass-card border border-sky-400/40 bg-sky-500/10 flex flex-col items-center text-center space-y-4 shadow-[0_10px_40px_rgba(56,189,248,0.15)]">
                  <div className="w-14 h-14 rounded-full bg-sky-500/15 border border-sky-400/40 flex items-center justify-center text-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5 max-w-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      One-Time Form Activation Required
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                      FormSubmit has sent an activation link to{' '}
                      <span className="font-mono text-sky-400 font-semibold">{personalInfo.email}</span>.
                      Please open your Gmail and click <strong className="text-white">"Activate Form"</strong>.
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-400 font-mono mt-1">
                      Check your Inbox or Spam folder. Once clicked, all future submissions will reach you directly!
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="btn-press mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-semibold transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>I've Activated / Try Again</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
                  {submitError && (
                    <div className="p-3 sm:p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-rose-300 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5 sm:mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input ${
                          errors.name ? 'border-rose-500' : 'border-white/10'
                        } text-xs sm:text-sm text-white placeholder-gray-500 outline-none`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-500 mt-1 block font-mono">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5 sm:mb-2 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input ${
                          errors.email ? 'border-rose-500' : 'border-white/10'
                        } text-xs sm:text-sm text-white placeholder-gray-500 outline-none`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 mt-1 block font-mono">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 sm:mb-2 font-medium">
                      Subject / Role *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Summer 2026 Software Engineer Internship"
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input ${
                        errors.subject ? 'border-rose-500' : 'border-white/10'
                      } text-xs sm:text-sm text-white placeholder-gray-500 outline-none`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-500 mt-1 block font-mono">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 sm:mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Prashant, I reviewed your work on AuraPass and Lab Portal and would love to discuss an opportunity..."
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input ${
                        errors.message ? 'border-rose-500' : 'border-white/10'
                      } text-xs sm:text-sm text-white placeholder-gray-500 outline-none resize-y`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-500 mt-1 block font-mono">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-press flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-lime-neon text-black font-mono font-bold text-xs hover:bg-[#d8ff33] shadow-[0_0_20px_rgba(200,255,0,0.35)] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(
                        formData.message || 'Hi Prashant,'
                      )}`}
                      className="text-xs font-mono text-gray-400 hover:text-white underline text-center sm:text-left transition-colors"
                      title="Prefer opening your desktop mail app?"
                    >
                      Or open in Mail App
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Socials & Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-3.5">
            <h3 className="text-xs font-mono text-gray-300 uppercase tracking-wider mb-1 font-bold">
              Verified Profiles &amp; Resume
            </h3>
            
            <div className="space-y-2.5 sm:space-y-3">
              {socialCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card hover:border-white/30 transition-all flex items-center justify-between group hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/10 group-hover:scale-110 transition-transform shadow-md shrink-0">
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-mono text-gray-400 truncate">
                        {card.title}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-white group-hover:text-lime-neon transition-colors truncate">
                        {card.handle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors shrink-0 ml-2" />
                </a>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card border-lime-neon/30 mt-3 sm:mt-4 text-xs font-mono text-gray-300 shadow-[0_0_20px_rgba(200,255,0,0.08)]">
              <span className="text-lime-neon font-bold block mb-1">Direct Outreach</span>
              All credentials and code repos verified. Ready for Summer 2026 SWE opportunities.
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
