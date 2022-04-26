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
import { readData, updateWallet } from "./firebaseservices";

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
            setCurrentBalance(userDetails.wwallet);
            setCurrentCart(userDetails.cart);
        }
    }

    get();

    function refillWallet(newBalance){
        updateWallet(user, newBalance);
    }

    function updateCustomerInfo(field, value){
        customerDetails[field] = value;
    }

    function checkout(){

    }

    return (
        <BalanceContext.Provider value = {{currentBalance, setCurrentBalance}}>
            <div className = "billingPage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <div className = "topContainer">
                <CustInfo isHighContrast = {isBlind} updateCustomerInfo = {updateCustomerInfo}></CustInfo>
                <RefillWallet isHighContrast = {isBlind} refillWallet = {refillWallet}></RefillWallet>
            </div>
            <div className = "bottomContainer">
                <OrderTable isHighContrast = {isBlind} cart = {currentCart}></OrderTable>
                <FinalSummary isHighContrast ={isBlind} checkout = {checkout}></FinalSummary>
            </div>
        </div>
        </BalanceContext.Provider>
    )
}

export default BillingPage;

