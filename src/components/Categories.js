import {React, useState, useContext} from "react";
import "./Categories.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from 'react-speech-kit';
import { TTSContext, ContrastContext } from '../App';

function Categories(props){
    const navigate = useNavigate()
    const [cat, setCat] = useState('')
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
    const onClickCategory = (currCat) => {
        setCat(currCat)
        navigate("/categories")
    }
    return(
        <Link id="MyLink" to = {`/categories/${props.name}`}>
            <button id={`category ${isHighContrast ? 'dark':'light'}`} 
            onClick={() => {
                onClickCategory(props.name)
                screenReader?speak({text: `Opening ${props.name}`}):cancel()
            }} 
            onMouseEnter={() => screenReader?speak({ text: props.name }):cancel()} onMouseLeave={() => cancel()}>
                {props.name}
            </button>
        </Link>
    );
}

export default Categories;