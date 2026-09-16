import React, { useState } from 'react';
import { Radio, Star, MessageSquare, Camera, Utensils, Wifi, Check, Sparkles, Smartphone, ExternalLink } from 'lucide-react';

export const NfcSimulator: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState<'google' | 'whatsapp' | 'instagram' | 'cardapio'>('google');
  const [isSimulating, setIsSimulating] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [activeScreenHighlight, setActiveScreenHighlight] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Pronto para aproximar');
  const [statusState, setStatusState] = useState<'idle' | 'scanning' | 'connected'>('idle');

  const triggerSimulation = (overrideDest?: 'google' | 'whatsapp' | 'instagram' | 'cardapio') => {
    if (isSimulating) return;
    const dest = overrideDest || selectedDest;
    if (overrideDest) {
      setSelectedDest(overrideDest);
    }

    setIsSimulating(true);
    setStatusState('scanning');
    setStatusMessage('Emitindo pulso NFC 13.56 MHz...');

    // Phase 1: Emit pulse
    setTimeout(() => {
      setStatusState('connected');
      setStatusMessage('NFC Conectado com Sucesso ✓');
      setNotificationVisible(true);
    }, 450);

    // Phase 2: Highlight phone reaction
    setTimeout(() => {
      setActiveScreenHighlight(true);
      setTimeout(() => {
        setActiveScreenHighlight(false);
      }, 1400);
    }, 900);

    // Phase 3: Auto-reset state for next test
    setTimeout(() => {
      setIsSimulating(false);
      setStatusState('idle');
      setStatusMessage('Pronto para nova aproximação');
      setTimeout(() => {
        setNotificationVisible(false);
      }, 1000);
    }, 4000);
  };

  return (
    <section id="simulador" className="w-full py-20 bg-[#f8f9ff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-[#eff4ff] rounded-full">
            Simulador em Tempo Real
          </span>
          <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
            Veja a experiência acontecendo
          </h2>
          <p className="text-base text-[#434656] mt-2">
            Clique no botão ou toque na placa para simular a aproximação de um smartphone e ver a reação instantânea na tela do cliente.
          </p>

          {/* Quick Destination Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs font-semibold text-[#434656] mr-1 uppercase font-geist">Testar destino:</span>
            <button
              onClick={() => {
                setSelectedDest('google');
                triggerSimulation('google');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedDest === 'google'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white border border-[#c3c5d9] text-[#0b1c30] hover:bg-[#eff4ff]'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Google 5★</span>
            </button>
            <button
              onClick={() => {
                setSelectedDest('whatsapp');
                triggerSimulation('whatsapp');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedDest === 'whatsapp'
                  ? 'bg-[#128C7E] text-white shadow-xs'
                  : 'bg-white border border-[#c3c5d9] text-[#0b1c30] hover:bg-[#eff4ff]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setSelectedDest('instagram');
                triggerSimulation('instagram');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedDest === 'instagram'
                  ? 'bg-pink-600 text-white shadow-xs'
                  : 'bg-white border border-[#c3c5d9] text-[#0b1c30] hover:bg-[#eff4ff]'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </button>
            <button
              onClick={() => {
                setSelectedDest('cardapio');
                triggerSimulation('cardapio');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedDest === 'cardapio'
                  ? 'bg-[#0052ff] text-white shadow-xs'
                  : 'bg-white border border-[#c3c5d9] text-[#0b1c30] hover:bg-[#eff4ff]'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Cardápio Digital</span>
            </button>
          </div>
        </div>

        {/* Interactive Playground Container */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#e5eeff] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Column 1: Placa Interativa */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              {/* Virtual Tapp Plate */}
              <div
                onClick={() => triggerSimulation()}
                className={`relative w-64 h-84 bg-[#213145] rounded-2xl p-6 shadow-2xl flex flex-col justify-between items-center transition-all duration-300 transform cursor-pointer group ${
                  isSimulating ? 'scale-[1.02] ring-4 ring-[#0052ff]/40 shadow-[0_20px_50px_rgba(0,82,255,0.3)]' : 'hover:scale-[1.01]'
                }`}
              >
                {/* Metallic edge bracket stand mockup */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#737688]/40 to-[#c3c5d9]/20 rounded-b-2xl flex items-center justify-center border-t border-white/10">
                  <span className="font-mono text-[9px] text-[#cbdbf5] uppercase tracking-widest">
                    Tapp Architectural Stand • NTAG216
                  </span>
                </div>

                {/* Top Branding on Plate */}
                <div className="flex flex-col items-center gap-1 pt-2 text-[#eaf1ff]">
                  <span className="material-symbols-outlined text-[#cbdbf5] text-[28px]">
                    {selectedDest === 'cardapio' ? 'coffee' : selectedDest === 'whatsapp' ? 'chat' : selectedDest === 'instagram' ? 'photo_camera' : 'storefront'}
                  </span>
                  <span className="font-geist text-xs font-bold tracking-widest uppercase">
                    CAFÉ &amp; CO. ARTESANAL
                  </span>
                </div>

                {/* Center Radio Wave Icon */}
                <div className="relative flex items-center justify-center my-auto text-[#eaf1ff]">
                  {/* Concentric Pulse Rings */}
                  <div
                    className={`absolute rounded-full border-2 border-[#0052ff] transition-all duration-700 ${
                      isSimulating
                        ? 'w-36 h-36 opacity-100 scale-125 border-4 animate-ping'
                        : 'w-20 h-20 opacity-0 scale-75'
                    }`}
                  />
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-xs border border-white/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[46px] text-[#eaf1ff]">
                      contactless
                    </span>
                  </div>
                </div>

                {/* Bottom CTA on Plate */}
                <div className="pb-10 text-[#dce9ff] text-[11px] font-medium tracking-wide">
                  Aproxime seu smartphone
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => triggerSimulation()}
                disabled={isSimulating}
                className="mt-6 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0052ff] text-white font-geist text-[14px] font-semibold hover:bg-[#003ec7] active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-80"
              >
                <span className="material-symbols-outlined text-[20px]">sensors</span>
                <span>{isSimulating ? 'Aproximando...' : 'Simular Aproximação'}</span>
              </button>
              <span className="font-mono text-xs text-[#737688] mt-2">
                Clique na placa ou no botão para aproximar
              </span>
            </div>

            {/* Column 2: Wave animation indicator */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0">
              <div
                className={`px-4 py-2 rounded-full font-geist text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs ${
                  statusState === 'connected'
                    ? 'bg-[#007633] text-white shadow-md'
                    : statusState === 'scanning'
                    ? 'bg-[#0052ff] text-white animate-pulse'
                    : 'bg-[#eff4ff] text-[#434656] border border-[#d3e4fe]'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    statusState === 'connected'
                      ? 'bg-[#66ff8e]'
                      : statusState === 'scanning'
                      ? 'bg-white animate-ping'
                      : 'bg-[#737688]'
                  }`}
                />
                <span>{statusMessage}</span>
              </div>

              {/* Wave SVG */}
              <div className="w-full h-14 flex items-center justify-center my-3 text-[#0052ff]">
                <svg className="w-36 h-8" fill="none" viewBox="0 0 140 28" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 14 Q 35 0, 70 14 T 140 14"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray={isSimulating ? '0' : '4 4'}
                    className={`transition-all duration-300 ${isSimulating ? 'opacity-100 text-[#0052ff]' : 'opacity-40 text-[#737688]'}`}
                  />
                </svg>
              </div>

              <span className="text-[11px] text-[#737688] font-mono text-center">
                Transferência passiva em 13.56 MHz
              </span>
            </div>

            {/* Column 3: Smartphone Screen Simulation */}
            <div className="lg:col-span-5 flex justify-center">
              {/* Phone Shell */}
              <div className="w-[300px] h-[550px] bg-[#0b0f19] rounded-[44px] p-3 shadow-2xl relative border-4 border-slate-800">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                </div>

                {/* Inner Screen */}
                <div
                  className={`w-full h-full bg-[#f8f9ff] rounded-[36px] overflow-hidden flex flex-col p-4 pt-10 relative transition-all duration-300 ${
                    activeScreenHighlight ? 'ring-4 ring-[#0052ff]/60' : ''
                  }`}
                >
                  {/* Push Notification Banner */}
                  <div
                    className={`absolute top-3 inset-x-3 bg-[#0b1c30] text-white p-3 rounded-2xl shadow-xl flex items-center justify-between transition-all duration-400 z-40 border border-white/10 ${
                      notificationVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#0052ff] flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[16px]">touch_app</span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold text-[#66ff8e] font-geist uppercase">
                          Tapp NFC Aberto
                        </span>
                        <span className="text-[12px] font-medium truncate max-w-[150px]">
                          {selectedDest === 'google'
                            ? 'Google Avaliações'
                            : selectedDest === 'whatsapp'
                            ? 'WhatsApp Atendimento'
                            : selectedDest === 'instagram'
                            ? '@cafeco.oficial'
                            : 'Cardápio do Café'}
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono">AGORA</span>
                  </div>

                  {/* SCREEN BODY DEPENDING ON SELECTED DESTINATION */}
                  {selectedDest === 'google' && (
                    <div className="flex flex-col items-center mt-2 text-center animate-in fade-in duration-300">
                      <div className="w-12 h-12 rounded-full bg-white shadow-xs p-2 flex items-center justify-center mb-1">
                        <svg className="w-7 h-7" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-geist text-base font-bold text-[#0b1c30]">Café &amp; Co. Artesanal</h4>
                      <p className="text-[11px] text-[#434656]">Avaliação no Google Meu Negócio</p>

                      <div className="w-full bg-white p-3 rounded-2xl shadow-xs border border-gray-200 mt-3 text-left">
                        <span className="text-[11px] font-semibold text-[#0b1c30] block mb-1">
                          Qual foi sua nota para o nosso atendimento?
                        </span>
                        <div className="flex items-center justify-center gap-2 py-2 text-amber-400">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-6 h-6 fill-amber-400 cursor-pointer hover:scale-110 transition-transform" />
                          ))}
                        </div>
                        <div className="bg-[#eff4ff] p-2 rounded-lg text-[11px] text-[#434656] italic">
                          "O café coado é espetacular e a torta de pistache é perfeita! Atendimento 10..."
                        </div>
                        <button className="w-full mt-2.5 py-2 bg-[#0052ff] text-white text-xs font-bold rounded-lg shadow-xs">
                          Publicar Avaliação (5★)
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between w-full bg-white p-2 rounded-xl text-[11px] text-[#434656] shadow-xs">
                        <span>4.9 / 5.0 estrelas</span>
                        <span className="font-semibold text-[#0052ff]">1.420 reviews</span>
                      </div>
                    </div>
                  )}

                  {selectedDest === 'whatsapp' && (
                    <div className="flex flex-col h-full animate-in fade-in duration-300">
                      {/* WA Header */}
                      <div className="flex items-center gap-2 bg-[#128C7E] text-white p-2.5 -mx-4 -mt-4 rounded-t-[36px]">
                        <div className="w-8 h-8 rounded-full bg-white text-[#128C7E] font-bold text-xs flex items-center justify-center">
                          CC
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-bold leading-tight">Café &amp; Co. Oficial</span>
                          <span className="text-[10px] opacity-80">Conta comercial • Online</span>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="flex-1 py-3 flex flex-col justify-end gap-2">
                        <div className="self-center bg-[#dfe2f1] text-[10px] text-gray-600 px-2 py-0.5 rounded">
                          Hoje
                        </div>
                        <div className="self-end bg-[#dcf8c6] text-xs text-gray-800 p-2.5 rounded-xl rounded-tr-none max-w-[85%] shadow-xs">
                          Olá! Gostaria de consultar o cardápio e saber sobre reservas para hoje.
                          <span className="block text-[9px] text-gray-500 text-right mt-1">12:30 ✓✓</span>
                        </div>
                        <div className="self-start bg-white text-xs text-gray-800 p-2.5 rounded-xl rounded-tl-none max-w-[85%] shadow-xs border border-gray-100">
                          Olá! Sejam muito bem-vindos ao Café &amp; Co. Nosso cardápio já está disponível no link acima! ☕
                          <span className="block text-[9px] text-gray-500 text-right mt-1">12:30</span>
                        </div>
                      </div>

                      <div className="bg-white p-2 rounded-full flex items-center gap-2 shadow-xs border border-gray-200 mt-auto">
                        <input
                          type="text"
                          readOnly
                          value="Digite uma mensagem..."
                          className="text-xs text-gray-400 bg-transparent flex-1 outline-none px-2"
                        />
                        <div className="w-6 h-6 rounded-full bg-[#128C7E] text-white flex items-center justify-center">
                          <span className="text-xs">➤</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedDest === 'instagram' && (
                    <div className="flex flex-col h-full animate-in fade-in duration-300">
                      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                        <span className="text-xs font-bold text-[#0b1c30]">cafeco.artesanal</span>
                        <span className="text-xs text-pink-600 font-bold">Oficial</span>
                      </div>
                      <div className="flex items-center gap-3 py-3">
                        <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-pink-600 text-xs">
                            CAFE
                          </div>
                        </div>
                        <div className="flex-1 grid grid-cols-3 text-center text-xs">
                          <div><span className="font-bold block">142</span>posts</div>
                          <div><span className="font-bold block">18.4k</span>seguidores</div>
                          <div><span className="font-bold block">420</span>seguindo</div>
                        </div>
                      </div>
                      <div className="text-[11px] text-[#0b1c30] text-left leading-tight">
                        <span className="font-bold block">Café &amp; Co.</span>
                        Cafés especiais, brunch e confeitaria autoral em São Paulo. Aberto todos os dias! 🌿
                      </div>
                      <button className="w-full mt-2 py-1.5 bg-[#0052ff] text-white text-xs font-bold rounded-lg">
                        Seguir Perfil
                      </button>
                      <div className="grid grid-cols-3 gap-1 mt-3">
                        <div className="aspect-square bg-amber-200 rounded flex items-center justify-center text-[10px] text-amber-800">☕ Espresso</div>
                        <div className="aspect-square bg-pink-200 rounded flex items-center justify-center text-[10px] text-pink-800">🥐 Croissant</div>
                        <div className="aspect-square bg-emerald-200 rounded flex items-center justify-center text-[10px] text-emerald-800">🍃 Matcha</div>
                      </div>
                    </div>
                  )}

                  {selectedDest === 'cardapio' && (
                    <div className="flex flex-col h-full text-left animate-in fade-in duration-300">
                      <div className="bg-[#0052ff] text-white p-2.5 -mx-4 -mt-4 rounded-t-[36px] flex items-center justify-between">
                        <span className="text-xs font-bold">Cardápio Digital • Mesa 04</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Ao Vivo</span>
                      </div>
                      <div className="flex-1 py-2 flex flex-col gap-2 overflow-y-auto">
                        <div className="p-2 bg-white rounded-xl shadow-xs border border-gray-100 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold block text-[#0b1c30]">Café Especial Coado</span>
                            <span className="text-[10px] text-gray-500">Grãos Catuaí Vermelho 100%</span>
                          </div>
                          <span className="text-xs font-bold text-[#0052ff]">R$ 12,90</span>
                        </div>
                        <div className="p-2 bg-white rounded-xl shadow-xs border border-gray-100 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold block text-[#0b1c30]">Croissant Amêndoas</span>
                            <span className="text-[10px] text-gray-500">Massa folhada francesa</span>
                          </div>
                          <span className="text-xs font-bold text-[#0052ff]">R$ 18,50</span>
                        </div>
                        <div className="p-2 bg-white rounded-xl shadow-xs border border-gray-100 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold block text-[#0b1c30]">Toast de Avocado &amp; Ovo</span>
                            <span className="text-[10px] text-gray-500">Pão sourdough tostado</span>
                          </div>
                          <span className="text-xs font-bold text-[#0052ff]">R$ 26,00</span>
                        </div>
                      </div>
                      <button className="w-full py-2 bg-[#007633] text-white text-xs font-bold rounded-xl mt-auto shadow-xs">
                        Fazer Pedido ao Garçom
                      </button>
                    </div>
                  )}

                  {/* Stamp at screen bottom */}
                  <div className="mt-auto pt-2 text-center font-mono text-[9px] text-[#737688]">
                    Aberto via Tapp Smart NFC Tag
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
