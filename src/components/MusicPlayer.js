import { useState, useEffect } from 'react';
import '../style.css';
import { RadioBrowserApi } from 'radio-browser-api';

function MusicPlayer() {
  const api = new RadioBrowserApi('boomboxPOP/1.2');

  const [radioData, setRadioData] = useState(null);

  const findPopRadios = async () => {
    try {
      // For now, just use one station for foundational testing
      let jpop = await api.searchStations({
        name: 'Big B Radio - Jpop',
      });
      setRadioData(jpop[0].url);
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
      <div>
         <button type="submit"></button>
         <audio controls src={radioData} type='audio/mpeg'></audio>
         <p>Powered by <a href='https://www.radio-browser.info' target='_blank'>RadioBrowser</a></p>
      </div>
    </>
    
    
  );
}

export default MusicPlayer;
