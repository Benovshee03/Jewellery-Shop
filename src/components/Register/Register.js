import React, { useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import RegCss from "../Register/Register.module.css";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import image from "../svg/8.png";

const userRegex = /^[A-Za-z]\\w{4,14}$/;
const pwdRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?~_+-=|\]).{8,32}$/;

export default function Register() {
  const [checked, setChecked] = useState(true);
  const [user, setUser] = useState("");
  const [validName, setvalidName] = useState(false);
  const [userFocus, setuserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setvalidPwd] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setvalidMatch] = useState(false);
  const [MatchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = userRegex.test(user);
    console.log(result);
    console.log(user);
    setvalidName(user);
  }, [user]);

  useEffect(() => {
    const result = pwdRegex.test(pwd);
    console.log(result);
    console.log(pwd);
    setvalidPwd(result);
    const match = pwd === matchPwd;
    setvalidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
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
            <form>
              <p ref={errRef} className={errMsg ? "RegCss.errmsg" :"RegCss.offscreen"} aria-live="assertive">{errMsg}</p>
              <div className={RegCss.inputs}>
                <TextField
                  required
                  id="outlined-required"
                  label="Your first name"
                  type="text"
                  sx={{ mt: 1, mr: 1 }}
                  className={RegCss.inputs2}
                  inputRef={userRef}
                  autoComplete="off"
                  onChange={(e)=> setUser(e.target.value)}
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setuserFocus(true)}
                  onBlur={() => {setuserFocus(true)}}
                />
                <p id="uidnote" className={userFocus && user && !validName ? "RegCss.instruction" : "RegCss.offscreen"}><i class="fa-solid fa-circle-info"></i>Must begin with a letter<br/>4 to 24 characters<br/>Letters, numbers, unedrscores , hypens allowed.</p>
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
              <TextField
                id="outlined-password-input"
                label="Confirm Password"
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
            </form>
            <Link to="/activation">
              <Button sx={{ mt: 3, mr: 3 }} type="submit" variant="outlined">
                Create an Account
              </Button>
            </Link>
          </div>
          <div className={RegCss.regImage}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
