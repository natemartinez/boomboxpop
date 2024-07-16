import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import '../styles/style.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';
import { config, server } from '../config';
import axios from 'axios';

function Soundtrack() {
  const [soundtracks, setSoundtracks] = useState(null);
  const [mainTitle, setMainTitle] = useState(null);
  const [mainDesc, setMainDesc] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [mainList, setMainList] = useState(null);

  const getInfo = () => {
    axios.get(`${server}/soundtracks`, config)
      .then(response => {
        setSoundtracks(response.data.data);
        setSOTD();
      })
      .catch(error => {
        console.error('There was an error fetching the soundtrack!', error);
      });
  };

  // this function will change the index when the page refreshes
  // SOTD = Soundtrack of the day
  const setSOTD = () => {
    if (soundtracks && soundtracks.length > 0) {
      // let newIndex = Math.floor(Math.random() * 10);
      let soundtrackInfo = soundtracks[0].attributes;
      // eventually will be 'let soundtrackInfo = soundtracks[newIndex].attributes';
      setMainTitle(soundtrackInfo.title);
      setMainDesc(soundtrackInfo.description);
      setMainImg(soundtrackInfo.coverLink);
      setMainList(soundtrackInfo.songList);
      // setMainTrack(soundtracks[0]) // will eventually be newIndex when soundtracks are filled
    }
  };

  useEffect(() => {
    getInfo();
    setSOTD()
  }, [soundtracks]);

  // Function to process and sanitize HTML content
  const processContent = (content) => {
    return DOMPurify.sanitize(content);
  };

  return (
    <>
      <div className='d-flex flex-column'>
        <h1 className='text-center m-2'>Soundtrack of the day</h1>

        <div className='d-flex flex-row justify-content-evenly my-2 flex-wrap'>
          <div className='track-info p-4 my-1'>
            <h2 className='text-center p-2'>
              <div dangerouslySetInnerHTML={{ __html: processContent(mainTitle) }} />
            </h2>
            <div className='sotd-container m-2'>
              <img className='sotd-img' src={`${mainImg}`} alt="soundtrack of the day image"/>
            </div> 
            <p className='text-center p-1 sotd-desc'>
              <div dangerouslySetInnerHTML={{ __html: processContent(mainDesc) }} />
            </p>
          </div>
          <div className='song-list my-5'>
            <h2>Song List</h2>
            <ul>
              {/* Add your song list here */}
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
