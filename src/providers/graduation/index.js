import { createContext, useContext, useState } from "react";

const defaulState = JSON.parse(localStorage.getItem("graduation")) || [];

export const GraduationListContext = createContext([]);

export const GraduationListProvider = ({ children }) => {
  const [graduation, setGraduation] = useState(defaulState);

  const local = (newItem) => {
    localStorage.setItem("graduation", JSON.stringify(newItem));
  };

  const addToGraduation = (beer) => {
    const newGraduation = [...graduation, beer];
    local(newGraduation);
    setGraduation(newGraduation);
  };

  const removeFromGraduation = (beer) => {
    const newGraduation = graduation.filter((item) => item.id !== beer.id);
    local(newGraduation);
    setGraduation(newGraduation);
  };

  return (
    <GraduationListContext.Provider
      value={{
        graduation,
        addToGraduation,
        removeFromGraduation,
      }}
    >
      {children}
    </GraduationListContext.Provider>
  );
};

export const useGraduation = () => useContext(GraduationListContext);
