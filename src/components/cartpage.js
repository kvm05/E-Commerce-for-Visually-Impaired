import React, {useState, useContext, useEffect} from "react";
import CartItem from "./cartitem";
import OrderSummary from "./ordersummary";
import Navbar from './navbar';
import ProductPage from "./productpage";
import "./navbar.css"
import "./cartpage.css"
import "./firebaseservices"
import {readData} from "./firebaseservices";
import {UserContext, OrderContext, SearchContext} from "../App";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Container from "./container";

function CartPage(props){const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }
    const {user} = useContext(UserContext);
    let userDetails = [];

    const [ currentUser, setUser] = useState(null);
    const {orderTotal, setOrderTotal} = useContext(OrderContext);
    const {valueToBeSearched} = useContext(SearchContext);

    async function get(){
        
        if (currentUser == null && user != null) {
            setUser(user)
            userDetails = await readData("users", "", user);
            updateCart(userDetails.cart)
        }
    }

    // console.log(currentUser.email);
    
    const [ currentCart, updateCart] = useState([]);
    get()

    function onCartUpdate(name, newValue) {
        updateCart(() =>{
            console.log('Cart Update')
            console.log(currentCart)
            const itemsToChange = currentCart.filter((item) =>{
                return item.name === name;
            
            })
            console.log(itemsToChange)
            const itemToChange = itemsToChange[0]
            itemToChange.quantity = newValue;
            if(itemToChange.quantity === 0){
                //return currentCart.filter(x => x.name != itemToChange.name)
                currentCart.splice(currentCart.indexOf(itemToChange), 1);
            }   
            return [...currentCart];
        })

    }

    function updateTotal(){
        setOrderTotal(calculateTotal())
    }

    updateTotal();

    // const [ currenTotal, setTotal ] = useState(calculateTotal())  
    
    // useEffect(updateTotal, []);
    function calculateTotal(){
        let total = 0;
        currentCart.forEach((item) =>{
            total += item.quantity*item.price;
        })
        return total;
    }

    function clearCart(){
        updateCart(() =>{
            currentCart.length = 0;
            return [...currentCart];
        })
    }

    function undoChanges(){
        console.log(userDetails.cart);
        console.log("Clicked")
        updateCart(userDetails.cart);
        console.log(currentCart);        
    }

    const image=["/images/prod11.png"]

    const displayCart = currentCart.map((item) => {
        return <CartItem name = {item.name}
                price = {item.price}
                image = {image}
                quantity = {item.quantity}
                onCartUpdate = {onCartUpdate}
                // updateTotal = {updateTotal}
                key = {item.name}
                isHighContrast = {isBlind}
                id ={item.id}></CartItem>
    })

    if(valueToBeSearched)
    return (
        <div className = "cartpage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <Container name="Search Results" isHighContrast={isBlind} />    
        </div>
    );

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
                <OrderSummary isHighContrast={props.isHighContrast}></OrderSummary>
            </div>
            <div className="cartButtons">
                <button onClick = {clearCart}>Clear Cart</button>
                <button onclick = {undoChanges}>Undo Changes</button>
            </div>
        </div>
    )
}

export default CartPage;
