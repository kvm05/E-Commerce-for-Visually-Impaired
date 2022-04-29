import FilterPane from "./filterpane";
import { Link, useNavigate } from "react-router-dom";
import "./container.css"
import "./navbar.css"
import {readData, filterByBrand, getBrands, search, getAllProducts, updateCart} from "./firebaseservices";
import {UserContext, SearchContext, TTSContext, ContrastContext} from "../App";
import React, {useState, useContext, useEffect} from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import WishListItem from "./wishlistitem";
import Container from "./container";
import Navbar from "./navbar";

function Wishlist(props){
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    const {speak, cancel} = useSpeechSynthesis();
    const image=[]
    for(let i=11;i<=20;i++){
        image.push(`/images/prod${i}.png`);
    }
    // console.log(image);
    const {user} = useContext(UserContext);
    const {valueToBeSearched} = useContext(SearchContext);

    const [ currentUser, setUser] = useState(null);

    let displayProducts = [];
    const [currentWishlist, updateWishlist] = useState(null);
    // console.log(props.valueToBeSearched);
    // useEffect(filterBrand, [])

    async function get(){
        
        if (currentUser == null && user != null) {
            setUser(user)
            const userDetails = await readData("users", "", user);
            updateWishlist(userDetails.wishlist);
        }
    }
    get();    

    if(currentWishlist){
        displayProducts = currentWishlist.map((product) =>{
            return <WishListItem name = {product.name}
            price = {product.price}
            image = {product.image}
            description = {product.description}
            rating = {product.rating}
            category = {product.category}
            addToCart = {addToCart}
            removeFromWishlist = {removeFromWishlist}></WishListItem>
        })
    }
    
    function addToCart(prodName){
        const cartItem = currentWishlist.filter((product) =>{
            return product.name === prodName;
        })
        cartItem[0]["quantity"] = 1;
        updateCart(cartItem[0], user);
    }

    function removeFromWishlist(prodName){
        updateWishlist(() =>{
            const itemsToChange = currentWishlist.filter((item) =>{
                return item.name === prodName;
            
            })
            console.log(itemsToChange)
            const itemToChange = itemsToChange[0]
            currentWishlist.splice(currentWishlist.indexOf(itemToChange), 1);
            return [...currentWishlist];
        })
    }

    if(valueToBeSearched)
    return (
        <div className = "cartpage" id={`homepage ${isHighContrast ? 'dark':'light'}`}>
            <Navbar />
            <Container name="Search Results" />    
        </div>
    );

    const temp = <h3>"Your wishlist is empty!"</h3>;
    
    return (
        <div className="cartpage" id={`homepage ${isHighContrast ? 'dark':'light'}`}>
            <Navbar /> 
            <div className="container">
                {/* <FilterPane brands = {brands} filterBrand = {filterBrand} price = {maxPrice} rating = {5}/> */}
                <div className="prod">
                    <div className="category">
                    <h1 id='category-header' onMouseEnter={() => screenReader?speak({text:`${document.querySelector('#category-header').textContent} To the bottom of the page, you can save changes`}):cancel()} onMouseLeave={() => cancel()}>Wishlist</h1>
                        <div  className="icons">
                            <Link to = '/cart'>
                                <img src={isHighContrast?"/images/viewcart-wheat.png":"/images/view cart.png"} alt="view cart" onMouseEnter={() => screenReader?speak({text: "View Cart"}):cancel()} onMouseLeave={() => cancel()}></img>
                            </Link>
                            {/* <Link to = '/wishlist'>
                                <a href="wishlist"><img src={isHighContrast?"/images/wishlist-wheat.png" :"/images/wishlist.png"} alt="wishlist" onMouseEnter={() => speak({text: "View Wishlist"})}></img></a>
                            </Link>                     */}
                        </div>
                    </div>
                    {displayProducts ? displayProducts : temp}
                </div>
            </div>
            <div className="wishlistButtons">
                <button id={`login-button${isHighContrast ? 'dark':'light'}`}  onMouseEnter={() => screenReader?speak({text:"Click to save changes"}):cancel()} onMouseLeave={() => cancel()}>Save Changes</button> {/* onClick = {saveChanges} */}
            </div>
        </div>
        
      );
}

export default Wishlist; 