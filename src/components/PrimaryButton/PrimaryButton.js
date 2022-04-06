import React from 'react'
import classes from './PrimaryButton.module.css'

const PrimaryButton = ({title}) => {

    return (
        <>
            <div className={classes.PrimaryButton}>
                <div className={classes.WhiteBox}></div>

                <div className={classes.YellowBox}>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default PrimaryButton;