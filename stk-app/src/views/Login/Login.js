import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
      height: '100vh',
      background: '#111B47',
    },
});

const Login = () => {
    const classes = useStyles();

    return(
        <Box className={classes.container}>
            <Grid container direction="column">
                <Grid item>
                    yes
                </Grid>
                <Grid item>
                    <form>

                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;