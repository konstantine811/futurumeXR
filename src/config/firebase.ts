// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh2bOoHLYA-JCVek52ggPBJYclHtRHopE",
  authDomain: "futurume-84475.firebaseapp.com",
  projectId: "futurume-84475",
  storageBucket: "futurume-84475.firebasestorage.app",
  messagingSenderId: "1082587693146",
  appId: "1:1082587693146:web:2ff811e0c3df40d7d7d863",
  measurementId: "G-T4GSBL07V7",
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser)
export const analytics: Analytics | null =
  typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize Auth
export const auth: Auth = getAuth(app);

// Initialize Firestore
export const db: Firestore = getFirestore(app);
