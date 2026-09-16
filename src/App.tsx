import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { NfcSimulator } from './components/NfcSimulator';
import { DestinationsGrid } from './components/DestinationsGrid';
import { ModelsCatalog } from './components/ModelsCatalog';
import { PlateCustomizer } from './components/PlateCustomizer';
import { BusinessSegments } from './components/BusinessSegments';
import { HybridTechnology } from './components/HybridTechnology';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { MainCtaBanner } from './components/MainCtaBanner';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomizerState } from './types';

export default function App() {
  const [customizerState, setCustomizerState] = useState<CustomizerState>({
    material: 'black',
    brandName: 'STUDIO DESIGN',
    categoryIcon: 'storefront',
    destination: 'instagram',
    plateFormat: 'balcao',
    showQrCode: true,
    quantity: 1,
  });

  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectDestination = (destId: string) => {
    setCustomizerState((prev) => ({
      ...prev,
      destination: destId,
    }));
  };

  const handleSelectModelForCustomizer = (modelStyle: 'black' | 'white' | 'wood' | 'adhesive') => {
    setCustomizerState((prev) => ({
      ...prev,
      material: modelStyle,
    }));
    handleScrollTo('personalize');
  };

  const handleChangeCustomizer = (partial: Partial<CustomizerState>) => {
    setCustomizerState((prev) => ({
      ...prev,
      ...partial,
    }));
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] selection:bg-[#dde1ff] selection:text-[#001452] flex flex-col">
      {/* Fixed Header */}
      <Header onOpenOrderModal={() => setOrderModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section with Real Showcase Image */}
        <HeroSection
          onScrollTo={handleScrollTo}
          onOpenOrderModal={() => setOrderModalOpen(true)}
        />

        {/* 2. Como Funciona (3 Steps & Compatibility) */}
        <HowItWorks />

        {/* 3. Simulador em Tempo Real (Interactive Smartphone & NFC Plate Tap) */}
        <NfcSimulator />

        {/* 4. Opções de Destinos (Instagram, WhatsApp, Google 5★, Cardápio, Site, Multilinks) */}
        <DestinationsGrid
          onSelectDestination={handleSelectDestination}
          onScrollToCustomizer={() => handleScrollTo('personalize')}
        />

        {/* 5. Catálogo de Modelos & Acabamentos Arquitetônicos */}
        <ModelsCatalog
          onSelectModelForCustomizer={handleSelectModelForCustomizer}
        />

        {/* 6. Estúdio de Personalização 1:1 em Tempo Real */}
        <PlateCustomizer
          customizerState={customizerState}
          onChangeCustomizer={handleChangeCustomizer}
          onOpenOrderModal={() => setOrderModalOpen(true)}
        />

        {/* 7. Segmentos & Aplicações Comerciais */}
        <BusinessSegments />

        {/* 8. Tecnologia Híbrida Dual (NFC + Laser QR Code) */}
        <HybridTechnology />

        {/* 9. Prova Social & Depoimentos Reais */}
        <Testimonials />

        {/* 10. FAQ Completo com Busca */}
        <FaqSection />

        {/* 11. CTA Principal de Conversão */}
        <MainCtaBanner
          onScrollToCustomizer={() => handleScrollTo('personalize')}
          onOpenOrderModal={() => setOrderModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenOrderModal={() => setOrderModalOpen(true)}
      />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />

      {/* Custom Quote / Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        customizerState={customizerState}
      />
    </div>
  );
}
