import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import CartItem from "./cartitem";
import OrderSummary from "./ordersummary";
import Navbar from './navbar';
import ProductPage from "./productpage";
import "./navbar.css"
import "./cartpage.css"
import "./firebaseservices"
import {readData, updateCart, setCartBeforeBilling} from "./firebaseservices";
import { useSpeechSynthesis } from 'react-speech-kit';
import {UserContext, OrderContext, SearchContext, ContrastContext, TTSContext} from "../App";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Container from "./container";

function CartPage(props){
    const {user} = useContext(UserContext);
    let userDetails = [];
    const {speak, cancel} = useSpeechSynthesis();
    const [ currentUser, setUser] = useState(null);
    const {orderTotal, setOrderTotal} = useContext(OrderContext);
    const {valueToBeSearched} = useContext(SearchContext);
    const [ currentCart, updateCurrentCart] = useState([]);
    const [backupCart, setBackupCart] = useState(null);
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);

    const navigate = useNavigate();

    async function get(){
        if (currentUser == null && user != null) {
            setUser(user)
            userDetails = await readData("users", "", user);
            updateCurrentCart(userDetails.cart)
            const temp = [...userDetails.cart.map(x => Object.assign({}, x))]
            console.log("Initialize backup")
            console.log(temp)
            setBackupCart(temp)
        }
    }

    

    // function backup(){
    //     console.log(userDetails)
    //     setBackupCart(userDetails.cart);
    // console.log(backupCart)
    // }

    // useEffect(backup, [backupCart, currentUser, userDetails.cart])
    // console.log(currentUser.email);
    
    // useEffect(get, [user])
    get()
    
    function onCartUpdate(name, newValue) {
        updateCurrentCart(() =>{
            
            let tempCart = [...currentCart.map(x => Object.assign({}, x))];
            const itemsToChange = tempCart.filter((item) =>{
                return item.name === name;
            
            })
            console.log(tempCart)
            const itemToChange = itemsToChange[0]
            itemToChange.quantity = newValue;
            if(itemToChange.quantity === 0){
                //return currentCart.filter(x => x.name != itemToChange.name)
                // tempCart.splice(currentCart.indexOf(itemToChange), 1);
                tempCart = tempCart.filter((item) => {
                    return item.name != itemToChange.name;
                })
            }   
            return tempCart;
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
        updateCurrentCart(() =>{
            return [];
        })
    }

    function undoChanges(){
        updateCurrentCart(() =>{
            console.log("Backup:")
            console.log(backupCart)
            return [...backupCart];
        });
    }

    const image=["/images/prod11.png"]


    const displayCart = currentCart.map((item) => {
        // console.log("Quantity:");
        // console.log(item.quantity)
        return <CartItem name = {item.name}
                price = {item.price}
                image = {item.image}
                quantity = {item.quantity}
                onCartUpdate = {onCartUpdate}
                // updateTotal = {updateTotal}
                key = {item.name}
                id ={item.id}></CartItem>
    })

    async function saveCart(){
        await setCartBeforeBilling(currentCart, user);
    }

    async function toBilling(){
        // currentCart.forEach((item) =>{
        //     updateCart(item, user);
        // })
        console.log(currentCart);
        await setCartBeforeBilling(currentCart, user);
        navigate('/billing')

    }

    if(valueToBeSearched)
    return (
        <div className = "cartpage" id={`homepage ${isHighContrast ? 'dark':'light'}`}>
            <Navbar/>
            <Container name="Search Results" />    
        </div>
    );
    const temp = <h3> Your cart is empty!</h3>;
    window.onscroll = function(event) {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            console.log("End of page");
            speak({text:"You have reached the bottom of the page"})
        }
    }
    return (
        <div className="cartpage" id={`homepage ${isHighContrast ? 'dark':'light'}`}>
            <Navbar/>
            <h1 id="heading" onMouseEnter={() => screenReader?speak({text:"Cart! Below, you will find the products added to cart. At the bottom of the page, you can clear the cart or undo the changes made. To the right, you can find the order summary"}):cancel()} onMouseLeave={() => cancel()}>Your Cart</h1>
            <div className="container">
                <div className={`cart${isHighContrast ? 'dark':'light'}`}>
                    {/* <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={isBlind}></CartItem> */}
                    {/* {displayCart ? displayCart : temp} */}
                    {displayCart}
                </div>
                <OrderSummary isHighContrast={isHighContrast} toBilling = {toBilling}></OrderSummary>
            </div>
            <div className="cartButtons">
                <button id={`login-button${isHighContrast ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text:"Click to clear cart"}):cancel()} onMouseLeave={() => cancel()} onClick = {clearCart}>Clear Cart</button>
                <button id={`login-button${isHighContrast ? 'dark':'light'}`} onClick = {undoChanges} onMouseEnter={() => screenReader?speak({text:"Click to undo changes"}):cancel()} onMouseLeave={() => cancel()}>Undo Changes</button>
                <button id={`login-button${isHighContrast ? 'dark':'light'}`}  onMouseEnter={() => screenReader?speak({text:"Click to save changes"}):cancel()} onClick = {saveCart} onMouseLeave={() => cancel()}>Save Changes</button> {/* onClick = {saveChanges} */}
            </div>
        </div>
    )
}

export default CartPage;
