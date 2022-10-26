import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';

import './App.scss';



function App() {

  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
