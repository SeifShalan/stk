import React from 'react';
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {Link as LinkRouter} from 'react-router-dom';
import {
    Box,
    Grid, TextField, Button,
    ThemeProvider, Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        height: '100vh',
        background: '#FFFFFF',
    },
    image: {
        height: 30,
        marginBottom: 40
    },
    button: {
        color: '#fff',
        background: '#111B47',
        marginTop: 10,
        width: 170,
        height: 50,
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

const useStylesField = makeStyles((theme) => ({
    root: {
        border: '1px solid #F1F1F1',
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: '#F1F1F1',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#ffffff',
            borderColor: '#F1F1F1',
        },
        '&$focused': {
            backgroundColor: '#ffffff',
            borderColor: '#F1F1F1',
        },
    },
}));

function InputField(props) {
    const classes = useStylesField();

    return <TextField InputProps={{classes, disableUnderline: true}} {...props} />;
}

const registerTheme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    overrides: {
        MuiInputLabel: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
                "&$focused": { // increase the specificity for the pseudo class
                    color: '#111B47'
                }
            }
        },
    },
});

const Register = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={registerTheme}>
            <Box className={classes.container}>
                <Grid container spacing={0} direction="row" alignItems="stretch" justify="center"
                      style={{minHeight: '100vh'}}>
                    <Grid item xs={8} style={{paddingLeft: 100, paddingRight: 100, paddingTop: 50}}>
                        <Grid container spacing={3} direction="column" alignItems="stretch" justify="flex-start">
                            <Grid item>
                                <LinkRouter to="/">
                                    <img
                                        alt="Logo"
                                        className={classes.image}
                                        src="/images/logo-blue.svg"
                                    />
                                </LinkRouter>
                            </Grid>
                            <Grid item>
                                <Typography style={{fontSize: 20, fontWeight: 500}}>Create your account
                                    now!</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 400}}>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" spacing={3} justify="flex-start"
                                      alignItems="stretch">
                                    <Grid item>
                                        <Grid container direction="row" spacing={3}>
                                            <Grid item xs={6}>
                                                <InputField id="first-name" label="First name" variant="filled"
                                                            fullWidth/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <InputField id="last-name" label="Last name" variant="filled"
                                                            fullWidth/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <InputField id="user-name" label="Username" variant="filled" fullWidth/>
                                    </Grid>
                                    <Grid item>
                                        <InputField id="email" label="Email address" variant="filled" fullWidth/>
                                    </Grid>
                                    <Grid item>
                                        <InputField id="password" label="Password" variant="filled" fullWidth/>
                                    </Grid>
                                    <Grid item>
                                        <InputField id="confirm-pw" label="Confirm password" variant="filled"
                                                    fullWidth/>
                                    </Grid>
                                    <Grid item>
                                        <Button className={classes.button} variant="contained" href="/dashboard">Continue</Button>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography style={{fontSize: 10, fontWeight: 300, marginTop: 35}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna duis. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Eros donec ac odio tempor orci dapibus. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est lorem ipsum dolor sit amet. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Magna sit amet purus gravida quis blandit turpis. Egestas purus viverra accumsan in nisl nisi scelerisque. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Id leo in vitae turpis massa sed elementum tempus egestas. Eget felis eget nunc lobortis mattis aliquam faucibus. Porttitor massa id neque aliquam vestibulum morbi blandit.
                                        proin libero nunc consequat interdum varius.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} style={{paddingLeft: 40, paddingRight: 225, paddingTop: 160, background: '#F6F6F6'}}>
                        <Grid container="column" justify="flex-start" spacing={8}>
                            <Grid item>
                                <Typography style={{fontSize: 20, fontWeight: 500}}>Title Number 1</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{fontSize: 20, fontWeight: 500}}>Title Number 2</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{fontSize: 20, fontWeight: 500}}>Title Number 3</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Register;