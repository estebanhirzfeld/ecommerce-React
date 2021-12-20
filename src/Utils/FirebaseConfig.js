// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCruriVTs2Q8O9Q9hknbzEQxHY0EkFrn0A",
    authDomain: "react-ecommerce-13a7e.firebaseapp.com",
    projectId: "react-ecommerce-13a7e",
    storageBucket: "react-ecommerce-13a7e.appspot.com",
    messagingSenderId: "431327781619",
    appId: "1:431327781619:web:81ee6dc3a12e59c2060d86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;