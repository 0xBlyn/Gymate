import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARMjMd6JhyBPDVfFs_KVGnN3CPcCKX92U",
  authDomain: "gymate-1.firebaseapp.com",
  projectId: "gymate-1",
  storageBucket: "gymate-1.appspot.com",
  messagingSenderId: "670937545866",
  appId: "1:670937545866:web:efe9353df2929989d08173",
  measurementId: "G-CW6G7RPN7E"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { firebaseApp as app, db };
