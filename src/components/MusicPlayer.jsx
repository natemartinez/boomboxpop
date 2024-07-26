import '../styles/style.css';
import { useState, useEffect, useRef } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import { fetchData, getData } from '../library';
import {config, server} from '../config';


function MusicPlayer({curSong}) {
  const api = new RadioBrowserApi('boomboxPOP/1.2');
  const [radioData, setRadioData] = useState(null);
  const [radioName, setRadioName] = useState(null);
  const [radioIcon, setRadioIcon] = useState(null);

  const [curSongTitle, setcurSongTitle] = useState(null);
  const [curSongTime, setcurSongTime] = useState(null);
  const [curSongURL, setcurSongURL] = useState(null);

  const [playBtn, setPlayBtn] = useState(null);
  const [pauseBtn, setPauseBtn] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  // I should move findPopRadios to Soundtrack.jsx
  // which then will pass songData to MusicPlayer
  const findPopRadios = async () => {
    try {
      // For now, just use one station for foundational testing
      /*
      let jpop = await api.searchStations({
        name: 'Big B Radio - Jpop',
      });
      setRadioData(jpop[0].url);
      setRadioName(jpop[0].name);
      setRadioIcon(jpop[0].favicon);
      //console.log(jpop[0].favicon);
      // in the future, show where the radio is from
        with flag icon
      */
    }
    catch (e) {
        console.error(e)
    }
  }

  const getImages = async() => {
    await fetchData();
    setImages(getData());
  };  
  const setImages = (images) => {
    const imgServer = 'http://localhost:1337';
  
    let playBtn = images.find(obj => obj.name == 'bb-play.png');
    let pauseBtn = images.find(obj => obj.name == 'bb-pause.png');

    let playBtnUrl = imgServer + playBtn.url;
    let pauseBtnUrl = imgServer + pauseBtn.url;

    setPlayBtn(playBtnUrl);
    setPauseBtn(pauseBtnUrl);
  };

  const playCurSong = (song) => {
    if(song !== null) {
      setcurSongTitle(song.title);
      setcurSongTime(song.duration);
      setcurSongURL(song.url);
      setIsLoaded(true);
      setIsPlaying(true);
    } else{
      setIsLoaded(false);
      setIsPlaying(false)
    }
  };

  useEffect(() => {
    getImages();
  }, [])

  useEffect(() => {
    playCurSong(curSong);
  }, [curSong])

  useEffect(() => {
    if (isLoaded && isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing the audio:", error);
      });
    }
  }, [curSongURL, isLoaded, isPlaying]);


  return (
    <>
     {isLoaded ? (
       <div className='radio-player'>
        <audio ref={audioRef} src={curSongURL} type='audio/mpeg'></audio>
         <div className='radio-info'>
          <img id='radio-ico' src={radioIcon} alt=""/>
          <p id='radio-name'>{curSongTitle}</p>    
         </div> 
           <div className='radio-btns'>
             <button id='music-btn' onClick={togglePlayPause}>
             {isPlaying ? (
               <img id='playBtn' src={playBtn} alt='playbutton' />
              ) : (
               <img id='pauseBtn' src={pauseBtn} alt='pause button' />
            )}
            </button>        
           </div>
       </div>
        ) : ('')}   
    </>
    
    
  );
}

export default MusicPlayer;
