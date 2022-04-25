import React, {useState, useContext} from "react";
import './Titles.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import { TTSContext } from '../App';
// import Shoes from "/images/red_shoes.jpg"
// import Shirt from "/images/red_shirt.jpg"
// import PS5 from "/images/ps5.jpg"

function Titles(props){
    const text = <div id="welcome">Welcome to Our Site!</div>
    const {speak, cancel} = useSpeechSynthesis();
    const shoes = <img src="/images/red_shoes.jpg" alt="Shoes" 
     id="shoes"/>
    const shirt = <img src="/images/red_shirt.jpg" alt="" id="shirt"/>
    const ps5 = <img src="/images/ps5.jpg" alt="" id="ps5"/>
    const products = [text,shoes,shirt,ps5];
    const length = products.length
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const [currentSlide, changeSlide] = useState(0)
    const onClickLeft = () => changeSlide(
        (currentSlide===0)?length-1:currentSlide-1
    )
    const onClickRight = () => changeSlide(
        (currentSlide + 1) % length
    )
    return(
        <div id="screen">
            <button id={`left-button ${props.checkBlind ? 'dark':'light'}`} onClick={onClickLeft}><i class="fas fa-chevron-left"></i></button>
            <div id="content" onMouseEnter={() => screenReader?speak({text:document.querySelector('#content').textContent}):cancel()} onMouseLeave={() => cancel()}>{products[currentSlide]}</div>
            <button id={`right-button ${props.checkBlind ? 'dark':'light'}`} onClick={onClickRight}><i class="fas fa-chevron-right"></i></button>
        </div>
        // add buttons for showing various offers
    );
}

export default Titles;