import { UserContext } from "../App";
import { readData } from "./firebaseservices";
import {useContext, useState} from "react";
import "./refillwallet.css"
import "./navbar.css"
import {BalanceContext} from "./billingpage"


function RefillWallet(props){
    
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const {currentBalance, setCurrentBalance} = useContext(BalanceContext);
    const [refillAmount, setRefillAmount] = useState(0);
    const [newBalance, setNewBalance] = useState(props.balance);
    const [refill, toggleRefill] = useState(false);

    let userDetails = [];

    console.log(props.balance)


    // async function get(){
    //     if (currentUser == null && user != null) {
    //         setCurrentUser(user)
    //         userDetails = await readData("users", "", user);
    //         setCurrentBalance(userDetails.wallet);
    //         setNewBalance(userDetails.wallet);
    //     }
    // }

    // get();

    function fillMoney(){
       if(refill){
        setCurrentBalance(newBalance);
        props.refillWallet(newBalance);
       }
       else{
           toggleRefill(true);
       }
    }

    const logos = <div className = "walletOps">
            <button class = "closeRefill" onClick = {() =>{
                toggleRefill(false);
            }}><i class="fa fa-window-close" aria-hidden="true"></i>
            </button>
            <div className = "updateBalance">
                <label for = "updateBalance">Refill amount:</label>
                <input type = "text" placeholder = {0} id = "updateBalance" onInput = {(event) =>{
                    if(!isNaN(parseInt(event.target.value))){
                        setRefillAmount(parseInt(event.target.value))
                        setNewBalance(props.balance + parseInt(event.target.value))
                    }
                }}></input>
                <div className = "newBalance">
                    <h3>New Balance:</h3>
                    <p>{newBalance}</p>
                </div>
            </div>
            <h3>Refill using:</h3>
            <div className = "logos">
            <div>
                <a href = "https://paytm.com/" alt = "Paytm" id = "Paytm"><img src = "/images/paytm.png" alt = "Paytm" /></a>
                <p>PayTM</p>
            </div>
            <div>
                <a href = "https://pay.google.com/" alt = "GPay"><img src = "/images/gpay.png" alt = "GPay" /></a>
                <p>GPay</p>
            </div>
            <div>
                <a href = "https://www.bhimupi.org.in//" alt = "UPI"><img src = "/images/upi.png" alt = "UPI" /></a>
                <p>UPI</p>
            </div>
            <div>
                <a href = "https://www.rupay.co.in//" alt = "Rupay"><img src = "/images/rupay.png" alt = "Rupay" /></a>
                <p>Rupay</p>
            </div>
            <div>
                <a href = "https://www.visa.co.in//" alt = "Visa"><img src = "/images/visa.png" alt = "Visa" /></a>
                <p>Visa</p>
            </div>
            </div>
        </div>

    return(
        <div className = {`refillWallet${props.isHighContrast ? "Light" : "Dark"}`}>
            <h1 id="refillHeader">Refill Wallet</h1>
            <div>
                <h3>Current Balance:</h3>
                <p>{props.balance}</p>
            </div>
            {refill ? logos : []}
            <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onClick = {fillMoney}>Refill Wallet</button>
        </div>
    )
}

export default RefillWallet;