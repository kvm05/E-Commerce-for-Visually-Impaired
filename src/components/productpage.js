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

    const [ valueToBeSearched, setValue ] = useState(""); 
    const prevState = valueToBeSearched;
    function search(value){
        setValue(value);
    }


    console.log(valueToBeSearched);
    // console.log(ClickCategory)
    return(
        <div id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar search = {search} func = {dataFromChild}/>
            <Container name={props.name} valueToBeSearched = {valueToBeSearched} isHighContrast={isBlind} />    
        </div>
    );
}

export default ProductPage;