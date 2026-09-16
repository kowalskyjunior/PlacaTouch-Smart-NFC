import React, { useState } from 'react';
import { CustomizerState } from '../types';
import { X, Check, MessageSquare, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  customizerState: CustomizerState;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  customizerState,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [destinationUrl, setDestinationUrl] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const materialNames = {
    black: 'Placa Premium Black (Alumínio Fosco)',
    white: 'Placa Acrílica Clean (Translúcido 4mm)',
    wood: 'Placa Madeira Eco (Carvalho Maciço)',
    adhesive: 'Placa Fixação Adesiva (3M VHB)',
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const textMessage = `*Novo Pedido / Proposta Tapp NFC* 🚀
---------------------------------
*Empresa / Marca:* ${customizerState.brandName.trim() || 'A definir'}
*Responsável:* ${clientName || 'Cliente'}
*WhatsApp de Contato:* ${clientPhone || 'Não informado'}
*Modelo Selecionado:* ${materialNames[customizerState.material]}
*Destino Principal:* ${customizerState.destination.toUpperCase()}
*Link / Perfil do Destino:* ${destinationUrl || 'A ser enviado'}
*Quantidade:* ${customizerState.quantity} unidade(s)
*Backup QR Code:* ${customizerState.showQrCode ? 'Sim, incluído' : 'Apenas NFC'}
*Observações:* ${clientNotes || 'Sem observações adicionais'}
---------------------------------
_Gostaria de validar o layout digital gratuito e receber as opções de frete e pagamento._`;

    const encoded = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e5eeff] relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#eff4ff] text-[#0052ff] flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-geist text-xl font-bold text-[#0b1c30]">
                  Solicitar Prova Digital Grátis
                </h3>
                <span className="text-xs text-[#434656]">
                  Sem compromisso • Layout aprovado antes da produção
                </span>
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#d3e4fe] mb-6 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#737688]">Modelo:</span>
                <span className="font-bold text-[#0b1c30]">{materialNames[customizerState.material]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737688]">Nome na placa:</span>
                <span className="font-bold text-[#0b1c30]">{customizerState.brandName || 'Sua Marca'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737688]">Destino:</span>
                <span className="font-bold text-[#0052ff] uppercase">{customizerState.destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737688]">Quantidade:</span>
                <span className="font-bold text-[#0b1c30]">{customizerState.quantity} un.</span>
              </div>
            </div>

            <form onSubmit={handleSendToWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1 font-geist">
                  Seu Nome ou Nome do Responsável *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Mateus Ramos"
                  className="w-full h-11 px-3.5 rounded-xl bg-[#f8f9ff] border border-[#c3c5d9] text-xs focus:outline-none focus:ring-2 focus:ring-[#0052ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1 font-geist">
                  WhatsApp com DDD (para envio da prova digital) *
                </label>
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="Ex: (11) 99999-8888"
                  className="w-full h-11 px-3.5 rounded-xl bg-[#f8f9ff] border border-[#c3c5d9] text-xs focus:outline-none focus:ring-2 focus:ring-[#0052ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1 font-geist">
                  Link ou @ do Instagram / WhatsApp para gravar na placa
                </label>
                <input
                  type="text"
                  value={destinationUrl}
                  onChange={(e) => setDestinationUrl(e.target.value)}
                  placeholder="Ex: @minhaloja ou wa.me/551199999999"
                  className="w-full h-11 px-3.5 rounded-xl bg-[#f8f9ff] border border-[#c3c5d9] text-xs focus:outline-none focus:ring-2 focus:ring-[#0052ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1 font-geist">
                  Observações de Personalização (opcional)
                </label>
                <textarea
                  rows={2}
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="Deseja enviar logotipo em vetor? Mais de uma cor? Descreva aqui..."
                  className="w-full p-3 rounded-xl bg-[#f8f9ff] border border-[#c3c5d9] text-xs focus:outline-none focus:ring-2 focus:ring-[#0052ff] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5b] text-white font-geist font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Dados &amp; Iniciar no WhatsApp</span>
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#737688] font-mono text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007633]" />
              <span>Seus dados são confidenciais e protegidos</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#effff4] border border-[#a8f5c0] text-[#007633] flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-geist text-2xl font-bold text-[#0b1c30] mb-2">
              Solicitação Iniciada!
            </h3>

            <p className="text-sm text-[#434656] max-w-sm mx-auto mb-6 leading-relaxed">
              Abrimos a conversa no WhatsApp para enviar sua prova digital gratuita. Nossa equipe técnica entrará em contato em instantes com o mockup final com sua logo!
            </p>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 rounded-xl bg-[#0052ff] text-white text-xs font-bold font-geist hover:bg-[#003ec7] transition-all cursor-pointer"
            >
              Fechar e Voltar ao Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
