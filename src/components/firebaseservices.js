import { getFirestore, collection, addDoc, getDocs, getDoc, query, where } from "firebase/firestore";
import { app, database } from "./firebase";
import { currentUser } from "./currentuser"


export async function readData(collectionDB, currentUser){
    if(collectionDB === "products"){
        const querySnapshot = await getDocs(collection(database,collectionDB));
        return querySnapshot.map((obj)=>{return obj.data()});
    }
    else if(collectionDB === "users"){
        const q = query(collection(database, collectionDB), where("uid", "==", currentUser.uid));
        return q.data();
    }
}
