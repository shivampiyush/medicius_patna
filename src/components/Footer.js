import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footh'>Contact Us</h1>
        <div className='divfoot'>
          <h3>Better yet, see us in person!</h3>
          <p className='footer-subscription-heading'>
            We love&#10084;&#65039; our customers, so feel free to reach us during normal business hours.
          </p>
          <div>
            <a href="https://wa.me/917759995200/?" title="click to open whatsapp chat" target="_blank"><button class="btn btn-success">
              <i className="fa fa-whatsapp whatsapp"></i>Message us on WhatsApp
            </button></a>
          </div>
          <div className='table'>
            <h3 className='hours'>Hours</h3>
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
