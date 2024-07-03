import { useState, useEffect } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';
import {config, server} from '../config';

function Soundtrack() {

    const getInfo = () => {
        axios.get(`${server}/categories`, config)
         .then(response => {
           console.log('Categories: ', response.data.data);
           setCategories(response.data.data);
         })
         .catch(error => {
           console.error('There was an error fetching the images!', error);
         });
      };
  
  return (
    <>
        <div className='d-flex flex-column'>
           <h1 className='text-center m-2'>Soundtrack of the day</h1>

           <div className='d-flex flex-row justify-content-evenly my-2 flex-wrap'>
            <div className='track-info p-4 my-5'>
           <h2 className='text-center p-2'>Game/Movie Title</h2>
           <div className='track-img'>
             <h2 className='text-dark'>Soundtrack Image</h2>
           </div>
            </div>
            <div className='song-list my-5'>
              <h2>Song List</h2>
              <ul>
                
              </ul>
            </div>            
           </div>
          </div>
          <h1 className='mt-5 mb-4'>Other Soundtracks</h1>
          

    </>
  );
}

export default Soundtrack;