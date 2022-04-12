import React, { useRef, useState, useContext } from 'react';
// import './App.css';
import './index.css';
import "./Categories.css"
import { Link, useNavigate } from "react-router-dom";
import {DetectOutsideClick} from "./DetectOutsideClick"; 
import { getAuth, signOut } from "firebase/auth";
import { useSpeechSynthesis } from 'react-speech-kit';
import { UserContext } from '../App';

const Navbar = (props)  =>{
  const dropdownRef = useRef(null);
  const [isClicked, setClicked] = DetectOutsideClick(dropdownRef, false);
  const {user} = useContext(UserContext);
  const {speak, cancel} = useSpeechSynthesis();
  const onClick = () => setClicked(!isClicked);
  const [isBlind, setBlind] = useState(true)
  const isCheckBlind = () =>{ setBlind(!isBlind)
  props.func(!isBlind)
}
  const auth = getAuth();
  const emailSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Signed Out')
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div id = {`navbar ${isBlind ? 'dark':'light'}`}>
      <div id='left-navbar'>
        <Link id='MyLink' to = '/home'>
          <div id = 'logo'>
            Logo
          </div>  
        </Link>
      </div> 
      <div id='right-navbar'>
        <div id='searchbar' onMouseEnter={() => speak({text:"Search"})} onMouseLeave={() => cancel()}>
          <input type="search" id = {`search ${isBlind ? 'dark':'light'}`} placeholder='Search' onInput = {(event) =>{
            console.log(event.target.value);
            props.search(event.target.value);
          }}/>
          <button id = {`search-button ${isBlind ? 'dark':'light'}`}>
            <i class="fas fa-magnifying-glass"></i>
          </button>
        </div>
        <div id='toggle1'>
          <div id='toggle1text' onMouseEnter={() => speak({text:`High Contrast: ${isBlind ? 'On' : 'Off'}`})} onMouseLeave={() => cancel()}>{`High Contrast: ${isBlind ? 'On' : 'Off'}`}</div>
          <label className="switch" onMouseEnter={() => speak({text:`Toggle for High Contrast Currently: ${isBlind ? 'On' : 'Off'}`})} onMouseLeave={() => cancel()}>
            <input type="checkbox" onClick={() => {
              isCheckBlind()
              speak({text:"Toggling High Contrast"})
            }} defaultChecked={true} checked={isBlind}  />
              <span className="slider round"></span>
            </label>
        </div>
        <div id='toggle2'>
          <div id='toggle2text'  onMouseEnter={() => speak({text:"Screen Reader"})} onMouseLeave={() => cancel()}>Screen Reader</div>
          <label className="switch">
            <input type="checkbox" checked/>
              <span className="slider round"></span>
          </label>
        </div>
        {(user) ? 
        <div id='profile-bar'>
          <button id='profile' onClick={onClick}  onMouseEnter={() => speak({text:"Click to see profile or logout"})} onMouseLeave={() => cancel()}>
            <i className="fas fa-user"></i>
          </button>
          <div className={`menu ${isClicked ? 'active':'inactive'} ${isBlind ? 'dark':'light'}`}>
            <div id='my-profile'  onMouseEnter={() => speak({text:"Currently Disabled"})} onMouseLeave={() => cancel()}>
              My Profile              
            </div>
            <Link id='MyLink' to='/'>
              <div id='logout' onClick={emailSignOut}  onMouseEnter={() => speak({text:"Logout"})} onMouseLeave={() => cancel()}>
                <i class="fas fa-arrow-right-from-bracket"></i>Logout             
              </div>
            </Link>
          </div>
        </div> : 
        <div>
          <button id="login">
            Log In!
          </button>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar;