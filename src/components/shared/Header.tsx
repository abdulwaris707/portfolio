import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useDiscipline } from '../../context/DisciplineContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { getAccentColor } = useDiscipline();

  // Monitor scroll to change navbar surface
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'works', 'design', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#works', id: 'works' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Design', href: '#design', id: 'design' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'py-4 bg-[#08080a]/80 backdrop-blur-xl border-b border-[#ffffff]/[0.06] shadow-sm'
        : 'py-8 bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo / Initials */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <span className="font-display font-medium text-base tracking-tight text-white transition-colors duration-300">
            Abdul Waris<span style={{ color: getAccentColor() }} className="font-bold">.</span>
          </span>
        </a>

        {/* Navigation, Status, and Controls */}
        <div className="flex items-center gap-8">
          
          {/* Subtle Availability Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffffff]/[0.03] border border-[#ffffff]/[0.05] text-[10px] font-mono tracking-wider text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for opportunities</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-wider uppercase text-neutral-400">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                className={`hover:text-white transition-colors relative py-1 ${activeSection === link.id ? 'text-white font-medium' : ''
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                    style={{ backgroundColor: getAccentColor() }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            className="md:hidden p-2 rounded-lg bg-neutral-900/60 border border-[#ffffff]/[0.05] text-neutral-400 hover:text-white transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#08080a]/95 backdrop-blur-xl border-b border-[#ffffff]/[0.06] py-6 px-8 flex flex-col gap-5 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-neutral-400">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-[#ffffff]/[0.03] hover:text-white transition-colors ${activeSection === link.id ? 'text-white font-bold' : ''
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-2 py-2 text-[10px] font-mono tracking-wider text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for opportunities</span>
          </div>
        </div>
      )}
    </header>
  );
};
