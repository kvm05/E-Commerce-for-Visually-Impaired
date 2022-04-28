import React, {useState, useContext} from "react";
import Account from "./account";
import Navbar from './navbar';
import "./navbar.css";
import "./AccountPage.css";
import {UserContext, SearchContext, TTSContext, ContrastContext} from "../App";
import { useSpeechSynthesis } from 'react-speech-kit';
function AccountPage(){
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    window.onscroll = function(event) {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            console.log("End of page");
            screenReader?speak({text:"You have reached the bottom of the page"}):cancel()
        }
    }
    return(
        <div id={`homepage ${isHighContrast ? 'dark':'light'}`} className='pageAccount'>
            <Navbar />
            <Account/>
        </div>
    )
}
export default AccountPage