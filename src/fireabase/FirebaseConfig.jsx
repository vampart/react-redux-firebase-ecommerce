// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQwtRdHz-8_2KIDEdYzq2dLqNDRm2PYg",
  authDomain: "arw-project-c2827.firebaseapp.com",
  projectId: "arw-project-c2827",
  storageBucket: "arw-project-c2827.appspot.com",
  messagingSenderId: "563650934071",
  appId: "1:563650934071:web:b56e4a11047652ce6356b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}