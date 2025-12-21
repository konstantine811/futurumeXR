import {
  doc,
  setDoc,
  getDoc,
  type DocumentData,
  type FirestoreError,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import type { UserData } from "@/types/user";

export interface OnboardingInfo {
  age: number;
  selections: string[];
  completedAt: Date;
}

export interface UserProfile extends UserData {
  onboardingCompleted: boolean;
  onboardingInfo?: OnboardingInfo;
  createdAt?: Date;
  updatedAt?: Date;
}

const COLLECTION_NAME = "users";

/**
 * Зберегти дані користувача в Firestore
 */
export const saveUserProfile = async (userData: UserProfile): Promise<void> => {
  try {
    const userRef = doc(db, COLLECTION_NAME, userData.email);

    // Перевіряємо, чи користувач вже існує
    const userDoc = await getDoc(userRef);
    const isNewUser = !userDoc.exists();

    const profileData: DocumentData = {
      email: userData.email,
      name: userData.name,
      role: userData.role,
      uid: userData.uid || null,
      photoURL: userData.photoURL || null,
      onboardingCompleted: userData.onboardingCompleted || false,
      updatedAt: new Date(),
    };

    // Додаємо onboardingInfo якщо він є
    if (userData.onboardingInfo) {
      profileData.onboardingInfo = {
        age: userData.onboardingInfo.age,
        selections: userData.onboardingInfo.selections,
        completedAt:
          userData.onboardingInfo.completedAt instanceof Date
            ? userData.onboardingInfo.completedAt
            : new Date(userData.onboardingInfo.completedAt),
      };
    }

    // Додаємо createdAt тільки для нових користувачів
    if (isNewUser) {
      profileData.createdAt = new Date();
    }

    await setDoc(userRef, profileData, { merge: true });
    console.log("User profile saved successfully:", userData.email);
  } catch (error) {
    const firestoreError = error as FirestoreError;
    console.error("Error saving user profile:", firestoreError);
    throw new Error(`Помилка збереження профілю: ${firestoreError.message}`);
  }
};

/**
 * Завантажити профіль користувача з Firestore
 */
export const getUserProfile = async (
  email: string
): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, COLLECTION_NAME, email);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return null;
    }

    const data = userDoc.data();
    return {
      ...data,
      onboardingInfo: data.onboardingInfo
        ? {
            ...data.onboardingInfo,
            completedAt:
              data.onboardingInfo.completedAt?.toDate?.() ||
              new Date(data.onboardingInfo.completedAt),
          }
        : undefined,
    } as UserProfile;
  } catch (error) {
    const firestoreError = error as FirestoreError;
    console.error("Error getting user profile:", firestoreError);
    throw new Error(`Помилка завантаження профілю: ${firestoreError.message}`);
  }
};

/**
 * Перевірити, чи користувач пройшов onboarding
 */
export const hasCompletedOnboarding = async (
  email: string
): Promise<boolean> => {
  try {
    const profile = await getUserProfile(email);
    return profile?.onboardingCompleted === true;
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    return false;
  }
};
