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
      <section className='topic-section'>
        <div>
          <h2>All Topics</h2>
          <h4>Specifically article content</h4>
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
    </>
  );
}

export default Main;
