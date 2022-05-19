import React, {useState, useContext} from "react";
import Navbar from './navbar';
import Titles from "./Titles";
import Categories from "./Categories";
import "./Homepage.css";
import "./index.css";
import { SearchContext, ContrastContext, VoiceInputContext, VoicePopupContext } from "../App";
import ProductPage from "./productpage";
import Container from "./container";
import VoicePopup from "./VoicePopup";

const categories = ["Shoes", "Electronics", "Food", "Clothes"];

function Homepage(){
    const {valueToBeSearched} = useContext(SearchContext);
    const {voiceInput} = useContext(VoiceInputContext);
    const {voicePopup, setVoicePopup} = useContext(VoicePopupContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);
        
    return(
        <div id={`homepage ${isHighContrast ? 'dark':'light'}`}>
            <Navbar />
            <Titles/>
            <div id="categories">
                <Categories name = {categories[0]} />
                <Categories name = {categories[1]} />
            </div>
            <div id="categories">
                <Categories name = {categories[2]} /> 
                <Categories name = {categories[3]} /> 
            </div>
        </div>
    );
}

export default Homepage;