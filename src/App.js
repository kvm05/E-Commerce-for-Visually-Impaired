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
import { useSpeechSynthesis } from 'react-speech-kit';
// import { currentUser } from "./components/currentuser"
import { PrivateRoute } from "./components/PrivateRoute";
import Wishlist from "./components/wishlist";
import BillingPage from "./components/billingpage";
import DetailedProducts from "./components/detailedproducts";
import AdminPanel from "./components/AdminPanel";

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

export const VoiceInputContext = React.createContext({
  voiceInput: "",
  setVoiceInput: () => {},
})

export const VoicePopupContext = React.createContext({
  voicePopup: "",
  setVoicePopup: () => {},
})

export const TTSContext = React.createContext({})

export const ContrastContext = React.createContext({})

function MainPage() {
  const [user, setUser] = useState(null);
  const [orderTotal, setOrderTotal] = useState(0);
  const [valueToBeSearched, setValueToBeSearched] = useState("");
  const [voiceInput, setVoiceInput] = useState("");
  const [voicePopup, setVoicePopup] = useState("");
  const [screenReader, changeScreenReader] = useState(true);
  const [isHighContrast, changeContrast] = useState(true);
  const {speak, cancel} = useSpeechSynthesis();
  window.onscroll = function(event) {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            console.log("End of page");
            screenReader?speak({text:"You have reached the bottom of the page"}):cancel()
        }
    }
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
          <VoicePopupContext.Provider value = {{voicePopup, setVoicePopup}}>
            <VoiceInputContext.Provider value = {{voiceInput, setVoiceInput}}>
              <TTSContext.Provider value={{screenReader, changeScreenReader}}>
                <ContrastContext.Provider value = {{isHighContrast, changeContrast}}>
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
                      <Route path = "categories/Search" element = {<ProductPage name = "Search Results" />} />
                      <Route path="cart" element={<CartPage />} />
                      <Route path="account" element={<AccountPage />} />
                      <Route path = "wishlist" element = {<Wishlist />} />
                      <Route path = "billing" element = {<BillingPage />} />
                      <Route path = "admin" element = {<AdminPanel />} />
                    </Routes>
                  </BrowserRouter>
                </ContrastContext.Provider>
              </TTSContext.Provider>
            </VoiceInputContext.Provider>
          </VoicePopupContext.Provider>
        </SearchContext.Provider>
      </OrderContext.Provider>
    </UserContext.Provider>
    // <DetailedProducts/>
  );
}

export default MainPage;
