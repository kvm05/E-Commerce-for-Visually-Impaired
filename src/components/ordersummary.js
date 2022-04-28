import "./ordersummary.css"
import {OrderContext, TTSContext, ContrastContext} from "../App";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from 'react-speech-kit';
import {useContext} from "react";
import "./navbar.css"

function OrderSummary(props){
    const {orderTotal} = useContext(OrderContext);
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    const {speak, cancel} = useSpeechSynthesis();
    const tax=Math.floor((0.18*orderTotal)*100)/100;
    const final=Math.floor((orderTotal+tax)*100)/100;
    return (
        <div className="ordersummary">
            <h2 className={`summary${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:"Order Summary"}):cancel()} onMouseLeave={() => cancel()}>Order Summary</h2>
            <div className="totals">
                <div className={`total${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:`Total: ₹${orderTotal}`}):cancel()} onMouseLeave={() => cancel()}>
                <h3 >Your Total: </h3><p>{`₹${orderTotal}`}</p>
                </div>
                <div className={`total${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:`Taxes: ₹${tax}`}):cancel()} onMouseLeave={() => cancel()}>
                <h3>Taxes: </h3><p>{`₹${tax}`}</p>
                </div>
                <div className={`total${isHighContrast?"Dark":"Light"}`} onMouseEnter={() => screenReader?speak({text:`Final Total: ₹${final}`}):cancel()} onMouseLeave={() => cancel()}>
                <h3>Final Total: </h3><p>{`₹${final}`}</p>
                </div>
            </div>
            <button id={`login-button${isHighContrast ? 'dark':'light'}`} onClick = {props.toBilling} onMouseEnter={() => screenReader?speak({text:"Proceed to Billing"}):cancel()} onMouseLeave={() => cancel()}>Proceed To Billing</button>
        </div>
    )
}

export default OrderSummary;