import React, {useState, useContext} from "react";
import Navbar from './navbar';
import "./navbar.css";
import Container from "./container";
// import { ClickCategory } from "./Categories";
import CartPage from "./cartpage";
import {SearchContext, ContrastContext} from "../App"
import DetailedProducts from "./detailedproducts";


function ProductPage(props){
    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
    }

    const {valueToBeSearched} = useContext(SearchContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    console.log(valueToBeSearched);
    // console.log(ClickCategory)
    return(
        <div id={`homepage ${isHighContrast ? 'dark':'light'}`}>
            <Navbar />
            <Container name={props.name}  />    
            {/* <DetailedProducts></DetailedProducts> */}
        </div>
    );
}

export default ProductPage;