import React, { useRef, useState, useContext } from 'react';
// import './App.css';
import './index.css';
import "./Categories.css"
import { Link, useNavigate } from "react-router-dom";
import {DetectOutsideClick} from "./DetectOutsideClick"; 
import { getAuth, signOut } from "firebase/auth";
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { UserContext, SearchContext, TTSContext, ContrastContext } from '../App';

const Navbar = (props)  =>{
  const dropdownRef = useRef(null);
  const [isClicked, setClicked] = DetectOutsideClick(dropdownRef, false);
  const {user, setUser} = useContext(UserContext);
  const {screenReader, changeScreenReader} = useContext(TTSContext);
  const {isHighContrast, changeContrast} = useContext(ContrastContext);
  const navigate = useNavigate()
  const {speak, cancel} = useSpeechSynthesis();
  const { listen, stop, listening} = useSpeechRecognition({
    onResult: (result) => {
      setValueToBeSearched(result)
    }
  })
  const onClick = () => setClicked(!isClicked);
  const isCheckBlind = () =>{ 
    changeContrast(!isHighContrast)
  }
  const auth = getAuth();
  const emailSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null)
      console.log('Signed Out')
    }).catch((error) => {
      // An error happened.
    });
  }

  const {valueToBeSearched,setValueToBeSearched} = useContext(SearchContext);
  
  const goToCat = () => {
    const index = valueToBeSearched.indexOf("go to");
    if(index!==-1){
      const cat = valueToBeSearched.slice(index+6,valueToBeSearched.length)
      const category = cat.charAt(0).toUpperCase() + cat.slice(1);
      const path = "/categories/".concat(category)
      // console.log(category)
      setValueToBeSearched('')
      navigate(path)
    }
    else{
      const index2 = valueToBeSearched.indexOf("open");
      if(index2!==-1){
        const cat = valueToBeSearched.slice(index2+5,valueToBeSearched.length)
        const category = cat.charAt(0).toUpperCase() + cat.slice(1);
        const path = "/categories/".concat(category)
        console.log(path)
        setValueToBeSearched('')
        navigate(path)
      }
    }
  }
  return (
    <div id = {`navbar ${isHighContrast ? 'dark':'light'}`}>
      <div id='left-navbar'>
        <Link id='MyLink' to = '/'>
          <div id = {`logo${isHighContrast ? 'dark':'light'}`}>
            Logo
          </div>  
        </Link>
      </div> 
      <div id='right-navbar'>
        <div id='searchbar'>
          <input type="search" id = {`search ${isHighContrast ? 'dark':'light'}`} placeholder='Search' onMouseEnter={() => screenReader?speak({text:"Search"}):cancel()} onMouseLeave={() => cancel()} onInput = {(event) =>{
            console.log(event.target.value);
            setValueToBeSearched(event.target.value);
          }} value={valueToBeSearched}/>
          <button id = {`search-button ${isHighContrast ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text:`Click to search`}):cancel()} onMouseLeave={() => cancel()}>
            <i class="fas fa-magnifying-glass"></i>
          </button>
          <button id = {`search-button ${isHighContrast ? 'dark':'light'}`} onClick={() => {
            if(listening){
              goToCat()
              stop()
            }
            else{
              listen()
            }
          }} onMouseEnter={() => screenReader?speak({text:`Click for voice input`}):cancel()} onMouseLeave={() => cancel()}>
            {listening?<i class="fa-solid fa-microphone-slash"></i>:<i class="fa-solid fa-microphone"></i>}
          </button>
        </div>
        <div id='toggle1'>
          <div id='toggle1text' onMouseEnter={() => screenReader?speak({text:`High Contrast: ${isHighContrast ? 'On' : 'Off'}`}):cancel()} onMouseLeave={() => cancel()}>{`High Contrast: ${isHighContrast ? 'On' : 'Off'}`}</div>
          <label className="switch" onMouseEnter={() => screenReader?speak({text:`Toggle for High Contrast Currently: ${isHighContrast ? 'On' : 'Off'}`}):cancel()} onMouseLeave={() => cancel()}>
            <input type="checkbox" onClick={() => {
              isCheckBlind()
              screenReader?speak({text:`Toggling High Contrast ${!isHighContrast?'On':'Off'}`}):cancel()
            }} defaultChecked={true} checked={isHighContrast}  />
              <span className="slider round"></span>
            </label>
        </div>
        <div id='toggle2'>
          <div id='toggle2text'  onMouseEnter={() => screenReader?speak({text:`Screen Reader: ${screenReader ? 'On' : 'Off'}`}):cancel()} onMouseLeave={() => cancel()}>{`Screen Reader: ${screenReader ? 'On' : 'Off'}`}</div>
          <label className="switch" onMouseEnter={() => screenReader?speak({text:`Toggle for Screen Reader Currently: ${screenReader ? 'On' : 'Off'}`}):cancel()} onMouseLeave={() => cancel()}>
            <input type="checkbox" onClick={() => {
              changeScreenReader(!screenReader)
              speak({text:`Toggling Screen Reader ${!screenReader?"On":"Off"}`})
            }} defaultChecked={true} checked={screenReader}/>
              <span className="slider round"></span>
          </label>
        </div>
        {(user) ? 
        <div id='profile-bar'>
          <button id={`profile${isHighContrast ? 'dark':'light'}`} onClick={onClick}  onMouseEnter={() => screenReader?speak({text:"Click to see profile or logout"}):cancel()} onMouseLeave={() => cancel()}>
            <i className="fas fa-user"></i>
          </button>
          <div className={`menu ${isClicked ? 'active':'inactive'} ${isHighContrast ? 'dark':'light'}`}>
            <Link to='/account' id='MyLink'>
              <div id='my-profile'  onMouseEnter={() => screenReader?speak({text:"Click to see profile"}):cancel()} onMouseLeave={() => cancel()}>
                My Profile              
              </div>
            </Link>
            <Link id='MyLink' to='/sign'>
              <div id='logout' onClick={emailSignOut}  onMouseEnter={() => screenReader?speak({text:"Logout"}):cancel()} onMouseLeave={() => cancel()}>
                <i class="fas fa-arrow-right-from-bracket"></i>Logout             
              </div>
            </Link>
          </div>
        </div> : 
        <div>
          <Link id='MyLink' to='/sign'>
            <button id={`login-button${isHighContrast ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text:"Login"}):cancel()} onMouseLeave={() => cancel()}>
              Login
            </button>
          </Link>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar;