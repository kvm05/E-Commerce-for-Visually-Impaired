import React, {useState, useContext} from "react";
import Navbar from './navbar';
import "./navbar.css";
import Container from "./container";
// import { ClickCategory } from "./Categories";
import CartPage from "./cartpage";
import {SearchContext} from "../App"
import DetailedProducts from "./detailedproducts";


function ProductPage(props){
    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

    const {valueToBeSearched} = useContext(SearchContext);

    console.log(valueToBeSearched);
    // console.log(ClickCategory)
    return(
        <div id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <Container name={props.name} isHighContrast={isBlind} />    
            {/* <DetailedProducts></DetailedProducts> */}
        </div>
    );
}

export default ProductPage;