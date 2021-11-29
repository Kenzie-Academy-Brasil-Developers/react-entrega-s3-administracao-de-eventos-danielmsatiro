import { createContext, useContext, useState } from "react";

const defaulState = JSON.parse(localStorage.getItem("wedding")) || [];

export const WeddingListContext = createContext([]);

export const WeddingListProvider = ({ children }) => {
  const [wedding, setWedding] = useState(defaulState);

  const local = (newItem) => {
    localStorage.setItem("wedding", JSON.stringify(newItem));
  };

  const addToWedding = (beer) => {
    const newWedding = [...wedding, beer];
    local(newWedding);
    setWedding(newWedding);
  };

  const removeFromWedding = (beer) => {
    const newWedding = wedding.filter((item) => item.id !== beer.id);
    local(newWedding);
    setWedding(newWedding);
  };

  return (
    <WeddingListContext.Provider
      value={{
        wedding,
        addToWedding,
        removeFromWedding,
      }}
    >
      {children}
    </WeddingListContext.Provider>
  );
};

export const useWedding = () => useContext(WeddingListContext);
