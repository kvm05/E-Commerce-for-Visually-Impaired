import React,{useState} from "react";
import "./products.css"
import { useSpeechSynthesis } from 'react-speech-kit';
import "./navbar.css"

function WishlistItem(props){
    const [currentSlide,changeSlide]=useState(0);
    const {speak, cancel} = useSpeechSynthesis();
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
                <h2 className="title" onMouseEnter={() => speak({text: props.name})} onMouseLeave={() => cancel()}>{props.name}</h2>
                <p className="description" onMouseEnter={() => speak({text: props.description})} onMouseLeave={() => cancel()}>{props.description}</p>
                <p className="rating" onMouseEnter={() => speak({text: `Rating: ${props.rating}`})} onMouseLeave={() => cancel()}>Rating: {props.rating}</p>
            </div>
            <div className="right">
                <p className={`productprice${props.isHighContrast?"Dark":"Light"}`} id='price' onMouseEnter={() => speak({text: `Price: ₹${props.price}`})} onMouseLeave={() => cancel()}>Price: ₹{props.price}</p>
                <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onMouseEnter={() => speak({text: "Remove From Wishlist"})} onClick={() => {speak({text: "Removed from Wishlist"});
                props.removeFromWishlist(props.name)}} onMouseLeave={() => cancel()}>REMOVE FROM WISHLIST</button>
                <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onClick={() =>{
                    props.addToCart(props.name)
                    speak({text: "Added to Cart"})
                }} onMouseEnter={() => speak({text: "Add To Cart"})} onMouseLeave={() => cancel()}>ADD TO CART</button>
                <a href="dsdssd" className={`learn${props.isHighContrast?"Dark":"Light"}`}>Learn More</a>
            </div>
        </div>
    );
}

export default WishlistItem;