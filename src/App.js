import React from 'react';
// import './App.css';
import './components/index.css';
import Homepage from './components/Homepage';
import SignIn from './components/Sign';
import {BrowserRouter as Router, Route, Switch, Routes, BrowserRouter} from 'react-router-dom'
import ProductPage from './components/productpage';
import CartPage from './components/cartpage';
import { currentUser } from "./currentuser"

export const UserContext = React.createContext();

function MainPage() {
  
  return(
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<SignIn></SignIn>}/>
         <UserContext.Provider value = {currentUser}>
          <Route path='/home' element={<Homepage></Homepage>}/>
          <Route path='categories/Shoes' element={<ProductPage name='Shoes'/>}/>
          <Route path='categories/Electronics' element={<ProductPage name='Electronics'/>}/>
          <Route path='categories/Food' element={<ProductPage name='Food'/>}/>
          <Route path='cart' element={<CartPage/>}/>
         </UserContext.Provider>
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;