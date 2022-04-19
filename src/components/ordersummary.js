import "./ordersummary.css"
import {OrderContext} from "../App";
import {useContext} from "react";

function OrderSummary(props){
    const {orderTotal} = useContext(OrderContext);
    const tax=Math.floor((0.18*orderTotal)*100)/100;
    const final=Math.floor((orderTotal+tax)*100)/100;
    console.log(orderTotal);
    return (
        <div className="ordersummary">
            <h2 className={`summary${props.isHighContrast?"Dark":"Light"}`}>Order Summary</h2>
            <div className="totals">
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Your Total: </h3><p>{orderTotal}</p>
                </div>
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Taxes: </h3><p>{tax}</p>
                </div>
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Final Total: </h3><p>{final}</p>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default OrderSummary;