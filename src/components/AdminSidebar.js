import { useNavigate } from 'react-router-dom'
import React, { useRef, useState, useContext } from 'react';
import "./AdminSidebar.css";
import { getAuth, signOut } from "firebase/auth";
import { UserContext, SearchContext, TTSContext, ContrastContext } from '../App';

function AdminSidebar(props){
    const {user, setUser} = useContext(UserContext);
    const emailSignOut = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        setUser(null)
        console.log('Signed Out')
      }).catch((error) => {
        // An error happened.
      });
    }
    const navigate = useNavigate();
    return(
        <div className = "AdminSidebar">
            <h2>Admin Panel</h2>
            <div className = "adminButtons">
                <button onClick = {() => {
                    navigate('/');
                }}><i class="fa-solid fa-house"></i>Back to Home!</button>
                <button onClick = {() => {
                    props.displayComponent(0);
                }}><i class="fa-solid fa-chart-line"></i>Dashboard</button>
                <button onClick = {() => {
                    props.displayComponent(1);
                }}><i class="fa-solid fa-users"></i>Users</button>
                <button onClick = {() => {
                    props.displayComponent(2);
                }}><i class="fa-solid fa-bag-shopping"></i>Products</button>
                <button onClick = {() => {
                    emailSignOut()
                    navigate('/Sign');
                }}><i class="fa-solid fa-right-from-bracket"></i>Logout</button>
            </div>
        </div>
    )
}

export default AdminSidebar;