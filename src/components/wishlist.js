import FilterPane from "./filterpane";
import { Link, useNavigate } from "react-router-dom";
import "./container.css"
import {readData, filterByBrand, getBrands, search, getAllProducts, updateCart} from "./firebaseservices";
import {UserContext, SearchContext} from "../App";
import React, {useState, useContext, useEffect} from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import WishListItem from "./wishlistitem";
import Container from "./container";
import Navbar from "./navbar";

function Wishlist(props){const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }
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
            image = {image}
            description = {product.description}
            rating = {product.rating}
            category = {product.category}
            isHighContrast = {props.isHighContrast}
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
        <div className = "cartpage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <Container name="Search Results" isHighContrast={isBlind} />    
        </div>
    );

    const temp = <h3>"Your wishlist is empty!"</h3>;
    
    return (
        <div className="cartpage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/> 
            <div className="container">
                {/* <FilterPane brands = {brands} filterBrand = {filterBrand} price = {maxPrice} rating = {5}/> */}
                <div className="prod">
                    <div className="category">
                    <h1 id='category-header' onMouseEnter={() => speak({text:document.querySelector('#category-header').textContent})}>Wishlist</h1>
                        <div  className="icons">
                            <Link to = '/cart'>
                                <img src={isBlind?"/images/viewcart-wheat.png":"/images/view cart.png"} alt="view cart" onMouseEnter={() => speak({text: "View Cart"})}></img>
                            </Link>
                            <Link to = '/wishlist'>
                                <a href="wishlist"><img src={isBlind?"/images/wishlist-wheat.png" :"/images/wishlist.png"} alt="wishlist" onMouseEnter={() => speak({text: "View Wishlist: Currently Disabled"})}></img></a>
                            </Link>                    
                        </div>
                    </div>
                    {displayProducts ? displayProducts : temp}
                </div>
            </div>
        </div>
        
      );
}

export default Wishlist; 