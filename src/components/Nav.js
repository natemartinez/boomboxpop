import { useState, useEffect } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
     <nav className='nav-wrapper'>
       <div className='nav-menu'>
        <div><Link to='/music'>Music</Link></div>
        <div>Consoles</div>
        <div>TV</div>
        <div>Community</div>
       </div> 
     </nav>
    </>
  );
}

export default Nav;