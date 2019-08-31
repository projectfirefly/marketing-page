import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import '../Styles/how_it_works_carousel.scss';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: require("../img/how_it_works_main.PNG")
      
  },
  {
    
    imgPath: require("../img/how_it_works_main2.PNG")
  }
];

const useStyles = makeStyles(theme => ({

  header: {
    
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: "transparent",
  },
  img: {

    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    
  },
}));

export default _ => {

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;

  function handleStepChange(step) {
    setActiveStep(step);
  }

    return(
    <div className={classes.root}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
   
    </div>
  );
    
}