import {Grid, Paper} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {VirtualizedList} from "./components";

const useStyles = makeStyles({
    image: {
        width: 175,
    },
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
});

const News = () => {
    const classes = useStyles();

    return (
        <div style={{height: '60vh', marginLeft: '22', marginRight: '22'}}>
            <Grid container direction="row" justify="space-between" alignItems="stretch">
                <Grid item>
                    <Grid container direction="column" justify="space-evenly" alignItems="flex-start">
                        <Grid item>
                            <img
                                alt="Landing Page"
                                className={classes.image}
                                src="/images/almal.png"
                            />
                        </Grid>
                        <Grid item>
                            <img
                                alt="Landing Page"
                                className={classes.image}
                                src="/images/mubasher.svg"
                            />
                        </Grid>
                        <Grid item>
                            <img
                                alt="Landing Page"
                                className={classes.image}
                                src="/images/arabfinance.png"
                            />
                        </Grid>
                        <Grid item>
                            <img
                                alt="Landing Page"
                                className={classes.image}
                                src="/images/alborsa.png"
                            />
                        </Grid>
                        <Grid item>
                            <img
                                alt="Landing Page"
                                className={classes.image}
                                src="/images/amwal.png"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <VirtualizedList/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


export default News;