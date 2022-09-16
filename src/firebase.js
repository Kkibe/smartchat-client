import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYE9uxgNKhjbEvFNQ8Lf5b-0JrVkeFizA",
  authDomain: "bigchat-d74ba.firebaseapp.com",
  projectId: "bigchat-d74ba",
  storageBucket: "bigchat-d74ba.appspot.com",
  messagingSenderId: "583609128493",
  appId: "1:583609128493:web:eb22a737c803d12e468aa4",
  measurementId: "G-RQYYZ4E62N "
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(); 
export const db = getFirestore()
