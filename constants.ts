import {
  Armchair,
  BedDouble,
  Lamp,
  PenTool,
  Sofa,
  Truck,
  Phone,
  Mail,
  MapPin,
  Globe,
  Instagram
} from 'lucide-react';
import { NavItem, StatItem, ServiceItem, ProjectItem, ContactInfo } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Anasayfa', href: '#home' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetlerimiz', href: '#services' },
  { label: 'Galeri', href: '#showcase' },
  { label: 'Bize Ulaşın', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '1992', label: "'den Beri" },
  { value: '2000+', label: 'Mutlu Müşteri' },
  { value: '100%', label: 'Müşteri Memnuniyeti' },
  { value: '500+', label: 'Tamamlanan Proje' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Kişiye Özel Tasarım',
    description: 'Yaşam tarzınıza ve zevkinize uygun, tamamen size özel mobilya tasarımları.',
    icon: PenTool,
  },
  {
    title: 'Özel Üretim Mobilya',
    description: 'El işçiliğiyle üretilen, benzersiz ve kaliteli mobilya parçaları.',
    icon: Sofa,
  },
  {
    title: 'Aydınlatma Çözümleri',
    description: 'Mekanınıza uygun, ambiyans yaratan özel aydınlatma tasarımları.',
    icon: Lamp,
  },
  {
    title: 'Mekan Planlama',
    description: 'Yaşam alanlarınızı en verimli şekilde kullanan akıllı çözümler.',
    icon: Armchair,
  },
  {
    title: 'Yatak Odası Tasarımı',
    description: 'Huzurlu ve konforlu uyku için özel tasarlanmış yatak odası setleri.',
    icon: BedDouble,
  },
  {
    title: 'Ücretsiz Teslimat & Montaj',
    description: 'Profesyonel ekibimizle ücretsiz teslimat ve kurulum hizmeti.',
    icon: Truck,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Modern Villa Projesi',
    category: 'Konut',
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    title: 'Butik Otel Tasarımı',
    category: 'Ticari',
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    title: 'Sahil Evi',
    category: 'Konut',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    title: 'Minimalist Stüdyo',
    category: 'İç Mekan',
    imageUrl: 'https://picsum.photos/800/600?random=4',
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: Phone, label: 'Telefon', value: '0(232)264 23 23', href: 'tel:+902322642323' },
  { icon: Mail, label: 'E-posta', value: 'bilgi@barthome.com.tr', href: 'mailto:bilgi@barthome.com.tr' },
  { icon: Globe, label: 'Website', value: 'www.barthome.com.tr', href: 'https://www.barthome.com.tr' },
  { icon: Instagram, label: 'Instagram', value: '@barthome_concept', href: 'https://www.instagram.com/barthome_concept' },
  { icon: MapPin, label: 'Adres', value: 'Karabağlar Mahallesi Yeşillik Caddesi No: 256 1/B Karabağlar/İzmir' },
];