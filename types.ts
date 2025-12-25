import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  category: string;
  imageUrl: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}