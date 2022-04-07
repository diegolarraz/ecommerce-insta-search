import React, {useState} from 'react'
import PropTypes from 'prop-types';
import classes from './ProductCard.module.css'
import {useList} from '../../hooks/useList'
import { images } from '../../utils/assets';
const ProductCard = (props) => {
    const { ADD, CHECK } = images;
    const { name, image, price } = props.hit;

    const { addToList } = useList();
    const [isSaved, setIsSaved] = useState(false)

    // only trigger once to save to the basket
    const handleClick =()=> {
      if (!isSaved) {
        addToList(props.hit)
        setIsSaved(true)
      }
    }
    return (
        <div className={classes.CardContent}>
          <img src={image} alt={name} />
          <div className={classes.CardText}>
            <h5>{name.substring(0, 60)}</h5>
            <div className={classes.Details}>
              <p>Price: ${price}</p>
              <div 
                onClick={handleClick} 
                className={isSaved ? classes.GreenTick : classes.AddIcon}
              >
                <img src={isSaved ? CHECK.url : ADD.url} alt={isSaved ? CHECK.alt : ADD.alt} />
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProductCard;
  
ProductCard.propTypes = {
    hit: PropTypes.object.isRequired,
};