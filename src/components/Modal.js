import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    height: "60%",
    width: "50%"
  },
}));

export default function TransitionsModal({open, handleClose, selectedVideo}) {
  let video = null;
  if(selectedVideo) {
      const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
      video = <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
  }  


  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {video}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
