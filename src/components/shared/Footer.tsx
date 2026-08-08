import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Work', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Design', href: '#design' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-brand-border bg-[#08080a] py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left Side: Short role/identity */}
        <div className="flex flex-col gap-1">
          <span className="font-display font-medium text-xs text-white uppercase tracking-wider">
            Abdul Waris
          </span>
          <span className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">
            Software Engineer &amp; Designer
          </span>
        </div>

        {/* Middle Side: Text links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono tracking-wider uppercase text-neutral-500">
          {footerLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side: Copyright */}
        <div className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest">
          &copy; {currentYear} Abdul Waris. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
