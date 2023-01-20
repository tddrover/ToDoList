import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrfIeIisRMpFCwemG3_37s5oFqsL7deN0",
    authDomain: "todo-3aea4.firebaseapp.com",
    projectId: "todo-3aea4",
    storageBucket: "todo-3aea4.appspot.com",
    messagingSenderId: "725535381286",
    appId: "1:725535381286:web:63b9d36c81b6d7e8ab53e7",
    measurementId: "G-ZCXQRN1SW5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
