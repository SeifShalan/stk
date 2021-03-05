import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import {makeStyles, withStyles, createMuiTheme} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    FormControlLabel,
    Checkbox,
    InputLabel,
    InputBase,
    FormControl,
    ThemeProvider,
    Typography,
    Link,
    Button,
} from "@material-ui/core";
import {
    CheckBoxOutlineBlank,
    CheckBox
} from "@material-ui/icons"

const loginTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#3A5FFF',
        },
    },
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
        MuiInputLabel: {
            root: {
                color: "white",
                "&$focused": {
                    color: '#3A5FFF'
                }
            }
        },
        MuiFormControlLabel: {
            label: {
                fontSize: 12,
                color: "white",
            },
        },
    }
});

const useStyles = makeStyles({
    container: {
        height: '100vh',
        background: '#111B47',
    },
    image: {
        height: 65,
        marginBottom: 50
    },
    icon: {
        color: 'white'
    },
    link: {
        color: '#3A5FFF',
        fontSize: 12,
    },
    button: {
        textTransform: 'capitalize',
        marginTop: 35,
        width: 350,
        height: 45,
        fontWeight: 400,
        fill: 'white',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        },
    },
});

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            width: 350,
            marginTop: theme.spacing(2),
        },
    },
    input: {
        borderRadius: 5,
        backgroundColor: theme.palette.common.white,
        border: '2px solid #111B47',
        fontSize: 14,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#3A5FFF',
        },
    },
}))(InputBase);

const Login = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <ThemeProvider theme={loginTheme}>
            <Box className={classes.container}>
                <Grid container spacing={0} direction="column" alignItems="center" justify="center"
                      style={{minHeight: '100vh'}}>
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
                        <form>
                            <Grid container direction="column" alignItems="center" spacing={2}>
                                <Grid item>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="email-input">
                                            Email or username
                                        </InputLabel>
                                        <BootstrapInput id="email-input" fullWidth/>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <FormControl>
                                            <InputLabel shrink htmlFor="password-input">
                                                Password
                                            </InputLabel>
                                            <BootstrapInput id="password-input" type="password" fullWidth/>
                                        </FormControl>
                                        <Grid container direction="row" alignItems="center" justify="space-between">
                                            <Grid item>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="remember"
                                                            icon={<CheckBoxOutlineBlank fontSize="small"
                                                                                        className={classes.icon}/>}
                                                            checkedIcon={<CheckBox fontSize="small"/>}
                                                            color="primary"
                                                            style={{paddingRight: 4}}
                                                        />
                                                    }
                                                    label="Remember me"
                                                    className={classes.label}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Link href="#" onClick={preventDefault} color="inherit"
                                                      className={classes.link}>
                                                    Forgot your username or password?
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" href="/dashboard" fullWidth className={classes.button}>
                                        Log in
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color: "white", fontSize: 12, marginTop: -5}}>
                                        Don’t have an account? Click <Link href="/register" color="primary">here</Link> to sign up!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Login;