import React,{useState, useContext} from "react";
import "./products.css"
import { useSpeechSynthesis } from 'react-speech-kit';
import { TTSContext } from '../App';
import "./navbar.css"

function Product(props){
    const [currentSlide,changeSlide]=useState(0);
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader} = useContext(TTSContext);
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
                <button ><i class="fas fa-chevron-right" onClick={goRight}></i></button>
            </div>
            <div className="details">
                <h2 className="title" onMouseEnter={() => screenReader?speak({text: props.name}):cancel()} onMouseLeave={() => cancel()}>{props.name}</h2>
                <p className="description" onMouseEnter={() => screenReader?speak({text: props.description}):cancel()} onMouseLeave={() => cancel()}>{props.description}</p>
                <p className="rating" onMouseEnter={() => screenReader?speak({text: `Rating: ${props.rating}`}):cancel()} onMouseLeave={() => cancel()}>Rating: {props.rating}</p>
            </div>
            <div className="right">
                <p className={`productprice${props.isHighContrast?"Dark":"Light"}`} id='price' onMouseEnter={() => screenReader?speak({text: `Price: ₹${props.price}`}):cancel()} onMouseLeave={() => cancel()}>Price: ₹{props.price}</p>
                <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text: "Add To Wishlist"}):cancel()} onClick={() => {
                    screenReader?speak({text: "Added to Wishlist"}):cancel();
                    props.addToWishlist(props.name)}} 
                    onMouseLeave={() => cancel()}><i class="fa-solid fa-bookmark"></i></button>
                <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onClick={() =>{
                    props.addToCart(props.name)
                    screenReader?speak({text: "Added to Cart"}):cancel()
                }} onMouseEnter={() => screenReader?speak({text: "Add To Cart"}):cancel()}
                ><i class="fa-solid fa-cart-shopping"></i></button>
                <a href="dsdssd" className={`learn${props.isHighContrast?"Dark":"Light"}`}>Learn More</a>
            </div>
        </div>
    );
}

export default Product;