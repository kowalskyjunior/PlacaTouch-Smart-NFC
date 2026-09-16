import React from 'react';
import { Check, X, Shield, Sparkles, Clock, Droplet } from 'lucide-react';

export const HybridTechnology: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#f8f9ff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Comparative Specs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist px-3 py-1 bg-[#eff4ff] rounded-full self-start">
              Engenharia Híbrida Dual
            </span>

            <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight leading-snug">
              Tecnologia NFC. Acessibilidade QR Code. Duas formas de chegar ao mesmo destino.
            </h2>

            <p className="text-base text-[#434656] leading-relaxed">
              A placa Tapp une o melhor de dois mundos: a agilidade instantânea por radiofrequência NFC com a garantia visual de um QR Code gravado a laser de alta precisão.
            </p>

            {/* Dual Tech Specs Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white rounded-2xl border border-[#dce9ff] shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-[#0052ff]">
                  <span className="material-symbols-outlined text-[24px]">sensors</span>
                  <span className="font-geist text-base font-bold text-[#0b1c30]">NFC Ultrarrápido</span>
                </div>
                <p className="text-xs text-[#434656] leading-relaxed">
                  Basta encostar o celular. Não precisa focar câmera, não sofre com reflexos de luz ambiente e funciona instantaneamente em 0.12s.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#dce9ff] shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[24px]">qr_code_2</span>
                  <span className="font-geist text-base font-bold text-[#0b1c30]">QR Code Backup</span>
                </div>
                <p className="text-xs text-[#434656] leading-relaxed">
                  Garante 100% de compatibilidade até mesmo para aparelhos antigos ou clientes que preferem apontar a câmera fotográfica.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl p-5 border border-[#dce9ff] shadow-xs mt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#737688] block mb-3 font-geist">
                Comparativo Direto de Experiência
              </span>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg">
                  <span className="text-[#434656] font-medium">Papel Impresso Comum</span>
                  <span className="text-red-600 font-mono flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Desgasta, rasga e amarela
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg">
                  <span className="text-[#434656] font-medium">Apenas QR Code Tradicional</span>
                  <span className="text-[#737688] font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Requer abrir app de câmera e focar
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 px-3 bg-[#eff4ff] border border-[#d3e4fe] rounded-xl">
                  <span className="font-bold text-[#0052ff] font-geist">Placa Tapp NFC Híbrida</span>
                  <span className="text-[#007633] font-bold font-mono flex items-center gap-1">
                    <Check className="w-4 h-4 text-[#007633]" /> 0.1s • Toque ou Scan Garantido
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Graphic Card Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-[#dce9ff] flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#eff4ff] text-[#0052ff] flex items-center justify-center mb-5 shadow-xs border border-[#d3e4fe]">
                <span className="material-symbols-outlined text-[44px]">contactless</span>
              </div>

              <h3 className="font-geist text-2xl font-bold text-[#0b1c30]">
                Sem Baterias, Sem Cabos
              </h3>

              <p className="text-sm text-[#434656] mt-2 leading-relaxed">
                As placas Tapp funcionam por indução eletromagnética passiva. O microchip utiliza a microenergia emitida pelo próprio smartphone no momento da aproximação.
              </p>

              <div className="w-full grid grid-cols-2 gap-3 mt-8 pt-4 bg-[#eff4ff] rounded-2xl p-4 border border-[#d3e4fe]">
                <div>
                  <span className="font-geist text-xl font-bold text-[#0b1c30]">10+ anos</span>
                  <span className="block font-mono text-xs text-[#737688] mt-0.5">Durabilidade Passiva</span>
                </div>
                <div>
                  <span className="font-geist text-xl font-bold text-[#0b1c30]">IP67</span>
                  <span className="block font-mono text-xs text-[#737688] mt-0.5">À Prova d'Água &amp; Álcool</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#007633] font-semibold">
                <Shield className="w-4 h-4" />
                <span>Garantia de 1 ano contra defeitos de fábrica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
