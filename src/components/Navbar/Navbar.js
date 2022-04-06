import React from 'react'
import classes from './Navbar.module.css'
import PrimaryButton from '../PrimaryButton';
import { useList } from '../../hooks/useList';
const Navbar = () => {
    const {setBasketActive} = useList();
    
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