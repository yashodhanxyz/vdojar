export interface HeroItem {
  id: string;
  title: string;
  synopsis: string;
  duration?: string;
  category?: string;
  watchUrl: string;
  detailPath: string;
  image: string;
  badge?: string;
  maturityRating?: string;
}

export interface RailItem {
  id: string;
  title: string;
  image: string;
  href: string;
  watchUrl?: string;
  meta?: string;
  isTopTen?: boolean;
}

export interface RailSection {
  id: string;
  title: string;
  items: RailItem[];
  cta?: string;
  tagline?: string;
  variant?: "default" | "topTen";
}
