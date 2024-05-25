import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselItem } from 'react-bootstrap';
const images = require.context('../../public/images', true);

const SwipableCarousel = () => {

  return (
    <Carousel
    additionalTransfrom={0}
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 3,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={3}
    swipeable
  >
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
       <div className='featured gx-4'>
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
             <button type="button">PlayStation</button>
           </div>
          </div>
       </div>
    </CarouselItem>
    </Carousel>
  );
};

export default SwipableCarousel;
