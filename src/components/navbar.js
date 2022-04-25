import React, { useRef, useState, useContext } from 'react';
// import './App.css';
import './index.css';
import "./Categories.css"
import { Link, useNavigate } from "react-router-dom";
import {DetectOutsideClick} from "./DetectOutsideClick"; 
import { getAuth, signOut } from "firebase/auth";
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { UserContext, SearchContext, TTSContext } from '../App';

const Navbar = (props)  =>{
  const dropdownRef = useRef(null);
  const [isClicked, setClicked] = DetectOutsideClick(dropdownRef, false);
  const {user, setUser} = useContext(UserContext);
  const {screenReader, changeScreenReader} = useContext(TTSContext);
  const {speak, cancel} = useSpeechSynthesis();
  const { listen, stop, listening} = useSpeechRecognition({
    onResult: (result) => {
      setValueToBeSearched(result)
    }
  })
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
      setUser(null)
      console.log('Signed Out')
    }).catch((error) => {
      // An error happened.
    });
  }

  const {valueToBeSearched,setValueToBeSearched} = useContext(SearchContext);
  
  return (
    <div id = {`navbar ${isBlind ? 'dark':'light'}`}>
      <div id='left-navbar'>
        <Link id='MyLink' to = '/'>
          <div id = {`logo${isBlind ? 'dark':'light'}`}>
            Logo
          </div>  
        </Link>
      </div> 
      <div id='right-navbar'>
        <div id='searchbar'>
          <input type="search" id = {`search ${isBlind ? 'dark':'light'}`} placeholder='Search' onMouseEnter={() => screenReader?speak({text:"Search"}):cancel()} onMouseLeave={() => cancel()} onInput = {(event) =>{
            console.log(event.target.value);
            setValueToBeSearched(event.target.value);
          }} value={valueToBeSearched}/>
          <button id = {`search-button ${isBlind ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text:`Click to search`}):cancel()} onMouseLeave={() => cancel()}>
            <i class="fas fa-magnifying-glass"></i>
          </button>
          <button id = {`search-button ${isBlind ? 'dark':'light'}`} onClick={() => {
            if(listening){
              stop()
            }
            else{
              listen()
            }
          }} onMouseEnter={() => screenReader?speak({text:`Click for voice input`}):cancel()} onMouseLeave={() => cancel()}>
            <i class="fa-solid fa-microphone"></i>
          </button>
        </div>
        <div id='toggle1'>
          <div id='toggle1text' onMouseEnter={() => screenReader?speak({text:`High Contrast: ${isBlind ? 'On' : 'Off'}`}):cancel()} onMouseLeave={() => cancel()}>{`High Contrast: ${isBlind ? 'On' : 'Off'}`}</div>
          <label className="switch" onMouseEnter={() => screenReader?speak({text:`Toggle for High Contrast Currently: ${isBlind ? 'On' : 'Off'}`}):cancel()} onMouseLeave={() => cancel()}>
            <input type="checkbox" onClick={() => {
              isCheckBlind()
              speak({text:`Toggling High Contrast ${!isBlind?'On':'Off'}`})
            }} defaultChecked={true} checked={isBlind}  />
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
          <button id={`profile${isBlind ? 'dark':'light'}`} onClick={onClick}  onMouseEnter={() => screenReader?speak({text:"Click to see profile or logout"}):cancel()} onMouseLeave={() => cancel()}>
            <i className="fas fa-user"></i>
          </button>
          <div className={`menu ${isClicked ? 'active':'inactive'} ${isBlind ? 'dark':'light'}`}>
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
            <button id={`login-button${isBlind ? 'dark':'light'}`} onMouseEnter={() => screenReader?speak({text:"Login"}):cancel()} onMouseLeave={() => cancel()}>
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