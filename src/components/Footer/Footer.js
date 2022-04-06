import React from 'react'
import classes from './Footer.module.css'
import { images } from '../../utils/assets'

const Footer = () => {
    const { WAVE_BG } = images;

    return (
        <section className='footer'>
            <img src={WAVE_BG.url} alt={WAVE_BG.alt} className="wave bottomWave"/>
            <div className="footerContent">
                <div className={classes.Footer}>
                    <div className={classes.LogoNav}>
                        <h1>HACKLABS</h1>
                    </div>
                    <div className={classes.RightSection}>
                        <h4>Your One Stop Hardware Shop</h4>
                        <p>By Diego Larraz</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;