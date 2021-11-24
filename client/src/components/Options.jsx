import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Phone, PhoneDisabled } from '@material-ui/icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: '0 1rem',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
    padding: '0.5rem 1rem',
  },
  padding: {
    paddingLeft: '3rem',
  },
  padding1: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  paper: {
    padding: '10px 0',
    borderRadius: '2rem',
    backgroundColor: 'rgb(255, 255, 255, 0.3)',
    boxShadow: 'none',
  },
}));

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <TextField
                fullWidth
                label="Name"
                id="fullWidth"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={classes.textField}
                style={{ marginBottom: '1rem' }}
              />
              <TextField
                label="ID"
                id="fullWidth"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
                style={{ marginBottom: '1.5rem' }}
              />
            </Grid>

            <Grid item xs={12} md={6} className={classes.padding1}>
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<AccountCircleIcon fontSize="large" />}
                  style={{
                    backgroundColor: '#1B3C68',
                    color: 'white',
                    borderRadius: '10rem',
                  }}
                >
                  Copy ID
                </Button>
              </CopyToClipboard>
              {callAccepted && !callEnded ? (
                <Button
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '10rem',
                    paddingLeft: '1rem',
                    marginBottom: '1rem',
                  }}
                  fullWidth
                  startIcon={<PhoneDisabled />}
                  onClick={leaveCall}
                  className={classes.margin}
                >
                  End Call
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                  fullWidth
                  className={classes.margin}
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    borderRadius: '10rem',
                  }}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Sidebar;
