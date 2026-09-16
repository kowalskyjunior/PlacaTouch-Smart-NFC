import React, { useState } from 'react';
import { BUSINESS_SEGMENTS } from '../data/mockData';
import { BusinessSegment } from '../types';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const BusinessSegments: React.FC = () => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>(BUSINESS_SEGMENTS[0].id);

  const activeSegment = BUSINESS_SEGMENTS.find((s) => s.id === activeSegmentId) || BUSINESS_SEGMENTS[0];

  return (
    <section className="w-full py-20 bg-white border-y border-[#e5eeff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-[#eff4ff] rounded-full">
            Aplicações Práticas no Ponto de Venda
          </span>
          <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
            Feito para diferentes tipos de negócio
          </h2>
          <p className="text-base text-[#434656] mt-2">
            De restaurantes movimentados a consultórios executivos, a Tapp se adapta ao formato ideal da sua operação.
          </p>
        </div>

        {/* Segments Nav Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {BUSINESS_SEGMENTS.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setActiveSegmentId(seg.id)}
              className={`px-4 py-3 rounded-xl font-geist text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                activeSegmentId === seg.id
                  ? 'bg-[#0052ff] text-white shadow-md'
                  : 'bg-[#eff4ff] text-[#434656] hover:bg-[#dce9ff]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{seg.icon}</span>
              <span>{seg.name}</span>
            </button>
          ))}
        </div>

        {/* Active Segment Feature Panel */}
        <div className="bg-[#eff4ff] border border-[#dce9ff] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0052ff] uppercase font-geist">
              <span className="material-symbols-outlined text-[20px]">{activeSegment.icon}</span>
              <span>{activeSegment.name}</span>
            </div>

            <h3 className="font-geist text-2xl sm:text-3xl font-bold text-[#0b1c30]">
              {activeSegment.headline}
            </h3>

            <p className="text-[#434656] text-base leading-relaxed max-w-2xl">
              {activeSegment.description}
            </p>

            {/* Use Case Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activeSegment.useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-white">
                  <CheckCircle2 className="w-4 h-4 text-[#007633] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#0b1c30]">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Highlight Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md border border-[#dce9ff] flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#0052ff]/10 text-[#0052ff] flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl font-black font-geist text-[#0052ff]">
                {activeSegment.impactMetric}
              </span>
              <span className="text-xs font-semibold text-[#0b1c30] mt-1">
                {activeSegment.impactLabel}
              </span>
              <span className="text-[11px] text-[#737688] mt-3 pt-3 border-t border-gray-100 w-full font-mono">
                Média apurada em clientes Tapp ativos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
