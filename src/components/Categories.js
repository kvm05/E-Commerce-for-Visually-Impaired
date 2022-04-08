import {React, useState} from "react";
import "./Categories.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from 'react-speech-kit';

function Categories(props){
    const navigate = useNavigate()
    const [cat, setCat] = useState('')
    const {speak, cancel} = useSpeechSynthesis();
    const onClickCategory = (currCat) => {
        setCat(currCat)
        navigate("/categories")
    }
    return(
        <Link id="MyLink" to = {`/categories/${props.name}`}>
            <button id={`category ${props.checkBlind ? 'dark':'light'}`} 
            onClick={() => {
                onClickCategory(props.name)
                speak({text: `Opening ${props.name}`})
            }} 
            onMouseEnter={() => speak({ text: props.name })}>
                {props.name}
            </button>
        </Link>
    );
}

export default Categories;