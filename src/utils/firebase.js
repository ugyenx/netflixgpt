// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmWhqCr4LyfyGx_kdHDaHttV1m7xl4hRg",
  authDomain: "netflixgpt-d7d1c.firebaseapp.com",
  projectId: "netflixgpt-d7d1c",
  storageBucket: "netflixgpt-d7d1c.firebasestorage.app",
  messagingSenderId: "710161559310",
  appId: "1:710161559310:web:1a7287f01777a61ba8315f",
  measurementId: "G-TPZ29XZ7X2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
