import React, { useEffect } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
// import {app, database} from "./Firebase";
import { getAuth, signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";


function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form_message");
  messageElement.textContent = message;
  messageElement.classList.remove("form_message_success", "form_message_error");
  messageElement.classList.add("form_message_${type}");
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form_input_error");
  inputElement.parentElement.querySelector(".form_input_errormsg").textContent =
    message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form_input_error");
  inputElement.parentElement.querySelector(".form_input_errormsg").textContent =
    "";
}

function Sign() {
  useEffect(() => {
    const loginForm = document.querySelector("#login");
      const createAccountForm = document.querySelector("#signUp");

      document
        .querySelector("#createAccount")
        .addEventListener("click", (e) => {
          console.log('Hello')
          // e.preventDefault();
          loginForm.classList.add("form_hidden");
          createAccountForm.classList.remove("form_hidden");
        });

      document.querySelector("#linkLogin").addEventListener("click", (e) => {
        // e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
      });

      loginForm.addEventListener("submit", (e) => {
        // e.preventDefault();
        // setFormMessage(
        //   loginForm,
        //   "error",
        //   "Invalid username/password combination"
        // );
      });

      document.querySelectorAll(".form_input").forEach((inputElement) => {
        inputElement.addEventListener("blur", (e) => {
          
        });

        inputElement.addEventListener("input", (e) => {
          clearInputError(inputElement);
        });
      });
  });
  const googleLogin = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
  }
  const emailLogin = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <div className="signin">
        <div className="container">
        <form className="form" id="login">
          <h1 className="form_title">Login</h1>
          <div className="form_message form_message_error"></div>
          <div className="form_input-group">
            <input
              type="text"
              className="form_input"
              autoFocus
              placeholder="Username or Email"
            />
            <div className="form_input_errormsg"></div>
          </div>
          <div className="form_input-group">
            <input
              type="password"
              className="form_input"
              autoFocus
              placeholder="Password"
            />
            <div className="form_input_errormsg"></div>
          </div>
          <Link to='/home'>
            <button className="form_button" type="submit">
              Continue
            </button>
          </Link>
          <p className="form_text">
            <a href="#" className="form_link">
              Forgotten password?
            </a>
          </p>
          <p className="form_text">
            Don't have an account yet?
            <a href="#" className="form_link" id="createAccount">
              Sign up
            </a>
          </p>
          <div className="or">
            -OR- <br/>
            <button className="google" onClick={googleLogin}><i class="fab fa-google"></i></button>
          </div>
          
        </form>

        <form className="form form_hidden" id="signUp">
          <h1 className="form_title">Create Account</h1>
          <div className="form_message form_message_error"></div>
          <div className="form_input-group">
            <input
              type="text"
              className="form_input"
              autoFocus
              placeholder="Email Address"
            />
            <div className="form_input_errormsg"></div>
          </div>
          <div className="form_input-group">
            <input
              type="password"
              className="form_input"
              autoFocus
              placeholder="Password"
            />
            <div className="form_input_errormsg"></div>
          </div>
          <div className="form_input-group">
            <input
              type="password"
              className="form_input"
              autoFocus
              placeholder="Confirm password"
            />
            <div className="form_input_errormsg"></div>
          </div>
          <button className="form_button" type="submit">
            Continue
          </button>
          <p className="form_text">
            Already have an account?
            <a href="#" className="form_link" id="linkLogin">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Sign;
