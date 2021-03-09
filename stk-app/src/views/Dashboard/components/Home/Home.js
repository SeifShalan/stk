import {Grid, Paper} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Calculator from "./components/Calculator";

const useStyles = makeStyles({
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" alignItems="center" justify="center" spacing={6}>
            <Grid item xs={4}>
                <Calculator/>
            </Grid>
            <Grid item xs={8}>
                <Paper className={classes.paper}>
                    ff
                </Paper>
            </Grid>
        </Grid>
    );
}


export default Home;