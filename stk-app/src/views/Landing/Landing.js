import React from 'react';
import {AppBar, Button, Toolbar, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    image: {
        height: 50,
    },
    button1: {
        color: 'white',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        },
    },
    button2: {
        color: '#111B47',
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
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Grid justify="space-between" alignItems="center" container>
                        <Grid item>
                            <img
                                alt="Logo"
                                className={classes.image}
                                src="/images/logo.svg"
                            />
                        </Grid>
                        <Grid item>
                            <Button className={classes.button1}>Log In</Button>
                            <Button className={classes.button2} variant="contained">Sign Up</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>

    );
}

export default Landing;