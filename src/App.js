import React from 'react';
import { Route } from 'react-router-dom';

import MarketingPage from './Components/MarketingPage';
import TeamPage from './Components/TeamPage';
import './App.css';

const App = _ => {

  return(
    <div className="container">
      <Route exact path="/" render={MarketingPage} />
      <Route path="/teamPage" render={TeamPage} />
    </div>
  )
}

export default App