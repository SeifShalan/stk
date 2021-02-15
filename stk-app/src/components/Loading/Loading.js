import React from 'react';
import {CircularProgress, Box} from '@material-ui/core';

const Loading = () => {
    return(
      <Box style={{height: '100vh', background: '#111B47'}}>
          <CircularProgress style={{color: "white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}/>
      </Box>
    );
}

export default Loading;