import { UserContext } from "../App";
import { readData } from "./firebaseservices";
import { useContext, useState } from "react";
import "./custrecinfo.css";


function RecInfo(props){

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
        <div className = {`recInfo${props.isHighContrast ? "Light" : "Dark"}`}>
            <form>
                <div className = "recName">
                    <label for = "recName">Name:</label>
                    <input type = "text" id = "recName"></input>
                </div>
                <div className = "recEmail">
                    <label for = "recEmail">Email:</label>
                    <input type = "email" id = "recEmail" ></input>
                </div>
                <div className = "recMob">
                    <label for = "recMob">Mobile Number:</label>
                    <input type = "text" id = "recMob"></input>
                </div>
                <div className = "recAddress">
                    <label for = "recAdress">Address:</label>
                    <textarea id = "recAddress"></textarea>
                </div>
                <div className = "recCity">
                    <label for = "recCity">City:</label>
                    <input type = "text" id = "recCity"></input>
                </div>
                <div className = "recState">
                    <label for = "recState">State:</label>
                    <input type = "text" id = "recState"></input>
                </div>
                <div className = "recCountry">
                    <label for = "recCountry">Country:</label>
                    <input type = "text" id = "recCountry"></input>
                </div>
                <div className = "recPin">
                    <label for = "recPin">Pincode:</label>
                    <input type = "text" id = "recPin"></input>
                </div>  
            </form> 
        </div>
    )
}

export default RecInfo;