import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Phone } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', color: 'white' }}>
          <h3 style={{ margin: '0.5rem 1rem 0 0' }}>Incoming Call</h3>
          <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }} onClick={answerCall}>
            <Phone />
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
