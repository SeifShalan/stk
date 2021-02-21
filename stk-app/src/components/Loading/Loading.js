import React from 'react';
import {CircularProgress, Box, Grid} from '@material-ui/core';

const Loading = () => {
    return (
        <Box style={{height: '100vh', background: '#111B47'}}>
            <Grid container direction="row" alignItems="center" justify="center" style={{minHeight: '100vh'}}>
                <Grid item><CircularProgress style={{color: "white"}}/></Grid>
            </Grid>
        </Box>
    );
}

export default Loading;