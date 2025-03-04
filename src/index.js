// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByO5y6WwQBchmOOb8lynhHfLpv3Ie6alI",
  authDomain: "quinn-sandbox-78f40.firebaseapp.com",
  projectId: "quinn-sandbox-78f40",
  storageBucket: "quinn-sandbox-78f40.firebasestorage.app",
  messagingSenderId: "307838114166",
  appId: "1:307838114166:web:b0d2f4aa62bc99fd1a4257",
  measurementId: "G-EJLD1PF04M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);