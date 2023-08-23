import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../TokenContext";

export default function Dashboard() {
  const { accessToken } = useContext(TokenContext);
  const navigate = useNavigate()
  if (!accessToken) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h1>Xoş gəldiniz!</h1>
    </div>
  );
}
