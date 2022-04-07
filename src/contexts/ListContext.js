import React, { createContext, useState, useEffect } from "react";

export const ListContext = createContext(null);

const ListProvider = ({ children }) => {
    // To save the list items
    const [myList, setMyList] = useState([]);

    // To toggle the modal
    const [basketActive, setBasketActive] = useState(false);

    // reusable add to list function to append new product
    const addToList = (product) => {
      const newList = myList
      newList.push(product)
      setMyList(newList)
    }

    useEffect(() => {
      console.log(myList);
    }, [myList])

  return (
    <ListContext.Provider
      value={{
        myList,
        addToList,
        basketActive,
        setBasketActive
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;