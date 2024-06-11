import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Button from "react-bootstrap/Button";
import '../styles/style.css';


function Nav() {

  return (
    <div className='nav-container'>
      <div className='title-div '>
        <div className='d-flex align-items-center'>

         <h2 id='title'>boomboxPOP</h2>          
        </div>
        <Link><Button>Sign Up</Button></Link>
      </div>

      <nav>
        <Carousel interval={null}>
          <CarouselItem>
            <Button className='nav-btn'>Example1</Button>
            <Button className='nav-btn'>Example2</Button>
            <Button className='nav-btn'>Example3</Button>
          </CarouselItem>
          <CarouselItem>
            <Button className='nav-btn'>Example1</Button>
            <Button className='nav-btn'>Example2</Button>
            <Button className='nav-btn'>Example3</Button>
          </CarouselItem>
        </Carousel>
      </nav>

    </div>
  );
}

export default Nav;
