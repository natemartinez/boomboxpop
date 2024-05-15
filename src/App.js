import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Music from './components/Music';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/music' element={<Music/>}/>
      </Routes>
    </div>
  );
}

export default App;
