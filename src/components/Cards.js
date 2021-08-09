import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='about'>About us</h1>
      <hr />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.webp'
              text='We at Medicius are committed to ensuring that your medical requirements are satisfied in the comfort of your own home by providing the fastest home delivery service in PATNA that is Secure, Trustworthy, and most importantly, Simple.'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-2.webp'
              text='We provide Speedy access to Medicines as well as comfortable Home Delivery with our Express delivery & Standard delivery services.'
              label='Door Step Delivery'
              path='/products'
            />
            <CardItem
              src='images/img-3.webp'
              text='100% trusted, safe and secure 
              cashless mode of payments.'
              label='Hassle-Free Payment'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
