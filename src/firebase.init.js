// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCrFZZQm3yYKyoWwkSSDPiEmyhkXchZf3Q",
  // authDomain: "the-car-doctor-5c627.firebaseapp.com",
  // projectId: "the-car-doctor-5c627",
  // storageBucket: "the-car-doctor-5c627.appspot.com",
  // messagingSenderId: "564446663660",
  // appId: "1:564446663660:web:d75b5fb1409a0325cde6c9"
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;