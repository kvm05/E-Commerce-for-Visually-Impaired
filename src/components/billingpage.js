import OrderTable from "./ordertable"
import Navbar from "./navbar";
import React, {useState, useContext} from "react";
import "./navbar.css"
import ShipmentForm from "./shipmentform";
import RefillWallet from "./refillwallet";
import "./billingpage.css"
import CustInfo from "./custinfo";
import FinalSummary from "./finalsummary";
import { UserContext } from "../App";
import { readData, updateWallet, completePurchase, setCartBeforeBilling } from "./firebaseservices";

export const BalanceContext = React.createContext(
    {currentBalance: 0,
    setCurrentBalance: () => {}}
);

function BillingPage(){

    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

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

    function refillWallet(newBalance){
        setCurrentBalance(newBalance);
        updateWallet(user, newBalance);
    }

    function updateCustomerInfo(field, value){
        customerDetails[field] = value;
    }

    function checkout(newBalance){
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
        
        setCartBeforeBilling([], user);
        updateWallet(newBalance);
    }

    return (
        <BalanceContext.Provider value = {{currentBalance, setCurrentBalance}}>
            <div className = "billingPage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <div className = "topContainer">
                <CustInfo isHighContrast = {isBlind} updateCustomerInfo = {updateCustomerInfo}></CustInfo>
                <RefillWallet isHighContrast = {isBlind} balance = {currentBalance} refillWallet = {refillWallet}></RefillWallet>
            </div>
            <div className = "bottomContainer">
                <OrderTable isHighContrast = {isBlind} cart = {currentCart}></OrderTable>
                <FinalSummary isHighContrast ={isBlind} checkout = {checkout} total = {total} balance = {currentBalance}></FinalSummary>
            </div>
        </div>
        </BalanceContext.Provider>
    )
}

export default BillingPage;

