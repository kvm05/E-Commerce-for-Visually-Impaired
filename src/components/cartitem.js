import React,{useState, useContext, useEffect} from "react";
import "./cartitem.css"
import { useSpeechSynthesis } from 'react-speech-kit';
import {OrderContext, TTSContext, ContrastContext} from "../App";
import ProductPage from "./productpage";

function CartItem(props){
    const {orderTotal, setOrderTotal} = useContext(OrderContext);
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    const {speak, cancel} = useSpeechSynthesis();
    const [currentSlide,changeSlide]=useState(0);
    // console.log("Quantity in cartitem");
    // console.log(props.quantity);
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

    // useEffect(() => {
    //     console.log("currentQuantity:");
    //     console.log(currentQuantity);
    // },[currentQuantity])
    // //
    function increaseQuantity(){
        changeQuantity((prevQuantity)=>{
            props.onCartUpdate(props.name, prevQuantity + 1);
            // console.log(prevQuantity+1);
            // setOrderTotal((prevOrderTotal) =>{
            //     return prevOrderTotal + props.price;
            // })
            // console.log(orderTotal);
            setOrderTotal(orderTotal + props.price);
            return prevQuantity+1;
        })
    }

    function decreaseQuantity(){
        changeQuantity((prevQuantity)=>{
            props.onCartUpdate(props.name, prevQuantity - 1);
            // console.log(prevQuantity-1);
            // setOrderTotal((prevOrderTotal) =>{
            //     return prevOrderTotal - props.price;
            // })
            setOrderTotal(orderTotal - props.price);
            // console.log(currentQuantity);
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
            <div className={`name${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:props.name}):cancel()} onMouseLeave={() => cancel()}>
                {props.name}
            </div>
            <div className={`price${isHighContrast?"Dark":"Light"}`}  onMouseEnter={() => screenReader?speak({text:`Price: ₹${props.price}`}):cancel()} onMouseLeave={() => cancel()}>
                Price: ₹{props.price}
            </div>
            <div className={`quantity${isHighContrast?"Dark":"Light"}`}>
                <button onClick={decreaseQuantity}><i class="fa fa-minus" aria-hidden="true" onMouseEnter={() => screenReader?speak({text:"Click to decrease quantity"}):cancel()} onMouseLeave={() => cancel()}></i></button>
                <p onMouseEnter={() => screenReader?speak({text:`Quantity: ${props.quantity}`}):cancel()} onMouseLeave={() => cancel()}>{props.quantity}</p>
                <button onClick={increaseQuantity}><i class="fa fa-plus" aria-hidden="true"  onMouseEnter={() => screenReader?speak({text:"Click to increase quantity"}):cancel()} onMouseLeave={() => cancel()} ></i></button>
            </div>
            <div id={`total${isHighContrast?"Dark":"Light"}`}  onMouseEnter={() => screenReader?speak({text:`Total: ₹${currentQuantity*props.price}`}):cancel()} onMouseLeave={() => cancel()}>Total: ₹{currentQuantity*props.price}</div>
        </div>
    );
}


export default CartItem;