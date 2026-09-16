import React, { useState } from 'react';
import { CustomizerState } from '../types';
import { ArrowRight, Check, Sparkles, MessageSquare, Shield, HelpCircle } from 'lucide-react';

interface PlateCustomizerProps {
  customizerState: CustomizerState;
  onChangeCustomizer: (newState: Partial<CustomizerState>) => void;
  onOpenOrderModal: () => void;
}

export const PlateCustomizer: React.FC<PlateCustomizerProps> = ({
  customizerState,
  onChangeCustomizer,
  onOpenOrderModal,
}) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'dest' | 'qtd'>('visual');

  const basePriceMap = {
    black: 169,
    white: 149,
    wood: 189,
    adhesive: 129,
  };

  const baseUnitPrice = basePriceMap[customizerState.material];
  let discountPct = 0;
  if (customizerState.quantity >= 10) discountPct = 0.25;
  else if (customizerState.quantity >= 5) discountPct = 0.15;
  else if (customizerState.quantity >= 2) discountPct = 0.10;

  const unitPriceWithDiscount = baseUnitPrice * (1 - discountPct);
  const totalPrice = unitPriceWithDiscount * customizerState.quantity;

  const categoryIcons = [
    { id: 'storefront', label: 'Varejo', icon: 'storefront' },
    { id: 'local_cafe', label: 'Café', icon: 'local_cafe' },
    { id: 'restaurant', label: 'Restaurante', icon: 'restaurant' },
    { id: 'spa', label: 'Estética', icon: 'spa' },
    { id: 'content_cut', label: 'Barbearia', icon: 'content_cut' },
    { id: 'medical_services', label: 'Saúde', icon: 'medical_services' },
    { id: 'business_center', label: 'Escritório', icon: 'business_center' },
  ];

  return (
    <section id="personalize" className="w-full py-20 bg-[#eff4ff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-white rounded-full shadow-2xs">
            Estúdio Criativo Tapp
          </span>
          <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
            Sua marca. Sua placa. Sua identidade.
          </h2>
          <p className="text-base text-[#434656] mt-2">
            Personalize em tempo real o acabamento, o nome da sua empresa e o destino antes de solicitar sua prova digital gratuita.
          </p>
        </div>

        {/* Main Interactive Studio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#dce9ff]">
          {/* Controls Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Step 1: Material Acabamento */}
            <div>
              <label className="font-geist text-base font-bold text-[#0b1c30] mb-2.5 flex items-center justify-between">
                <span>1. Escolha o Acabamento Arquitetônico</span>
                <span className="text-xs text-[#0052ff] font-semibold">
                  {customizerState.material === 'black'
                    ? 'Black Mate (Alumínio Anodizado)'
                    : customizerState.material === 'white'
                    ? 'White Acrílico (Translúcido 4mm)'
                    : customizerState.material === 'wood'
                    ? 'Madeira Nobre (Carvalho Certificado)'
                    : 'Slim Adesiva (3M VHB)'}
                </span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {/* Black */}
                <button
                  type="button"
                  onClick={() => onChangeCustomizer({ material: 'black' })}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    customizerState.material === 'black'
                      ? 'bg-[#171b26] text-white border-[#171b26] shadow-sm ring-2 ring-[#0052ff]'
                      : 'bg-[#f8f9ff] text-[#0b1c30] border-[#c3c5d9]/60 hover:bg-[#eff4ff]'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 shadow-inner" />
                  <span className="text-xs font-bold font-geist">Black Mate</span>
                  <span className="text-[10px] opacity-80">R$ 169</span>
                </button>

                {/* White Acrílico */}
                <button
                  type="button"
                  onClick={() => onChangeCustomizer({ material: 'white' })}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    customizerState.material === 'white'
                      ? 'bg-[#eff4ff] text-[#0052ff] border-[#0052ff] shadow-sm ring-2 ring-[#0052ff]'
                      : 'bg-[#f8f9ff] text-[#0b1c30] border-[#c3c5d9]/60 hover:bg-[#eff4ff]'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-white border border-gray-300 shadow-inner" />
                  <span className="text-xs font-bold font-geist">Acrílico Clean</span>
                  <span className="text-[10px] opacity-80">R$ 149</span>
                </button>

                {/* Madeira */}
                <button
                  type="button"
                  onClick={() => onChangeCustomizer({ material: 'wood' })}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    customizerState.material === 'wood'
                      ? 'bg-[#3e2717] text-[#f7e6d2] border-[#3e2717] shadow-sm ring-2 ring-[#ca984c]'
                      : 'bg-[#f8f9ff] text-[#0b1c30] border-[#c3c5d9]/60 hover:bg-[#eff4ff]'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#8c5220] border border-amber-900 shadow-inner" />
                  <span className="text-xs font-bold font-geist">Madeira Eco</span>
                  <span className="text-[10px] opacity-80">R$ 189</span>
                </button>

                {/* Adesiva */}
                <button
                  type="button"
                  onClick={() => onChangeCustomizer({ material: 'adhesive' })}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    customizerState.material === 'adhesive'
                      ? 'bg-[#dfe2f1] text-[#0b1c30] border-[#0052ff] shadow-sm ring-2 ring-[#0052ff]'
                      : 'bg-[#f8f9ff] text-[#0b1c30] border-[#c3c5d9]/60 hover:bg-[#eff4ff]'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#737688] border border-gray-400 shadow-inner" />
                  <span className="text-xs font-bold font-geist">Slim Adesiva</span>
                  <span className="text-[10px] opacity-80">R$ 129</span>
                </button>
              </div>
            </div>

            {/* Step 2: Nome da Empresa */}
            <div>
              <label htmlFor="custom-brand-name" className="font-geist text-base font-bold text-[#0b1c30] mb-2 block">
                2. Nome da sua Empresa / Marca
              </label>
              <div className="relative">
                <input
                  id="custom-brand-name"
                  type="text"
                  maxLength={30}
                  value={customizerState.brandName}
                  onChange={(e) => onChangeCustomizer({ brandName: e.target.value })}
                  placeholder="Ex: STUDIO DESIGN, CAFÉ CENTRAL"
                  className="w-full h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#0052ff] border border-[#d3e4fe] transition-all uppercase"
                />
                <span className="material-symbols-outlined absolute right-3.5 top-3 text-[#737688]">edit</span>
              </div>
            </div>

            {/* Step 3: Ícone do Logotipo */}
            <div>
              <label className="font-geist text-base font-bold text-[#0b1c30] mb-2 block">
                3. Segmento do Ícone
              </label>
              <div className="flex flex-wrap gap-2">
                {categoryIcons.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onChangeCustomizer({ categoryIcon: cat.icon })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      customizerState.categoryIcon === cat.icon
                        ? 'bg-[#0052ff] text-white shadow-xs'
                        : 'bg-[#eff4ff] text-[#434656] hover:bg-[#dce9ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Destino Principal */}
            <div>
              <label className="font-geist text-base font-bold text-[#0b1c30] mb-2 block">
                4. Destino Principal da Aproximação
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'instagram', label: 'Instagram', icon: 'photo_camera', color: 'text-pink-600' },
                  { id: 'whatsapp', label: 'WhatsApp', icon: 'chat', color: 'text-[#128C7E]' },
                  { id: 'google', label: 'Google 5★', icon: 'star', color: 'text-amber-500' },
                  { id: 'cardapio', label: 'Cardápio', icon: 'restaurant_menu', color: 'text-[#0052ff]' },
                ].map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => onChangeCustomizer({ destination: dest.id })}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      customizerState.destination === dest.id
                        ? 'bg-white border-[#0052ff] shadow-xs text-[#0052ff] ring-2 ring-[#0052ff]/20'
                        : 'bg-[#eff4ff] border-transparent text-[#434656] hover:bg-[#dce9ff]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[16px] ${dest.color}`}>
                      {dest.icon}
                    </span>
                    <span>{dest.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: QR Code Backup toggle */}
            <div className="flex items-center justify-between p-3.5 bg-[#eff4ff] rounded-xl border border-[#d3e4fe]">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#0052ff] text-[20px]">qr_code_2</span>
                <div>
                  <span className="text-xs font-bold text-[#0b1c30] block font-geist">
                    QR Code de Backup Laser
                  </span>
                  <span className="text-[11px] text-[#434656]">
                    Garante acesso mesmo para aparelhos sem NFC
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onChangeCustomizer({ showQrCode: !customizerState.showQrCode })}
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                  customizerState.showQrCode ? 'bg-[#0052ff]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    customizerState.showQrCode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Step 6: Quantidade & Preço */}
            <div className="bg-[#f8f9ff] p-4 rounded-2xl border border-[#dce9ff]">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs font-bold text-[#0b1c30] uppercase font-geist">Quantidade de Placas</span>
                  <span className="text-[11px] text-[#737688] block">Ideal para múltiplos caixas ou mesas</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-[#c3c5d9] px-3 py-1 rounded-xl shadow-2xs">
                  <button
                    type="button"
                    onClick={() => onChangeCustomizer({ quantity: Math.max(1, customizerState.quantity - 1) })}
                    className="text-lg font-bold text-[#0052ff] px-1 hover:scale-110 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm font-geist w-6 text-center">{customizerState.quantity}</span>
                  <button
                    type="button"
                    onClick={() => onChangeCustomizer({ quantity: customizerState.quantity + 1 })}
                    className="text-lg font-bold text-[#0052ff] px-1 hover:scale-110 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {discountPct > 0 && (
                <div className="text-xs text-[#007633] font-bold bg-[#effff4] border border-[#a8f5c0] px-3 py-1.5 rounded-lg mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Desconto de {(discountPct * 100).toFixed(0)}% aplicado no pacote!</span>
                </div>
              )}

              <div className="flex items-baseline justify-between pt-2 border-t border-gray-200">
                <span className="text-xs text-[#434656]">Investimento estimado:</span>
                <div className="text-right">
                  <span className="text-2xl font-bold font-geist text-[#0b1c30]">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[11px] text-[#737688] block">
                    {customizerState.quantity > 1 ? `(R$ ${unitPriceWithDiscount.toFixed(2).replace('.', ',')} cada)` : 'em até 12x no cartão'}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button to Request Proof */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0052ff] text-white font-geist text-[14px] font-bold hover:bg-[#003ec7] active:scale-[0.99] transition-all shadow-md cursor-pointer"
              >
                <span>Solicitar Prova Digital Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-center text-xs text-[#737688] font-mono">
                Sem compromisso • Enviamos a arte em PDF/WhatsApp antes de produzir
              </span>
            </div>
          </div>

          {/* Right Live Preview Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-10 bg-[#eff4ff] rounded-2xl border border-[#dce9ff]">
            <span className="text-[11px] font-mono font-bold text-[#434656] uppercase tracking-wider mb-6 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0052ff]" />
              Visualização Físico-Digital 1:1
            </span>

            {/* Virtual Render Plate Component */}
            <div
              className={`w-72 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between items-center transition-all duration-500 relative border ${
                customizerState.material === 'black'
                  ? 'bg-[#171b26] text-white border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                  : customizerState.material === 'white'
                  ? 'bg-white/95 text-[#0b1c30] border-[#c3c5d9]/80 shadow-[0_20px_50px_rgba(0,82,255,0.08)]'
                  : customizerState.material === 'wood'
                  ? 'bg-[#3b2313] text-[#fbe9d5] border-[#59371f] shadow-[0_20px_50px_rgba(60,30,10,0.25)]'
                  : 'bg-gradient-to-tr from-slate-200 to-slate-100 text-[#0b1c30] border-slate-300 shadow-md'
              }`}
            >
              {/* Brushed Stand Bottom simulation */}
              <div
                className={`absolute inset-x-0 bottom-0 h-7 rounded-b-2xl flex items-center justify-center border-t ${
                  customizerState.material === 'black'
                    ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-slate-600/50'
                    : customizerState.material === 'white'
                    ? 'bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 border-slate-300'
                    : customizerState.material === 'wood'
                    ? 'bg-gradient-to-r from-[#caa055] via-[#ecd599] to-[#caa055] border-[#b08842]'
                    : 'bg-slate-300 border-slate-400'
                }`}
              >
                <span className="text-[9px] font-mono uppercase tracking-widest opacity-80">
                  Tapp Architectural Precision
                </span>
              </div>

              {/* Top Logo / Brand Header */}
              <div className="flex flex-col items-center gap-1.5 pt-2 text-center w-full">
                <span
                  className={`material-symbols-outlined text-[34px] ${
                    customizerState.material === 'wood'
                      ? 'text-[#ecd599]'
                      : customizerState.material === 'black'
                      ? 'text-[#66ff8e]'
                      : 'text-[#0052ff]'
                  }`}
                >
                  {customizerState.categoryIcon}
                </span>

                <span
                  className={`font-geist text-[15px] font-bold tracking-widest uppercase leading-tight truncate max-w-[220px] ${
                    customizerState.material === 'black'
                      ? 'text-white'
                      : customizerState.material === 'white'
                      ? 'text-[#0b1c30]'
                      : customizerState.material === 'wood'
                      ? 'text-[#fbe9d5]'
                      : 'text-[#0b1c30]'
                  }`}
                >
                  {customizerState.brandName.trim() || 'SUA MARCA AQUI'}
                </span>

                <span className="text-[9px] uppercase tracking-wider font-mono opacity-60">
                  NFC Contactless Smart Plate
                </span>
              </div>

              {/* Center NFC Proximity Ring */}
              <div className="flex flex-col items-center my-auto">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-1.5 transition-transform hover:scale-105 ${
                    customizerState.material === 'black'
                      ? 'bg-white/10 text-white'
                      : customizerState.material === 'white'
                      ? 'bg-[#eff4ff] text-[#0052ff]'
                      : customizerState.material === 'wood'
                      ? 'bg-black/20 text-[#ecd599]'
                      : 'bg-white/60 text-[#0052ff]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[36px]">contactless</span>
                </div>

                <div
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-geist ${
                    customizerState.destination === 'instagram'
                      ? 'bg-pink-600 text-white'
                      : customizerState.destination === 'whatsapp'
                      ? 'bg-[#128C7E] text-white'
                      : customizerState.destination === 'google'
                      ? 'bg-amber-500 text-white'
                      : 'bg-[#0052ff] text-white'
                  }`}
                >
                  {customizerState.destination === 'instagram'
                    ? 'Instagram'
                    : customizerState.destination === 'whatsapp'
                    ? 'WhatsApp'
                    : customizerState.destination === 'google'
                    ? 'Avalie 5★'
                    : 'Cardápio'}
                </div>
              </div>

              {/* Bottom QR Code Laser Simulation */}
              {customizerState.showQrCode && (
                <div className="flex flex-col items-center gap-1 pb-6 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-white p-1 rounded-md shadow-xs flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#0b1c30]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 4h4v4h-2v-2h-2v-2zm-2 2h2v2h-2v-2zm6-2h2v4h-2v-4zm-8-4h2v2h-2v-2zm0 6h4v2h-4v-2zM6 6h2v2H6V6zm12 0h2v2h-2V6zM6 18h2v2H6v-2z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-mono opacity-60">Laser Engraved Backup</span>
                </div>
              )}
            </div>

            {/* Hardware Dimension Specs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-[#434656] font-mono">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#007633]" />
                15cm (A) × 10cm (L)
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#007633]" />
                Chip NXP NTAG216
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#007633]" />
                Anti-interferência metálica
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
