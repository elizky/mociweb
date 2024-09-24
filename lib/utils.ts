import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export interface ProfileData {
  name: string;
  avatar: string;
  email: string[];
  phone: Phone[];
  profession: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  experience: string[];
  skills: string[];
  connect: ConnectLink[];
}

interface Phone {
  number: string;
  type: string;
}

interface ConnectLink {
  text: string;
  link: string;
}
