import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20as%20placas%20Tapp%20NFC."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#c3c5d9] shadow-[0_12px_32px_-4px_rgba(11,15,25,0.12),0_4px_12px_-2px_rgba(11,15,25,0.06)] text-[#0b1c30] hover:bg-[#eff4ff] hover:border-[#0052ff]/40 transition-all duration-200 group active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
        </span>
        <span className="material-symbols-outlined text-[#128C7E] text-[20px]">chat</span>
        <span className="font-geist text-xs font-semibold text-[#0b1c30]">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
