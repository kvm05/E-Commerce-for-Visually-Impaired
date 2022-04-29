// import React, {useState, useContext} from 'react';
// import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
// import { UserContext, SearchContext, TTSContext } from '../App';
// // import "./detailedproducts.css"

// function DetailedProducts(props){
//         const temp = [
//         {
//             "name": "Nike Mercurial",
//             "price": 8000,
//             "image": [
//                 "https://www.nike.com/in/t/mercurial-dream-speed-superfly-8-elite-fg-football-boot-D4kVhs/DN3779-375"
//             ],
//             "rating": 4.7,
//             "description": "Test",
//             "size": [
//                 6,7,8,9,10
//             ]
//         }
//         ]
//         const [products, setProducts] = useState(temp);
//         const {screenReader, changeScreenReader} = useContext(TTSContext);
//         const {speak, cancel} = useSpeechSynthesis();
//         return(
//             <div className="app">
//                 {
//                     products.map(item =>(
//                          (<div className="details">
//                             <div className="big-img">
//                                 <img src={item.image[0]} alt=""/>
//                             </div>
//                             <div className="box">
//                                 <div className="row">
//                                     <h2>{item.name}</h2>
//                                     <span>${item.price}</span>
//                                 </div>
//                                 {/* <div className="colors">
//                                     {
//                                         item.colors.map(color =>(
//                                             <button style={{background: color}}></button>
//                                         ))
//                                     }
//                                 </div> */}
                                
//                                 <p>{item.description}</p>

//                                     <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text: "Add To Wishlist"}):cancel()} onClick={() => {
//                                         screenReader?speak({text: "Added to Wishlist"}):cancel();
//                                         props.addToWishlist(props.name)}} 
//                                         onMouseLeave={() => cancel()}><i class="fa-solid fa-bookmark"></i></button>
//                                     <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onClick={() =>{
//                                         props.addToCart(props.name)
//                                         screenReader?speak({text: "Added to Cart"}):cancel()
//                                     }} onMouseEnter={() => screenReader?speak({text: "Add To Cart"}):cancel()}><i class="fa-solid fa-cart-shopping"></i></button>
//                             </div>
//                         </div>)
//                     ))
//                 }
//             </div>
//         );
//     }

import React from 'react';
import classes from './detailedproducts.css';
import ProductData from './ProductData';

function DetailedProducts()
{
    return(
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
                <img src="/images/prod11.png" alt ="Product Preview"/>
            </div>

            <div className={classes.ProductData}>
                <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
                <p className={classes.ProductDescription}>{ProductData.description}</p>

                <h3 className={classes.Heading}>Select Colour</h3>
                <div>
                    <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="/images/prod12.png" alt="XYZ colour" />
                </div>

                <button className={classes.PrimaryButton}>Buy Now </button>
            </div>
        </div>
    )
}

 export default DetailedProducts;


