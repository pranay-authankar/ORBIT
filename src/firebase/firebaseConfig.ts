import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (WEB APP)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2v--jFBl5ABRbc8wIbEnhY8eU-QzXHOM",
    authDomain: "student-ecosystem-a834f.firebaseapp.com",
    projectId: "student-ecosystem-a834f",
    storageBucket: "student-ecosystem-a834f.firebasestorage.app",
    messagingSenderId: "561248472728",
    appId: "1:561248472728:web:9a6ca5d959483b49360aed",
    measurementId: "G-SPHWM9HT6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔑 AUTH & DATABASE (THIS IS WHAT YOUR APP USES)
export const auth = getAuth(app);
export const db = getFirestore(app);
