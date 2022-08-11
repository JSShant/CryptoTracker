import React, { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();

export const CryptoState = () => {
  return useContext(Crypto);
};

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("AUD");
  const [symbol, setSymbol] = useState("$");
  useEffect(() => {
    if (currency === "AUD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
  }, [currency]);
  return (
    <div>
      <Crypto.Provider value={{ currency, symbol, setCurrency }}>
        {children}
      </Crypto.Provider>
    </div>
  );
};

export default CryptoContext;
