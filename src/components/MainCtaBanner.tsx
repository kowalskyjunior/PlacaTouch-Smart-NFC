import React from 'react';
import { ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';

interface MainCtaBannerProps {
  onScrollToCustomizer: () => void;
  onOpenOrderModal: () => void;
}

export const MainCtaBanner: React.FC<MainCtaBannerProps> = ({
  onScrollToCustomizer,
  onOpenOrderModal,
}) => {
  return (
    <section className="w-full py-20 bg-[#f8f9ff]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl bg-[#0b0f19] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Subtle electric blue atmospheric glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0052ff]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#003ec7]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#66ff8e] text-xs font-bold uppercase tracking-wider font-geist border border-white/10">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Pronta para o seu balcão físico</span>
            </div>

            <h2 className="font-geist text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Seu negócio já está conectado. Agora falta tornar isso mais fácil para seus clientes.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Peça agora sua placa Tapp personalizada com seu logotipo e comece a transformar cada visita física em avaliações 5 estrelas, conversas no WhatsApp e novas vendas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#0052ff] text-white font-geist text-sm font-bold hover:bg-[#003ec7] active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,82,255,0.35)] cursor-pointer"
              >
                <span>Quero minha placa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20sobre%20as%20placas%20Tapp%20NFC%20e%20gostaria%20de%20falar%20com%20um%20consultor."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-geist text-sm font-semibold border border-white/15 transition-all cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Falar com consultor no WhatsApp</span>
              </a>
            </div>

            {/* Micro specs footer */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-slate-400 text-xs font-mono border-t border-white/10 w-full">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#66ff8e]" /> Envio para todo o Brasil
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#66ff8e]" /> Layout aprovado antes da produção
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#66ff8e]" /> Sem mensalidades obrigatórias
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
