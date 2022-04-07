import React from 'react'
import PropTypes from 'prop-types';
import classes from './ProductCard.module.css'
import {useList} from '../../hooks/useList'
const ProductCard = (props) => {

    const { name, image, price } = props.hit
    const { addToList } = useList()
    return (
        <div className={classes.CardContent}>
          <img src={image} alt={name} />
          <div className={classes.CardText}>
            <h5>{name.substring(0, 60)}</h5>

            <div className={classes.Details}>
              <p>Price: ${price}</p>
              <button onClick={() => addToList(props.hit)} className={`${classes.Hidden}`}>
                Add
              </button>

            </div>
          </div>
        </div>
    );
}

export default ProductCard;
  
ProductCard.propTypes = {
    hit: PropTypes.object.isRequired,
};