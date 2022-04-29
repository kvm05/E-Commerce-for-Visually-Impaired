import { getAllUsers } from "./firebaseservices";
import { useState, useEffect } from "react";
import { removeUser, addNewUser } from "./firebaseservices";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import "./ManageUsers.css"
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";

function ManageUsers(){

    const [allUsers, setAllUsers] = useState([]);
    async function get(){
        const tempUsers = await getAllUsers();
        console.log(tempUsers);
        setAllUsers(tempUsers);
    }

    useEffect(get, []);

    async function deleteUser(uid){
        const tempUsers = allUsers.filter((user) =>{
            return user.uid !== uid;
        })
        await removeUser(uid);
        setAllUsers(tempUsers);
    }

    const newUserInfo = {};

    function storeUserInfo(field, value){
        newUserInfo[field] = value;
    }

    async function addUser(){
        if(newUserInfo.password === newUserInfo.confirmedPassword){
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, newUserInfo.email, newUserInfo.password)
            const user = userCredential.user;
    // console.log(user);
        await updateProfile(user, {
        displayName: newUserInfo.name
        })
        addNewUser(user, newUserInfo.name);
        }

    }
    
    return(
        <div className = "ManageUsers">
            <h1>Manage Users</h1>
            <UserTable users = {allUsers} deleteUser = {deleteUser}></UserTable>
            <AddUser storeUserInfo = {storeUserInfo} addUser = {addUser}></AddUser>
        </div>
    )
}

export default ManageUsers;