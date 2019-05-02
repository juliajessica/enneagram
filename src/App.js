import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import Enneagram from './Enneagram/Enneagram';
import About from './Enneagram/About';
import Type1 from './Types/Type1';
import Type2 from './Types/Type2';
import Type3 from './Types/Type3';
import Type4 from './Types/Type4';
import Type5 from './Types/Type5';
import Type6 from './Types/Type6';
import Type7 from './Types/Type7';
import Type8 from './Types/Type8';
import Type9 from './Types/Type9';

function App() {
  return (
    // <Switch>
    <div className="app">
      {/* <Route path="/enneagram" exact component={Enneagram} /> */}
      <Enneagram />
      <About />
      <Type1 />
      {/* <Route path="/type1" component={Type1} /> */}
      <Type2 />
      <Type3 />
      <Type4 />
      <Type5 />
      <Type6 />
      <Type7 />
      <Type8 />
      <Type9 />
    </div>
    // </Switch>
  );
}

export default App;
