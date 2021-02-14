import React from 'react';
import {} from '@material-ui/core';
import Header from './components/Header'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
});

const Landing = () => {
    const classes = useStyles();

    return (
        <>
            <Header/>
        </>
    );
}

export default Landing;