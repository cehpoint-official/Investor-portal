import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAivZvWaEua-18ZGH4bXBPOPal1tDoRcIc",
  authDomain: "bidchemz-28.firebaseapp.com",
  projectId: "bidchemz-28",
  storageBucket: "bidchemz-28.appspot.com",
  messagingSenderId: "714377497787",
  appId: "1:714377497787:web:976fbc64d4d2c390812d9e",
  measurementId: "G-8JW8BERFGS"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
