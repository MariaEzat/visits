import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8yiRCVFQ4jij2RBKEcwi7vS2TZDWBzuY",
  authDomain: "frserapionvisits.firebaseapp.com",
  projectId: "frserapionvisits",
  storageBucket: "frserapionvisits.firebasestorage.app",
  messagingSenderId: "384360240513",
  appId: "1:384360240513:web:afb7943a544868c57a0480",
  measurementId: "G-Y9L6S075QJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};