import {Grid, Paper} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {VirtualizedList} from "./components";

const useStyles = makeStyles({
    box: {
        width: '100vw',
        background: 'none',
    },
    image: {
        width: 175,
    },
    gray: {
        width: 175,
        filter: 'grayscale(100%)'
    },
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

const News = () => {
    const classes = useStyles();
    const [value, setValue] = useState(1);

    const handleClick = newValue => () => {
        setValue(newValue);
    };

    return (
        <Grid container direction="row" alignItems="center" justify="center" spacing={8}>
            <Grid item>
                <Grid container direction="column" justify="space-between" alignItems="center"
                      style={{height: 650}}>
                    <Grid item>
                        <img
                            alt="Almal Logo"
                            className={value === 1 ? classes.image : classes.gray}
                            onClick={handleClick(1)}
                            src="/images/almal.png"
                        />
                    </Grid>
                    <Grid item>
                        <img
                            alt="Mubasher Logo"
                            className={value === 2 ? classes.image : classes.gray}
                            onClick={handleClick(2)}
                            src="/images/mubasher.svg"
                        />
                    </Grid>
                    <Grid item>
                        <img
                            alt="Arab Finance Logo"
                            className={value === 3 ? classes.image : classes.gray}
                            onClick={handleClick(3)}
                            src="/images/arabfinance.png"
                        />
                    </Grid>
                    <Grid item>
                        <img
                            alt="Alborsa Logo"
                            className={value === 4 ? classes.image : classes.gray}
                            onClick={handleClick(4)}
                            src="/images/alborsa.png"
                        />
                    </Grid>
                    <Grid item>
                        <img
                            alt="Amwal Alghad Logo"
                            className={value === 5 ? classes.image : classes.gray}
                            onClick={handleClick(5)}
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
    );
}


export default News;