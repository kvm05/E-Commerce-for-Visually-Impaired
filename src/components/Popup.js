import React, { useRef, useState, useContext } from 'react';
// import './App.css';
import './popup.css';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { UserContext, SearchContext, TTSContext, ContrastContext } from '../App';
const Popup = (props) => {
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    return(
        <div id={`popupContainer-${isHighContrast?'dark':'light'}`}>
            <p id={`popupContent-${isHighContrast?'dark':'light'}`}>{props.content}</p>
        </div>
    )
}
export default Popup;