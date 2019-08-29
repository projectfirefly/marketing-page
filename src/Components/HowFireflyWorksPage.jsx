import React from 'react';

import Header from './Header';
import HowItWorksMissionStatement from './HowItWorksMissionStatement';
import HowItWorksTutorial from './HowItWorksTutorial';
import HowItWorksTestimony from './HowItWorksTestimony';
import TestimonyButton from './TestimonyButton';
import Footer from './Footer';

export default _ => {

    return(
        <div className="how_firefly_works_container">
            <Header />
            <HowItWorksMissionStatement />
            <HowItWorksTutorial />
            <HowItWorksTestimony />
            <TestimonyButton />
            <Footer />
        </div>
    )
}