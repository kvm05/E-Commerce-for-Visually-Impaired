import { UserContext, TTSContext, ContrastContext } from "../App";
import { readData } from "./firebaseservices";
import { useContext, useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import "./custrecinfo.css";

function CustInfo(props){

    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [userDetails, setUserDetails] = useState([]);
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader, changeScreenReader} = useContext(TTSContext);
    const {isHighContrast, changeContrast} = useContext(ContrastContext);


    // let userDetails = [];


    async function get(){
        if (currentUser == null && user != null) {
            setCurrentUser(user)
            setUserDetails(await readData("users", "", user));
        }
    }

    get();

    return(
        <div className = {`custInfo${isHighContrast ? "Light" : "Dark"}`}>
            <h1 id="customerHeader" onMouseEnter={() => screenReader?speak({text:"Input Customer Info below"}):cancel()} onMouseLeave={() => cancel()}>Customer Info</h1>
            <form id="customerForm">
                <div className = "custName">
                    <label for = "custName" onMouseEnter={() => screenReader?speak({text:"Input name below"}):cancel()} onMouseLeave={() => cancel()}>Name:</label>
                    <input type = "text" readonly = "readonly" id = "custName" value = {userDetails.name}></input>
                </div>
                <div className = "custEmail">
                    <label for = "custEmail" onMouseEnter={() => screenReader?speak({text:"Input email-id below"}):cancel()} onMouseLeave={() => cancel()}>Email:</label>
                    <input type = "email" id = "custEmail" value = {userDetails.email} readonly = "readonly"></input>
                </div>
                <div className = "custMob">
                    <label for = "custMob" onMouseEnter={() => screenReader?speak({text:"Input mobile number below"}):cancel()} onMouseLeave={() => cancel()}>Mobile Number:</label>
                    <input type = "text" id = "custMob" onInput = {(event) =>{
                        props.updateCustomerInfo("customerMobile", event.target.value);
                    }}></input>
                </div>
                <div className = "custAddress">
                    <label for = "custAdress" onMouseEnter={() => screenReader?speak({text:"Input address below"}):cancel()} onMouseLeave={() => cancel()}>Address:</label>
                    <textarea id = "custAddress" onInput = {(event) =>{
                        props.updateCustomerInfo("customerAddress", event.target.value);
                    }}></textarea>
                </div>
                <div className = "custCity">
                    <label for = "custCity" onMouseEnter={() => screenReader?speak({text:"Input city below"}):cancel()} onMouseLeave={() => cancel()}>City:</label>
                    <input type = "text" id = "custCity" onInput = {(event) =>{
                        props.updateCustomerInfo("customerCity", event.target.value);
                    }}></input>
                </div>
                <div className = "custState">
                    <label for = "custState" onMouseEnter={() => screenReader?speak({text:"Input state below"}):cancel()} onMouseLeave={() => cancel()}>State:</label>
                    <input type = "text" id = "custState" onInput = {(event) =>{
                        props.updateCustomerInfo("customerState", event.target.value);
                    }}></input>
                </div>
                {/* <div className = "custCountry">
                    <label for = "custCountry" onMouseEnter={() => screenReader?speak({text:"Input country below"}):cancel()} onMouseLeave={() => cancel()}>Country:</label>
                    <input type = "text" id = "custCountry" onInput = {(event) =>{
                        props.updateCustomerInfo("customerCountry", event.target.value);
                    }}></input>
                </div> */}
                <div className = "custPin">
                    <label for = "custPin" onMouseEnter={() => screenReader?speak({text:"Input pincode below"}):cancel()} onMouseLeave={() => cancel()}>Pincode:</label>
                    <input type = "text" id = "custPin" onInput = {(event) =>{
                        props.updateCustomerInfo("customerPincode", event.target.value);
                    }}></input>
                </div>  
            </form> 
        </div>
    )
}

export default CustInfo;