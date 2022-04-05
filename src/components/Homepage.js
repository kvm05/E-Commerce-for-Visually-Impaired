import React, {useState} from "react";
import Navbar from './navbar';
import Titles from "./Titles";
import Categories from "./Categories";
import "./Homepage.css";
import "./index.css";

const categories = ["Category1", "Category2", "Category3", "Category4"];

function Homepage(){
    const [isBlind, getChildData] = useState(false)
    const dataFromChild = (childData) => {
        getChildData(childData)
        // console.log("ITS HERE")
    }
    return(
        <div id={`homepage ${isBlind ? 'dark':'light'}`}>
            <Navbar func = {dataFromChild}/>
            <Titles checkBlind = {isBlind}/>
            <div id="categories">
                <Categories name = {categories[0]} checkBlind = {isBlind}/>
                <Categories name = {categories[1]} checkBlind = {isBlind}/>
            </div>
            <div id="categories">
                <Categories name = {categories[2]} checkBlind = {isBlind}/>
            </div>
        </div>
    );
}

export default Homepage;