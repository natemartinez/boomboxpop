import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../style.css';
import { Link } from 'react-router-dom';
import Carousel  from 'react-bootstrap/Carousel';
import SwipableCarousel from './SwipableCarousel';
import { AccordionItem } from 'react-bootstrap';
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
      <section className='deals-section my-5 p-5'>
        <div>
          <h2 className='text-center'>All Deals</h2>
          <h4>Specifically tech, game, subscription deal content</h4>
        </div>
      </section>
      <section className='st-section my-5 p-5'>
        <h1 className='text-center m-2'>Soundtrack of the day</h1>
        <div className='main-track p-4'>
           <h2 className='text-center p-2'>Game/Movie Title</h2>
           <div className='track-img'>
             <h2 className='text-dark'>Soundtrack Image</h2>
           </div>
        </div>
        <h1 className='mt-5 mb-4'>Other Soundtracks</h1>
        <div className='track-list'>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <img className='accordion-icon' src={images("./mushroom.png")} alt=""/>Mario Bros.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Halo</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Persona</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              
              <Accordion.Header>Kingdom Hearts</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <section className='all-topic-section my-5'>
        <h1 className='text-center'>All Topics</h1>
        <div className='d-flex topic-wrapper p-3'>
          <div className='d-flex topic-btn-div p-5'>
            <h2>Games</h2>
            <button type="button">Example</button>
            <button type="button">Example</button>
            <button type="button">Example</button>
          </div>
          <div className='d-flex topic-btn-div p-5'>
            <h2>Music</h2>
            <button type="button">Example</button>
            <button type="button">Example</button>
            <button type="button">Example</button>
          </div>
        </div>
      </section>
      <footer className='footer-section'>
        <h2>Where Social Media links will go</h2>
         <p>Continue the conversation at one of our links!</p>
      </footer>
    </>
  );
}

export default Main;
