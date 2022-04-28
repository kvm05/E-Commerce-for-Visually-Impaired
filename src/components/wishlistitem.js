import React,{useState, useContext} from "react";
import "./products.css"
import { useSpeechSynthesis } from 'react-speech-kit';
import {UserContext, SearchContext, TTSContext, ContrastContext} from "../App";
import "./navbar.css"

function WishlistItem(props){
    const [currentSlide,changeSlide]=useState(0);
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    function goLeft(){
        changeSlide((prevSlide)=>{
            if (prevSlide == 0) return props.image.length - 1
            return prevSlide - 1
        })
    }

    function goRight(){
        changeSlide((prevSlide)=>{
            return (prevSlide+1)%props.image.length
        })
    }

    return(
        <div className="product">
            <div className="image">
                <button><i class="fas fa-chevron-left" onClick={goLeft}></i></button>
                <img src={props.image[currentSlide]} alt={props.name}></img>
                <button><i class="fas fa-chevron-right" onClick={goRight}></i></button>
            </div>
            <div className="details">
                <h2 className="title" onMouseEnter={() => screenReader?speak({text: props.name}):cancel()} onMouseLeave={() => cancel()}>{props.name}</h2>
                <p className="description" onMouseEnter={() => screenReader?speak({text: props.description}):cancel()} onMouseLeave={() => cancel()}>{props.description}</p>
                <p className="rating" onMouseEnter={() => screenReader?speak({text: `Rating: ${props.rating}`}):cancel()} onMouseLeave={() => cancel()}>Rating: {props.rating}</p>
            </div>
            <div className="right">
                <p className={`productprice${isHighContrast?"Dark":"Light"}`} id='price' onMouseEnter={() => screenReader?speak({text: `Price: ₹${props.price}`}):cancel()} onMouseLeave={() => cancel()}>Price: ₹{props.price}</p>
                <button id={`login-button${isHighContrast ? 'dark':'light'}`} onMouseEnter={() => speak({text: "Remove From Wishlist"})} onClick={() => {screenReader?speak({text: "Removed from Wishlist"}):cancel();
                props.removeFromWishlist(props.name)}} onMouseLeave={() => cancel()}>REMOVE FROM WISHLIST</button>
                <button id={`login-button${isHighContrast ? 'dark':'light'}`} onClick={() =>{
                    props.addToCart(props.name)
                    screenReader?speak({text: "Added to Cart"}):cancel()
                }} onMouseEnter={() => screenReader?speak({text: "Add To Cart"}):cancel()} onMouseLeave={() => cancel()}>ADD TO CART</button>
                <a href="dsdssd" className={`learn${isHighContrast?"Dark":"Light"}`}>Learn More</a>
            </div>
        </div>
    );
}

export default WishlistItem;