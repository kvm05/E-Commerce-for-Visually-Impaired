import OrderTable from "./ordertable"
import Navbar from "./navbar";
import {useState} from "react";
import "./navbar.css"
import ShipmentForm from "./shipmentform";
import RefillWallet from "./refillwallet";
import "./billingpage.css"
import CustInfo from "./custinfo";
import FinalSummary from "./finalsummary";

function BillingPage(){

    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

    return (
        <div className = "billingPage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <div className = "topContainer">
                <CustInfo isHighContrast = {isBlind}></CustInfo>
                <RefillWallet isHighContrast = {isBlind}></RefillWallet>
            </div>
            <div className = "bottomContainer">
            <OrderTable isHighContrast = {isBlind}></OrderTable>
            <FinalSummary isHighContrast ={isBlind}></FinalSummary>
            </div>
        </div>
    )
}

export default BillingPage;

