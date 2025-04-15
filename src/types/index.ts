export interface User {
  id: number;
  username: string;
  email: string;
  role: 'ADMIN' | 'FARMER' | 'BUYER';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  username: string;
  role: 'FARMER' | 'BUYER';
} 