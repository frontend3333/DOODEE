import React from 'react';
import { Route } from 'react-router';
import Header from './pages/Header';
import Estimates from './pages/Estimates';
import Home from './pages/Home';
import Process from './pages/Process';
import Projects from './pages/Projects';


function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/process' component={Process} />
      <Route path='/projects' component={Projects} />
      <Route path='/estimates' component={Estimates} />

    </div>
  );
}

export default App;
