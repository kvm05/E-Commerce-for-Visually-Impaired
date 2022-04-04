import CartItem from "./cartitem";
import OrderSummary from "./ordersummary";
import "./cartpage.css"

function CartPage(props){
    const image=["/images/prod11.png"]
    return (
        <div className="cartpage">
            <div className="container">
                <div className="cart">
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={props.isHighContrast}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={props.isHighContrast}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={props.isHighContrast}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={props.isHighContrast}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={props.isHighContrast}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={props.isHighContrast}></CartItem>
                    <CartItem name="Product 1" price={45} image={image} quantity={2}  isHighContrast={props.isHighContrast}></CartItem>
                </div>
                <OrderSummary total={900} isHighContrast={props.isHighContrast}></OrderSummary>
            </div>
        </div>
    )
}

export default CartPage;
