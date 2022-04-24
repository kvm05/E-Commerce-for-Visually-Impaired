import OrderTable from "./ordertable"
import Navbar from "./navbar";
import {useState} from "react";
import "./navbar.css"
import ShipmentForm from "./shipmentform";

function BillingPage(){

    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

    return (
        <div className = "billingPage" id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <OrderTable isHighContrast = {isBlind}></OrderTable>
            <ShipmentForm isHighContrast = {isBlind}></ShipmentForm>
        </div>
    )
}

export default BillingPage;

