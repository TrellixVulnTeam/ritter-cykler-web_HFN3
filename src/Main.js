import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './scenes/Home';
import Brands from './scenes/Brands';
import WorkshopAndPrices from './scenes/WorkshopAndPrices';
import Contact from './scenes/Contact';
import ProductDetails from './scenes/ProductDetails';
import ComplaintsAndReturnPolicies from './scenes/ComplaintsAndReturnPolicies';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/maerker' component={Brands}/>
      <Route exact path='/vaerksted-og-priser' component={WorkshopAndPrices}/>
      <Route exact path='/kontakt' component={Contact}/>
      <Route path='/produkt/:productId' component={ProductDetails}/>
      <Route path='/reklamation-og-returregler' component={ComplaintsAndReturnPolicies}/>
    </Switch>
  </main>
)

export default Main;
