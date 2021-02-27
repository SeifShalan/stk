import React from "react";
import {Grid, Paper, Avatar, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {AccountCircle, Chat, CreditCard, ExitToApp, Info} from '@material-ui/icons';

const useStyles = makeStyles({
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        position: 'absolute',
        top: '80px',
        right: '44px',
        width: 260,
        height: 450,
    },
    avatar: {
        backgroundColor: '#8E1EFF',
        width: 100,
        height: 100,
    },
    divider: {
        borderTop: '1px solid #BCBCBC',
        transform: 'scaleY(0.25)',
        marginTop: 20,
        marginBottom: 20,
        width: 'inherit'
    },
    button: {
        textTransform: 'capitalize',
        background: 'inherit',
        justifyContent: 'flex-start',
        fontWeight: 400,
        borderRadius: 2,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        },
    },
    button2: {
      fontWeight: 400,
      textTransform: 'capitalize',
        marginTop: 5,
        marginBottom: 5,
    },
});

const UserModal = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Paper className={classes.paper}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                    <Avatar className={classes.avatar}>S</Avatar>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize: 16, fontWeight: 500, marginTop: 10}}>Seif Shalan</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{
                        fontSize: 14,
                        fontWeight: 400,
                        fontStyle: "italic",
                        lineHeight: '90%'
                    }}>shalan@aucegypt.edu</Typography>
                </Grid>
                <Grid item>
                    <div style={{display: "flex", alignItems: "baseline"}}>
                        <Typography style={{fontSize: 14, fontWeight: 400, marginTop: 10, marginRight: 3}} noWrap>Subscribed
                            until </Typography>
                        <Typography style={{fontSize: 14, fontWeight: 400, marginTop: 10, fontStyle: 'italic'}}
                                    noWrap>23/04/2021</Typography>
                    </div>
                </Grid>
                <hr className={classes.divider}/>
                <Grid item>
                    <Button variant="contained" className={classes.button} href="#" onClick={preventDefault} startIcon={<AccountCircle/>} fullWidth>
                        Account Settings
                    </Button>
                    <Button variant="contained" className={classes.button} href="#" onClick={preventDefault} startIcon={<CreditCard/>} fullWidth>
                        Billing Settings
                    </Button>
                    <Button variant="contained" className={classes.button} href="#" onClick={preventDefault} startIcon={<Info/>} fullWidth>
                        Frequently Asked Questions
                    </Button>
                    <Button variant="contained" className={classes.button} href="#" onClick={preventDefault} startIcon={<Chat/>} fullWidth>
                        Support
                    </Button>
                </Grid>
                <hr className={classes.divider}/>
                <Grid item>
                    <Button variant="outlined" className={classes.button2} href="#" onClick={preventDefault} startIcon={<ExitToApp/>}>
                        Sign Out
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default UserModal;