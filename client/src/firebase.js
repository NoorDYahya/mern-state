// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-14a0f.firebaseapp.com",
  projectId: "mern-estate-14a0f",
  storageBucket: "mern-estate-14a0f.appspot.com",
  messagingSenderId: "840109533034",
  appId: "1:840109533034:web:b47e16fdda722a8d0fa713"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);