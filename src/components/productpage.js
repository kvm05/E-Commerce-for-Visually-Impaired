import React, {useState} from "react";
import Navbar from './navbar';
import "./navbar.css";
import Container from "./container";
import CartPage from "./cartpage";


function ProductPage(){
    const [isBlind, getChildData] = useState(false)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

    return(
        <div id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            
            <Container name="Category 1" isHighContrast={isBlind} />
            {/* <CartPage isHighContrast={isBlind} /> */}
        

        </div>
    );
}

export default ProductPage;