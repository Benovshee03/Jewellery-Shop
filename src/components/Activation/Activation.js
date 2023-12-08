import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Activation() {
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

