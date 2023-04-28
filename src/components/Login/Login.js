import React from "react";
import Header from "../Header/Header";
import LogCss from "../Login/Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

import { Link } from "react-router-dom";
export default function Login() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
          </div>
          <div className={LogCss.register}>
            <h2 className={LogCss.logtext}>Register</h2>
            <p className={LogCss.text}>
              Thanks for signing up! We're happy to have you.
            </p>
            <div className={LogCss.inputs}>
              <TextField
                required
                id="outlined-required"
                label="Your first name"
                type="text"
                sx={{ mt: 1, mr: 1 }}
                className={LogCss.inputs2}
              />
              <TextField
                required
                id="outlined-required"
                label="Your last name"
                type="text"
                sx={{ mt: 1, mr: 1 }}
                className={LogCss.inputs2}
              />
            </div>
            <TextField
              required
              id="outlined-required"
              label="Your email adress"
              type="email"
              sx={{ mt: 1, mr: 1 }}
              className={LogCss.inputs1}
            />
            <TextField
              id="outlined-password-input"
              label="Create a password"
              type="password"
              autoComplete="current-password"
              sx={{ mt: 1, mr: 1 }}
              className={LogCss.inputs1}
            />
            <div className={LogCss.check}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                name="condition"
                sx={{ mt: 1, mr: 1 ,color:  '#133f3e'}}
              />
              <label htmlFor="condition">
                Sign up to receive STONE AND STRAND emails. <Link to="/about">Terms and Conditions</Link>
              </label>
            </div>
            <Button sx={{ mt: 3, mr: 3 }} type="submit" variant="outlined">
              Create an Account
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
