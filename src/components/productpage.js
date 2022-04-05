import React, {useState} from "react";
import Navbar from './navbar';
import "./navbar.css";
import Container from "./container";
// import { ClickCategory } from "./Categories";
import CartPage from "./cartpage";


function ProductPage(props){
    const [isBlind, getChildData] = useState(false)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }
    // console.log(ClickCategory)
    return(
        <div id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <Container name={props.name} isHighContrast={isBlind} />    
        </div>
    );
}

export default ProductPage;