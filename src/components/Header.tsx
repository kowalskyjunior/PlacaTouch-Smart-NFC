import React, { useState, useEffect } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'como-funciona', 'simulador', 'destinos', 'modelos', 'personalize', 'beneficios', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e5eeff] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-white/85 backdrop-blur-md border-b border-[#e5eeff]/80'
      }`}
    >
      <div className="h-20 max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
        {/* Logo and Brand */}
        <button
          onClick={() => scrollTo('inicio')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <img
            src={APP_IMAGES.logo}
            alt="Tapp NFC Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-geist text-xl font-bold text-[#0b1c30] tracking-tight leading-none">
              Tapp
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#434656] font-geist mt-0.5">
              Hardware NFC
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {[
            { id: 'inicio', label: 'Início' },
            { id: 'como-funciona', label: 'Como funciona' },
            { id: 'simulador', label: 'Simulador' },
            { id: 'destinos', label: 'Destinos' },
            { id: 'modelos', label: 'Modelos' },
            { id: 'personalize', label: 'Personalize' },
            { id: 'beneficios', label: 'Benefícios' },
            { id: 'faq', label: 'FAQ' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[14px] font-medium transition-colors cursor-pointer focus:outline-none ${
                activeSection === item.id
                  ? 'text-[#0052ff] font-semibold'
                  : 'text-[#434656] hover:text-[#0b1c30]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('modelos')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#ffffff] border border-[#c3c5d9] text-[13px] font-medium text-[#0b1c30] hover:bg-[#eff4ff] transition-all cursor-pointer"
          >
            Ver modelos
          </button>

          <button
            onClick={() => scrollTo('personalize')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0052ff] text-white text-[13px] font-medium hover:bg-[#003ec7] active:scale-[0.99] transition-all shadow-[0_1px_2px_rgba(11,15,25,0.03),0_8px_24px_rgba(0,82,255,0.18)] cursor-pointer"
          >
            <span>Quero minha placa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0b1c30] hover:bg-[#eff4ff] rounded-lg transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e5eeff] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'como-funciona', label: 'Como funciona o NFC' },
              { id: 'simulador', label: 'Simulador em Tempo Real' },
              { id: 'destinos', label: 'Opções de Destinos' },
              { id: 'modelos', label: 'Modelos e Acabamentos' },
              { id: 'personalize', label: 'Estúdio de Personalização' },
              { id: 'beneficios', label: 'Benefícios Comerciais' },
              { id: 'faq', label: 'Dúvidas Frequentes' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left py-2 text-[15px] font-medium border-b border-gray-100 last:border-none transition-colors ${
                  activeSection === item.id ? 'text-[#0052ff] font-semibold' : 'text-[#434656]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0052ff] text-white text-[14px] font-semibold shadow-md"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Solicitar Orçamento Personalizado</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
