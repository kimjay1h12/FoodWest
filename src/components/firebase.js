// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child,set, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9AL3m1dW_0sOrKQOel_fbvnz9cXVOlXY",
  authDomain: "reactapp-fcbb3.firebaseapp.com",
  projectId: "reactapp-fcbb3",
  storageBucket: "reactapp-fcbb3.appspot.com",
  messagingSenderId: "218555629367",
  appId: "1:218555629367:web:daef54358cb00f9344e4b2",
  measurementId: "G-EZ3CKE8D53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
