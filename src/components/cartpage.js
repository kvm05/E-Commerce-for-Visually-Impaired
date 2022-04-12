import React, {useState, useContext, useEffect} from "react";
import CartItem from "./cartitem";
import OrderSummary from "./ordersummary";
import Navbar from './navbar';
import "./navbar.css"
import "./cartpage.css"
import "./firebaseservices"
import {readData} from "./firebaseservices";
import {UserContext} from "../App";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function CartPage(props){const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }
    const {user} = useContext(UserContext);
    let userDetails = [];

    function get(){
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log(user);
            userDetails = await readData("users", "", user);
            updateCart(userDetails.cart)
        } else {
            // User is signed out
            // ...
        }
        });
        
    }

    // console.log(currentUser.email);
    
    const [ currentCart, updateCart] = useState([]);

    useEffect(get, [])


    function onCartUpdate(name, newValue) {
        updateCart(() =>{
            const itemToChange = currentCart.filter((item) =>{
                return item.name === name;
            
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
    
    useEffect(updateTotal, []);
    function calculateTotal(){
        let total = 0;
        currentCart.forEach((item) =>{
            total += item.quantity*item.price;
        })
    
        console.log(total);
        return total;
    }

    function clearCart(){
        updateCart(() =>{
            currentCart.length = 0;
            return currentCart;
        })
    }

    const image=["/images/prod11.png"]

    const displayCart = currentCart.map((item) => {
        return <CartItem name = {item.name}
                price = {item.price}
                image = {image}
                quantity = {item.quantity}
                onCartUpdate = {onCartUpdate}
                updateTotal = {updateTotal}
                isHighContrast = {isBlind}
                id ={item.id}></CartItem>
    })

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
