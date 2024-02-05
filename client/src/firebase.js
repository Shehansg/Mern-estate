// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-77914.firebaseapp.com",
  projectId: "mern-estate-77914",
  storageBucket: "mern-estate-77914.appspot.com",
  messagingSenderId: "656659625938",
  appId: "1:656659625938:web:0bd38d139089abda8aba0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);