import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Grid, IconButton,
    Paper, Typography,
} from '@material-ui/core';
import {MoreVert} from "@material-ui/icons";
import {ResponsiveLine} from '@nivo/line';
import {linearGradientDef} from "@nivo/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        padding: 20,
        flex: 1,
        height: 240,
    },
    chart: {
        height: 100,
        width: 'inherit',
    }
}));

const Favorite = () => {
    const classes = useStyles();

    const data = [
        {
            "id": "japan",
            "color": "hsl(86, 70%, 50%)",
            "data": [
                {
                    "x": 1,
                    "y": 10
                },
                {
                    "x": 2,
                    "y": 20
                },
                {
                    "x": 3,
                    "y": 30
                },
                {
                    "x": 4,
                    "y": 10
                },
                {
                    "x": 5,
                    "y": 50
                },
                {
                    "x": 6,
                    "y": 60
                },
                {
                    "x": 7,
                    "y": 40
                },

                {
                    "x": 8,
                    "y": 80
                },
                {
                    "x": 9,
                    "y": 70
                },
                {
                    "x": 10,
                    "y": 40
                },
                {
                    "x": 11,
                    "y": 50
                },
            ]
        }
    ]

    return (
        <Paper className={classes.paper}>
            <IconButton style={{padding: 0, position: "absolute", top: '20px', right: '12px',}}>
                <MoreVert/>
            </IconButton>
            <Grid container direction="column" justify="space-between" alignItems="stretch">
                <Grid item>
                    <Typography
                        style={{fontSize: 16, fontWeight: 700, textTransform: "uppercase"}}
                        noWrap>AMER</Typography>
                    <Typography style={{fontSize: 12, fontWeight: 400, textTransform: "uppercase"}} noWrap>AMER
                        GROUP HOLDING CO SAE</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justify="space-between" alignItems="flex-end">
                        <Grid item style={{display: "flex", alignItems: "baseline"}}>
                            <Typography
                                style={{fontSize: 18, fontWeight: 600, textTransform: "uppercase", marginRight: 3}}
                                noWrap>32.58</Typography>
                            <Typography style={{fontSize: 16, fontWeight: 500, textTransform: "uppercase"}}
                                        noWrap>EGP</Typography>
                        </Grid>
                        <Grid item style={{display: "flex", alignItems: "baseline"}}>
                            <Typography style={{
                                fontSize: 17,
                                fontWeight: 500,
                                textTransform: "uppercase",
                                color: "#6AC37E",
                                marginRight: 3
                            }} noWrap>+0.12</Typography>
                            <Typography
                                style={{
                                    fontSize: 17,
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    color: "#6AC37E"
                                }}
                            >(+1.27%)</Typography>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginTop: 15}}>
                        <Grid container direction="row" justify="space-between" alignItems="flex-end">
                            <Grid item>
                                <Typography
                                    style={{fontSize: 16, fontWeight: 500, textTransform: "capitalize"}}
                                    noWrap>Stk. Rating</Typography>
                                <Typography style={{fontSize: 16, fontWeight: 400, textTransform: "uppercase"}}
                                            noWrap>3.5</Typography>
                            </Grid>
                            <Grid item style={{textAlign: 'right'}}>
                                <Typography
                                    style={{fontSize: 16, fontWeight: 500, textTransform: "capitalize"}}
                                    noWrap>Trust Factor</Typography>
                                <div style={{display: "flex", justifyContent: 'flex-end'}}>
                                    <Typography style={{fontSize: 16, fontWeight: 400, textTransform: "uppercase"}}
                                                noWrap>67</Typography>
                                    <Typography style={{fontSize: 10, fontWeight: 400, textTransform: "uppercase",  lineHeight: 2}}
                                                noWrap>/100</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={classes.chart}>
                    <ResponsiveLine
                        data={data}
                        curve="basis"
                        margin={{top: 15}}
                        enablePoints={false}
                        enableGridX={false}
                        enableGridY={false}
                        enableArea={true}
                        isInteractive={false}
                        defs={[
                            linearGradientDef('gradientA', [
                                {offset: 0, color: 'inherit'},
                                {offset: 100, color: 'inherit', opacity: 0},
                            ]),
                        ]}
                        fill={[
                            {match: '*', id: 'gradientA'},
                        ]}
                    />
                </div>
            </Grid>
        </Paper>
    )
        ;
}

export default Favorite;
