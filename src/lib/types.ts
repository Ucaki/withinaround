export type Workshop = {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  slug: string;
  href: string;
  image?: string;
  registrationUrl?: string;
};
export type WorkshopFormData = {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  registrationUrl?: string;
};