import ManageUsers from "./ManageUsers";
import {useState} from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminPanel.css";

function AdminPanel(){

    const [componentToBeDisplayed, setComponentToBeDisplayed] = useState(0);
    function displayComponent(number){
        setComponentToBeDisplayed(number);
    }
    const components = [
        // <AdminDashboard></AdminDashboard>,
        <ManageUsers displayComponent = {displayComponent}></ManageUsers>,
        // <ManageProducts></ManageProducts>
    ]
    return(
        <div className = "AdminPanel">
        <AdminSidebar></AdminSidebar>
        {components[componentToBeDisplayed]}
        </div>
    )
}

export default AdminPanel;