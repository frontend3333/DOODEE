import React from 'react';
import { Route } from 'react-router';
import Header from './pages/Header';
import Estimates from './pages/Estimates';
import Home from './pages/Home';
import Process from './pages/Process';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Commercial from './pages/Commercial';
import Housing from './pages/Housing';
import KakaoMap from './components/KakaoMap';
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/process' component={Process} />
      <Route path='/projects' component={Projects} />
      <Route path='/housing' component={Housing} />
      <Route path='/commercial' component={Commercial} />
      <Route path='/estimates' component={Estimates} />
      <Route path='/contact' component={Contact} />
      <Footer/>
    </>
  );
}

export default App;
