import { getAllUsers, getAllProducts } from "./firebaseservices";
import {useEffect, useState} from "react"
import "./AdminDashboard.css";

function AdminDashboard(){
    const [allUsers, setAllUsers] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    
    async function get(){
        const tempUsers = await getAllUsers();
        setAllUsers(tempUsers);
        const tempProducts = await getAllProducts();
        setAllProducts(tempProducts);
    }

    useEffect(get, []);


    return (
        <div className = "AdminDashboard">
            <h1>Dashboard</h1>
            <div className = "dashboard">
            <div className = "usageStats">
            <h2>Users</h2>
            <div className = "userStats">
                <i class="fa-solid fa-users"></i>
                <p>{allUsers.length}</p>
            </div>
            </div>
            <div className = "usageStats">
            <h2>Products</h2>
            <div className = "productStats">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>{allProducts.length}</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default AdminDashboard;