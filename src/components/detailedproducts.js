import React, {useState, useContext} from 'react';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { UserContext, SearchContext, TTSContext } from '../App';
// import "./detailedproducts.css"

function DetailedProducts(props){
        const temp = [
        {
            "name": "Nike Mercurial",
            "price": 8000,
            "image": [
                "https://www.nike.com/in/t/mercurial-dream-speed-superfly-8-elite-fg-football-boot-D4kVhs/DN3779-375"
            ],
            "rating": 4.7,
            "description": "Test",
            "size": [
                6,7,8,9,10
            ]
        }
        ]
        const [products, setProducts] = useState(temp);
        const {screenReader, changeScreenReader} = useContext(TTSContext);
        const {speak, cancel} = useSpeechSynthesis();
        return(
            <div className="app">
                {
                    products.map(item =>(
                         (<div className="details">
                            <div className="big-img">
                                <img src={item.image[0]} alt=""/>
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.name}</h2>
                                    <span>${item.price}</span>
                                </div>
                                {/* <div className="colors">
                                    {
                                        item.colors.map(color =>(
                                            <button style={{background: color}}></button>
                                        ))
                                    }
                                </div> */}
                                
                                <p>{item.description}</p>

                                    <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text: "Add To Wishlist"}):cancel()} onClick={() => {
                                        screenReader?speak({text: "Added to Wishlist"}):cancel();
                                        props.addToWishlist(props.name)}} 
                                        onMouseLeave={() => cancel()}><i class="fa-solid fa-bookmark"></i></button>
                                    <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onClick={() =>{
                                        props.addToCart(props.name)
                                        screenReader?speak({text: "Added to Cart"}):cancel()
                                    }} onMouseEnter={() => screenReader?speak({text: "Add To Cart"}):cancel()}><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>)
                    ))
                }
            </div>
        );
    }

export default DetailedProducts;
