import React, { useState } from 'react'

import LandingHero from './components/LandingHero';
import InstaSearch from './components/InstaSearch';
import BasketModal from './components/BasketModal';
import Footer from './components/Footer';


const App = () => {
  const [basketActive, setBasketActive] = useState(false);

  return (
    <div>
      <LandingHero {...{setBasketActive}}/>    
      <InstaSearch />
      <Footer />
      <BasketModal {...{basketActive, setBasketActive}} />
    </div>
  );
}

export default App;
