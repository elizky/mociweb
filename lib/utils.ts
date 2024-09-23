import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export interface ProfileData {
  name: string;
  avatar: string;
  email: string[];
  phone: { number: string; type: 'whatsapp' | 'telegram' | 'call' }[];
  profession: string[];
  achievements?: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  experience: string[];
  skills: string[];
  connect: { text: string; link: string }[];
}

export const profileData: ProfileData = {
  name: 'Sarah Johnson',
  avatar: '/placeholder.svg?height=80&width=80',
  email: ['sarah.johnson@salesforce.com', 'sarah@gmail.com'],
  phone: [
    { number: '+1 (555) 123-4567', type: 'call' },
    { number: '+1 (555) 765-4321', type: 'whatsapp' },
    { number: '+1 (555) 765-4321', type: 'telegram' },
  ],
  profession: [
    'Senior Sales Manager',
    'Salesforce',
    '10+ Years Experience',
    'Fortune 500 Specialist',
  ],

  social: {
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/sarahjsales',
    instagram: 'https://instagram.com/sarahjsales',
    facebook: 'https://facebook.com/sarahjohnson',
  },
  experience: [
    'Enterprise Sales',
    'Team Leadership',
    'Client Relationship Management',
    'Sales Strategy',
    'Revenue Growth',
    'Contract Negotiation',
    'Sales Analytics',
  ],
  skills: [
    'Revenue Generation',
    'Team Management',
    'Growth Strategies',
    'Goal Setting',
    'Sales Analytics',
    'CRM Software',
  ],
  connect: [
    { text: 'Astor Nobel Business Advisory', link: 'https://astornobel.com/' },
    { text: 'Prueba de otro boton', link: 'https://astornobel.com/' },
  ],
};
