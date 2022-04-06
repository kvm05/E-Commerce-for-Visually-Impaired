import React, {useState, useContext} from "react";
import CartItem from "./cartitem";
import OrderSummary from "./ordersummary";
import Navbar from './navbar';
import "./navbar.css"
import "./cartpage.css"
import "./firebaseservices"
import {readData} from "./firebaseservices";
import {UserContext} from "../App";

function CartPage(props){const [isBlind, getChildData] = useState(false)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }
    const currentUser = useContext(UserContext);
    const userDetails = readData("users", currentUser);
    
    const [ currentCart, updateCart] = useState(userDetails.cart)

    function onCartUpdate(id, newValue) {
        updateCart(() =>{
            const itemToChange = currentCart.filter((item) =>{
                return item.id === id;
            
        })[0];
            itemToChange.quantity = newValue;
            if(itemToChange.quantity === 0){
                currentCart.splice(currentCart.indexOf(itemToChange),1);
            }   
            return currentCart;
        })

    }

    function updateTotal(){
        setTotal(calculateTotal())
    }

    const [ currenTotal, setTotal ] = useState(calculateTotal())  

    function calculateTotal(){
        let total = 0;
        for(let item in currentCart){
            total += item.quantity;
        }
        return total;
    }

    function clearCart(){
        updateCart(() =>{
            currentCart.length = 0;
            return currentCart;
        })
    }

    const displayCart = currentCart.map((item) => {
        return <CartItem name = {item.name}
                price = {item.price}
                image = {item.image}
                quantity = {item.quantity}
                onCartUpdate = {onCartUpdate}
                updateTotal = {updateTotal}
                isHighContrast = {isBlind}
                id ={item.id}></CartItem>
    })

    const image=["/images/prod11.png"]
    return (
        <div className="cartpage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <div className="container">
                <div className={`cart${isBlind ? 'dark':'light'}`}>
                    <h1 id="heading">Your Cart:</h1>
                    {/* <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem> */}
                    {displayCart}
                </div>
                <OrderSummary total={currenTotal} isHighContrast={props.isHighContrast}></OrderSummary>
            </div>
            <div className="cartButtons">
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    )
}

export default CartPage;
