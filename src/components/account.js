import React, { useRef, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSpeechSynthesis } from 'react-speech-kit';
import { UserContext } from '../App';
import {readData} from "./firebaseservices";
import "./account.css";
import './Categories.css';
function Account() {
    const {user} = useContext(UserContext); 
    const {speak, cancel} = useSpeechSynthesis();
    const [currUser, setCurrUser ] = useState([])
    const id = user.uid;
    async function getUser(){
        const currentUser = await readData("users","", user)
        setCurrUser(currentUser)
    }
    useEffect(getUser, [])

    console.log(currUser)
    return(
        <div id='accountScreen'>
            <h1 id='accDetail'>Account Details</h1>
            <h2 id='nameHeader'>
                Name:
            </h2>
            <h4 id='name'>
                {currUser.name}
            </h4>
            <h2 id='emailHeader'>
                Email-ID:
            </h2>
            <h4 id='email'>
                {currUser.email}
            </h4>
            <h2 id='walletHeader'>
                E-Wallet Balance:
            </h2>
            <h4 id='wallet'>
                ₹{currUser.wallet}
            </h4>
            <h2 id='accCartHeader'>
                Current Cart: 
                <div>
                    <Link to='/cart' id='MyLink'>
                        <button id='accCart'>Cart</button>
                    </Link>
                </div>
            </h2>
            <h2 id='accWishlistHeader'>
                Current Wishlist:
                <br />
                <button id='accWishlist'>Wishlist</button>
            </h2>
        </div>
    )
}
export default Account