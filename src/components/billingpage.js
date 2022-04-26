import OrderTable from "./ordertable"
import Navbar from "./navbar";
import {useState, useContext} from "react";
import "./navbar.css"
import ShipmentForm from "./shipmentform";
import RefillWallet from "./refillwallet";
import "./billingpage.css"
import CustInfo from "./custinfo";
import FinalSummary from "./finalsummary";
import { UserContext } from "../App";
import { readData, updateWallet } from "./firebaseservices";

function BillingPage(){

    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

    const {user, setUser} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    let userDetails = [];

    async function get(){
        if (currentUser == null && user != null) {
            userDetails = await readData("users", "", user);
            setCurrentUser(user);
        }
    }

    get();

    function refillWallet(newBalance){
        updateWallet(user, newBalance);
    }

    return (
        <div className = "billingPage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <div className = "topContainer">
                <CustInfo isHighContrast = {isBlind}></CustInfo>
                <RefillWallet isHighContrast = {isBlind} refillWallet = {refillWallet}></RefillWallet>
            </div>
            <div className = "bottomContainer">
                <OrderTable isHighContrast = {isBlind}></OrderTable>
                <FinalSummary isHighContrast ={isBlind}></FinalSummary>
            </div>
        </div>
    )
}

export default BillingPage;

