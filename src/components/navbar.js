import React, {useRef, useState} from 'react';
// import './App.css';
import './index.css';
import "./Categories.css"
import { Link, useNavigate } from "react-router-dom";
import {DetectOutsideClick} from "./DetectOutsideClick"; 

const Navbar = (props)  =>{
  const dropdownRef = useRef(null);
  const [isClicked, setClicked] = DetectOutsideClick(dropdownRef, false);
  const onClick = () => setClicked(!isClicked);
  const [isBlind, setBlind] = useState(false)
  const isCheckBlind = () =>{ setBlind(!isBlind)
  props.func(!isBlind)
}
  
  return (
    <div id = {`navbar ${isBlind ? 'dark':'light'}`}>
      <div id='left-navbar'>
        <div id = 'logo'>
          Logo
        </div>  
      </div> 
      <div id='right-navbar'>
        <div id='searchbar'>
          <input type="search" id = {`search ${isBlind ? 'dark':'light'}`} placeholder='Search' />
          <button id = {`search-button ${isBlind ? 'dark':'light'}`}>
            <i class="fas fa-magnifying-glass"></i>
          </button>
        </div>
        <div id='toggle1'>
          <div id='toggle1text'>{`High Contrast: ${isBlind ? 'On' : 'Off'}`}</div>
          <label className="switch">
            <input type="checkbox" onClick={isCheckBlind}/>
              <span className="slider round"></span>
            </label>
        </div>
        <div id='toggle2'>
          <div id='toggle2text'>Screen Reader</div>
          <label className="switch">
            <input type="checkbox" />
              <span className="slider round"></span>
          </label>
        </div>
        <div id='profile-bar'>
          <button id='profile' onClick={onClick}>
            <i className="fas fa-user"></i>
          </button>
          <div className={`menu ${isClicked ? 'active':'inactive'} ${isBlind ? 'dark':'light'}`}>
            <div id='my-profile'>
              My Profile              
            </div>
            <Link id='MyLink' to='/'>
              <div id='logout'>
                <i class="fas fa-arrow-right-from-bracket"></i>Logout             
              </div>
            </Link>
          </div>
          {/* add my profile and logout option with display hide and stuff */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;