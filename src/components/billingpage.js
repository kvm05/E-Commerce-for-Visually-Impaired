import OrderTable from "./ordertable"
import Navbar from "./navbar";
import React, {useState, useContext} from "react";
import "./navbar.css"
import ShipmentForm from "./shipmentform";
import RefillWallet from "./refillwallet";
import "./billingpage.css"
import CustInfo from "./custinfo";
import FinalSummary from "./finalsummary";
import { useSpeechSynthesis } from 'react-speech-kit';
import { UserContext, TTSContext, ContrastContext } from "../App";
import { readData, updateWallet, completePurchase, setCartBeforeBilling } from "./firebaseservices";

export const BalanceContext = React.createContext(
    {currentBalance: 0,
    setCurrentBalance: () => {}}
);

function BillingPage(){

    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);

    const customerDetails = {};

    const {user, setUser} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    let userDetails = [];
    const [currentBalance, setCurrentBalance] = useState(0);
    const [currentCart, setCurrentCart] = useState([]);
    

    async function get(){
        if (currentUser == null && user != null) {
            userDetails = await readData("users", "", user);
            setCurrentUser(user);
            setCurrentBalance(userDetails.wallet);
            setCurrentCart(userDetails.cart);
        }
    }

    get();

    let total = 0;
    for(let item of currentCart){
        total += item.quantity * item.price;
    }

    async function refillWallet(newBalance){
        setCurrentBalance(newBalance);
        await updateWallet(user, newBalance);
    }

    function updateCustomerInfo(field, value){
        customerDetails[field] = value;
    }

    async function checkout(newBalance){
        const purchasedProducts = currentCart.map((product) =>{
            return Object.assign(product, customerDetails);
        })

        const date = new Date();
        const currentDate = [];
        currentDate.push(date.getDate());
        currentDate.push(date.getMonth());
        currentDate.push(date.getFullYear());

        for(let product of purchasedProducts){
            product["purchaseDate"] = currentDate;
            completePurchase(product, user);
        }
        
        await setCartBeforeBilling([], user);
        await updateWallet(newBalance);
    }

    return (
        <BalanceContext.Provider value = {{currentBalance, setCurrentBalance}}>
            <div className = "billingPage" id={`homepage ${isHighContrast ? 'dark':'light'}`}>
            <Navbar />
            <div className = "topContainer">
                <CustInfo updateCustomerInfo = {updateCustomerInfo}></CustInfo>
                <RefillWallet balance = {currentBalance} refillWallet = {refillWallet}></RefillWallet>
            </div>
            <div className = "bottomContainer">
                <OrderTable cart = {currentCart}></OrderTable>
                <FinalSummary checkout = {checkout} total = {total} balance = {currentBalance}></FinalSummary>
            </div>
        </div>
        </BalanceContext.Provider>
    )
}

export default BillingPage;

