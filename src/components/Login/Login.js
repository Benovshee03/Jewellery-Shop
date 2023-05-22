import React, { useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import LogCss from "../Login/Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "../svg/8.png";
import { Link } from "react-router-dom";
export default function Login() {


    return (
      <>
        <Header />
        <section className={LogCss.log}>
          <div className={LogCss.mid}>
            <div className={LogCss.login}>
              <h3 className={LogCss.logtext}>Login</h3>
              <p className={LogCss.text}>
                Welcome back! Log into your account below to continue.
              </p>
              <form>
                <TextField
                  required
                  id="outlined-required"
                  label="Your email adress"
                  type="email"
                  className={LogCss.myinput}
                  sx={{ mt: 1, mr: 1 }}
                />
                <TextField
                  id="outlined-password-input"
                  label="Enter your password"
                  type="password"
                  autoComplete="current-password"
                  className={LogCss.myinput}
                  sx={{ mt: 1, mr: 1 }}
                />
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Log In
                </Button>
              </form>
              <div className={LogCss.regis}>
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </div>
            <div className={LogCss.register}>
              <img className={LogCss.logImage} src={image} alt="" />
            </div>
          </div>
        </section>
      </>
    );
  };
