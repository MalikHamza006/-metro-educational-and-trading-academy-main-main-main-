export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'forex' | 'tech' | 'marketing' | 'creative' | 'academic';
  shortDesc: string;
  overview: string;
  duration: string;
  level: string;
  rating: number;
  studentsCount: number;
  outcomes: string[];
  curriculum: { section: string; items: string[] }[];
  instructor: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
  };
  certification: string;
  isFlagship: boolean;
  faq: { q: string; a: string }[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  achievement: string;
  avatar: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface RoadmapCheckpoint {
  step: string;
  title: string;
  desc: string;
  milestone: string;
}
