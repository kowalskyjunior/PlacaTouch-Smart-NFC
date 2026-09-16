import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ArrowRight, Play, Radio, Check, Sparkles, Smartphone } from 'lucide-react';

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo, onOpenOrderModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [tapEffect, setTapEffect] = useState<boolean>(false);

  const handleHeroShowcaseClick = () => {
    setTapEffect(true);
    setActiveStep(2);
    setTimeout(() => {
      setActiveStep(3);
      setTimeout(() => {
        setTapEffect(false);
        setActiveStep(1);
      }, 1500);
    }, 800);
  };

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#f8f9ff] pt-28 pb-16 lg:py-24">
      {/* Constrained ambient gradient backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-[#b7c4ff]/30 via-[#dce9ff]/25 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Live Signal Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#eff4ff] border border-[#d3e4fe] shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0052ff]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003ec7] font-geist">
                NFC • Conexão Inteligente
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-geist text-3xl sm:text-4xl lg:text-[54px] font-bold text-[#0b1c30] tracking-tight leading-[1.12]">
              Transforme um simples toque em uma nova{' '}
              <span className="text-[#0052ff] inline-block relative">
                conexão
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#0052ff]/20 rounded-full" />
              </span>
              .
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#434656] max-w-xl leading-relaxed">
              Placas NFC personalizadas com acabamento arquitetônico que levam seus clientes diretamente para o seu Instagram, WhatsApp, Google Avaliações, cardápio digital e muito mais.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollTo('personalize')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0052ff] text-white font-geist text-[14px] font-semibold hover:bg-[#003ec7] active:scale-[0.99] transition-all shadow-[0_4px_16px_rgba(0,82,255,0.25)] cursor-pointer"
              >
                <span>Criar minha placa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollTo('simulador')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#0b1c30] font-geist text-[14px] font-medium border border-[#c3c5d9] hover:bg-[#eff4ff] transition-all shadow-xs cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#0052ff] fill-[#0052ff]/20" />
                <span>Ver simulador ao vivo</span>
              </button>
            </div>

            {/* Trust Microcopy */}
            <div className="flex items-center gap-2.5 pt-1 text-[#434656]">
              <span className="material-symbols-outlined text-[#003ec7] text-[20px]">contactless</span>
              <p className="text-[13px] font-medium">
                Sem aplicativos. Sem complicação. Basta aproximar o celular.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 w-full max-w-lg">
              <div className="flex flex-col bg-[#eff4ff] p-3 sm:p-4 rounded-xl border border-[#d3e4fe]/50 shadow-xs">
                <span className="font-geist text-xl sm:text-2xl font-bold text-[#0b1c30]">&lt; 0.5s</span>
                <span className="text-[12px] text-[#434656] font-geist mt-0.5">Resposta Instantânea</span>
              </div>
              <div className="flex flex-col bg-[#eff4ff] p-3 sm:p-4 rounded-xl border border-[#d3e4fe]/50 shadow-xs">
                <span className="font-geist text-xl sm:text-2xl font-bold text-[#0b1c30]">100%</span>
                <span className="text-[12px] text-[#434656] font-geist mt-0.5">iOS &amp; Android</span>
              </div>
              <div className="flex flex-col bg-[#eff4ff] p-3 sm:p-4 rounded-xl border border-[#d3e4fe]/50 shadow-xs">
                <span className="font-geist text-xl sm:text-2xl font-bold text-[#0b1c30]">Zero</span>
                <span className="text-[12px] text-[#434656] font-geist mt-0.5">Baterias ou Cabos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Showcase Realista com Imagem Hero */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div
              onClick={handleHeroShowcaseClick}
              className="relative w-full rounded-2xl bg-white p-3 shadow-xl border border-[#e5eeff] overflow-hidden group cursor-pointer transition-all hover:shadow-2xl"
              title="Clique para testar o efeito de aproximação"
            >
              <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-900">
                <img
                  src={APP_IMAGES.hero}
                  alt="Placa NFC de balcão Tapp com acabamento em preto mate e base metálica escovada ao lado de smartphone"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Live Signal Overlay Tag */}
                <div className="absolute top-3 left-3 bg-[#213145]/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md text-[#eaf1ff] border border-white/10">
                  <span className="material-symbols-outlined text-[16px] text-[#66ff8e]">sensors</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-geist">
                    Hardware Passivo NTAG216
                  </span>
                </div>

                {/* Quick Touch Badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#66ff8e]" />
                  <span>Clique para simular toque</span>
                </div>

                {/* Interactive Radio Pulse Ripple */}
                {tapEffect && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 backdrop-blur-[1px] animate-pulse">
                    <div className="w-36 h-36 rounded-full border-4 border-[#0052ff] animate-ping" />
                  </div>
                )}
              </div>

              {/* Signal Flow Sequence */}
              <div className="mt-3 p-3 bg-[#eff4ff] rounded-xl flex items-center justify-between gap-2 text-[#0b1c30]">
                <div
                  className={`flex items-center gap-2 p-1.5 rounded-lg transition-colors ${
                    activeStep === 1 ? 'bg-[#0052ff]/10 font-bold' : ''
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#0052ff] text-white flex items-center justify-center text-[12px] font-bold font-geist">
                    1
                  </span>
                  <span className="text-[13px] font-medium font-geist">Aproxime</span>
                </div>

                <span className="text-[#737688] text-sm">→</span>

                <div
                  className={`flex items-center gap-2 p-1.5 rounded-lg transition-colors ${
                    activeStep === 2 ? 'bg-[#0052ff]/20 font-bold' : ''
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#0052ff] text-white flex items-center justify-center text-[12px] font-bold font-geist">
                    2
                  </span>
                  <span className="text-[13px] font-medium font-geist">Detecta</span>
                </div>

                <span className="text-[#737688] text-sm">→</span>

                <div
                  className={`flex items-center gap-2 p-1.5 rounded-lg transition-colors ${
                    activeStep === 3 ? 'bg-[#007633]/20 font-bold' : ''
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#007633] text-white flex items-center justify-center text-[12px] font-bold font-geist">
                    3
                  </span>
                  <span className="text-[13px] font-medium font-geist">Abre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
