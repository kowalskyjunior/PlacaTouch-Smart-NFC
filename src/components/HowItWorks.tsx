import React from 'react';
import { Smartphone, Zap, CheckCircle2, ShieldCheck, Wifi } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="w-full py-20 bg-white border-y border-[#e5eeff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-[#eff4ff] rounded-full">
            Simplicidade de Engenharia
          </span>
          <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
            Simples para você. Instantâneo para seu cliente.
          </h2>
          <p className="text-base text-[#434656] mt-3 leading-relaxed">
            Conexão física e digital em menos de 1 segundo sem necessidade de abrir aplicativos, digitar senhas ou escanear códigos complicados.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 1 */}
          <div className="relative bg-[#eff4ff] p-7 rounded-2xl border border-[#dce9ff] shadow-xs flex flex-col justify-between hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-geist text-4xl font-extrabold text-[#0052ff]/20">
                  01
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#0052ff] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">touch_app</span>
                </div>
              </div>
              <h3 className="font-geist text-xl font-bold text-[#0b1c30] mb-2">
                Aproxime o aparelho
              </h3>
              <p className="text-[#434656] text-[14px] leading-relaxed">
                O cliente simplesmente aproxima qualquer smartphone (iOS ou Android) da placa sobre o balcão, caixa ou mesa.
              </p>
            </div>
            <div className="mt-6 pt-3 bg-white/70 rounded-xl p-3 border border-[#d3e4fe]/60">
              <span className="text-[12px] font-mono text-[#434656] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#0052ff]">distance</span>
                Alcance de indução: 2cm a 4cm
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-[#eff4ff] p-7 rounded-2xl border border-[#dce9ff] shadow-xs flex flex-col justify-between hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-geist text-4xl font-extrabold text-[#0052ff]/20">
                  02
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#0052ff] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">contactless</span>
                </div>
              </div>
              <h3 className="font-geist text-xl font-bold text-[#0b1c30] mb-2">
                Reconhecimento Nativo
              </h3>
              <p className="text-[#434656] text-[14px] leading-relaxed">
                O sistema operacional lê o chip inteligente de radiofrequência em microssegundos sem precisar abrir câmera nem baixar nada.
              </p>
            </div>
            <div className="mt-6 pt-3 bg-white/70 rounded-xl p-3 border border-[#d3e4fe]/60">
              <span className="text-[12px] font-mono text-[#434656] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#0052ff]">speed</span>
                Tempo de leitura: 0.12 segundos
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-[#eff4ff] p-7 rounded-2xl border border-[#dce9ff] shadow-xs flex flex-col justify-between hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-geist text-4xl font-extrabold text-[#007633]/20">
                  03
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#007633] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
                </div>
              </div>
              <h3 className="font-geist text-xl font-bold text-[#0b1c30] mb-2">
                Acesso Instantâneo
              </h3>
              <p className="text-[#434656] text-[14px] leading-relaxed">
                O cliente é imediatamente transportado para o seu canal: Google Avaliações, WhatsApp comercial, Instagram ou cardápio.
              </p>
            </div>
            <div className="mt-6 pt-3 bg-white/70 rounded-xl p-3 border border-[#d3e4fe]/60">
              <span className="text-[12px] font-mono text-[#434656] flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#007633]" />
                Taxa de conclusão superior a 94%
              </span>
            </div>
          </div>
        </div>

        {/* Informative Hardware Banner */}
        <div className="mt-8 p-5 bg-[#eff4ff] border border-[#d3e4fe] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#0052ff] text-[26px]">verified</span>
            <p className="text-[14px] text-[#0b1c30]">
              <strong>Compatibilidade Universal:</strong> Todos os modelos modernos de iPhone (desde o iPhone XS / XR) e mais de 98% dos celulares Android contam com NFC ativado de fábrica.
            </p>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#434656] px-3 py-1.5 bg-white rounded-lg border border-[#c3c5d9] whitespace-nowrap">
            Zero Manutenção • Sem fios
          </span>
        </div>
      </div>
    </section>
  );
};
