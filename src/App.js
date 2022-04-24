import React, { useEffect, useState } from "react";
// import './App.css';
import "./components/index.css";
import Homepage from "./components/Homepage";
import SignIn from "./components/Sign";
import AccountPage from "./components/AccountPage"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProductPage from "./components/productpage";
import CartPage from "./components/cartpage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { currentUser } from "./components/currentuser"
import { PrivateRoute } from "./components/PrivateRoute";
import Wishlist from "./components/wishlist";
import BillingPage from "./components/billingpage";

export const UserContext = React.createContext({
  user: {},
  setUser: () => {},
});

export const OrderContext = React.createContext({
  orderTotal: 0,
  setOrderTotal: () => {},
});

export const SearchContext = React.createContext({
  valueToBeSearched: "",
  setValueToBeSearched: () => {},
})

function MainPage() {
  const [user, setUser] = useState(null);
  const [orderTotal, setOrderTotal] = useState(0);
  const [valueToBeSearched, setValueToBeSearched] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <OrderContext.Provider value = {{orderTotal, setOrderTotal}}>
        <SearchContext.Provider value = {{valueToBeSearched, setValueToBeSearched}}>
          <BrowserRouter> 
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/sign" element={<SignIn></SignIn>} />
              <Route
                path="categories/Shoes"
                element={<ProductPage name="Shoes" />}
              />
              <Route
                path="categories/Electronics"
                element={<ProductPage name="Electronics" />}
              />
              <Route path="categories/Food" element={<ProductPage name="Food" />} />
              <Route
                path="categories/Clothes"
                element={<ProductPage name="Clothes" />}
              />
              <Route path="cart" element={<CartPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path = "wishlist" element = {<Wishlist />} />
              <Route path = "billing" element = {<BillingPage />} />
            </Routes>
          </BrowserRouter>
        </SearchContext.Provider>
      </OrderContext.Provider>
    </UserContext.Provider>
  );
}

export default MainPage;
