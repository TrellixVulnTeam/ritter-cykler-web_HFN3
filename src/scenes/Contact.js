import React, { Component } from 'react';
import './Contact.css';

import $ from 'jquery';
import Materialize from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import HeaderView from '/Users/danielranlehmann/Desktop/ritter-cykler-web/src/components/HeaderView.js';
import FAB from '/Users/danielranlehmann/Desktop/ritter-cykler-web/src/components/FloatingActionButton.js';

import GoogleMap from '/Users/danielranlehmann/Desktop/ritter-cykler-web/src/components/GoogleMap.js';
import ContactForm from '/Users/danielranlehmann/Desktop/ritter-cykler-web/src/components/ContactForm.js';

import StoreDirectionsView from '/Users/danielranlehmann/Desktop/ritter-cykler-web/src/components/StoreDirectionsView.js';
import ReviewCard from '/Users/danielranlehmann/Desktop/ritter-cykler-web/src/components/StoreReviewCard.js';

class Contact extends Component {

  componentDidMount() {
    $( document ).ready(function(){

    });

  }

  render() {
    return (

      <div>

        <HeaderView
          title={ "Kontakt" }
          halfwayFAB={ <FAB positionHalfway={true} materialIconName={"directions"}/> }
        />

        <div className="section white">
          <div className="row container">
            <div className="col s12 m6">
              <div className="white">

                <div>
                  <h6 className="primary-text headline">Information</h6>
                  <p className="primary-text body-1"><i className="left inline-small-icon material-icons green-text text-accent-3">location_on</i>Lyngby Storcenter 88, 2800 Kongens Lyngby *</p>
                  <p className="primary-text body-1"><i className="left inline-small-icon material-icons green-text text-accent-3">phone</i>45 87 66 01</p>
                  <p className="primary-text body-1"><i className="left inline-small-icon material-icons green-text text-accent-3">email</i>info@rittercykler.dk</p>
                  <p className="primary-text body-1"><i className="left inline-small-icon material-icons green-text text-accent-3">access_time</i>Mandag – Fredag 10:00 – 19:00<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lørdag og Søndag 10:00 – 17:00 </p>
                </div>

                <p className="secondary-text body-1">* The Apple Store is located in the Valley Plaza mall, in the JC Penney wing opposite Build-A-Bear and next to Guess. Valley Plaza is located on the east side of the 99 at Ming Avenue, just south of the 58/Barstow-Bakersfield highway.<a className="green-text text-accent-3" href="https://lyngbystorcenter.dk/wp-content/uploads/2016/04/Centeroversigt_web_februar_2018.png"> Se kort over lyngbystorcenter</a></p>
                <div>



                <div className="row">

                  <div className="col s1">
                    <i className="grey-text small icon ion-social-facebook"></i>
                  </div>

                  <div className="col s1">
                    <i className="grey-text small icon ion-social-instagram"></i>
                  </div>

                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>

        <div id="google-map">
          <GoogleMap />
        </div>

        <div className="grey lighten-4 section">
          <div className="container">
            <h1 className="center primary-text headline">Mange tilfredse kunder</h1>
            <p className="center primary-text body-1">Et vivendo comprehensam eam</p>
            <div className="row">
              <div className="col s12 m6 l4">
                <ReviewCard
                  body={"Jeg søgte en ny racer med Di2 gear men havde ikke guld i lommen. Så da Ritter fik en på tilbud kontaktede ekspedienten mig. Cyklen var lige mig og i den rigtige str. Ved afhentning af cykel fik jeg en fin gennemgang. En god mindre butik med venligt personale. Priser på slanger og pumpe mm er rimelige. Ellers spørg efter tilbud ;-)"}
                  author={"Anders Nyholm"}
                />
              </div>
              <div className="col s12 m6 l4">
                <ReviewCard
                  body={"Jeg søgte en ny racer med Di2 gear men havde ikke guld i lommen. Så da Ritter fik en på tilbud kontaktede ekspedienten mig. Cyklen var lige mig og i den rigtige str. Ved afhentning af cykel fik jeg en fin gennemgang. En god mindre butik med venligt personale. Priser på slanger og pumpe mm er rimelige. Ellers spørg efter tilbud ;-)"}
                  author={"Anders Nyholm"}
                />
              </div>
              <div className="col s12 m6 l4">
                <ReviewCard
                  body={"Jeg søgte en ny racer med Di2 gear men havde ikke guld i lommen. Så da Ritter fik en på tilbud kontaktede ekspedienten mig. Cyklen var lige mig og i den rigtige str. Ved afhentning af cykel fik jeg en fin gennemgang. En god mindre butik med venligt personale. Priser på slanger og pumpe mm er rimelige. Ellers spørg efter tilbud ;-)"}
                  author={"Anders Nyholm"}
                />
              </div>
              <div className="col s12 m6 l4">
                <ReviewCard
                  body={"Jeg søgte en ny racer med Di2 gear men havde ikke guld i lommen. Så da Ritter fik en på tilbud kontaktede ekspedienten mig. Cyklen var lige mig og i den rigtige str. Ved afhentning af cykel fik jeg en fin gennemgang. En god mindre butik med venligt personale. Priser på slanger og pumpe mm er rimelige. Ellers spørg efter tilbud ;-)"}
                  author={"Anders Nyholm"}
                />
              </div>
              <div className="col s12 m6 l4">
                <ReviewCard
                  body={"Jeg søgte en ny racer med Di2 gear men havde ikke guld i lommen. Så da Ritter fik en på tilbud kontaktede ekspedienten mig. Cyklen var lige mig og i den rigtige str. Ved afhentning af cykel fik jeg en fin gennemgang. En god mindre butik med venligt personale. Priser på slanger og pumpe mm er rimelige. Ellers spørg efter tilbud ;-)"}
                  author={"Anders Nyholm"}
                />
              </div>
              <div className="col s12 m6 l4">
                <ReviewCard
                  body={"Jeg søgte en ny racer med Di2 gear men havde ikke guld i lommen. Så da Ritter fik en på tilbud kontaktede ekspedienten mig. Cyklen var lige mig og i den rigtige str. Ved afhentning af cykel fik jeg en fin gennemgang. En god mindre butik med venligt personale. Priser på slanger og pumpe mm er rimelige. Ellers spørg efter tilbud ;-)"}
                  author={"Anders Nyholm"}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
