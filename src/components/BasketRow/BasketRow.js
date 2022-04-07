import React from 'react'
import classes from './BasketRow.module.css'

const BasketRow = ({product}) => {
    const {name, image} = product;
    
    return (
        <div className={classes.BasketRow}>
            <img src={image} alt={name} />
            <div className="">{name.substring(0, 20)}</div>
        </div>
    )
}

export default BasketRow;