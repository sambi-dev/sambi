import type { Message } from 'ai';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Chat extends Record<string, any> {
  id: string;
  title: string;
  createdAt: Date;
  userId: string;
  path: string;
  messages: Message[];
  sharePath?: string;
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string;
    }
>;

export interface Session {
  user: {
    id: string;
    email: string;
  };
}

export interface AuthResult {
  type: string;
  message: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface User extends Record<string, any> {
  id: string;
  email: string;
  password: string;
  salt: string;
}

export interface SearchResults {
  images: string[];
  results: SearchResultItem[];
  query: string;
}

export interface SearchResultItem {
  title: string;
  url: string;
  content: string;
}
