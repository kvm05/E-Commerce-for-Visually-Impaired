import ManageUsers from "./ManageUsers";
import {useState} from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminPanel.css";
import ManageProducts from "./ManageProducts";
import AdminDashboard from "./AdminDashboard";

function AdminPanel(){

    const [componentToBeDisplayed, setComponentToBeDisplayed] = useState(0);
    function displayComponent(number){
        setComponentToBeDisplayed(number);
    }
    const components = [
        <AdminDashboard></AdminDashboard>,
        <ManageUsers></ManageUsers>,
        <ManageProducts></ManageProducts>
    ]
    return(
        <div className = "AdminPanel">
        <AdminSidebar displayComponent = {displayComponent}></AdminSidebar>
        {components[componentToBeDisplayed]}
        </div>
    )
}

export default AdminPanel;