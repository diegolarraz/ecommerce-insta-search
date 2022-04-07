import React from 'react'
import classes from './BasketRow.module.css'

const BasketRow = ({product}) => {
    const {name, image, price} = product;

    return (
        <div className={classes.BasketRow}>
            <img src={image} alt={name} />
            <div className={classes.Spacer}></div>
            <p className="">{name.substring(0, 20)}</p>
            <div className={classes.PriceBox}>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default BasketRow;