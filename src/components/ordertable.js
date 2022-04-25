import React, {useState, useContext, useEffect} from "react";
import { UserContext } from "../App";
import { readData } from "./firebaseservices";
import "./ordertable.css" 

function OrderTable(props){

    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentCart, setCurrentCart] = useState([]);

    let userDetails = [];


    async function get(){
        if (currentUser == null && user != null) {
            setCurrentUser(user)
            userDetails = await readData("users", "", user);
            setCurrentCart(userDetails.cart);
            console.log(userDetails.cart)
        }
    }

    get();

    console.log(currentCart)

    const image=["/images/prod11.png"]

    const displayProducts = currentCart.map((product) =>{
        return(
            <tr>
                <td> <div className = "nameCell">
                <img src = {image[0]} alt = {product.name}></img>
                <p>  {product.name}  </p>
                </div></td>
                <td> {product.price} </td>
                <td> {product.quantity} </td>
                <td> {product.price * product.quantity} </td>
            </tr>
        )
    })

    return(
        <div className = {`orderTable${props.isHighContrast ? 'Dark':'Light'}`} >
            <h1 id="orderHeader">Order Summary</h1>
            <div className = "table">
                <table>
                    <thead>
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