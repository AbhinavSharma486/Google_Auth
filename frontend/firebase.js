// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-22ed4.firebaseapp.com",
  projectId: "auth-22ed4",
  storageBucket: "auth-22ed4.firebasestorage.app",
  messagingSenderId: "89024116397",
  appId: "1:89024116397:web:c06b2ae2c2bafd8e3ff824"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);