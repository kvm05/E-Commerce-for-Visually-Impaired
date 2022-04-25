import { UserContext } from "../App";
import { readData } from "./firebaseservices";
import {useContext, useState} from "react";
import "./refillwallet.css"
import "./navbar.css"


function RefillWallet(props){
    
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [refill, toggleRefill] = useState(false);

    let userDetails = [];


    async function get(){
        if (currentUser == null && user != null) {
            setCurrentUser(user)
            userDetails = await readData("users", "", user);
            setCurrentBalance(userDetails.wallet);
        }
    }

    get();

    const logos = <div className = "logos">
            <div className = "updateBalance">
                <label for = "updateBalance">Refill amount:</label>
                <input type = "text" id = "updateBalance" onInput = {(event) =>{
                                            console.log("hi")
                    if(typeof(event.target.value) === "number")
                    {
                        setCurrentBalance((prevBalance) =>{
                        console.log("hi")
                        return prevBalance + event.target.value;
                    })}
                }}></input>
            </div>
            <h3>Refill using:</h3>
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

    return(
        <div className = {`refillWallet${props.isHighContrast ? "Light" : "Dark"}`}>
            <h1 id="refillHeader">Refill Wallet</h1>
            <div>
                <h3>Current Balance:</h3>
                <p>{currentBalance}</p>
            </div>
            {refill ? logos : []}
            <button id={`login-button${props.isHighContrast ? 'dark':'light'}`} onClick = {() =>{
                toggleRefill((prevState) =>{
                    return !prevState;
                })
            }}>Refill Wallet</button>
        </div>
    )
}

export default RefillWallet;