import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { FaqItem } from '../types';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="w-full py-20 bg-[#f8f9ff]">
      <div className="max-w-[860px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[11px] font-bold text-[#003ec7] uppercase tracking-widest font-geist mb-2 px-3 py-1 bg-[#eff4ff] rounded-full">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-geist text-2xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-[#434656] mt-2">
            Tudo o que você precisa saber sobre a tecnologia, funcionamento e personalização das placas Tapp.
          </p>

          {/* Quick Search */}
          <div className="w-full max-w-md relative mt-6">
            <input
              type="text"
              placeholder="Pesquise por uma dúvida (ex: iPhone, link, bateria)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-white border border-[#c3c5d9] text-xs focus:outline-none focus:ring-2 focus:ring-[#0052ff] shadow-xs"
            />
            <Search className="w-4 h-4 text-[#737688] absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#434656] bg-white rounded-2xl p-6 border border-[#e5eeff]">
              Nenhuma pergunta encontrada com o termo "{searchTerm}".
            </div>
          ) : (
            filteredFaqs.map((faq: FaqItem) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-[#e5eeff] p-5 shadow-xs transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left font-geist text-base font-bold text-[#0b1c30] focus:outline-none cursor-pointer gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0052ff] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-[#434656] leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
