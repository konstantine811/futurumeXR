import { useState, useEffect } from "react";
import {
  type User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  type AuthError,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import type { UserRole } from "@/types/user";
import { USER_ROLES } from "@/config/roles";

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

/**
 * Hook for Firebase Authentication
 */
export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: User | null) => {
        if (firebaseUser) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      const authError = err as AuthError;
      setError(authError.message);
      throw err;
    }
  };

  const register = async (
    email: string,
    password: string,
    displayName?: string
  ) => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, { displayName });
      }
    } catch (err) {
      const authError = err as AuthError;
      setError(authError.message);
      throw err;
    }
  };

  const loginWithGoogle = async () => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      const result = await signInWithPopup(auth, provider);
      return {
        email: result.user.email || "",
        name: result.user.displayName || "",
        uid: result.user.uid,
        photoURL: result.user.photoURL,
      };
    } catch (err) {
      const authError = err as AuthError & { code?: string };
      let errorMessage = authError.message;

      // Перекладаємо типові помилки Firebase на українську
      if (authError.code === "auth/configuration-not-found") {
        errorMessage =
          "Google Sign-In не налаштовано в Firebase Console. Будь ласка, увімкніть Google Sign-In в налаштуваннях Firebase.";
      } else if (authError.code === "auth/popup-closed-by-user") {
        errorMessage = "Вікно входу було закрито. Спробуйте ще раз.";
      } else if (authError.code === "auth/popup-blocked") {
        errorMessage =
          "Вікно входу було заблоковано браузером. Дозвольте спливаючі вікна для цього сайту.";
      } else if (authError.code === "auth/unauthorized-domain") {
        errorMessage =
          "Цей домен не додано до авторизованих доменів у Firebase Console.";
      }

      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
    } catch (err) {
      const authError = err as AuthError;
      setError(authError.message);
      throw err;
    }
  };

  // Helper function to determine user role from email
  const getUserRoleFromEmail = (email: string): UserRole | null => {
    if (email.includes("admin@futurum.edu")) return USER_ROLES.ADMIN;
    if (email.includes("super@futurum.edu")) return USER_ROLES.SUPERADMIN;
    return null; // User needs to select role
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    loginWithGoogle,
    logout,
    getUserRoleFromEmail,
  };
};
