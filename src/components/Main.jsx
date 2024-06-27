import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Article1 from './articles/Trend1';
import '../styles/style.css';
import { Link, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AccordionItem, Button, CarouselItem } from 'react-bootstrap';
import axios from 'axios';
import Nav from './Nav';
import Menu from './Menu';


function Main() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [features, setFeatures] = useState([]);
  const [trends, setTrends] = useState([]);
  const location = useLocation();
  const config = {
    'Authorization': 'Bearer e7338c25c4e7d195b6471ff9f8e0242db5474b2abe87380e586599621f327b9544d2da44efab6ef92c7cd66c393290528b16c1fc7698b83b88cc0138822271497b287ac5b44625fee34849eb46afcd3afe38154514aa91b657d19c8956efd9a2dadda566499356094446912706c3f989fb9be103316667974544ddbdc0a4a19a',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8'
  }
  const server = 'http://localhost:1337/api';

  // Set the cards array
  // Iterate through the title card array --> cards[i]

  
  const getCategories = () => {
    axios.get(`${server}/categories`, config)
     .then(response => {
       console.log('Categories: ', response.data.data);
       setCategories(response.data.data);
     })
     .catch(error => {
       console.error('There was an error fetching the images!', error);
     });
 };
  
  const getTrends = () => {
     axios.get(`${server}/trendings`, config)
      .then(response => {
        console.log('Trending: ', response.data.data);
        setTrends(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
      });
  };

  const getFeatures = () => {
    axios.get(`${server}/features`, config)
     .then(response => {
       console.log('Featured ', response.data.data);
       setFeatures(response.data.data);
       setLoading(false);
     })
     .catch(error => {
       console.error('There was an error fetching the images!', error);
     });
  };

  useEffect(() => {
    getCategories();
    getTrends();
    getFeatures();
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
  return (
    <>
      <Nav/>
      <section className=' my-5 trend-section container-fluid'>
       <h1 className='section-title text-center'>Trending News</h1>
       <Container>
        <Row xs={1} md={3}>
          <Col>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' src={trends[0].attributes.coverLink} alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <Link to={'/articles/trend1'}><h2>{trends[0].attributes.title}</h2></Link>     
             </div>
             <div className='card-tag p-2'>
              <button type="button" className={trends[0].attributes.category}>{trends[0].attributes.category}</button>
             </div>
           </div>             
          </Col>
          <Col>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <h2></h2>
             </div>
             <div className='card-tag p-2'>
              <button type="button">PlayStation</button>
             </div>
           </div>              
          </Col>
          <Col>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <h2>This is an example title</h2>
             </div>
             <div className='card-tag p-2'>
              <button type="button">PlayStation</button>
             </div>
           </div>
          </Col>
        </Row>   
       </Container>        
      </section>

      <section className='feat-section my-5'>
        <h1 className='section-title text-center'>Featured</h1>
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
               <img className='card-img' src={features[0].attributes.coverLink} alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
               <h2><Link to={'/articles/article1'}>{features[0].attributes.title}</Link></h2>
             </div>
             <div className='card-tag p-2'>
               <button type="button">{features[0].attributes.category}</button>
             </div>
            </div>
          </div>
          </CarouselItem> 
          <CarouselItem>
          <div className='featured'>
            <div className='card-div'>
             <div className='card-img-div'>
               <img className='card-img'  alt=""/>
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
               <img className='card-img' alt=""/>
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
      </section>    

      <section className='product-section my-5'>
        <Container>
          <h2 className='text-center'>All Deals</h2>
          <Row xs={1} md={4}>
            <Col>
              <div className='product-div my-5'>
               <div className='product-card'>
                 <div className='p-4'>
                   <img className='product-img' alt=""/>
                 </div>
                 <div>
                   <div className='card-desc text-light'>
                    <h2>This is an example title</h2>
                   </div>
                   <div className='card-price text-light'>
                    <h2>This is an example title</h2>
                   </div>
                 </div>
  
               </div>                
              </div>
            </Col>  
            <Col>
              <div className='product-div my-5'>
               <div className='product-card'>
                 <div className='p-4'>
                   <img className='product-img' alt=""/>
                 </div>
                 <div>
                   <div className='card-desc text-light'>
                    <h2>This is an example title</h2>
                   </div>
                   <div className='card-price text-light'>
                    <h2>This is an example title</h2>
                   </div>
                 </div>
  
               </div>                
              </div>
            </Col>
            <Col>
              <div className='product-div my-5'>
               <div className='product-card'>
                 <div className='p-4'>
                   <img className='product-img'  alt=""/>
                 </div>
                 <div>
                   <div className='card-desc text-light'>
                    <h2>This is an example title</h2>
                   </div>
                   <div className='card-price text-light'>
                    <h2>This is an example title</h2>
                   </div>
                 </div>
  
               </div>                
              </div>
            </Col>
            <Col>
              <div className='product-div my-5'>
               <div className='product-card'>
                 <div className='p-4'>
                   <img className='product-img' alt=""/>
                 </div>
                 <div>
                   <div className='card-desc text-light'>
                    <h2>This is an example title</h2>
                   </div>
                   <div className='card-price text-light'>
                    <h2>This is an example title</h2>
                   </div>
                 </div>
  
               </div>                
              </div>
            </Col>
          </Row>             
        </Container>
      </section>
      <section className='st-section my-3 p-5'>
        <div className='d-flex flex-column'>
           <h1 className='text-center m-2'>Soundtrack of the day</h1>

           <div className='d-flex flex-row justify-content-evenly my-2 flex-wrap'>
            <div className='track-info p-4 my-5'>
           <h2 className='text-center p-2'>Game/Movie Title</h2>
           <div className='track-img'>
             <h2 className='text-dark'>Soundtrack Image</h2>
           </div>
            </div>
            <div className='song-list my-5'>
              <h2>Song List</h2>
              <ul>
                
              </ul>
            </div>            
           </div>

          </div>
          <h1 className='mt-5 mb-4'>Other Soundtracks</h1>
          <div className='track-list'>
           <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <img className='accordion-icon' alt=""/>Mario Bros.
              </Accordion.Header>
              <Accordion.Body>
                Link to soundtrack radio
                <button type="button">Go!</button>
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
          <div className='topic-btn-div container p-5'>
            <h2 className='all-topic-header'>Games</h2>
            <Button className=" p-3">Example Text</Button>
          </div>
          <div className='topic-btn-div col-md-10 container p-5'>
            <h2 className='all-topic-header'>Music</h2>
            <Button className=" p-3">Example Text</Button>
          </div>
        </div>
      </section>
      <section className='embed-section'>
        <div className='embed-div'>
          
        </div>
      </section>
      <footer className='footer-section'>
        <h2>Where Social Media links will go</h2>
         <p>Continue the conversation at one of our links!</p>
      </footer>
      <Menu/>
    </>
  );
}

export default Main;
