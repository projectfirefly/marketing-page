import React from 'react';
import Header from './Header';
import MissionStatement from './MissionStatement';
import MissionStatementBottom from './MissionStatementBottom';
import HowItWorks from './HowItWorks';
import Testimonies from './Testimonies';
import Footer from './Footer';
import './marketing.scss'


const App = _ => {

  return(
    <div className="container">
      <Header />
      <MissionStatement /> 
      <MissionStatementBottom />
      <HowItWorks />
      <Testimonies />
      <Footer /> 
    </div>
  )
}

export default App