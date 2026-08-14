export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  examples: string[];
  iconName: string;
}

export interface ProblemItem {
  title: string;
  description: string;
  iconName: string;
}

export interface LegalPoint {
  title: string;
  lawRef: string;
  description: string;
}
