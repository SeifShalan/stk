import {Paper, Grid, Typography} from "@material-ui/core";
import React from "react";
import {Area, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, ResponsiveContainer} from "recharts";
import {makeStyles} from "@material-ui/core/styles";
import {VirtualizedList} from "../Stocks/components";

const useStyles = makeStyles({
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        padding: 40,
        borderRadius: 10,
    },
    paper2: {
        width: 285,
        height: 135,
        marginLeft: 5,
        marginRight: 5,
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        borderRadius: 10,
    },
    gridList: {
        gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
        },
    },
    slider: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
});

const Stocks = () => {
    const classes = useStyles();
    const data = [
        {
            "name": "1",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "2",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "3",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "4",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "5",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "6",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "7",
            "uv": 4300,
            "pv": 4300,
            "amt": 2100
        },
        {
            "name": "8",
            "uv": 4300,
            "gg": 4300,
            "amt": 2100
        },
        {
            "name": "9",
            "uv": 4500,
            "amt": 2100
        },
        {
            "name": "10",
            "uv": 4100,
            "amt": 2100
        },
    ]


    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid container direction="row" spacing={5} alignItems="stretch">
                        <Grid item xs={9}>
                            <div style={{display: "flex", alignItems: "baseline", color: "#111B47"}}>
                                <Typography
                                    style={{fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginRight: 5}}
                                    noWrap>AMER</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 400, textTransform: "uppercase"}} noWrap>AMER
                                    GROUP HOLDING CO SAE</Typography>
                            </div>
                            <div style={{display: "flex", alignItems: "baseline"}}>
                                <Typography
                                    style={{fontSize: 18, fontWeight: 600, textTransform: "uppercase", marginRight: 3}}
                                    noWrap>32.58</Typography>
                                <Typography style={{fontSize: 16, fontWeight: 500, textTransform: "uppercase"}}
                                            noWrap>EGP</Typography>
                            </div>
                            <div style={{display: "flex", alignItems: "baseline"}}>
                                <Typography style={{
                                    fontSize: 16,
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    color: "#6AC37E",
                                    marginRight: 3
                                }} noWrap>+0.12</Typography>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        textTransform: "uppercase",
                                        color: "#6AC37E"
                                    }}
                                    noWrap>(1.27%)</Typography>
                            </div>

                            <ResponsiveContainer width="99%" aspect={3}>
                                <AreaChart data={data} margin={{top: 30, right: 0, left: 0, bottom: 0}}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="5%" stopColor="gray" stopOpacity={0.8}/>
                                            <stop offset="70%" stopColor="gray" stopOpacity={0.8}/>
                                            <stop offset="70%" stopColor="green" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="green" stopOpacity={0.8}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="1" vertical={false}/>
                                    <Tooltip/>
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1}
                                          fill="url(#colorUv)"/>
                                </AreaChart>
                            </ResponsiveContainer>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                style={{fontSize: 20, fontWeight: 500, textTransform: "capitalize"}}>Company
                                Selector</Typography>
                            <Typography style={{fontSize: 14, fontWeight: 400}}>Lorem ipsum dolor sit amet.</Typography>
                            <VirtualizedList/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}


export default Stocks;