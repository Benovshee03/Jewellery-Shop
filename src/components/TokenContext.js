import { createContext, useState, useContext, useEffect } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [activationSlug, setActivationSlug] = useState(""); // Yeni

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedActivationSlug = localStorage.getItem("activationSlug"); // Yeni
    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setActivationSlug(storedActivationSlug); // Yeni
    }
  }, []);

  const handleLogin = (access, refresh) => {
    setAccessToken(access);
    setRefreshToken(refresh);
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
  };

  const handleLogout = () => {
    setAccessToken("");
    setRefreshToken("");
    setActivationSlug(""); // Yeni
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("activationSlug"); // Yeni
  };

  const handleActivationSlug = (slug) => { // Yeni fonksiyon
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
