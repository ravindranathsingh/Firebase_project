// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjdOFAup8rzATWdHrBDUpz9WSxFRGjBwE",
  authDomain: "testproject-33527.firebaseapp.com",
  projectId: "testproject-33527",
  storageBucket: "testproject-33527.appspot.com",
  messagingSenderId: "58268012995",
  appId: "1:58268012995:web:2a10767e0136b9743f2d76",
  measurementId: "G-M051PVSQ1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();