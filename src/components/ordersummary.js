import "./ordersummary.css"

function OrderSummary(props){
    const tax=0.18*props.total;
    const final=props.total+tax;

    return (
        <div className="ordersummary">
            <h2 className={`summary${props.isHighContrast?"Dark":"Light"}`}>Order Summary</h2>
            <div className="totals">
                <div className={`total${props.isHighContrast?"Dark":"Light"}`}>
                <h3>Your Total: </h3><p>{props.total}</p>
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