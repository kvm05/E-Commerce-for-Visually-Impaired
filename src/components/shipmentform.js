import CustInfo from "./custinfo";
import RecInfo from "./recinfo";
import "./shipmentform.css"

function ShipmentForm(props){
    return(
        <div className = "shipmentForm">
            <div className = "detailsForm">
            <CustInfo isHighContrast = {props.isHighContrast}></CustInfo>
            {/* <RecInfo isHighContrast = {props.isHighContrast}></RecInfo> */}
            </div>
            <button>Complete Checkout And Pay</button>
        </div>
    )
}

export default ShipmentForm;