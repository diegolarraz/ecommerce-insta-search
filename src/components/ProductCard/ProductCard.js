import React from 'react'
import PropTypes from 'prop-types';
import classes from './ProductCard.module.css'
import {useList} from '../../hooks/useList'
const ProductCard = (props) => {

    const { name, image, description } = props.hit
    const { addToList } = useList()
    return (
        <div className={classes.CardContent}>
          <img src={image} alt={name} />
          <div className={classes.CardText}>
            <h5>{name}</h5>
            <button onClick={() => addToList(props.hit)}>
              Add
            </button>
            {/* <p>{description.substring(0, 122)}</p> */}
          </div>
        </div>
    );
}

export default ProductCard;
  
ProductCard.propTypes = {
    hit: PropTypes.object.isRequired,
};