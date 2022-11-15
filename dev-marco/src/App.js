import { Routes, Route } from 'react-router-dom';

import AboutMe from './pages/about-me/about-me';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import ScrollToTop from './components/scroll-top/scroll-top';

import './App.scss';



function App() {

  return (
    <>
        <ScrollToTop>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/about-me' element={<AboutMe />} />
          </Routes>
        </ScrollToTop>
    </>
  );
}

export default App;
