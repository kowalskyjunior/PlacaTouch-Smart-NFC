import React from 'react';
import { APP_IMAGES } from '../data/mockData';
import { MessageSquare, Mail, Instagram, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenOrderModal }) => {
  return (
    <footer className="w-full bg-[#f1f5f9] border-t border-[#e2e8f0] text-[#0b1c30]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={APP_IMAGES.logo}
                alt="Tapp NFC Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="font-geist text-xl font-bold text-[#0b1c30] tracking-tight">
                Tapp
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#434656] max-w-sm leading-relaxed">
              Placas arquitetônicas com tecnologia NFC de alta precisão para espaços físicos, hospitalidade e varejo inteligente. Aproxime. Conecte. Transforme.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#c3c5d9] w-fit shadow-2xs">
              <span className="material-symbols-outlined text-[#0052ff] text-[18px]">verified</span>
              <span className="text-[11px] font-bold text-[#434656] uppercase tracking-wider font-geist">
                Chip NXP NTAG216 Certificado
              </span>
            </div>
          </div>

          {/* Nav Col: Produto */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider font-geist">
              Produto
            </span>
            <nav className="flex flex-col gap-2 text-xs text-[#434656]">
              <button
                type="button"
                onClick={() => onScrollTo('modelos')}
                className="text-left hover:text-[#0052ff] transition-colors cursor-pointer"
              >
                Modelos em Metal e Acrílico
              </button>
              <button
                type="button"
                onClick={() => onScrollTo('personalize')}
                className="text-left hover:text-[#0052ff] transition-colors cursor-pointer"
              >
                Personalização sob Medida
              </button>
              <button
                type="button"
                onClick={() => onScrollTo('como-funciona')}
                className="text-left hover:text-[#0052ff] transition-colors cursor-pointer"
              >
                Como Funciona o NFC
              </button>
              <button
                type="button"
                onClick={() => onScrollTo('simulador')}
                className="text-left hover:text-[#0052ff] transition-colors cursor-pointer"
              >
                Simulador Interativo
              </button>
            </nav>
          </div>

          {/* Nav Col: Empresa */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider font-geist">
              Empresa
            </span>
            <nav className="flex flex-col gap-2 text-xs text-[#434656]">
              <button
                type="button"
                onClick={() => onScrollTo('inicio')}
                className="text-left hover:text-[#0052ff] transition-colors cursor-pointer"
              >
                Sobre a Tapp NFC
              </button>
              <button
                type="button"
                onClick={() => onScrollTo('beneficios')}
                className="text-left hover:text-[#0052ff] transition-colors cursor-pointer"
              >
                Casos de Uso Corporativo
              </button>
              <button
                type="button"
                onClick={() => onScrollTo('faq')}
                className="text-left hover:text-[#0052ff] transition-colors cursor-pointer"
              >
                Perguntas Frequentes
              </button>
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="text-left text-[#0052ff] font-semibold hover:underline cursor-pointer"
              >
                Solicitar Proposta B2B
              </button>
            </nav>
          </div>

          {/* Nav Col: Suporte */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider font-geist">
              Suporte &amp; Contato
            </span>
            <nav className="flex flex-col gap-2 text-xs text-[#434656]">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0052ff] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#128C7E]" />
                <span>WhatsApp Comercial</span>
              </a>
              <a
                href="mailto:contato@tappnfc.com.br"
                className="flex items-center gap-2 hover:text-[#0052ff] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contato@tappnfc.com.br</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0052ff] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>@tapp.nfc</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-[#c3c5d9]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737688] font-mono">
          <span>
            © 2025-2026 Tapp Hardware &amp; Proximity Systems. Todos os direitos reservados.
          </span>

          <div className="flex items-center gap-6">
            <a href="#termos" className="hover:text-[#0b1c30] transition-colors">Termos de Serviço</a>
            <a href="#privacidade" className="hover:text-[#0b1c30] transition-colors">Privacidade de Dados</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
