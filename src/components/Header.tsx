import React, { useState, useEffect } from 'react';
import { CreditCard, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Проблема', href: '#problems' },
    { name: 'Решение', href: '#solution' },
    { name: 'Как работает', href: '#how-it-works' },
    { name: 'Экономика', href: '#economics' },
    { name: 'Сервис', href: '#service' },
    { name: 'Ответственность', href: '#responsibility' },
    { name: 'Кому подходит', href: '#audience' },
    { name: 'Юр. схема', href: '#legal' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#1A2A6C] text-[#FFD700] flex items-center justify-center font-bold text-xl shadow-sm transition-transform group-hover:scale-105">
              <CreditCard className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#1A2A6C]">
                Pay<span className="text-amber-500">Split</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold -mt-1">
                White-Label Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1A2A6C] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Partner Badge */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-semibold text-[#1A2A6C]">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Платёжный партнёр:</span>
            <span className="font-bold text-gray-900 bg-[#FFD700] px-2 py-0.5 rounded text-[11px] tracking-wide">
              Уполномоченный банк
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 text-xs font-semibold text-[#1A2A6C] mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Платёжный партнёр — </span>
            <span className="font-bold text-gray-900 bg-[#FFD700] px-1.5 py-0.5 rounded text-[11px]">
              Уполномоченный банк
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#1A2A6C] transition-colors"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
