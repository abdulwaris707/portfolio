import React, { useState } from 'react';
import { Mail, Github, Linkedin, Check, AlertCircle } from 'lucide-react';
import { useDiscipline } from '../../context/DisciplineContext';

export const Contact: React.FC = () => {
  const { getAccentColor } = useDiscipline();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || '2003abdulwaris@gmail.com';

  const validateEmail = (emailStr: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailStr);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setFormErrors(prev => ({ ...prev, email: 'Provide a valid email address.' }));
      } else {
        setFormErrors(prev => ({ ...prev, email: '' }));
      }
    }
    if (name === 'message') {
      if (value && value.length < 10) {
        setFormErrors(prev => ({ ...prev, message: 'Message must be at least 10 characters.' }));
      } else {
        setFormErrors(prev => ({ ...prev, message: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || formErrors.email || formErrors.message) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    if (formData.email.toLowerCase() === 'error@example.com') {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitError('FATAL: Database connection timed out. Transaction rollback completed.');
      }, 1500);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject || 'Project Inquiry')}&body=${encodeURIComponent(
        `Hi Abdul Waris,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n(${formData.email})`
      )}`;

      window.location.href = mailtoUrl;
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 8000);
    }, 1800);
  };

  const sqlPreview = `INSERT INTO contact_messages (
  sender_name, sender_email, 
  message_subject, message_body, 
  created_at
) VALUES (
  '${formData.name.replace(/'/g, "''") || 'John Doe'}', 
  '${formData.email.replace(/'/g, "''") || 'john@example.com'}', 
  '${formData.subject.replace(/'/g, "''") || 'Partnership Spec'}', 
  '${formData.message.replace(/'/g, "''") || 'Enquire on web integration...'}', 
  NOW()
) RETURNING status;`;

  return (
    <section id="contact" className="py-24 lg:py-36 px-6 border-t border-brand-border bg-brand-obsidian relative">
      <div className="absolute inset-0 grid-bg-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Statement & Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
                Collaboration Portal
              </span>
              <h2 className="font-display font-light text-4xl sm:text-5xl text-white tracking-tight leading-[1.1] max-w-sm">
                Have an idea?<br />
                Let's build it.
              </h2>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed mt-2 max-w-sm">
                If you need a digital interface designed, a high-performance web app engineered, or a native Android app built, let's establish a session.
              </p>
            </div>

            {/* Social channels and direct channels */}
            <div className="flex flex-col gap-4 mt-12">
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                Direct Channels
              </span>
              <div className="flex flex-col gap-3 font-mono text-xs text-neutral-400">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Github className="w-4 h-4 text-neutral-500" />
                  <span>github.com</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4 text-neutral-500" />
                  <span>linkedin.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form & SQL compiler sandbox (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full">
            <div className="bg-[#0d0d10] border border-brand-border p-6 md:p-8">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[9px] font-mono uppercase tracking-wider text-neutral-500">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-brand-obsidian border border-brand-border rounded px-4 py-3 text-xs text-neutral-200 outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[9px] font-mono uppercase tracking-wider text-neutral-500">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full bg-brand-obsidian border rounded px-4 py-3 text-xs text-neutral-200 outline-none transition-colors ${
                        formErrors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-brand-border focus:border-neutral-500'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[9px] font-mono text-rose-500 mt-1">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[9px] font-mono uppercase tracking-wider text-neutral-500">
                    Subject Header
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Project Integration Spec"
                    className="w-full bg-brand-obsidian border border-brand-border rounded px-4 py-3 text-xs text-neutral-200 outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[9px] font-mono uppercase tracking-wider text-neutral-500">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Draft your query details..."
                    className={`w-full bg-brand-obsidian border rounded px-4 py-3 text-xs text-neutral-200 outline-none transition-colors resize-none ${
                      formErrors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-brand-border focus:border-neutral-500'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[9px] font-mono text-rose-500 mt-1">{formErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-xs font-mono uppercase tracking-widest text-[#050507] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                  style={{ backgroundColor: getAccentColor() }}
                >
                  {isSubmitting ? 'Initiating Transaction...' : 'Establish Connection'}
                </button>
              </form>

              {/* Status messages */}
              {submitSuccess && (
                <div className="mt-4 p-3 border border-emerald-500/20 bg-emerald-500/[0.02] text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Success: Connection established. Redirecting to mail client.</span>
                </div>
              )}

              {submitError && (
                <div className="mt-4 p-3 border border-rose-500/20 bg-rose-500/[0.02] text-rose-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{submitError}</span>
                </div>
              )}

            </div>

            {/* SQL dynamic compilation terminal output */}
            <div className="bg-[#050507] border border-brand-border p-4 font-mono text-[10px] text-neutral-400 flex flex-col gap-2 rounded">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-900/60">
                <span className="text-neutral-500 uppercase tracking-widest text-[8px] font-bold">SQL Compiler Log</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" style={{ backgroundColor: getAccentColor() }} />
              </div>
              <pre className="text-neutral-300 whitespace-pre-wrap leading-relaxed select-text">
                {sqlPreview}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
