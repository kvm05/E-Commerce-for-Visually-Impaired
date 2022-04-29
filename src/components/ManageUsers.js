import { getAllUsers } from "./firebaseservices";
import { useState, useEffect } from "react";
import { removeUser } from "./firebaseservices";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import "./ManageUsers.css"

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
    
    return(
        <div className = "ManageUsers">
            <h1>Manage Users</h1>
            <UserTable users = {allUsers} deleteUser = {deleteUser}></UserTable>
            <AddUser></AddUser>
        </div>
    )
}

export default ManageUsers;