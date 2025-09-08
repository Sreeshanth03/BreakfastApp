import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0RUJl-fUUm23IJ3-RactlXVvfCYqiv5Q",
  authDomain: "breakfastapp-e6217.firebaseapp.com",
  projectId: "breakfastapp-e6217",
  storageBucket: "breakfastapp-e6217.firebasestorage.app",
  messagingSenderId: "586769136441",
  appId: "1:586769136441:web:7ebad13c481b71fefc86e8",
  measurementId: "G-XKC99CXD09",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
