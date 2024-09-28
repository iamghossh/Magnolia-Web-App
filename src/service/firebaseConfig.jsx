// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5LacpniLwD5J7gZACZYoYeYcFozkMbeU",
  authDomain: "trip-planner-c3a52.firebaseapp.com",
  projectId: "trip-planner-c3a52",
  storageBucket: "trip-planner-c3a52.appspot.com",
  messagingSenderId: "542779199742",
  appId: "1:542779199742:web:35b03f51a38e5f411c95af",
  measurementId: "G-9WL8TEC1S7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);