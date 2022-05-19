import React, { useRef, useState, useContext } from 'react';
import { VoiceInputContext, ContrastContext } from "../App";
import "./VoicePopup.css";

function VoicePopup(){
    const {voiceInput} = useContext(VoiceInputContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    return(
        <div className = {`VoicePopup${isHighContrast ? 'Dark':'Light'}`}>
            <img src = "/images/Voice Recording Animation.gif" alt = "Voice Input Animation"></img>
            <h2>{voiceInput}</h2>
        </div>
    )
}

export default VoicePopup;