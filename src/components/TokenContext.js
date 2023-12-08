import { createContext, useState, useEffect } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [activationSlug, setActivationSlug] = useState(""); 

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedActivationSlug = localStorage.getItem("activationSlug");
    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setActivationSlug(storedActivationSlug); 
    }
  }, []);

  // const handleLogin = (access, refresh) => {
  //   setAccessToken(access);
  //   setRefreshToken(refresh);
  //   localStorage.setItem("accessToken", access);
  //   localStorage.setItem("refreshToken", refresh);
  // };

  // const handleLogout = () => {
  //   setAccessToken("");
  //   setRefreshToken("");
  //   setActivationSlug(""); // Yeni
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("refreshToken");
  //   localStorage.removeItem("activationSlug"); // Yeni
  // };

  const handleActivationSlug = (slug) => { 
    setActivationSlug(slug);
    localStorage.setItem("activationSlug", slug);
  };

  return (
    <TokenContext.Provider
      value={{
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        activationSlug, 
        handleActivationSlug, 
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
