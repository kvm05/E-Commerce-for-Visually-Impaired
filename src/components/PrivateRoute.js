import React,{useContext} from 'react'
import { UserContext } from "../App";
import Homepage from './Homepage';
import SignIn from "./Sign";
import { Route, Routes, BrowserRouter,Navigate} from 'react-router-dom';



export const PrivateRoute = ({children}) => {
    const {user} = useContext(UserContext);
  
    return user ? <Homepage/> : <Navigate to="/" />;
}
