import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../firebase";
import { Search } from "@material-ui/icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>

    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            className="login_logo"
            src="http://localhost:3000/Group 43 (2).png"
          />
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            
            {/* <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div> */}
          {/* </div>
          <div className="login__emailPass"> */}
            {/* <div className="login__label">
              <h3>Login</h3>
            </div> */}
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField_pass">
                <input
                  valuex={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
            </div>
            <div className="button_losi">
              <div className="login_button">
                <button onClick={handleSignIn}>Login</button>
              </div>
              <div className="signup_button">
                <button onClick={registerSignIn}>Register</button>
              </div>
            </div>
            <div className="or">
            <p>or</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
          </div>
        </div>
        <div className="login__authDesc">
              <p>
                By continuing you indicate that you have read and agree to
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                
              </p>
            </div>
        <div className="login__lang">
         
          <p>Help</p>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
        <div className="login__footer">
          <a href="about.html">About</a>
          <a href="privacy.html">Privacy</a>
          <a href="term.html">Terms</a>
          <a href="contact.html" className="contact">Contact</a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;