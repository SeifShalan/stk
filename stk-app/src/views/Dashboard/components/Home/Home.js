import {Container, Grid, Paper} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Calculator, Favorite} from "./components";
import GridLayout, {WidthProvider} from 'react-grid-layout';
import RGL from "react-grid-layout";

const useStyles = makeStyles({
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

const ReactGridLayout = WidthProvider(RGL);

const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 1},
    {i: 'b', x: 1, y: 0, w: 1, h: 1},
    {i: 'c', x: 2, y: 0, w: 1, h: 1},
    {i: 'd', x: 0, y: 1, w: 1, h: 1},
    {i: 'e', x: 1, y: 1, w: 1, h: 1},
    {i: 'f', x: 2, y: 1, w: 1, h: 1},
];


const Home = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" alignItems="flex-start" justify="center" spacing={6}>
            <Grid item xs={4}>
                <Calculator/>
            </Grid>
            <Grid item xs={8}>
                <ReactGridLayout className="layout" layout={layout} cols={3} maxRows={1} rowHeight={280} isBounded={true} isResizable={false} compactType={'horizontal'} verticalCompact={false}>
                    <div key="a"><Favorite/></div>
                    <div key="b"><Favorite/></div>
                    <div key="c"><Favorite/></div>
                    <div key="d"><Favorite/></div>
                    <div key="e"><Favorite/></div>
                    <div key="f"><Favorite/></div>
                </ReactGridLayout>
            </Grid>
        </Grid>
    );
}


export default Home;