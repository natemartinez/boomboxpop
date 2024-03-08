import { useState, useEffect } from 'react';

import '../style.css';
import { Link } from 'react-router-dom';

function Articles() {
  return (
    <>
     <section className='article-section'>
       <article className='article'>
         <div className='article-img'></div>
         <div className='article-name'></div>
         <div className='article-tag'></div>
       </article> 
     </section>
      
    </>
  );
}

export default Articles;
