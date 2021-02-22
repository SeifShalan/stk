import {AppBar, Button, Grid, Link, Toolbar} from "@material-ui/core";
import {Link as LinkRouter} from 'react-router-dom';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    toolbar: {
        marginLeft: 20,
        marginRight: 20,
        height: 70,
        fontSize: 14,
        fontWeight: 400,
    },
    image: {
        height: 28,
        marginRight: 20,
        display: 'flex',
    },
    button2: {
        color: '#111B47',
        width: 90,
        height: 35,
        fontSize: "inherit",
        fontWeight: "inherit",
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

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Grid justify="space-between" alignItems="center" container>
                    <Grid item>
                        <Grid spacing={3} alignItems="center" container>
                            <Grid item>
                                <LinkRouter to="/">
                                    <img
                                        alt="Logo"
                                        className={classes.image}
                                        src="/images/logo.svg"
                                    />
                                </LinkRouter>
                            </Grid>
                            <Grid item>
                                <Link href="/" color="inherit" underline="none">
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
                                <Link href="/login" color="inherit" underline="none">
                                    Log In
                                </Link>
                            </Grid>
                            <Grid item>
                                <Button className={classes.button2} variant="contained" href="/register">Sign Up</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;