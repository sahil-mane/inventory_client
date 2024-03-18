// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0lHQZ6sz5GYNkB564qE40w5YJVvZnCWM",
  authDomain: "mern-book-inventory-b4d0e.firebaseapp.com",
  projectId: "mern-book-inventory-b4d0e",
  storageBucket: "mern-book-inventory-b4d0e.appspot.com",
  messagingSenderId: "421901268103",
  appId: "1:421901268103:web:e34c96ffd84e502999b422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;