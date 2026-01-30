// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI13O_JzJagcGtF89DIt86zpewjoDjkmw",
  authDomain: "jiramet-web-50632.firebaseapp.com",
  projectId: "jiramet-web-50632",
  storageBucket: "jiramet-web-50632.firebasestorage.app",
  messagingSenderId: "97607325138",
  appId: "1:97607325138:web:ee281061f2e8aa9e4a240b",
  measurementId: "G-GCFTC82PPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);