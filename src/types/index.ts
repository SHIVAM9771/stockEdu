export interface Course {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  students: number;
  duration: string;
  image: string;
  instructor: string;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  requirements: string[];
}

export interface User {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}