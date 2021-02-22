import {AppBar, Button, Grid, IconButton, Badge, Toolbar, Typography} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
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
        background: '#8E1EFF',
        maxWidth: '35px',
        maxHeight: '35px',
        minWidth: '35px',
        minHeight: '35px',
        boxShadow: 'none',
        '&:hover': {
            background: '#7E1AE1',
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
                <img
                    alt="Logo"
                    className={classes.image}
                    src="/images/logo.svg"
                />

                <Grid spacing={1} direction="row" alignItems="center" justify="flex-end" container>
                    <Grid item>
                        <IconButton style={{color: '#fff'}}>
                            <Badge color="error" overlap="circle" variant="dot">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button2} variant="contained" href="#" onClick={preventDefault}>
                            <Typography style={{color: '#fff', fontWeight: 600, fontSize: 18}}>S</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;