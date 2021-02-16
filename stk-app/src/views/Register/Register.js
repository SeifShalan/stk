import React from 'react';
import {createMuiTheme, fade, makeStyles, withStyles} from "@material-ui/core/styles";
import {Link as LinkRouter} from 'react-router-dom';
import {
    Box,
    Grid, InputBase, TextField, Button,
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
                                <Typography style={{fontSize: 16, fontWeight: 400}}>Lorem ipsum dolor sit amet,
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
                                        <Button className={classes.button} variant="contained">Continue</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} style={{background: '#F6F6F6'}}>
                        hi
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Register;