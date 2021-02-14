import {AppBar, Button, Grid, Link, Toolbar} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    toolbar: {
        marginLeft: 20,
        marginRight: 20,
        height: 70,
    },
    image: {
        height: 28,
        marginRight: 20,
    },
    button2: {
        color: '#111B47',
        width: 100,
        height: 35,
        textTransform: 'capitalize',
        fill: 'white',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        },
    },
});

const Header = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return(
        <AppBar position="static" elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Grid justify="space-between" alignItems="center" container>
                    <Grid item>
                        <Grid spacing={3} alignItems="center" container>
                            <Grid item>
                                <img
                                    alt="Logo"
                                    className={classes.image}
                                    src="/images/logo.svg"
                                />
                            </Grid>
                            <Grid item>
                                <Link href="#" onClick={preventDefault} color="inherit" underline="none">
                                    Home
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" onClick={preventDefault} color="inherit" underline="none">
                                    Services
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" onClick={preventDefault} color="inherit" underline="none">
                                    About
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" onClick={preventDefault} color="inherit" underline="none">
                                    Support
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid spacing={2} alignItems="center" container>
                            <Grid item>
                                <Link href="#" onClick={preventDefault} color="inherit" underline="none">
                                    Log In
                                </Link>
                            </Grid>
                            <Grid item>
                                <Button className={classes.button2} variant="contained">Sign Up</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;