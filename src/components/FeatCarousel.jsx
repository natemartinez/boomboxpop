import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselItem } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Article1 from './articles/Article1';


const FeatCarousel = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [features, setFeatures] = useState([]);

    const config = {
      'Authorization': 'Bearer e7338c25c4e7d195b6471ff9f8e0242db5474b2abe87380e586599621f327b9544d2da44efab6ef92c7cd66c393290528b16c1fc7698b83b88cc0138822271497b287ac5b44625fee34849eb46afcd3afe38154514aa91b657d19c8956efd9a2dadda566499356094446912706c3f989fb9be103316667974544ddbdc0a4a19a',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8'
    }
    const server = 'http://localhost:1337';

    const getFeatures = () => {
      axios.get(`${server}/features`, config)
       .then(response => {
         console.log(response.data.data);
         setFeatures(response.data.data);
         setLoading(false)
       })
       .catch(error => {
         console.error('There was an error fetching the images!', error);
       });
   };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
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
               <h2><Link to={'/articles/article1'}>Receive title from API</Link></h2>
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

export default FeatCarousel;
