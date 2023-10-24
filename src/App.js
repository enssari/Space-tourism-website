import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { Crew } from './components/home/pages/Crew';
import { Tech } from './components/home/pages/Tech';
import './index.css';
import { Destination } from './components/home/pages/Destination';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Destination' element={<Destination />} />
          <Route path='/Crew' element={<Crew />} />
          <Route path='/Technology' element={<Tech/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
