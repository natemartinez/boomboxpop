import { useState, useEffect } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

function Menu() {
  const [isShowing, setIsShowing] = useState(false);

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
     <button id='menu-toggle' type="button">
      <img id='arrow-btn' onClick={menuToggle} src={images('./menu-arrow.png')} alt=""/>
     </button>
     
     {isShowing ?
       <>
         <MusicPlayer/>
         <nav className='menu-section'>
          <div className='menu'>
           <div><Link to='/music'>Music</Link></div>
           <div>Consoles</div>
           <div>TV</div>
           <div>Community</div>
          </div>  
         </nav>
       </> : ''
     }  
    </div>
  );
}

export default Menu;