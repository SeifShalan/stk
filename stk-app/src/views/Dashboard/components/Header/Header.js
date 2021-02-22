import {AppBar, Button, Grid, Link, Toolbar} from "@material-ui/core";
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
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
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

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar className={classes.toolbar}>
                    <img
                        alt="Logo"
                        className={classes.image}
                        src="/images/logo.svg"
                    />

                <Grid spacing={2} direction="row" alignItems="center" justify="flex-end" container>
                    <Grid item>
                        <Link href="/login" color="inherit" underline="none">
                            Log In
                        </Link>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button2} variant="contained" href="/register">Sign
                            Up</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;