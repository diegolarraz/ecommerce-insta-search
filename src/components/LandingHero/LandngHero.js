import React from 'react'
import { images } from '../../utils/assets'

import SectionContainer from '../SectionContainer';
import Navbar from '../Navbar';

const LandingHero = ({setBasketActive}) => {
    const { WAVE_BG } = images;

    return (
        <section className='heroSection'>
            <SectionContainer>
            <Navbar {...{setBasketActive}} />

            <div className="heroContent" style={{height: "400px"}}>

            </div>
            </SectionContainer>
            <img src={WAVE_BG.url} alt={WAVE_BG.alt} className="wave topWave"/>
        </section>
    )
}

export default LandingHero;