import React, { useContext } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '80%',
    borderRadius: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.5) 20px 20px 15px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    textAlign: 'center',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Grid item xs={12} md={6} className={classes.heading}>
          <Typography variant="h5" gutterBottom>
            {name || 'Name'}
          </Typography>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.video}
          />
        </Grid>
      )}
      {callAccepted && !callEnded && (
        <Grid item xs={12} md={6} className={classes.heading}>
          <Typography variant="h5" gutterBottom>
            {call.name || 'Name'}
          </Typography>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={classes.video}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
