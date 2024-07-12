import { useState, useEffect } from 'react';
import '../styles/style.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';
import {config, server} from '../config';
import axios from 'axios';

function Soundtrack() {
  const [soundtracks, setSoundtracks] = useState(null)

    const getInfo = () => {
        axios.get(`${server}/soundtracks`, config)
         .then(response => {
           console.log('Soundtracks: ', response.data);
           setSoundtracks(response.data.data);
         })
         .catch(error => {
           console.error('There was an error fetching the soundtrack!', error);
         });
      };

      useEffect(() => {
        getInfo();
      }, [])
  
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
          <Accordion>
           <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
           </Accordion.Item>
          </Accordion>          

    </>
  );
}

export default Soundtrack;