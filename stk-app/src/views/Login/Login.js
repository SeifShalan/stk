import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        height: '100vh',
        background: '#111B47',
    },
    image: {
        height: 65,
    },
    textfield: {
        background: 'white',
        borderRadius: 5,
        height: 45,
        border: 'none',
    },
    input: {
      height: 45,
    },
});

const Login = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center"
                  style={{minHeight: '100vh'}}>
                <Grid item>
                    <img
                        alt="Logo"
                        className={classes.image}
                        src="/images/logo.svg"
                    />
                </Grid>
                <Grid item>
                    <form>
                        <Grid container direction="column" justify="space-evenly" style={{minWidth: '25vw'}}>
                            <Grid item>
                                <Typography variant="overline">Email or username</Typography>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    className={classes.textfield}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <p>Password</p>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    id="password"
                                    className={classes.textfield}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;