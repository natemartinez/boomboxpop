import { useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer';
import Nav from './Nav';
import '../style.css';
import { Link } from 'react-router-dom';
import Articles from './Articles';

function Main() {
  return (
    <>
      <MusicPlayer/> 
      <Articles/> 
      <Nav/>
    </>
  );
}

export default Main;
