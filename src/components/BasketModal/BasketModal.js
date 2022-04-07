import classes from "./BasketModal.module.css";
import CustomModal from '../CustomModal'
import React from 'react'
import { useList } from "../../hooks/useList";
import BasketRow from "../BasketRow";

const BasketModal = () => {
  const {
    basketActive, 
    setBasketActive, 
    myList, 
    totalPrice } = useList()

  return (
    <CustomModal isActive={basketActive} setActive={setBasketActive}>
      <div className={classes.Container}>
        { myList.length > 0 ? (
          <div className={classes.BasketContent}>
            <h5>Your Saved Items</h5>
            {myList.map((product) => (
              <BasketRow 
                {...{product}}
                key={
                  Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15)
                }
              />
            ))}

            <div className={classes.BasketTotal}>
                <p>Total:</p>
                <p>${totalPrice}</p>
            </div>
          </div>
        ): (
          <p>Please add a product</p>
        )}
      </div>
    </CustomModal>
  );
};

export default BasketModal;