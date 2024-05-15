import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Carousel } from '@trendyol-js/react-carousel';
import { CarouselItem } from 'react-bootstrap';
const images = require.context('../../public/images', true);

const SwipableCarousel = () => {

  return (
      <Carousel show={1.5} slide={2} swiping={true}>
         <CarouselItem>
          <div className='featured'>
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
          </div>
         </CarouselItem> 
     
         <CarouselItem>
          <div className='featured'>
           <div className='card-div'>
         <div className='card-img-div'>
           <img className='card-img' src={images("./example.jpg")} alt=""/>
         </div>
         <div className='card-name p-4 text-light'>
          <h2>This is an example title</h2>
         </div>
         <div className='card-tag p-2'>
          <button type="button">Xbox</button>
         </div>
           </div>
          </div>
         </CarouselItem> 

         <CarouselItem>
          <div className='featured'>
           <div className='card-div'>
             <div className='card-img-div'>
               <img className='card-img' src={images("./example.jpg")} alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <h2>This is an example title</h2>
             </div>
             <div className='card-tag p-2'>
              <button type="button">Nintendo</button>
             </div>
           </div>
          </div>
         </CarouselItem> 
      </Carousel>
  );
};

export default SwipableCarousel;
