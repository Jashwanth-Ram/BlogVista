// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-e22bc.firebaseapp.com",
  projectId: "blog-e22bc",
  storageBucket: "blog-e22bc.appspot.com",
  messagingSenderId: "980792716897",
  appId: "1:980792716897:web:233d1a8573809c77e48420"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);