import "./ordersummary.css"
import {OrderContext, UserContext, TTSContext, ContrastContext} from "../App";
import { Link, useNavigate } from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import { readData } from "./firebaseservices";
import "./navbar.css"
import { BalanceContext } from "./billingpage";
import Popup from "./Popup";

function FinalSummary(props){
    const {orderTotal} = useContext(OrderContext);
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const {currentBalance, setCurrentBalance} = useContext(BalanceContext);
    const [canCheckout, disableCheckout] = useState(false);
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    const [showPopup, changeShowPopup] = useState(false);
    const [content, changecontent] = useState('');
    const navigate = useNavigate()

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
    const newBalance = props.balance - final;

    function thankYouMessage(){
        changeShowPopup(true)
        changecontent("Thank you for shopping with us!")
        setTimeout(() => {
            changeShowPopup(false)
            navigate("/")
        }, 5000);
    }
    
    useEffect(() =>{
        if(newBalance < 0){
            disableCheckout(true);
        }
        else
        disableCheckout(false)
    },[newBalance])

    return (
        <div className="finalSummary">
            <h1 className={`summary${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:"Final Total given below"}):cancel()} onMouseLeave={() => cancel()}>Final Total</h1>
            <div className="totals">
                <div className={`total${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:`Total: ₹${props.total}`}):cancel()} onMouseLeave={() => cancel()}>
                <h3>Your Total: </h3><p>₹{props.total}</p>
                </div>
                <div className={`total${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:`Taxes: ₹${tax}`}):cancel()} onMouseLeave={() => cancel()}>
                <h3>Taxes: </h3><p>₹{tax}</p>
                </div>
                <div className={`total${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:`Final Total: ₹${final}`}):cancel()} onMouseLeave={() => cancel()}>
                <h3>Final Total: </h3><p>₹{final}</p>
                </div>
                <div className={`total${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:`New Balance: ₹${newBalance}`}):cancel()} onMouseLeave={() => cancel()}>
                <h3>New Balance: </h3><p>₹{newBalance}</p>
                </div>
            </div>
            <button id={`login-button${isHighContrast ? 'dark':'light'}`} disabled = {canCheckout} onClick = {() =>{
                props.checkout(newBalance);
                thankYouMessage();
                screenReader?speak({text:"Thank you for shopping with us!"}):cancel()
            }} onMouseEnter={() => screenReader?speak({text:"Click to pay and checkout"}):cancel()} onMouseLeave={() => cancel()}>Pay And Checkout</button>
            {canCheckout ? <h3 onMouseEnter={() => screenReader?speak({text:"Insufficient Balance"}):cancel()} onMouseLeave={() => cancel()}>Insufficient Balance</h3> : null}
            {(showPopup) ?<Popup content={content}/>:<p></p>}
        </div>
    )
}

export default FinalSummary;