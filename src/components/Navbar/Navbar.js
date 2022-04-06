import React from 'react'
import classes from './Navbar.module.css'
import PrimaryButton from '../PrimaryButton';
const Navbar = (props) => {
    const {setBasketActive} = props;
    return (
        <div className={classes.Navbar}>
            <div className={classes.LeftNav} style={{width: "110px"}}>

            </div>
            <div className={classes.LogoNav}>
                <h1>HACKLABS</h1>
            </div>
            <div className={classes.RightNav} onClick={() => setBasketActive(true)}>
                <PrimaryButton title="My List"/>
            </div>
        </div>
    );
}

export default Navbar;