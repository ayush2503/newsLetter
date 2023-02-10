// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqOGrpYIiz29gdic_UKqRYTXPG2fh70sY",
  authDomain: "newsletter-e4057.firebaseapp.com",
  projectId: "newsletter-e4057",
  storageBucket: "newsletter-e4057.appspot.com",
  messagingSenderId: "1076643905913",
  appId: "1:1076643905913:web:b6701ecd062306e4ba2fa8",
  measurementId: "G-TXPJM72ZRD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);