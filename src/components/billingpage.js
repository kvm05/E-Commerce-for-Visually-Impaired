import OrderTable from "./ordertable"
import Navbar from "./navbar";
import {useState} from "react";
import "./navbar.css"
import ShipmentForm from "./shipmentform";
import RefillWallet from "./refillwallet";
import "./billingpage.css"
import CustInfo from "./custinfo";

function BillingPage(){

    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

    return (
        <div className = "billingPage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <OrderTable isHighContrast = {isBlind}></OrderTable>
            <div className = "bottomContainer">
                <CustInfo isHighContrast = {isBlind}></CustInfo>
                <RefillWallet isHighContrast = {isBlind}></RefillWallet>
            </div>
        </div>
    )
}

export default BillingPage;

