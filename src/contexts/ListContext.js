import React, { createContext, useState } from "react";

export const ListContext = createContext(null);

const ListProvider = ({ children }) => {
    // To save the list items
    const [myList, setMyList] = useState([]);

    // To toggle the modal
    const [basketActive, setBasketActive] = useState(false);


  return (
    <ListContext.Provider
      value={{
        myList,
        setMyList,
        basketActive,
        setBasketActive
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;