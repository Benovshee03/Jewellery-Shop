import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContext  } from "../../App";
import Header from "../Header/Header";
import LogCss from "../Login/Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "../svg/8.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { TokenContext } from "../TokenContext";
export default function Login() {
  const { opacity } = useContext(MyContext);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const config = { headers: { "Content-Type": "application/json" } };
  const [loggedIn, setLoggedIn] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const {access, refresh} = useContext(TokenContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://91.107.207.100:81/api/accounts/login/",
        JSON.stringify(userData),
        config
      )
      .then((response) => {
        console.log(response);
        if (response.data.message === "success") {

          handleLogin(access, refresh);
          navigate("/dashboard");
          setLoggedIn(true);
        } else {
          setErrMsg("Email or password is incorrect.");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("An error occurred during login. Please try again.");
      });
  };
  const handleClick = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  
  const { handleLogin } = useContext(TokenContext);
  return (
    <>
      <Header />
      <section className={LogCss.log} style={{ opacity }}>
        <div className={LogCss.mid}>
        {loggedIn ? (
            <Dashboard />
          ) : (
            <div className={LogCss.login}>
              <h3 className={LogCss.logtext}>Login</h3>
              <p className={LogCss.text}>
                Welcome back! Please log in to your account.
              </p>
              <form onSubmit={handleSubmit}>
                <p
                  className={
                    errMsg ? LogCss.errmsg : LogCss.offscreen
                  }
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <TextField
                  required
                  id="outlined-required"
                  label="Your email address"
                  type="email"
                  name="email"
                  className={LogCss.myinput}
                  sx={{ mt: 1, mr: 1 }}
                  onChange={handleClick}
                />
                <TextField
                  id="outlined-password-input"
                  label="Enter password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  className={LogCss.myinput}
                  sx={{ mt: 1, mr: 1 }}
                  onChange={handleClick}
                  
                />
                <Button
                  sx={{ mt: 1, mr: 1 }}
                  type="submit"
                  variant="outlined"
                >
                  Log In
                </Button>
              </form>
              <div className={LogCss.regis}>
                Don't have an account?{" "}
                <Link to="/register">Register</Link>
              </div>
            </div>
          )}
          <div className={LogCss.register}>
            <img className={LogCss.logImage} src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
