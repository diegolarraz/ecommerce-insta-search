import React from 'react'
import ListProvider from "./contexts/ListContext";

import LandingHero from './components/LandingHero';
import InstaSearch from './components/InstaSearch';
import BasketModal from './components/BasketModal';
import Footer from './components/Footer';


const App = () => {
  return (
    <ListProvider>
      <LandingHero />    
      <InstaSearch />
      <Footer />
      <BasketModal />
    </ListProvider>
  );
}

export default App;
