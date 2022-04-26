import React, {useState, useContext, useEffect} from "react";
import CartItem from "./cartitem";
import OrderSummary from "./ordersummary";
import Navbar from './navbar';
import ProductPage from "./productpage";
import "./navbar.css"
import "./cartpage.css"
import "./firebaseservices"
import {readData, updateCart, setCartBeforeBilling} from "./firebaseservices";
import {UserContext, OrderContext, SearchContext} from "../App";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Container from "./container";

function CartPage(props){
    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }
    const {user} = useContext(UserContext);
    let userDetails = [];

    const [ currentUser, setUser] = useState(null);
    const {orderTotal, setOrderTotal} = useContext(OrderContext);
    const {valueToBeSearched} = useContext(SearchContext);
    const [ currentCart, updateCurrentCart] = useState([]);
    const [backupCart, setBackupCart] = useState(null);

    async function get(){
        if (currentUser == null && user != null) {
            setUser(user)
            userDetails = await readData("users", "", user);
            updateCurrentCart([...userDetails.cart.map(x => Object.assign({}, x))])
            setBackupCart([...userDetails.cart.map(x => Object.assign({}, x))])
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
            const itemsToChange = currentCart.filter((item) =>{
                return item.name === name;
            
            })
            console.log(itemsToChange)
            const itemToChange = itemsToChange[0]
            itemToChange.quantity = newValue;
            let tempCart = [...currentCart];
            if(itemToChange.quantity === 0){
                //return currentCart.filter(x => x.name != itemToChange.name)
                // tempCart.splice(currentCart.indexOf(itemToChange), 1);
                tempCart = currentCart.filter((item) => {
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
        console.log("Quantity:");
        console.log(item.quantity)
        return <CartItem name = {item.name}
                price = {item.price}
                image = {item.image}
                quantity = {item.quantity}
                onCartUpdate = {onCartUpdate}
                // updateTotal = {updateTotal}
                key = {item.name}
                isHighContrast = {isBlind}
                id ={item.id}></CartItem>
    })

    function toBilling(){
        // currentCart.forEach((item) =>{
        //     updateCart(item, user);
        // })
        setCartBeforeBilling(currentCart, user);
    }

    if(valueToBeSearched)
    return (
        <div className = "cartpage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <Container name="Search Results" isHighContrast={isBlind} />    
        </div>
    );
    const temp = <h3> Your cart is empty!</h3>;

    return (
        <div className="cartpage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <h1 id="heading">Your Cart</h1>
            <div className="container">
                <div className={`cart${isBlind ? 'dark':'light'}`}>
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
                <OrderSummary isHighContrast={isBlind} toBilling = {toBilling}></OrderSummary>
            </div>
            <div className="cartButtons">
                <button id={`login-button${isBlind ? 'dark':'light'}`} onClick = {clearCart}>Clear Cart</button>
                <button id={`login-button${isBlind ? 'dark':'light'}`} onClick = {undoChanges}>Undo Changes</button>
            </div>
        </div>
    )
}

export default CartPage;
