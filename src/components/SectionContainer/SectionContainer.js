import classes from './SectionContainer.module.css'
import React from 'react'


const SectionContainer = (props) => {
    const {children} = props;

    return (
        <div className={classes.SectionContainer}>
            {children}
        </div>
    )
}

export default SectionContainer;