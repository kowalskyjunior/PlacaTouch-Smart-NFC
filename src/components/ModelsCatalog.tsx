import React, { useState } from 'react';
import { PLATE_MODELS, APP_IMAGES } from '../data/mockData';
import { PlateModel } from '../types';
import { ArrowRight, Check, Eye, Shield, X, Sparkles, Layers } from 'lucide-react';

interface ModelsCatalogProps {
  onSelectModelForCustomizer: (modelStyle: 'black' | 'white' | 'wood' | 'adhesive') => void;
}

export const ModelsCatalog: React.FC<ModelsCatalogProps> = ({ onSelectModelForCustomizer }) => {
  const [selectedModalModel, setSelectedModalModel] = useState<PlateModel | null>(null);

  return (
    <section id="modelos" className="w-full py-20 bg-[#f8f9ff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-[#eff4ff] rounded-full inline-block">
              Materiais Arquitetônicos
            </span>
            <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
              Escolha o estilo que combina com sua marca
            </h2>
            <p className="text-base text-[#434656] mt-2 max-w-xl">
              Projetadas com ligas metálicas nobres, acrílico fundido de alta densidade e madeira de reflorestamento com gravação a laser de altíssima definição.
            </p>
          </div>

          <button
            onClick={() => onSelectModelForCustomizer('black')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#c3c5d9] text-[#0b1c30] text-[13px] font-semibold hover:bg-[#eff4ff] transition-all shadow-xs cursor-pointer self-start md:self-auto"
          >
            <span>Ver todos no Estúdio</span>
            <ArrowRight className="w-4 h-4 text-[#0052ff]" />
          </button>
        </div>

        {/* Hero image showcasing all models together */}
        <div className="w-full rounded-3xl overflow-hidden bg-white p-3 shadow-xl border border-[#e5eeff] mb-12">
          <div className="relative rounded-2xl overflow-hidden aspect-21/9 bg-slate-900 max-h-[480px]">
            <img
              src={APP_IMAGES.modelsShowcase}
              alt="Três modelos de placas NFC Tapp sobre mesa de mármore: acrílico translúcido com parafusos prateados, placa preta mate minimalista e placa em madeira natural com detalhes em latão"
              className="w-full h-full object-cover object-center hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#66ff8e] font-geist">
                  Coleção Arquitetônica Tapp
                </span>
                <p className="text-sm sm:text-base font-medium opacity-90">
                  Acrílico Cristal 4mm • Alumínio Anodizado Black Mate • Carvalho Nobre Sustentável
                </p>
              </div>
              <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full self-start font-mono">
                Gravação a Laser 1200 DPI
              </span>
            </div>
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATE_MODELS.map((model: PlateModel) => (
            <div
              key={model.id}
              className={`bg-white rounded-2xl p-6 shadow-md border transition-all flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl ${
                model.bestSeller ? 'border-[#0052ff] ring-2 ring-[#0052ff]/20' : 'border-[#e5eeff]'
              }`}
            >
              <div>
                {/* Visual Placeholder / Mockup Block */}
                <div
                  className={`h-44 rounded-xl flex items-center justify-center mb-5 overflow-hidden relative shadow-inner transition-transform ${
                    model.style === 'black'
                      ? 'bg-[#171b26] text-white'
                      : model.style === 'white'
                      ? 'bg-gradient-to-tr from-[#eff4ff] to-[#ffffff] border border-[#d3e4fe] text-[#0052ff]'
                      : model.style === 'wood'
                      ? 'bg-[#3e2717] text-[#f7e6d2]'
                      : 'bg-gradient-to-tr from-[#dfe2f1] to-[#eff4ff] text-[#434656]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[64px] opacity-80 group-hover:scale-110 transition-transform">
                    {model.style === 'black' ? 'badge' : model.style === 'white' ? 'layers' : model.style === 'wood' ? 'forest' : 'wallpaper'}
                  </span>

                  {model.badge && (
                    <span
                      className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider font-geist shadow-xs ${
                        model.bestSeller
                          ? 'bg-[#0052ff] text-white'
                          : 'bg-white/90 text-[#0b1c30] backdrop-blur-xs'
                      }`}
                    >
                      {model.badge}
                    </span>
                  )}

                  <div className="absolute bottom-2.5 left-2.5 font-mono text-[10px] opacity-75">
                    {model.thickness}
                  </div>
                </div>

                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-geist text-lg font-bold text-[#0b1c30]">
                    {model.name}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#0052ff] block mb-2 font-geist">
                  {model.tagline}
                </span>
                <p className="text-xs text-[#434656] leading-relaxed mb-4">
                  {model.description}
                </p>

                {/* Features Pills */}
                <div className="flex flex-col gap-1.5 mb-4">
                  {model.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#434656]">
                      <Check className="w-3.5 h-3.5 text-[#007633] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#737688] block">A partir de</span>
                    <span className="text-lg font-bold font-geist text-[#0b1c30]">
                      R$ {model.basePrice}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedModalModel(model)}
                    className="text-xs text-[#434656] hover:text-[#0052ff] font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>
                </div>

                <button
                  onClick={() => onSelectModelForCustomizer(model.style)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0052ff] text-white text-xs font-bold hover:bg-[#003ec7] active:scale-95 transition-all shadow-xs cursor-pointer"
                >
                  <span>Personalizar este modelo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Technical Details Modal */}
      {selectedModalModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e5eeff] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedModalModel(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0052ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-geist text-[#0b1c30]">
                  {selectedModalModel.name}
                </h3>
                <span className="text-xs text-[#0052ff] font-semibold">
                  {selectedModalModel.material}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#434656] mb-6 leading-relaxed">
              {selectedModalModel.description}
            </p>

            <div className="bg-[#eff4ff] p-4 rounded-2xl mb-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#003ec7] font-geist">
                Especificações Técnicas de Engenharia
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#737688] block">Dimensões:</span>
                  <span className="font-semibold text-[#0b1c30]">{selectedModalModel.dimensions}</span>
                </div>
                <div>
                  <span className="text-[#737688] block">Espessura:</span>
                  <span className="font-semibold text-[#0b1c30]">{selectedModalModel.thickness}</span>
                </div>
                <div>
                  <span className="text-[#737688] block">Chip Integrado:</span>
                  <span className="font-semibold text-[#0b1c30]">NXP NTAG216 (888 bytes)</span>
                </div>
                <div>
                  <span className="text-[#737688] block">Proteção:</span>
                  <span className="font-semibold text-[#0b1c30]">IP67 À prova d'água &amp; álcool 70%</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#737688] block">Fixação / Suporte:</span>
                  <span className="font-semibold text-[#0b1c30]">{selectedModalModel.mounting}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1c30] font-geist">
                Destaques do Acabamento
              </h4>
              {selectedModalModel.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#434656]">
                  <Check className="w-4 h-4 text-[#007633] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const style = selectedModalModel.style;
                setSelectedModalModel(null);
                onSelectModelForCustomizer(style);
              }}
              className="w-full py-3.5 rounded-xl bg-[#0052ff] text-white font-geist font-bold text-sm hover:bg-[#003ec7] transition-all shadow-md cursor-pointer"
            >
              Customizar no Estúdio Agora
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
