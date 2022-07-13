// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2qgh6qk5-KnJ1ish5Ugro2zyh07gvuz4",
  authDomain: "workout-app-9a782.firebaseapp.com",
  projectId: "workout-app-9a782",
  storageBucket: "workout-app-9a782.appspot.com",
  messagingSenderId: "1065715588428",
  appId: "1:1065715588428:web:107a7194bea4a64f7cc3e9",
  measurementId: "G-F3T0QWWCN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);