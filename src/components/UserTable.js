import "./UserTable.css"
import { useState, useEffect } from "react";

function UserTable(props){

    const [userToBeSearched, setUserToBeSearched] = useState("");
    const [currentUsers, setCurrentUsers]  = useState(props.users);

    useEffect(() =>{
        setCurrentUsers(props.users);
    }, [props.users])

    // useEffect(() =>{
    //     console.log(userToBeSearched)
    //     displayUsers = currentUsers.filter((user) =>{
    //         return user.name.toLowerCase().indexOf(userToBeSearched.toLowerCase()) === 0;
    //     }).map((user) =>{
    //         return <tr>
    //             <td>{user.name}</td>
    //             <td>{user.uid}</td>
    //             <td>{user.email}</td>
    //             <td><button className = "removeUser" onClick = {() =>{
    //                 props.deleteUser(props.uid);
    //             }}><i class="fa-solid fa-trash"></i></button></td>
    //         </tr>
    //     })
    //     console.log(displayUsers)
    // }, [userToBeSearched]);

    const displayUsers = currentUsers.map((user) =>{
        return <tr>
            <td>{user.name}</td>
            <td>{user.uid}</td>
            <td>{user.email}</td>
            <td><button className = "removeUser" onClick = {() =>{
                props.deleteUser(user.uid);
            }}><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    })

    return(
        <div className = "UserTable">
            <h2>Users</h2>
            <div className = "searchUser">
                <input type = "text" placeholder = "Search User" onInput = {(event) =>{
                    setUserToBeSearched(event.target.value);
                    if(event.target.value.length == 0){
                        setCurrentUsers(props.users);
                    }
                    else{
                        const tempUsers = currentUsers.filter((user) =>{
                        return user.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
                    })
                    setCurrentUsers(tempUsers);
                    }
                }}></input>
                <button className = "searchButton">{userToBeSearched ? <i class="fa-solid fa-xmark" onClick = {() =>{
                    setUserToBeSearched("");
                    setCurrentUsers(props.users);
                }}></i> : <i class="fa-solid fa-magnifying-glass"></i>}</button>
            </div>
            <div className = "table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>UID</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    {displayUsers}
                </table>
            </div>
        </div>
    )
}

export default UserTable;