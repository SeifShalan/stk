import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Header from './components/Header'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    image: {
        height: 500,
    },
});

const Landing = () => {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <Grid container direction="row" justify="center" alignItems="flex-start">
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography style={{fontSize: 30, fontWeight: 600, color:"#111B47"}}>EGX30’s First Financial<br/>Advisor</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <img
                        alt="Landing Page"
                        className={classes.image}
                        src="/images/landing.svg"
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Landing;