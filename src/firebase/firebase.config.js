// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJX_LY1jhZvAXIwDDrB6_3C7WDa3yQB-0",
  authDomain: "concerts-and-music-festi-44e60.firebaseapp.com",
  projectId: "concerts-and-music-festi-44e60",
  storageBucket: "concerts-and-music-festi-44e60.appspot.com",
  messagingSenderId: "1040588649202",
  appId: "1:1040588649202:web:902e0ae39fc206a998166b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;