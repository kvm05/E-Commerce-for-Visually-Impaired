import React, {useState} from "react";
import Shoes from "../images/red_shoes.jpg"
import Shirt from "../images/red_shirt.jpg"
import PS5 from "../images/ps5.jpg"

export const Slides = () => {
    const text = <div id="welcome">Welcome to Our Site!</div>
    const shoes = <img src={Shoes} alt="Shoes" id="shoes"/>
    const shirt = <img src={Shirt} alt="" id="shirt"/>
    const ps5 = <img src={PS5} alt="" id="ps5"/>
    const products = {"0": text,"1": shoes,"2": shirt,"3": ps5};
    const length = products.length
    const [currentSlide, changeSlide] = useState(0)
    const onClickLeft = () => changeSlide(
        (currentSlide===0)?length-1:currentSlide-1
    )
    const onClickRight = () => changeSlide(
        (currentSlide===length-1)?0:currentSlide+1
    )
    return [products, currentSlide, onClickLeft, onClickRight]
}