// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBznuel8KSWGpdRbYfWV-H7L7DoXJYdJdc",
  authDomain: "demos-free.firebaseapp.com",
  databaseURL: "https://demos-free-default-rtdb.firebaseio.com",
  projectId: "demos-free",
  storageBucket: "demos-free.appspot.com",
  messagingSenderId: "648554938194",
  appId: "1:648554938194:web:68b56d12f7564a8b1ac48b",
  measurementId: "G-69VWWY9K1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {
    db
}