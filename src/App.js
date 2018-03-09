import React, { Component } from 'react';
import './App.css';

import $ from 'jquery';
import Materialize from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Navbar from './components/Navbar.js';
import FeedbackButton from './components/FeedbackButton.js';

import Home from './scenes/Home.js';
import Brands from './scenes/Brands.js';
import WorkshopAndPrices from './scenes/WorkshopAndPrices.js';
import Contact from './scenes/Contact.js';

import Footer from './components/Footer.js';

class App extends Component {

  componentDidMount() {
      $( document ).ready(function(){
        $(".button-collapse").sideNav();
      });

  }

  render() {
    return (

      <div className="App">

        <Navbar />
        <Contact />
        <Footer />

        <div className="fixed-action-btn-left">
          <FeedbackButton />
        </div>

      </div>
    );
  }
}

export default App;
