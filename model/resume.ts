export interface Education {
  year: number;
  main: string;
  sub: string;
}

export interface Career {
  year: number;
  service: string;
  company: string;
  role: string;
  descriptions: string[];
}

export interface Skill {
  title: string;
  description: string;
}
