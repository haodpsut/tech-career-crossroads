export interface Career {
  title: string;
  avgSalary: number;
  salaryFormatted: string;
  growth: number; // Annual projected growth rate, e.g., 0.15 for 15%
  demand: 'Very High' | 'High' | 'Medium';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: 'cs' | 'cnit';
  }[];
}
