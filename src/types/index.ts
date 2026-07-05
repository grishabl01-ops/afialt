// Content structures for the afialt.ru clone

export interface InfraCard {
  image: string;
  title: string;
  distance: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface SecurityItem {
  number: string;
  text: string;
}

export interface GallerySlide {
  image: string;
  alt: string;
}

export interface MapFilter {
  id: string;
  label: string;
}
