// ... (previous types remain the same)

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
}