import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, orderBy, updateDoc, arrayUnion } from "firebase/firestore";
import { get } from "react-hook-form";
import { app, database } from "./firebase";
// import { currentUser } from "./currentuser"


export async function readData(collectionDB, category, currentUser){
    if(collectionDB === "products"){
        const q = query(collection(database, collectionDB), where("category", "array-contains", category), orderBy("name"));
        // console.log(category);
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((obj)=>{return obj.data()});
    }
    else if(collectionDB === "users"){
        const q = query(collection(database, collectionDB), where("uid", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0].data();
    }
}

export function addNewUser(user, name){
     addDoc(collection(database, "users"), {
          name: name,
          cart : [],
          wishlist : [],
          wallet : 1000,
          uid : user.uid,
          email : user.email
        })}

export async function getAllProducts(){
    const q = query(collection(database, "products"), orderBy("name"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((obj) =>{
        return obj.data();
    })
}

export async function search(parameter){
    const products = await getAllProducts();
    const res = [];
    products.forEach((product) =>{
        if(product.name.indexOf(parameter) !=-1){
            res.push(product);
        }
    })
    return res;
}
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

export async function getBrands(category){
    const q = query(collection(database, "products"), where("category", "array-contains", category), orderBy("name"));
    const querySnapshot = await getDocs(q);
    const brands = [];
    const temp = querySnapshot.docs.map((obj)=>{return obj.data()})
    temp.forEach((obj =>{
        if(brands.indexOf(obj.category[2]) === -1){
            brands.push(obj.category[2]);
        }
    }));
    return brands; 
}

export async function filterByBrand(brand){
    const q = query(collection(database, "products"), where("category", "array-contains", brand), orderBy("name"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((obj)=>{return obj.data()});   
}

export async function updateCart(product, user){
    const q = query(collection(database, "users"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const docId = querySnapshot.docs[0].ref.id; 
    console.log(docId);
        const ref = doc(database, "users", docId);

    // Atomically add a new region to the "regions" array field.
    await updateDoc(ref, {
        cart: arrayUnion(product)
});
}