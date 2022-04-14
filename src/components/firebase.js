import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query } from "firebase/firestore";
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
function databaseProducts(){
  
}
// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app);
// databaseProducts()

addDoc(collection(database, 'products'), {
  name: "Nike Mercurial",
  image: [],
  price: 8000,
  rating: 5,
  category: [
    "shoes", "sports", "nike"
  ],
  description: "Test"
})

// async function read(){
//   const querySnapshot = await getDocs(collection(database,'products'));
//   querySnapshot.forEach((obj)=>{console.log(obj.data())});
// }

// read()