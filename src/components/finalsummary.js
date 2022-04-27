import "./ordersummary.css"
import {OrderContext, UserContext} from "../App";
import { Link, useNavigate } from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import { readData } from "./firebaseservices";
import "./navbar.css"
import { BalanceContext } from "./billingpage";

function FinalSummary(props){
    const {orderTotal} = useContext(OrderContext);
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const {currentBalance, setCurrentBalance} = useContext(BalanceContext);
    const [canCheckout, disableCheckout] = useState(false);

    let userDetails = [];

    // async function get(){
    //     if (currentUser == null && user != null) {
    //         setCurrentUser(user)
    //         userDetails = await readData("users", "", user);
    //         setCurrentBalance(userDetails.wallet);
    //     }
    // }

    // get();

    const tax=Math.floor((0.18*props.total)*100)/100;
    const final=Math.floor((props.total+tax)*100)/100;
    const newBalance = props.balance - props.total;
    
    useEffect(() =>{
        if(newBalance < 0){
            disableCheckout(true);
        }
        else
        disableCheckout(false)
    },[newBalance])

    return (
        <div className="finalSummary">
            <h1 className={`summary${props.isHighContrast?"Dark":"Light"}`}>Final Total</h1>
            <div className="totals">
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Your Total: </h3><p>{props.total}</p>
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
            <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} disabled = {canCheckout} onClick = {() =>{
                props.checkout(newBalance);
            }}>Pay And Checkout</button>
            {canCheckout ? <h3>Insufficient Balance</h3> : null}
        </div>
    )
}

export default FinalSummary;