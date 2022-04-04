import React,{useState} from "react";
import "./products.css"

function Product(props){
    const [currentSlide,changeSlide]=useState(0);
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
                <h2 className="title">{props.name}</h2>
                <p className="description">{props.description}</p>
                <p className="rating">Rating: {props.rating}</p>
            </div>
            <div className="right">
                <p className={`price${props.isHighContrast?"Dark":"Light"}`}>Price: ₹{props.price}</p>
                <button>ADD TO WISHLIST</button>
                <button>ADD TO CART</button>
                <a href="dsdssd" className={`learn${props.isHighContrast?"Dark":"Light"}`}>Learn More</a>
            </div>
        </div>
    );
}

export default Product;