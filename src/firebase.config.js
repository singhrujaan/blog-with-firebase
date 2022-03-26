// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYiMaqeR_FLNpT9fbVTkYjm9VnGuahADQ",
  authDomain: "blogproject-fcd3a.firebaseapp.com",
  projectId: "blogproject-fcd3a",
  storageBucket: "blogproject-fcd3a.appspot.com",
  messagingSenderId: "420635764857",
  appId: "1:420635764857:web:773d3dd027f4715f994ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(); 