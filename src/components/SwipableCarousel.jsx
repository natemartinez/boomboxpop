import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselItem } from 'react-bootstrap';
import axios from 'axios';


const SwipableCarousel = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const config = {
      'Authorization': 'Bearer e54d7854ae95e38a4a54512213258d60bc3aa837ecb9b65e8d1c7801291921f18c9202ac4d36b95864ea8f5bbf20b7b9caa9adb9af6ed55951ee5bca58d66f31a5462057b595ec4b7dca2faa3a7e390127a855d0e82d524b348337d416cfaa550cca1d5e46439028614086c517460e19b5e91b083c85010096ca559384fd0bad',
      'Access-Control-Allow-Origin': '*'
    }
  
    useEffect(() => {
      axios.get('http://localhost:1337/api/images', config)
        .then(response => {
          setCoverImage(response.data.data[0].attributes.url);
          setLoading(false)
        })
        .catch(error => {
          console.error('There was an error fetching the images!', error);
        });
    }, []);

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
          items: 2,
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
               <img className='card-img' src={coverImage} alt=""/>
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
               <img className='card-img' src={coverImage} alt=""/>
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
               <img className='card-img' src={coverImage} alt=""/>
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
