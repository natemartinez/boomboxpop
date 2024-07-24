import { useState, useEffect } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

function Menu() {
  const [isShowing, setIsShowing] = useState(true);

  const menuToggle = () => {
    if (isShowing) {
      console.log('is showing')
      setIsShowing(false)
    } else {
      setIsShowing(true)
    }
  }; // add loading screen when nav bar is trying to get radio
  // add animation to menu-toggle when clicked
  return (
    <div className='menu-container'>
      <div className='menu-wrapper'>    
       <button id='menu-toggle' type="button">
       </button>
       
       {isShowing ?
         <>
           <MusicPlayer/>
           <nav className='menu-section'>
            <div className='menu'>
             <div><Link to='/music'>Soundtracks</Link></div>
             <div>Consoles</div>
             <div>TV</div>
             <div>Community</div>
            </div>  
           </nav>
         </> : ''
       }  
      </div>
    </div>
  );
}

export default Menu;