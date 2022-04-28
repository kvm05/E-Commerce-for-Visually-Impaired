import React, { useRef, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSpeechSynthesis } from 'react-speech-kit';
import { UserContext, ContrastContext, TTSContext } from '../App';
import {readData} from "./firebaseservices";
import "./account.css";
import './Categories.css';
import "./navbar.css"
function Account() {
    const {user} = useContext(UserContext); 
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    const [currUser, setCurrUser ] = useState([])
    const id = user.uid;
    async function getUser(){
        const currentUser = await readData("users","", user)
        setCurrUser(currentUser)
    }
    useEffect(getUser, [])

    console.log(currUser)
    return(
        <div id={`accountScreen-${isHighContrast?'dark':'light'}`}>
            <h1 id='accDetail' onMouseEnter={() => screenReader?speak({text:"Account Details"}):cancel()} onMouseLeave={() => cancel()}>Account Details</h1>
            <h2 id='nameHeader' onMouseEnter={() => screenReader?speak({text:"Name"}):cancel()} onMouseLeave={() => cancel()}>
                Name:
            </h2>
            <h4 id='name' onMouseEnter={() => screenReader?speak({text:`${currUser.name}`}):cancel()} onMouseLeave={() => cancel()}>
                {currUser.name}
            </h4>
            <h2 id='emailHeader' onMouseEnter={() => screenReader?speak({text:"Email-ID:"}):cancel()} onMouseLeave={() => cancel()}>
                Email-ID:
            </h2>
            <h4 id='email' onMouseEnter={() => screenReader?speak({text:`${currUser.email}`}):cancel()} onMouseLeave={() => cancel()}>
                {currUser.email}
            </h4>
            <h2 id='walletHeader' onMouseEnter={() => screenReader?speak({text:"E-Wallet Balance"}):cancel()} onMouseLeave={() => cancel()}>
                E-Wallet Balance:
            </h2>
            <h4 id='wallet'  onMouseEnter={() => screenReader?speak({text:`${currUser.wallet}`}):cancel()} onMouseLeave={() => cancel()}>
                ₹{currUser.wallet}
            </h4>
            <h2 id='accCartHeader' onMouseEnter={() => screenReader?speak({text:"Current Cart:"}):cancel()} onMouseLeave={() => cancel()}>
                Current Cart: 
            </h2>
                <div>
                    <Link to='/cart' id='MyLink'>
                        <button id={`login-button${isHighContrast ? 'dark':'light'}`} className='accCart'onMouseEnter={() => screenReader?speak({text:"Click to open Cart"}):cancel()} onMouseLeave={() => cancel()} onClick={() => screenReader?speak({text:"Opening Cart"}):cancel()}>Cart</button>
                    </Link>
                </div>
            <h2 id='accWishlistHeader' onMouseEnter={() => screenReader?speak({text:"Wishlist"}):cancel()} onMouseLeave={() => cancel()}>
                Current Wishlist:
            </h2>
                <div>
                    <Link to='/wishlist' id='MyLink'>
                        <button id={`login-button${isHighContrast ? 'dark':'light'}`} className='accWishlist'onMouseEnter={() => screenReader?speak({text:"Click to open wishlist"}):cancel()} onMouseLeave={() => cancel()} onClick={() => screenReader?speak({text:"Opening Wishlist"}):cancel()}>Wishlist</button>
                    </Link>
                </div>
        </div>
    )
}
export default Account