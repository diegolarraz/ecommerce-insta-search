import classes from "./BasketModal.module.css";
import CustomModal from '../CustomModal'
import React from 'react'
import { useList } from "../../hooks/useList";

const BasketModal = () => {
  const {basketActive, setBasketActive} = useList()

  return (
    <CustomModal isActive={basketActive} setActive={setBasketActive}>
      <div className={classes.Container}>
        HELLO
      </div>
    </CustomModal>
  );
};

export default BasketModal;