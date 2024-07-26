import { useState, useEffect } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

function Menu({songData}) {
  const [isShowing, setIsShowing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [curSong, setcurSong] = useState(null);

  const updateCurSong = (song) => {
   setcurSong(song);
   setIsLoaded(true);
  }

  const loadMenu =() => {
    setTimeout(() => {
      setIsShowing(true);
    }, 1000);
  };

  useEffect(() => {
    loadMenu();
  }, []);

  useEffect(() => {
    updateCurSong(songData);
  }, [songData])

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
       
       {isLoaded ? <MusicPlayer curSong={curSong}/>:''} 
       {isShowing ?
         <>
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