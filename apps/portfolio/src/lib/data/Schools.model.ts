export interface School {
  name: string;
  gen: string;
  level: string;
  enroll: number;
  graduate: number;
  gpax?: number;
  image: string;
  website: string;
}

export type Schools = School[];
