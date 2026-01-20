// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC2TZ-KbnbWxhEtNdiBlSanz4fU2a0ef4Y",
  authDomain: "test20-1-69.firebaseapp.com",
  projectId: "test20-1-69",
  storageBucket: "test20-1-69.firebasestorage.app",
  messagingSenderId: "598747664727",
  appId: "1:598747664727:web:21a721ac3acee8a3cbae12",
  measurementId: "G-H2Y1R9SNNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);