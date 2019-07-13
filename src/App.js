import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import About from './Pages/About';
import Types from './Pages/Types';

function App() {
  return (
    // <Switch>
    <div className="app">
      {/* <Route path="/enneagram" exact component={Enneagram} /> */}
      <Header />
      <About />
      <Types/>
    </div>
    // </Switch>
  );
}

export default App;
               
                
                
