import classes from "./BasketModal.module.css";
import CustomModal from '../CustomModal'
import React from 'react'
import { useList } from "../../hooks/useList";
import BasketRow from "../BasketRow";

const BasketModal = () => {
  const {basketActive, setBasketActive, myList} = useList()

  return (
    <CustomModal isActive={basketActive} setActive={setBasketActive}>
      <div className={classes.Container}>
        { myList.length > 0 ? (
          <div className="">
            {myList.map((product) => (
              <BasketRow 
                {...{product}}
                key={
                  Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15)
                }
              />
            ))}
          </div>
        ): (
          <p>Please add a product</p>
        )}
      </div>
    </CustomModal>
  );
};

export default BasketModal;