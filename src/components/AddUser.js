import "./AddUser.css"
import "./Sign"

function AddUser(props){
    return(
        <div className = "AddUser">
            <h2>Add User</h2>
            <form>
                <div>
                    <label for = "AddUserName">Name:</label>
                    <input type = "text" id = "AddUserName" placeholder = "Enter your name:"></input>
                </div>
                <div>
                    <label for = "AddUserEmail">Email:</label>
                    <input type = "email" id = "AddUserEmail" placeholder = "Enter your email:"></input>
                </div>
                <div>
                    <label for = "AddUserPassword">Password:</label>
                    <input type = "password" id = "AddUserPassword" placeholder = "Enter your password:"></input>
                </div>
                <div>
                    <label for = "AddUserConfirmPassword">Confirm Password:</label>
                    <input type = "password" id = "AddUserConfirmPassword" placeholder = "Confirm password:"></input>
                </div>
            </form>
            <button>Add User</button>
        </div>
    )
}

export default AddUser;