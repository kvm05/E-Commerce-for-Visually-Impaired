import React from "react";
import "./Categories.css"

function Categories(props){
    const onClickCategory = (currCat) => {
        console.log(currCat)
    }
    return(
        <button id={`category ${props.checkBlind ? 'dark':'light'}`} onClick={() => onClickCategory(props.name)} >
            {props.name}
        </button>
    );
}

export default Categories;