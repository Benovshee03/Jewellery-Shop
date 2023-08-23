import React, { useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../App";
import Header from "../Header/Header";
import RegCss from "../Register/Register.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import image from "../svg/8.png";
import { TokenContext } from "../TokenContext";
import { useNavigate } from "react-router-dom";

const userRegex = /^[A-Za-z]\w{4,14}$/;
const pwdRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?~_+-=|\]).{8,32}$/;

export default function Register() {
  const { opacity,handleRegisterSubmit ,setUserData} = useContext(MyContext);
  const { setAccessToken, setRefreshToken , handleActivationSlug} = useContext(TokenContext);
  const [userFocus, setuserFocus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()
  const userRef = useRef();
  const errRef = useRef();
  const { slug } = useParams();

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword || !isChecked) {
      setErrMsg("Zəhmət olmasa, bütün sahələri düzgün doldurun.");
      return;
    }
    if (password !== confirmPassword) {
      setErrMsg("Parollar eyni deyil.");
      return;
    }
    const userData = {
      name: firstName,
      surname: lastName,
      email: email,
      password: password,
      password_confirm: confirmPassword,
      agree_to_terms: isChecked,
    };

    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .post("http://91.107.207.100:81/api/accounts/register/", JSON.stringify(userData), config)
      .then((response) => {
      //   console.log("Slug:", response.data.slug);
      //   setSuccess(true);
      //   setErrMsg("");
      //   console.log(response.data.slug);
      //   handleActivationSlug(response.data.slug);
      //   if(response.data.slug) {
      //     navigate(`/activation/${response.data.slug}`);
      //   }
      //   const { access, refresh } = response.data.tokens;
      //   setAccessToken(access);
      //   setRefreshToken(refresh);
      //   setUserData(response.data);

      // })
      console.log(response.data.slug);
      handleActivationSlug(response.data.slug); 
      setSuccess(true);
      setErrMsg("");
      navigate(`/activate/${response.data.slug}/`); 
      })
      .catch((error) => {
    if (error.response && error.response.data && error.response.data.message) {
      setErrMsg(error.response.data.message);
    } else {
      setErrMsg("Qeydiyyatda səhv baş verdi. Zəhmət olmasa, yenidən cəhd edin.");
    }
      });


      
      console.log(userData)
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Agree to Terms:", isChecked);
  };

  return (
    <>
      <Header />
      <div className={RegCss.cover} style={{ opacity }}>
        <div className={RegCss.mid}>
          <div className={RegCss.register}>
            <h2 className={RegCss.logtext}>Register</h2>
            <p className={RegCss.text}>
              Thanks for signing up! We're happy to have you.
            </p>
            <form onSubmit={handleSubmit}>
              <p ref={errRef} className={errMsg ? RegCss.errmsg : RegCss.offscreen} aria-live="assertive">
                {/* {errMsg} */}
              </p>
              <div className={RegCss.inputs}>
                <TextField
                  required
                  label="Your first name"
                  type="text"
                  sx={{ mt: 1, mr: 1 }}
                  className={RegCss.inputs2}
                  inputRef={userRef}
                  autoComplete="off"
                  aria-invalid={!userRegex.test(firstName)}
                  aria-describedby="uidnote"
                  onFocus={() => setuserFocus(true)}
                  onBlur={() => {
                    setuserFocus(true);
                  }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {/* <p id="uidnote" className={userFocus && user && !userRegex.test(firstName) ? RegCss.instruction : RegCss.offscreen}> */}
                  {/* <i class="fa-solid fa-circle-info"></i> */}
                  {/* Must begin with a letter <br /> 4 to 14 characters <br /> Letters, numbers, unedrscores, hypens allowed. */}
                {/* </p> */}
                <TextField
                  required
                  label="Your last name"
                  type="text"
                  sx={{ mt: 1, mr: 1 }}
                  className={RegCss.inputs2}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <TextField
                required
                label="Your email adress"
                type="email"
                sx={{ mt: 1, mr: 1 }}
                className={RegCss.inputs1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Create a password"
                type="password"
                autoComplete="new-password"
                sx={{ mt: 1, mr: 1 }}
                className={RegCss.inputs1}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
                sx={{ mt: 1, mr: 1 }}
                className={RegCss.inputs1}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className={RegCss.check}>
                <Checkbox
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  name="condition"
                  sx={{ mt: 1, mr: 1, color: "#133f3e" }}
                />
                <label htmlFor="condition">
                  Sign up to receive Meliora emails. <Link to="/about">Terms and Conditions</Link>
                </label>
              </div>
              <Button sx={{ mt: 3, mr: 3 }} type="submit" variant="outlined" >
                Create an Account
              </Button>
            </form>

          </div>
          <div className={RegCss.regImage}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
