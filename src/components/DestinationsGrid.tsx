import React, { useState } from 'react';
import { DESTINATIONS } from '../data/mockData';
import { DestinationType } from '../types';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

interface DestinationsGridProps {
  onSelectDestination: (destId: string) => void;
  onScrollToCustomizer: () => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  onSelectDestination,
  onScrollToCustomizer,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filteredDestinations = activeFilter === 'todos'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => {
        if (activeFilter === 'vendas') return ['whatsapp', 'cardapio', 'website'].includes(d.id);
        if (activeFilter === 'autoridade') return ['google', 'instagram'].includes(d.id);
        if (activeFilter === 'completo') return ['multilinks'].includes(d.id);
        return true;
      });

  return (
    <section id="destinos" className="w-full py-20 bg-white border-y border-[#e5eeff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-[#eff4ff] rounded-full">
            Flexibilidade Total de Direcionamento
          </span>
          <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
            Um toque. Vários caminhos para o seu negócio.
          </h2>
          <p className="text-base text-[#434656] mt-2">
            Você escolhe o destino ideal da sua placa NFC e pode atualizar o direcionamento quando quiser pela nossa plataforma online reprogramável.
          </p>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'todos', label: 'Todos os Destinos' },
              { id: 'autoridade', label: 'Avaliações & Redes' },
              { id: 'vendas', label: 'Conversas & Vendas' },
              { id: 'completo', label: 'Central Multilinks' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0052ff] text-white shadow-xs'
                    : 'bg-[#eff4ff] text-[#434656] hover:bg-[#dce9ff]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest: DestinationType) => (
            <div
              key={dest.id}
              className="p-7 rounded-2xl bg-[#eff4ff] hover:bg-[#e5eeff] transition-all border border-[#dce9ff] shadow-xs flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs ${dest.colorBg}`}>
                    <span className="material-symbols-outlined text-[26px]">{dest.iconName}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#737688] bg-white/80 px-2.5 py-1 rounded-md border border-[#c3c5d9]/60">
                    NTAG216 Chip
                  </span>
                </div>

                <h3 className="font-geist text-xl font-bold text-[#0b1c30] mb-2 group-hover:text-[#0052ff] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-[14px] text-[#434656] leading-relaxed">
                  {dest.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d3e4fe]/80 flex flex-col gap-3">
                <div className={`text-[12px] font-semibold flex items-center gap-1.5 ${dest.colorText}`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{dest.benefit}</span>
                </div>

                <button
                  onClick={() => {
                    onSelectDestination(dest.id);
                    onScrollToCustomizer();
                  }}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white text-[#0b1c30] text-xs font-semibold hover:bg-[#0052ff] hover:text-white transition-all shadow-2xs group/btn cursor-pointer"
                >
                  <span>Configurar este destino na minha placa</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
