import { useNavigate } from 'react-router-dom'
import "./AdminSidebar.css";

function AdminSidebar(props){
    const navigate = useNavigate();
    return(
        <div className = "AdminSidebar">
            <h2>Admin Panel</h2>
            <div className = "adminButtons">
                <button onClick = {() => {
                    props.displayComponent(0);
                }}><i class="fa-solid fa-house"></i>Dashboard</button>
                <button onClick = {() => {
                    props.displayComponent(1);
                }}><i class="fa-solid fa-users"></i>Users</button>
                <button onClick = {() => {
                    props.displayComponent(2);
                }}><i class="fa-solid fa-bag-shopping"></i>Products</button>
                <button onClick = {() => {
                    navigate('/Sign');
                }}><i class="fa-solid fa-right-from-bracket"></i>Logout</button>
            </div>
        </div>
    )
}

export default AdminSidebar;