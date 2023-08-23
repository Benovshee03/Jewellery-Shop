// import React, { useState, useEffect,useContext } from "react";
// import { MyContext } from "../../App";
// import { Link } from "react-router-dom";
// import ActCss from "../Activation/Activation.module.css";
// import Header from "../Header/Header";
// import icon1 from "../svg/nice.png";
// import icon2 from "../svg/text-2-2.png";
// import Button from "@mui/material/Button";
// export default function Activation() {
//   const [otp, setOtp] = useState("");
//   const [minutes, setMinutes] = useState(2);
//   const [seconds, setSeconds] = useState(30);
//   const {opacity} = useContext(MyContext)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }

//       if (seconds === 0) {
//         if (minutes === 0) {
//           clearInterval(interval);
//         } else {
//           setSeconds(59);
//           setMinutes(minutes - 1);
//         }
//       }
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [seconds]);
//   const resendOTP = () => {
//     setMinutes(1);
//     setSeconds(30);
//   };
//   return (
//     <>
//       <Header />
//       <div className={ActCss.main} style={{opacity}}>
//         <img className={ActCss.icon1} src={icon1} alt="" />
//         <img className={ActCss.icon2} src={icon2} alt="" />
//         <div className={ActCss.box}>
//           <div className={ActCss.mid}>
//             <div className={ActCss.lock}>
//               <i class="fa-solid fa-lock"></i>
//             </div>
//             <div className={ActCss.stron}>Verify your email</div>
//             <div>
//               <input
//                 type="text"
//                 className={ActCss.code}
//                 tabindex="1"
//                 maxlength="1"
//               />
//               <input
//                 type="text"
//                 className={ActCss.code}
//                 tabindex="2"
//                 maxlength="1"
//               />
//               <input
//                 type="text"
//                 className={ActCss.code}
//                 tabindex="3"
//                 maxlength="1"
//               />
//               <input
//                 type="text"
//                 className={ActCss.code}
//                 tabindex="4"
//                 maxlength="1"
//                 onChange={({ target }) => {
//                   setOtp(target.value);
//                 }}
//               />
//             </div>
//             <div className={ActCss.new}>
//               {seconds > 0 || minutes > 0 ? (
//                 <div>
//                   Resend OTP in {minutes < 10 ? `0${minutes}` : minutes}:
//                   {seconds < 10 ? `0${seconds}` : seconds}{" "}
//                 </div>
//               ) : (
//                 <div>
//                   Didnt receive the code? <Link>Resend</Link>
//                 </div>
//               )}
//             </div>
//             <Button
//               variant="contained"
//               disabled={seconds > 0 || minutes > 0}
//               style={{backgroundColor: seconds > 0 || minutes > 0 ? "#133f3e" : "#black",}}
//               onClick={resendOTP}
//             >
//               Verify{" "}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// import React, { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { MyContext } from "../../App";
// import { useNavigate } from "react-router-dom";

// export default function Activation() {
//   const { slug } = useParams();
//   const { setUserData } = useContext(MyContext);
//   const [message, setMessage] = useState("");
//   const [activationCode, setActivationCode] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const activationSlugFromStorage = localStorage.getItem("activationSlug");
  
//     if (activationSlugFromStorage) {
//       axios
//         .post(`http://91.107.207.100:81/api/accounts/activate/${activationSlugFromStorage}/`, { activationCode })
//         .then((response) => {
//           console.log(response.data);
//           setUserData(response.data);
//           navigate("/login/");
//         })
//         .catch((error) => {
//           console.error(error.response?.data?.message || "Activation failed.");
//           setMessage("Activation failed. Please try again.");
//         });
//     }
//   }, [activationCode, setUserData, navigate]);

//   return (
//     <div>
//       <h2>Activation Form</h2>
//       <input
//   type="text"
//   placeholder="Aktivasiya kodunu daxil edin"
//   value={activationCode}
//   onChange={(e) => setActivationCode(e.target.value)}
// />
// <button type="submit">Aktivasiya</button>

//     </div>
//   );
// }

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Activation() {
  const { slug } = useParams();
  const { setUserData } = useContext(MyContext);
  const [activationCode, setActivationCode] = useState("");
  const navigate = useNavigate();
  const handleActivationSubmit = (e) => {
    e.preventDefault();
    const activationSlugFromStorage = localStorage.getItem("activationSlug");
    axios
      .post(`/activate/${activationSlugFromStorage}/`, { activationCode })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        navigate("/login/"); // Təsdiq edildikdən sonra login səhifəsinə yönləndirilir
      })
      .catch((error) => {
        console.error(error.response?.data?.message || "Activation failed.");
      });
  };

  return (
    <div>
      <h2>Activation Form</h2>
      <form onSubmit={handleActivationSubmit}>
        <input
          type="text"
          placeholder="Enter activation code"
          value={activationCode}
          onChange={(e) => setActivationCode(e.target.value)}
        />
        <button type="submit">Activate</button>
      </form>
    </div>
  );
}

