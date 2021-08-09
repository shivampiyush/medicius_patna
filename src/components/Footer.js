import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { MDBIcon, MDBContainer } from 'mdbreact';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footh'>Contact Us</h1>
        <div className='divfoot'>
          <p className='footer-subscription-heading'>
            {/* We love&#10084;&#65039; our customers, so feel free to reach us during normal business hours. */}
            Times may be tough, but Medicius will be there for you and your medical requirements. The hassle of waiting for multiple days is now over as we are focused to provide your medical essentials in just few hours.
          </p>
          <div>
            <a href="https://wa.me/917759995200/?" title="click to open whatsapp chat" target="_blank"><button class="btn btn-success">
              <i className="fa fa-whatsapp whatsapp"></i>Message us on WhatsApp
            </button></a>
          </div>
          <div className='table'>
            <h3 className='hours'>Delivery Hours</h3>
            <table>
              <tr>
                <td>Monday</td>
                <td>10:00 am – 08:00 pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10:00 am – 08:00 pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>10:00 am – 08:00 pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>10:00 am – 08:00 pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>10:00 am – 08:00 pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 am – 08:00 pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>10:00 am – 08:00 pm</td>
              </tr>
            </table>
          </div>
          <div className='connect'>
            <h3 className='connectText'>Connect with us: </h3>
            <ul>
              <li><a href='https://www.facebook.com/MediciusPatna' className='fa fa-facebook socially' target="_blank"></a></li>
              <li><a href='https://twitter.com/Medicius_?s=08' className='fa fa-twitter socially' target="_blank"></a></li>
              <li><a href='https://instagram.com/medici_us?utm_medium=copy_link' className='fa fa-instagram socially' target="_blank"></a></li>
              {/* <li><a href='mailto:medicius.care@gmail.com' target="_blank"><span class="iconify" data-icon="logos:google-gmail" data-width='30' data-height='30'></span></a></li> */}
            </ul>
          </div>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Copyright © 2021 Medicius - All Rights Reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
