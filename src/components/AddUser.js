import "./AddUser.css"
import "./Sign"

function AddUser(props){
    return(
        <div className = "AddUser">
            <h2>Add User</h2>
            <form>
                <div>
                    <label for = "AddUserName">Name:</label>
                    <input type = "text" id = "AddUserName" placeholder = "Enter your name:" onInput = {(event) =>{
                        props.storeUserInfo("name", event.target.value);
                    }}></input>
                </div>
                <div>
                    <label for = "AddUserEmail">Email:</label>
                    <input type = "email" id = "AddUserEmail" placeholder = "Enter your email:"  onInput = {(event) =>{
                        props.storeUserInfo("email", event.target.value);
                    }}></input>
                </div>
                <div>
                    <label for = "AddUserPassword">Password:</label>
                    <input type = "password" id = "AddUserPassword" placeholder = "Enter your password:"  onInput = {(event) =>{
                        props.storeUserInfo("password", event.target.value);
                    }}></input>
                </div>
                <div>
                    <label for = "AddUserConfirmPassword">Confirm Password:</label>
                    <input type = "password" id = "AddUserConfirmPassword" placeholder = "Confirm password:"  onInput = {(event) =>{
                        props.storeUserInfo("confirmedPassword", event.target.value);
                    }}></input>
                </div>
            </form>
            <button onClick = {() =>
            props.addUser()}>Add User</button>
        </div>
    )
}

export default AddUser;