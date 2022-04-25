import "./ordersummary.css"
import {OrderContext, UserContext} from "../App";
import { Link, useNavigate } from "react-router-dom";
import {useContext, useState} from "react";
import { readData } from "./firebaseservices";
import "./navbar.css"

function FinalSummary(props){
    const {orderTotal} = useContext(OrderContext);
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentBalance, setCurrentBalance] = useState(0);

    let userDetails = [];

    async function get(){
        if (currentUser == null && user != null) {
            setCurrentUser(user)
            userDetails = await readData("users", "", user);
            setCurrentBalance(userDetails.wallet);
        }
    }

    get();

    function updateFinalBalance(){

    }
    console.log(orderTotal);
    const tax=Math.floor((0.18*orderTotal)*100)/100;
    const final=Math.floor((orderTotal+tax)*100)/100;
    const newBalance = currentBalance - orderTotal;

    return (
        <div className="finalSummary">
            <h1 className={`summary${props.isHighContrast?"Dark":"Light"}`}>Final Total</h1>
            <div className="totals">
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Your Total: </h3><p>{orderTotal}</p>
                </div>
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Taxes: </h3><p>{tax}</p>
                </div>
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Final Total: </h3><p>{final}</p>
                </div>
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>New Balance: </h3><p>{newBalance}</p>
                </div>
            </div>
            <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onclick = {updateFinalBalance}>Pay And Checkout</button>
        </div>
    )
}

export default FinalSummary;