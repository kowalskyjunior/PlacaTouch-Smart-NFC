export interface PlateModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  material: string;
  thickness: string;
  basePrice: number;
  badge?: string;
  features: string[];
  bestSeller?: boolean;
  style: 'black' | 'white' | 'wood' | 'adhesive';
  dimensions: string;
  mounting: string;
}

export interface DestinationType {
  id: string;
  name: string;
  shortLabel: string;
  iconName: string;
  colorBg: string;
  colorText: string;
  description: string;
  benefit: string;
  actionText: string;
  sampleUrl: string;
}

export interface BusinessSegment {
  id: string;
  name: string;
  icon: string;
  headline: string;
  description: string;
  useCases: string[];
  impactMetric: string;
  impactLabel: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  city: string;
  quote: string;
  rating: number;
  initials: string;
  modelUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'tecnologia' | 'compatibilidade' | 'personalizacao' | 'instalacao';
}

export interface CustomizerState {
  material: 'black' | 'white' | 'wood' | 'adhesive';
  brandName: string;
  categoryIcon: string;
  destination: string;
  plateFormat: 'balcao' | 'parede' | 'totem';
  showQrCode: boolean;
  quantity: number;
}
