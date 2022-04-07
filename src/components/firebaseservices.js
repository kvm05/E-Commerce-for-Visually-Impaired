import { getFirestore, collection, addDoc, getDocs, getDoc, query, where, orderBy } from "firebase/firestore";
import { app, database } from "./firebase";
// import { currentUser } from "./currentuser"


export async function readData(collectionDB, category, currentUser){
    if(collectionDB === "products"){
        const q = query(collection(database, collectionDB), where("category", "array-contains", category), orderBy("name"));
        console.log(category);
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((obj)=>{return obj.data()});
    }
    else if(collectionDB === "users"){
        const q = query(collection(database, collectionDB), where("uid", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0].data();
    }
}

export async function addNewUser(user){
    addDoc(collection(database, 'products'), {
          name: "Nike Mercurial",
          image: [],
          price: 8000,
          rating: 5,
          category: [
            "shoes", "sports", "nike"
          ],
          description: "Test"
        })}
// export async function filterByCategory(category){
//     const res = [];
//     category.forEach(async (filter) =>{
//         const q = query(collection(database, "products"), where(filter, "in", "category"));
//         const querySnapshot = await getDocs(q);
//         res.push(...querySnapshot.map((obj) =>{
//             return obj.data();
//         }))
//     })
//     return res;
// }

// export async function filterByPrice()