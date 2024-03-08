import {Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Music from './components/MusicPlayer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/music' element={<Music/>}/>
      </Routes>
    </div>
  );
}

export default App;
