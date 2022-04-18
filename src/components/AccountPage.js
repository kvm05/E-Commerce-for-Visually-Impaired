import React, {useState} from "react";
import Account from "./account";
import Navbar from './navbar';
import "./navbar.css";
import "./AccountPage.css";
function AccountPage(){
    const [isBlind, getChildData] = useState(true)
    const dataFromChild = (childData) => {
        getChildData(childData)
        // console.log("ITS HERE")
    }
    return(
        <div id={`homepage ${isBlind ? 'dark':'light'}`} className='pageAccount'>
            <Navbar func = {dataFromChild}/>
            <Account/>
        </div>
    )
}
export default AccountPage