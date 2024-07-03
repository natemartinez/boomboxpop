import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Button from "react-bootstrap/Button";
import { config, server } from '../config';
import '../styles/style.css';
import axios from 'axios';

function Nav() {
  const [navLinks, setNavLinks] = useState([]);
  const [images, setImages] = useState([]);
  const [logo, setLogo] = useState(null);

  const getNavLinks = () => {
    axios.get(`${server}/categories`, config)
      .then(response => {
        const rawLinks = response.data.data;
        const cleanLinks = rawLinks.map(link => {
          return {
            ...link,
            attributes: {
              ...link.attributes,
              name: DOMPurify.sanitize(link.attributes.name)
            }
          };
        });
        setNavLinks(cleanLinks);
      })
      .catch(error => {
        console.error('There was an error fetching the nav links!', error);
      });
  };

  const getImages = () => {
    axios.get(`${server}/nav-image`, config)
      .then(response => {
        const data = response.data.data.attributes;
        setLogo(data.url); // Set the fetched images correctly;
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
      });
  };

  useEffect(() => {
    getNavLinks();
    getImages();
  }, []);

  return (
    <div className='nav-container'>
      <div className='title-div'>
        <div className='d-flex align-items-center'>
          <img src={logo} alt="logo" id='logo' />
          <h2 id='title'>boomboxPOP</h2>
        </div>
        <Link to="/signup"><Button>Sign Up</Button></Link> {/* Correct the Link component usage */}
      </div>

      <nav>
        <Carousel interval={null}>
          <CarouselItem>
            {navLinks.length > 0 && (
              navLinks.slice(0, 3).map((link, index) => (
                <Button
                  key={index}
                  className='nav-btn'
                  id={link.attributes.name}
                  dangerouslySetInnerHTML={{ __html: link.attributes.name }}
                ></Button>
              ))
            )}
          </CarouselItem>
          <CarouselItem>
            {navLinks.length > 3 && (
              navLinks.slice(3, 6).map((link, index) => (
                <Button
                  key={index}
                  className='nav-btn'
                  id={link.attributes.name}
                  dangerouslySetInnerHTML={{ __html: link.attributes.name }}
                ></Button>
              ))
            )}
          </CarouselItem>
        </Carousel>
      </nav>
    </div>
  );
}

export default Nav;
