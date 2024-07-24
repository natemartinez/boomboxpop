import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
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
import Soundtrack from './Soundtrack';
import {config, server} from '../config';
import { fetchData, getData } from '../library';


function Main() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [features, setFeatures] = useState([]);
  const [trends, setTrends] = useState([]);
  const [path, setPath] = useState('/articles/');
  const [remoteIcon, setremoteIcon] = useState(null);
  const [vinylIcon, setvinylIcon] = useState(null);
  const [gamesBkgrd, setgamesBkgrd] = useState(null);
  const [musicBkgrd, setmusicBkgrd] = useState(null);
  const location = useLocation();

  const getCategories = () => {
    axios.get(`${server}/categories`, config)
     .then(response => {
       setCategories(response.data.data);
     })
     .catch(error => {
       console.error('There was an error fetching the images!', error);
     });
  };
  
  const getTrends = () => {
     axios.get(`${server}/trendings`, config)
      .then(response => {
        setTrends(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
      });
  };

  const getFeatures = () => {
    axios.get(`${server}/features`, config)
     .then(response => {
       setFeatures(response.data.data);
       setLoading(false);
     })
     .catch(error => {
       console.error('There was an error fetching the images!', error);
     });
  };

  const getImages = async() => {
    await fetchData();
    setImages(getData());
   };  

  const setImages = (images) => {
    console.log(images);
    const imgServer = 'http://localhost:1337';
  
    // Icon for games section
    let remoteIcon = images.find(obj => obj.name == 'remote-ico.png');
    let remoteIconUrl = imgServer + remoteIcon.url;

    let gamesBkgrd = images.find(obj => obj.name == 'controllers.jpg');
    let gamesBkgrdUrl = imgServer + gamesBkgrd.url;

    let vinylIcon = images.find(obj => obj.name == 'vinyl.png');
    let vinylIconUrl = imgServer + vinylIcon.url;

    let musicBkgrd = images.find(obj => obj.name == 'cassettes.jpg');
    let musicBkgrdUrl = imgServer + musicBkgrd.url;

    setremoteIcon(remoteIconUrl);
    setvinylIcon(vinylIconUrl);
    setgamesBkgrd(gamesBkgrdUrl);
    setmusicBkgrd(musicBkgrdUrl);

  };

  useEffect(() => {
    getImages()
  }, [])

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
    <div> 
     <div className='main-section'>
      <Nav/>
      <section className=' my-3 trend-section container-fluid'>
       <h1 className='section-title text-center'>Trending News</h1>
       <Container>
        <Row className='p-4' xs={1} sm={2} md={3} lg={3} xl={3}>
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' src={trends[0].attributes.coverLink} alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <Link to={`${path}${trends[0].attributes.category}${trends[0].attributes.codename}`}><h2>{trends[0].attributes.title}</h2></Link>     
             </div>
             <div className='card-tag p-2'>
              <button type="button" id={trends[0].attributes.category}>{trends[0].attributes.category}</button>
             </div>
           </div> 
          </Col>                                                
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
               <Link to={`${path}${trends[1].attributes.category}${trends[1].attributes.codename}`}><h2>{trends[1].attributes.title}</h2></Link>
             </div>
             <div className='card-tag p-2'>
              <button id={trends[1].attributes.category} type="button">{trends[1].attributes.category}</button>
             </div>
           </div>
          </Col> 
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
               <Link to={`${path}${trends[2].attributes.category}${trends[2].attributes.codename}`}><h2>{trends[2].attributes.title}</h2></Link>
             </div>
             <div className='card-tag p-2'>
              <button id={trends[2].attributes.category} type="button">{trends[2].attributes.category}</button>
             </div>
           </div>            
          </Col>
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
               <Link to={`${path}${trends[2].attributes.category}${trends[2].attributes.codename}`}><h2>{trends[2].attributes.title}</h2></Link>
             </div>
             <div className='card-tag p-2'>
              <button id={trends[2].attributes.category} type="button">{trends[2].attributes.category}</button>
             </div>
           </div>            
          </Col>
        </Row>
        <Row className='p-4' xs={1} sm={2} md={3} lg={3} xl={3}>
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
               <Link to={`${path}${trends[3].attributes.category}${trends[3].attributes.codename}`}><h2>{trends[3].attributes.title}</h2></Link>
             </div>
             <div className='card-tag p-2'>
              <button id={trends[3].attributes.category} type="button">{trends[3].attributes.category}</button>
             </div>
           </div>            
          </Col>
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <h2>{trends[3].attributes.title}</h2>
             </div>
             <div className='card-tag p-2'>
              <button id={trends[3].attributes.category} type="button">{trends[3].attributes.category}</button>
             </div>
           </div>           
          </Col>
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <h2>{trends[3].attributes.title}</h2>
             </div>
             <div className='card-tag p-2'>
              <button id={trends[3].attributes.category} type="button">{trends[3].attributes.category}</button>
             </div>
           </div>           
          </Col>
          <Col className='d-flex justify-content-center'>
           <div className='card-div'>
             <div className='card-img-div'>
              <img className='card-img' alt=""/>
             </div>
             <div className='card-name p-4 text-light'>
              <h2>{trends[3].attributes.title}</h2>
             </div>
             <div className='card-tag p-2'>
              <button id={trends[3].attributes.category} type="button">{trends[3].attributes.category}</button>
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
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
          },
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
             <Link to={`${path}${features[0].attributes.category}${features[0].attributes.codename}`}><h2>{features[0].attributes.title}</h2></Link>
             </div>
             <div className='card-tag p-2'>
               <button id={features[0].attributes.category} type="button">{features[0].attributes.category}</button>
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
               <h2><Link to={'/articles/Feat2'}>{features[1].attributes.title}</Link></h2>
             </div>
             <div className='card-tag p-2'>
               <button id={features[1].attributes.category} type="button">{features[1].attributes.category}</button>
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
               <h2><Link to={'/articles/Feat3'}>{features[2].attributes.title}</Link></h2>
             </div>
             <div className='card-tag p-2'>
               <button id={features[2].attributes.category} type="button">{features[2].attributes.category}</button>
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
               <h2><Link to={'/articles/Feat3'}>{features[3].attributes.title}</Link></h2>
             </div>
             <div className='card-tag p-2'>
               <button id={features[3].attributes.category} type="button">{features[3].attributes.category}</button>
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
               <h2><Link to={'/articles/Feat4'}>{features[4].attributes.title}</Link></h2>
             </div>
             <div className='card-tag p-2'>
               <button id={features[4].attributes.category} type="button">{features[4].attributes.category}</button>
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
      <section className='st-section p-5'>
        <Soundtrack/>
      </section>
      <section className='all-topic-section my-5'>
        <div className='topic-wrapper container'>
          <Col>
           <div className='game-wrapper'>
           <h1 className='text-center my-5'>All Topics</h1>
            <div className='bkgrd-wrapper'>
              <img className='topic-bkgrd img-fluid' src={gamesBkgrd} alt="remotes"/>
              <div className='topic-menu'>
               <div className='topic-menu-content d-flex flex-column align-items-center'>
                <img src={remoteIcon} className='game-ico img-fluid' alt="controller"/>
                <h2 className='all-topic-header'>Games</h2>
                <Button className="p-3 ">Example Text</Button>              
               </div>
             </div>
            </div>               
           </div>
          </Col>
          <Col>
           <div className='music-wrapper'>
           <div className='bkgrd-wrapper'>
              <img className='topic-bkgrd img-fluid' src={musicBkgrd} alt="cassettes"/>
              <div className='topic-menu'>
                <div className='topic-menu-content d-flex flex-column align-items-center'>
                 <img src={vinylIcon} className='game-ico img-fluid'  alt="vinyl"/>
                 <h2 className='all-topic-header'>Music</h2>
                 <Button className="p-3 ">Example Text</Button>              
                </div>
             </div>
           </div>        
           
           </div>
          </Col>          
        </div>
      </section>
      <section className='embed-section'>
        <div className='embed-div'>
         <p>This part will hold social media posts</p> 
        </div>
      </section>
      <footer className='footer-section'>
        <h2>Where Social Media links will go</h2>
         <p>Continue the conversation at one of our links!</p>
      </footer>      
     </div>
     <Menu/>
    </div>
  );
}

export default Main;
