import classes from "./BasketModal.module.css";
import CustomModal from '../CustomModal'
import React from 'react'
const BasketModal = (props) => {
  const {basketActive, setBasketActive} = props

  return (
    <CustomModal isActive={basketActive} setActive={setBasketActive}>
      <div className={classes.Container}>
        HELLO
      </div>
    </CustomModal>
  );
};

export default BasketModal;