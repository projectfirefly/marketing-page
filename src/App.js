import React from 'react';
import { Route } from 'react-router-dom';

import MarketingPage from './Components/MarketingPage';
import TeamPage from './Components/TeamPage';
import './App.css';
import HowFireflyWorksPage from './Components/HowFireflyWorksPage';

const App = _ => {

  return(
    <div className="container">
      <Route exact path="/" render={MarketingPage} />
      <Route path="/teamPage" render={TeamPage} />
      <Route path="/tutorial" render={HowFireflyWorksPage} />
    </div>
  )
}

export default App