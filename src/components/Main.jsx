import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Article1 from './articles/Article1';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import Carousel  from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SwipableCarousel from './SwipableCarousel';
import { AccordionItem, Button } from 'react-bootstrap';
import axios from 'axios';

function Main() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const config = {
    'Authorization': 'Bearer e54d7854ae95e38a4a54512213258d60bc3aa837ecb9b65e8d1c7801291921f18c9202ac4d36b95864ea8f5bbf20b7b9caa9adb9af6ed55951ee5bca58d66f31a5462057b595ec4b7dca2faa3a7e390127a855d0e82d524b348337d416cfaa550cca1d5e46439028614086c517460e19b5e91b083c85010096ca559384fd0bad',
    'Access-Control-Allow-Origin': '*'
}

  useEffect(() => {
    axios.get('http://localhost:1337/api/images', config)
      .then(response => {
        setLoading(false)
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
      });
  }, []);
 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <>
      <section className='feat-section my-5'>
        <h1 className='section-title text-center'>Featured</h1>
        <SwipableCarousel/>
      </section>    

      <section className=' my-5 trend-section container-fluid'>
       <h1 className='section-title text-center'>Trending News</h1>
       <Container>
        <Row xs={1} md={3}>
          <Col>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' src={image} alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <Link to={Article1}><h2>This is an example title</h2></Link>     
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
    </>
  );
}

export default Main;
