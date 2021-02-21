import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import Header from './components/Header'
import Footer from './components/Footer'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minHeight: '100vh'
    },
    image: {
        height: 500,
    },
    button: {
        color: '#fff',
        background: '#111B47',
        marginTop: 40,
        width: 130,
        height: 40,
        fontSize: 15,
        fontWeight: 500,
        textTransform: 'capitalize',
        fill: 'white',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        },
    },
});

const Landing = () => {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={3}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography style={{fontSize: 30, fontWeight: 600, color:"#111B47", marginBottom: 10}}>EGX30’s First Financial<br/>Advisor</Typography>
                            <Typography style={{fontSize: 16, fontWeight: 400, color: "#000000"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Typography>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} variant="contained">Sign Up</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <img
                        alt="Landing Page"
                        className={classes.image}
                        src="/images/landing.svg"
                    />
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default Landing;