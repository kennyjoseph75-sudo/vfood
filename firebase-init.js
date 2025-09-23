// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbsNMsTRlQdBCde8wtIFbnILJh6x0Gbak",
  authDomain: "vfood-prod.firebaseapp.com",
  projectId: "vfood-prod",
  storageBucket: "vfood-prod.appspot.com",
  messagingSenderId: "1047564067618",
  appId: "1:1047564067618:web:df96c84b01a83e45bf3b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore, get a reference to the service, and export it
export const db = getFirestore(app);
