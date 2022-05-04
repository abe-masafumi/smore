// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxcekDS5A88ia8yJNaYqf3zj-IDyZE8o4",
    authDomain: "smore-832e4.firebaseapp.com",
    projectId: "smore-832e4",
    storageBucket: "smore-832e4.appspot.com",
    messagingSenderId: "311127753115",
    appId: "1:311127753115:web:67ed1ae316ff0f8fefe13e",
    measurementId: "G-XTNRM12DGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);