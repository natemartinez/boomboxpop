import '../style.css';
import Main from './Main';
import Menu from './Menu';

function Music() {
  return (
    <>
     <h2>This is the music component</h2>
     <p>Powered by <a href='https://www.radio-browser.info' target='_blank'>RadioBrowser</a></p>
     <Menu/>
    </>
  );
}

export default Music;
