import { useState, useEffect } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import Main from './Main.jsx';
import Menu from './Menu.jsx';
import Nav from './Nav.jsx';


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
