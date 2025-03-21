import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJqV6xTaJn2sg3gGYScX2XkKNscEgkfyA",
  authDomain: "arvore-de-links-6b146.firebaseapp.com",
  projectId: "arvore-de-links-6b146",
  storageBucket: "arvore-de-links-6b146.firebasestorage.app",
  messagingSenderId: "719582962019",
  appId: "1:719582962019:web:07d4a6f3a27c21d1a3f356"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { db, auth };