import React from 'react';
// import './App.css';
import './components/index.css';
import Homepage from './components/Homepage';
import SignIn from './components/Sign';
import {BrowserRouter as Router, Route, Switch, Routes, BrowserRouter} from 'react-router-dom'

function MainPage() {
  return(
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<SignIn></SignIn>}/>
        <Route path='/home' element={<Homepage></Homepage>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;