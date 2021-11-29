import { createContext, useContext, useState } from "react";

const defaulState = JSON.parse(localStorage.getItem("confraternization")) || [];

export const ConfraternizationListContext = createContext([]);

export const ConfraternizationListProvider = ({ children }) => {
  const [confraternization, setConfraternization] = useState(defaulState);

  const local = (newItem) => {
    localStorage.setItem("confraternization", JSON.stringify(newItem));
  };

  const addToConfraternization = (beer) => {
    const newConfraternization = [...confraternization, beer];
    local(newConfraternization);
    setConfraternization(newConfraternization);
  };

  const removeFromConfraternization = (beer) => {
    const newConfraternization = confraternization.filter(
      (item) => item.id !== beer.id
    );
    local(newConfraternization);
    setConfraternization(newConfraternization);
  };

  return (
    <ConfraternizationListContext.Provider
      value={{
        confraternization,
        addToConfraternization,
        removeFromConfraternization,
      }}
    >
      {children}
    </ConfraternizationListContext.Provider>
  );
};

export const useConfraternization = () =>
  useContext(ConfraternizationListContext);
