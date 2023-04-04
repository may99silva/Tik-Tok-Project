import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyAGtZZyExxbR9H0qTbLT4J3biO09xoWOqU",
  authDomain: "tiktok---jornada-1c51e.firebaseapp.com",
  projectId: "tiktok---jornada-1c51e",
  storageBucket: "tiktok---jornada-1c51e.appspot.com",
  messagingSenderId: "709263103266",
  appId: "1:709263103266:web:d9b26a196e1b8045c6c17b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
