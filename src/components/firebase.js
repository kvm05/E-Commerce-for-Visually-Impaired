import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiNEEnnJOiwhpXoIaRagEnWpbh6J2sK0U",
  authDomain: "e-commerce-website-69.firebaseapp.com",
  projectId: "e-commerce-website-69",
  storageBucket: "e-commerce-website-69.appspot.com",
  messagingSenderId: "218673752279",
  appId: "1:218673752279:web:7be5b2e7a2c4e02bc56892"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app);