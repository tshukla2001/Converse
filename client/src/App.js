import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import logo from './Images/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    margin: '20px 0 40px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontFamily: 'Helvetica Neue',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  head: {
    fontSize: '5rem',
  },
  img: {
    height: '6rem',
    width: '6rem',
    float: 'left',
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h3" align="center" className={classes.head}><img src={logo} className={classes.img} />Converse</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
      <footer style={{ marginBottom: '2rem' }}>
        Made by Tanay Shukla with ❤️
      </footer>
    </div>
  );
};

export default App;
