import React, { useEffect, useState } from 'react';
// import './App.css';
import './components/index.css';
import Homepage from './components/Homepage';
import SignIn from './components/Sign';
import {BrowserRouter as Router, Route, Switch, Routes, BrowserRouter} from 'react-router-dom'
import ProductPage from './components/productpage';
import CartPage from './components/cartpage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { currentUser } from "./components/currentuser"

export const UserContext = React.createContext({
  user: {},
  setUser: () => {}
});

function MainPage() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user)
          console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])
  
  return(
    <UserContext.Provider value = {{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn></SignIn>}/>
            <Route path='/home' element={<Homepage></Homepage>}/>
            <Route path='categories/Shoes' element={<ProductPage name='Shoes'/>}/>
            <Route path='categories/Electronics' element={<ProductPage name='Electronics'/>}/>
            <Route path='categories/Food' element={<ProductPage name='Food'/>}/>
            <Route path='cart' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default MainPage;