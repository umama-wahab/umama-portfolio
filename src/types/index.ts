export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: "Java" | "Web" | "Research" | "Design" | "All";
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
  achievement?: string;
  year?: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}
