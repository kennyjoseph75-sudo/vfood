// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Function to add a sample blog post
async function addSamplePost() {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: "Our First Blog Post!",
      author: "vFood Admin",
      published_date: new Date(),
      content: "This is the content of our very first blog post. We're excited to share more with you soon!"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Call the function to add the sample post
addSamplePost();
