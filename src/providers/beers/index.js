import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const BeersContext = createContext([]);

export const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  const getBeers = () => {
    api
      .get("beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log("deu ruim"));
  };

  useEffect(() => {
    getBeers();
  }, []);
  return (
    <BeersContext.Provider value={{ beers, getBeers }}>
      {children}
    </BeersContext.Provider>
  );
};

export const useBeers = () => useContext(BeersContext);
