import { useState, useEffect } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import Main from './Main';
import Menu from './Menu';
import Nav from './Nav';

function Home() {
  return (
    <>
      <Nav/>
      <Main/> 
      <Menu/>
    </>
  );
}

export default Home;
