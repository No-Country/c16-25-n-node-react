// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAblJg2nWK-Dk6S58GFKbgLRc9poBsdY2I",
  authDomain: "nc-c16-25.firebaseapp.com",
  projectId: "nc-c16-25",
  storageBucket: "nc-c16-25.appspot.com",
  messagingSenderId: "841011038517",
  appId: "1:841011038517:web:ebe25792200e1f6b1fe47c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

