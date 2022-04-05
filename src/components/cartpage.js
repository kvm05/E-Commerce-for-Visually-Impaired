import React, {useState} from "react";
import CartItem from "./cartitem";
import OrderSummary from "./ordersummary";
import Navbar from './navbar';
import "./navbar.css"
import "./cartpage.css"

function CartPage(props){const [isBlind, getChildData] = useState(false)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }
    const image=["/images/prod11.png"]
    return (
        <div className="cartpage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <div className="container">
                <div className={`cart${isBlind ? 'dark':'light'}`}>
                    <h1 id="heading">Your Cart:</h1>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                </div>
                <OrderSummary total={900} isHighContrast={props.isHighContrast}></OrderSummary>
            </div>
        </div>
    )
}

export default CartPage;
