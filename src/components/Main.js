import { useState, useEffect } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import Carousel  from 'react-bootstrap/Carousel';
import SwipableCarousel from './SwipableCarousel';
const images = require.context('../../public/images', true);

function Main() {

  return (
    <>
      <section className=' my-5 trend-section container-fluid'>
       <h1 className='section-title text-center'>Trending News</h1>
       <div className='card-div'>
        <div className='card-img-div'>
         <img className='card-img' src={images("./example.jpg")} alt=""/>
        </div>
        <div className='card-name p-4 text-light'>
         <h2>This is an example title</h2>
        </div>
        <div className='card-tag p-2'>
         <button type="button">PlayStation</button>
        </div>
       </div>   
       <div className='card-div'>
        <div className='card-img-div'>
         <img className='card-img' src={images("./example.jpg")} alt=""/>
        </div>
        <div className='card-name p-4 text-light'>
         <h2>This is an example title</h2>
        </div>
        <div className='card-tag p-2'>
         <button type="button">PlayStation</button>
        </div>
       </div>     
      </section>
      <section className='feat-section my-5'>
        <h1 className='section-title text-center'>Featured</h1>
        <SwipableCarousel/>
      </section>
      <section className='deals-section my-5'>
        <div>
          <h2>All Deals</h2>
          <h4>Specifically tech, game, subscription deal content</h4>
        </div>
      </section>
      <section className='sound-section my-5'>
        <h2>Soundtrack of the day</h2>
        <div>
          
        </div>
        <h1>Other Soundtracks</h1>
        <div>
          
        </div>
      </section>
      <section className='all-topic-section my-5'>
        <h2 className='text-center'>All Topics</h2>
        <div className='d-flex topic-wrapper'>
          <div className='d-flex topic-btn-div'>
            <h2>Games</h2>
            <button type="button">Example</button>
            <button type="button">Example</button>
            <button type="button">Example</button>
          </div>
          <div className='d-flex topic-btn-div'>
            <h2>Music</h2>
            <button type="button">Example</button>
            <button type="button">Example</button>
            <button type="button">Example</button>
          </div>
        </div>
      </section>
      <footer className='footer-section my-5'>
        <h2>Where Social Media links will go</h2>
         <p>Continue the conversation at one of our links!</p>
      </footer>
    </>
  );
}

export default Main;
