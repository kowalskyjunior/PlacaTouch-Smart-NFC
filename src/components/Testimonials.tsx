import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Truck, ShieldCheck, Headphones, Check } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="beneficios" className="w-full py-20 bg-white border-y border-[#e5eeff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-[#eff4ff] rounded-full">
            Quem Já Conectou
          </span>
          <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
            Aprovado por estabelecimentos em todo o Brasil
          </h2>
          <p className="text-base text-[#434656] mt-2">
            Veja como a Tapp transformou a experiência no ponto de venda de parceiros de diferentes segmentos.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#eff4ff] p-7 rounded-2xl border border-[#dce9ff] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-[#0b1c30] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d3e4fe] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0052ff] text-white flex items-center justify-center font-bold text-xs font-geist shadow-xs">
                    {t.initials}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-geist text-sm font-bold text-[#0b1c30]">
                      {t.author}
                    </span>
                    <span className="text-[11px] text-[#434656]">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#0052ff] bg-white px-2 py-1 rounded-md border border-[#d3e4fe]">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee and Delivery Badges */}
        <div className="mt-16 pt-12 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center bg-[#f8f9ff] p-6 rounded-2xl border border-[#e5eeff]">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0052ff] flex items-center justify-center mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <span className="font-geist text-base font-bold text-[#0b1c30]">
              Entrega em Todo o Brasil
            </span>
            <span className="text-xs text-[#434656] mt-1">
              Envio expresso com rastreamento seguro pelos Correios e transportadoras
            </span>
          </div>

          <div className="flex flex-col items-center bg-[#f8f9ff] p-6 rounded-2xl border border-[#e5eeff]">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#007633] flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-geist text-base font-bold text-[#0b1c30]">
              Garantia de 1 Ano
            </span>
            <span className="text-xs text-[#434656] mt-1">
              Proteção contra defeitos de funcionamento técnico e acabamento
            </span>
          </div>

          <div className="flex flex-col items-center bg-[#f8f9ff] p-6 rounded-2xl border border-[#e5eeff]">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0052ff] flex items-center justify-center mb-3">
              <Headphones className="w-6 h-6" />
            </div>
            <span className="font-geist text-base font-bold text-[#0b1c30]">
              Suporte Técnico Dedicado
            </span>
            <span className="text-xs text-[#434656] mt-1">
              Orientamos na configuração e atualização dos seus links comerciais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
