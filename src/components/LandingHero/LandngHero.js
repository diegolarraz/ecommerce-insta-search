import React from 'react'
import { images } from '../../utils/assets'
import classes from './LandingHero.module.css'

import SectionContainer from '../SectionContainer';
import Navbar from '../Navbar';

const LandingHero = ({setBasketActive}) => {
    const { WAVE_BG } = images;

    return (
        <section className={classes.HeroSection}>
            <SectionContainer>
            <Navbar {...{setBasketActive}} />

            <div className={classes.HeroContent} style={{height: "140px"}}>
            </div>
            </SectionContainer>
            <img src={WAVE_BG.url} alt={WAVE_BG.alt} className="wave topWave"/>
        </section>
    )
}

export default LandingHero;