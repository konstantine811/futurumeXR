export type UserRole =
  | "student"
  | "educator"
  | "author"
  | "parent"
  | "ta"
  | "guest"
  | "admin"
  | "teacher"
  | "superadmin";

export interface UserData {
  email: string;
  name: string;
  role: UserRole;
  uid?: string;
  photoURL?: string | null;
  onboardingCompleted?: boolean;
  onboardingInfo?: {
    age: number;
    selections: string[];
    completedAt: Date;
  };
}
