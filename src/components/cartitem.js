import React,{useState} from "react";
import "./cartitem.css"

function CartItem(props){
    const [currentSlide,changeSlide]=useState(0);
    function goLeft(){
        changeSlide((prevSlide)=>{
            if (prevSlide === 0) return props.image.length - 1
            return prevSlide - 1
        })
    };

    function goRight(){
        changeSlide((prevSlide)=>{
            return (prevSlide+1)%props.image.length
        })
    };

    const [currentQuantity,changeQuantity]=useState(props.quantity);
    
    function increaseQuantity(){
        changeQuantity((prevQuantity)=>{
            props.onCartUpdate(props.name, prevQuantity + 1);
            console.log(prevQuantity+1);
            props.updateTotal();
            return prevQuantity+1;
        })
    }

    function decreaseQuantity(){
        changeQuantity((prevQuantity)=>{
            props.onCartUpdate(props.name, prevQuantity - 1);
            console.log(prevQuantity-1);
            props.updateTotal();
            return prevQuantity-1;
        })
    }

    if (currentQuantity === 0) {
        return null;
    }

    return(
        <div className="cartitem">
            <div className="image">
                <button onClick={goLeft}><i class="fas fa-chevron-left" ></i></button>
                <img src={props.image[currentSlide]} alt={props.name}></img>
                <button onClick={goRight}><i class="fas fa-chevron-right" ></i></button>
            </div>
            <div className={`name${props.isHighContrast?"Dark":"Light"}`}>
                {props.name}
            </div>
            <div className={`price${props.isHighContrast?"Dark":"Light"}`}>
                Price: ₹{props.price}
            </div>
            <div className={`quantity${props.isHighContrast?"Dark":"Light"}`}>
                <button onClick={decreaseQuantity}><i class="fa fa-minus" aria-hidden="true"></i></button>
                <p>{currentQuantity}</p>
                <button onClick={increaseQuantity}><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            <div id={`total${props.isHighContrast?"Dark":"Light"}`}>Total: {currentQuantity*props.price}</div>
        </div>
    );
}

export default CartItem;