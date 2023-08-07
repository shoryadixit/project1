import Navbar from './components/Navbar';
import "./App.css";
import Banner from './components/Banner';
import GetAdvice from './components/GetAdvice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BhaktaamerStotra from './components/BhaktaamerStotra';
import VastuAdvice from './components/VastuAdvice';
import AstrologyAdvice from './components/AstrologyAdvice';
import FreeAdvice from './components/FreeAdvice';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Banner />} />
            <Route path='/getAdvice' element={<GetAdvice />} />
            <Route path='/bhaktaamerStotra' element={<BhaktaamerStotra />} />
            <Route path='/vastuAdvice' element={<VastuAdvice />} />
            <Route path='/astrologyAdvice' element={<AstrologyAdvice />} />
            <Route path='/freeAdvice' element={<FreeAdvice />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
