import { UserContext } from "../App";
import { readData } from "./firebaseservices";
import { useContext, useState } from "react";
import "./custrecinfo.css";

function CustInfo(props){

    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [userDetails, setUserDetails] = useState([]);

    // let userDetails = [];


    async function get(){
        if (currentUser == null && user != null) {
            setCurrentUser(user)
            setUserDetails(await readData("users", "", user));
        }
    }

    get();

    console.log(userDetails)

    return(
        <div className = {`custInfo${props.isHighContrast ? "Light" : "Dark"}`}>
            <h1 id="customerHeader">Customer Info</h1>
            <form id="customerForm">
                <div className = "custName">
                    <label for = "custName">Name:</label>
                    <input type = "text" readonly = "readonly" id = "custName" value = {userDetails.name}></input>
                </div>
                <div className = "custEmail">
                    <label for = "custEmail">Email:</label>
                    <input type = "email" id = "custEmail" value = {userDetails.email} readonly = "readonly"></input>
                </div>
                <div className = "custMob">
                    <label for = "custMob">Mobile Number:</label>
                    <input type = "text" id = "custMob" onInput = {(event) =>{
                        props.updateCustomerInfo("customer mobile", event.target.value);
                    }}></input>
                </div>
                <div className = "custAddress">
                    <label for = "custAdress">Address:</label>
                    <textarea id = "custAddress" onInput = {(event) =>{
                        props.updateCustomerInfo("customer address", event.target.value);
                    }}></textarea>
                </div>
                <div className = "custCity">
                    <label for = "custCity">City:</label>
                    <input type = "text" id = "custCity" onInput = {(event) =>{
                        props.updateCustomerInfo("customer city", event.target.value);
                    }}></input>
                </div>
                <div className = "custState">
                    <label for = "custState">State:</label>
                    <input type = "text" id = "custState" onInput = {(event) =>{
                        props.updateCustomerInfo("customer state", event.target.value);
                    }}></input>
                </div>
                <div className = "custCountry">
                    <label for = "custCountry">Country:</label>
                    <input type = "text" id = "custCountry" onInput = {(event) =>{
                        props.updateCustomerInfo("customer country", event.target.value);
                    }}></input>
                </div>
                <div className = "custPin">
                    <label for = "custPin">Pincode:</label>
                    <input type = "text" id = "custPin" onInput = {(event) =>{
                        props.updateCustomerInfo("customer pincode", event.target.value);
                    }}></input>
                </div>  
            </form> 
        </div>
    )
}

export default CustInfo;