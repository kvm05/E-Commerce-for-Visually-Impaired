import React from "react";
import "./Categories.css"

function Categories(props){
    return(
        <button id={`category ${props.checkBlind ? 'dark':'light'}`}>
            {props.name}
        </button>
    );
}

export default Categories;