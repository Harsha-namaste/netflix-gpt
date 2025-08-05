// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBs0UKpIms5AF84k1f9b_JmSGA2NBCT5O8",
    authDomain: "netflixgpt-80409.firebaseapp.com",
    projectId: "netflixgpt-80409",
    storageBucket: "netflixgpt-80409.firebasestorage.app",
    messagingSenderId: "898844185803",
    appId: "1:898844185803:web:147f78c4753c091231374e",
    measurementId: "G-XKKY7J275Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();