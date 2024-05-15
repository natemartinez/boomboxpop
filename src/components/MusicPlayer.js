import { useState, useEffect, useRef } from 'react';
import '../style.css';
import { RadioBrowserApi } from 'radio-browser-api';
const images = require.context('../../public/images', true);


function MusicPlayer() {
  const api = new RadioBrowserApi('boomboxPOP/1.2');
  const [radioData, setRadioData] = useState(null);
  const [radioName, setRadioName] = useState(null);
  const [radioIcon, setRadioIcon] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const findPopRadios = async () => {
    try {
      // For now, just use one station for foundational testing
      let jpop = await api.searchStations({
        name: 'Big B Radio - Jpop',
      });
      setRadioData(jpop[0].url);
      setRadioName(jpop[0].name);
      setRadioIcon(jpop[0].favicon);
      //console.log(jpop[0].favicon);
      // in the future, show where the radio is from
    }
    catch (e) {
        console.error(e)
    }
  }

  useEffect(() => {
    findPopRadios();
  })

  return (
    <>
      <div className='radio-player'>
          <audio ref={audioRef} src={radioData} type='audio/mpeg'></audio>
           <div className='radio-info'>
            
            <img id='radio-ico' src={radioIcon} alt=""/>
            <p id='radio-name'>{radioName}</p>
            <button id='music-btn' onClick={togglePlayPause}>
             {isPlaying ? <img id='boomboxIcon' src={images('./bb-play.png')}/> : <img id='boomboxIcon' src={images('./bb-pause.png')}/>}
            </button>
           </div>
      </div>
    </>
    
    
  );
}

export default MusicPlayer;
