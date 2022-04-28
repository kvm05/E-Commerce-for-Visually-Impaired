import React, {useState, useContext, useEffect} from "react";
import { UserContext, TTSContext, ContrastContext } from "../App";
import { useSpeechSynthesis } from 'react-speech-kit';
import { readData } from "./firebaseservices";
import "./ordertable.css" 

function OrderTable(props){

    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    // const [currentCart, setCurrentCart] = useState([]);
    // setCurrentCart(props.cart);
    const currentCart = props.cart;
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);

    let userDetails = [];


    // async function get(){
    //     if (currentUser == null && user != null) {
    //         setCurrentUser(user)
    //         userDetails = await readData("users", "", user);
    //         setCurrentCart(userDetails.cart);
    //         console.log(userDetails.cart)
    //     }
    // }

    // get();


    const image=["/images/prod11.png"]

    const displayProducts = currentCart.map((product) =>{
        return(
            <tr>
                <td> <div className = "nameCell">
                <img src = {image[0]} alt = {product.name}></img>
                <p onMouseEnter={() => screenReader?speak({text:`Product: ${product.name}`}):cancel()} onMouseLeave={() => cancel()}>  {product.name}  </p>
                </div></td>
                <td onMouseEnter={() => screenReader?speak({text:`Price: ₹${product.price}`}):cancel()} onMouseLeave={() => cancel()}> {product.price} </td>
                <td onMouseEnter={() => screenReader?speak({text:`Quantity: ${product.quantity}`}):cancel()} onMouseLeave={() => cancel()}> {product.quantity} </td>
                <td onMouseEnter={() => screenReader?speak({text:`Total: ₹${product.price * product.quantity}`}):cancel()} onMouseLeave={() => cancel()}> {product.price * product.quantity} </td>
            </tr>
        )
    })

    return(
        <div className = {`orderTable${isHighContrast ? 'Dark':'Light'}`} >
            <h1 id={`orderHeader-${isHighContrast ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text:"Order Summary below"}):cancel()} onMouseLeave={() => cancel()}>Order Summary</h1>
            <div className = "table">
                <table>
                    <thead id={`tableHeader-${isHighContrast ? 'dark':'light'}`}>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    {displayProducts}
                </table>
            </div>
        </div>
    )
}

export default OrderTable;