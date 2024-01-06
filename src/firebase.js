import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYGRR70qVFxWi5N3h-kASImFCVT9w2HUI",
  authDomain: "quickchat-89e19.firebaseapp.com",
  projectId: "quickchat-89e19",
  storageBucket: "quickchat-89e19.appspot.com",
  messagingSenderId: "784309561654",
  appId: "1:784309561654:web:65e931071db6bf223beb97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
