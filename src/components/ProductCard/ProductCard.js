import React from 'react'
import PropTypes from 'prop-types';
import classes from './ProductCard.module.css'

const ProductCard = (props) => {

    const {name, image, description} = props.hit

    return (
        <div className={classes.CardContent}>
          <img src={image} alt={`${name} image`} />
          <div className={classes.CardText}>
            <h5>{name}</h5>
            <p>{description.substring(0, 122)}</p>
          </div>
        </div>
    );
}

export default ProductCard;
  
ProductCard.propTypes = {
    hit: PropTypes.object.isRequired,
};