export interface Founder {
  name: string;
  role: string;
  bio: string[];
  imagePlaceholderText: string;
  socials?: {
    linkedin?: string;
    x?: string;
    github?: string;
    telegram?: string;
  };
  email?: string;
  website?: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  imagePlaceholderText: string;
  type?: 'b2b' | 'b2c' | 'blockchain';
}

export interface Milestone {
  year: string;
  title: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface FutureItem {
  title: string;
  items: string[];
}