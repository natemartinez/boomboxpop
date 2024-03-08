import { useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer';
import '../style.css';

function Main() {
  return (
    <div>
      <p>This is the main component</p>
      <MusicPlayer/>  
    </div>
  );
}

export default Main;
