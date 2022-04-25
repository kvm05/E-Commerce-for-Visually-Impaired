import { UserContext } from "../App";
import { readData } from "./firebaseservices";
import {useContext, useState} from "react";
import "./refillwallet.css"


function RefillWallet(props){
    const logos = ["/images/paytm.png", "/images/gpay.png", "/images/upi.png", "/images/rupay.png", "/images/visa.png"];
    
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
    return(
        <div className = {`refillWallet${props.isHighContrast ? "Light" : "Dark"}`}>
            <h1>Refill Wallet</h1>
            <div>
                <h3>Current Balance:</h3>
                <p>{currentBalance}</p>
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
    )
}

export default RefillWallet;