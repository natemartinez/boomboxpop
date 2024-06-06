import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import '../styles/style.css';


function Nav() {
  return (
    <div className='nav-container'>
      <div className='title-div '>
        <div className='d-flex align-items-center'>
         <img id='logo' src={images('./logo.png')} alt=""/>
         <h2 id='title'>boomboxPOP</h2>          
        </div>
        <Link><Button>Sign Up</Button></Link>
      </div>

      <nav>
         <Carousel interval={null}>
          <Carousel.Item>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
          </Carousel.Item>
          <Carousel.Item>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
          </Carousel.Item>
          <Carousel.Item>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
           <Button type="button" className="btn btn-dark nav-btn">Example</Button>
          </Carousel.Item>
        </Carousel>
      </nav>

    </div>
  );
}

export default Nav;
