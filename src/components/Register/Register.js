import React from "react";
import Header from "../Header/Header";
import RegCss from "../Register/Register.module.css";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import image from '../svg/8.png'

export default function Register() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Header />
      <div className={RegCss.cover}>
        <div className={RegCss.mid}>
          <div className={RegCss.register}>
            <h2 className={RegCss.logtext}>Register</h2>
            <p className={RegCss.text}>
              Thanks for signing up! We're happy to have you.
            </p>
            <div className={RegCss.inputs}>
              <TextField
                required
                id="outlined-required"
                label="Your first name"
                type="text"
                sx={{ mt: 1, mr: 1 }}
                className={RegCss.inputs2}
              />
              <TextField
                required
                id="outlined-required"
                label="Your last name"
                type="text"
                sx={{ mt: 1, mr: 1 }}
                className={RegCss.inputs2}
              />
            </div>
            <TextField
              required
              id="outlined-required"
              label="Your email adress"
              type="email"
              sx={{ mt: 1, mr: 1 }}
              className={RegCss.inputs1}
            />
            <TextField
              id="outlined-password-input"
              label="Create a password"
              type="password"
              autoComplete="current-password"
              sx={{ mt: 1, mr: 1 }}
              className={RegCss.inputs1}
            />
            <div className={RegCss.check}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                name="condition"
                sx={{ mt: 1, mr: 1, color: "#133f3e" }}
              />
              <label htmlFor="condition">
                Sign up to receive Meliora emails.{" "}
                <Link to="/about">Terms and Conditions</Link>
              </label>
            </div>
            <Link to="/activation"><Button sx={{ mt: 3, mr: 3 }} type="submit" variant="outlined">
              Create an Account
            </Button></Link>
          </div>
          <div className={RegCss.regImage}> 
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
