export type Question = {
  themeId: number;
  id: number;
  question: string;
  answer: string;
  score_points: number;
};

export type Theme = {
  theme: string;
  id: number;
  Questions: Question[];
};

export type Message = {
  message: string;
  id: number;
};
