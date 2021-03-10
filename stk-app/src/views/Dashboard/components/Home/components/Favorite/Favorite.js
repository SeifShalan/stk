import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        borderRadius: 10,
        padding: 40,
        width: '25vw',
        height: 200,
    },
}));

const Favorite = () => {
    const classes = useStyles();

    return (
        <div style={{display: 'flex'}}>
            <Paper className={classes.paper}>
                test
            </Paper>
        </div>
    );
}

export default Favorite;
