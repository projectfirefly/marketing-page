import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Member from './Member';
import NewModal from './NewModal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '5px solid #4aa810',
      boxShadow: theme.shadows[5],
    },
  }));


export default ({ name, displayName, roll, icon1, icon2, icon3, link1, link2, link3, bio }) => {
    

    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

   

    const handleOpen = _ => {
        setOpen(true)
    }
    const handleClose = _ => {
        setOpen(false)
    }


    return(
        <>
            <div className="member_div" onClick={handleOpen} >
                <img className="baby_pics" src={require(`../img/${name}_babyPic.PNG`)} alt=""/>
                <h1 className="name">{displayName}</h1>
                <p className="roll">{roll}</p>
            </div>

            <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                   
                <NewModal
                 name={name}
                 displayName={displayName}
                 roll={roll}
                 icon1={icon1}
                 icon2={icon2}
                 icon3={icon3}
                 link1={link1}
                 link2={link2}
                 link3={link3}
                 bio={bio}
                />
                    </div>
                </Modal>
        </>
    )
    

    
}