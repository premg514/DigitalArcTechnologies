// Common types used across components

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  technologies: string[];
  techColor: string;
  clientInfo: string;
  clientIcon: React.ReactNode;
  gradient: string;
  emoji: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface VisibilityState {
  [key: string]: boolean;
}