import { UserContext } from "../App";
import { readData } from "./firebaseservices";
import { useContext, useState } from "react";
import "./custrecinfo.css";

function CustInfo(props){

    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);

    let userDetails = [];


    async function get(){
        if (currentUser == null && user != null) {
            setCurrentUser(user)
            userDetails = await readData("users", "", user);
        }
    }

    get();

    return(
        <div className = {`custInfo${props.isHighContrast ? "Light" : "Dark"}`}>
            <form>
                <div className = "custName">
                    <label for = "custName">Name:</label>
                    <input type = "text" id = "custName" defaultValue = {userDetails.name} disabled></input>
                </div>
                <div className = "custEmail">
                    <label for = "custEmail">Email:</label>
                    <input type = "email" id = "custEmail" defaultValue = {userDetails.email} disabled></input>
                </div>
                <div className = "custMob">
                    <label for = "custMob">Mobile Number:</label>
                    <input type = "text" id = "custMob"></input>
                </div>
                <div className = "custAddress">
                    <label for = "custAdress">Address:</label>
                    <textarea id = "custAddress"></textarea>
                </div>
                <div className = "custCity">
                    <label for = "custCity">City:</label>
                    <input type = "text" id = "custCity"></input>
                </div>
                <div className = "custState">
                    <label for = "custState">State:</label>
                    <input type = "text" id = "custState"></input>
                </div>
                <div className = "custCountry">
                    <label for = "custCountry">Country:</label>
                    <input type = "text" id = "custCountry"></input>
                </div>
                <div className = "custPin">
                    <label for = "custPin">Pincode:</label>
                    <input type = "text" id = "custPin"></input>
                </div>  
            </form> 
        </div>
    )
}

export default CustInfo;