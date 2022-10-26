import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';

import './App.scss';



function App() {

  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
    </>
  );
}

export default App;
