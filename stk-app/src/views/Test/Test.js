import React from 'react';
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {Link as LinkRouter} from 'react-router-dom';
import {
    Box,
    Grid, TextField, Button,
    ThemeProvider, Typography,
} from "@material-ui/core";
import RGL, { WidthProvider } from "react-grid-layout";
import {Favorite} from "../Dashboard/components/Home/components";

const useStyles = makeStyles({

});

const ReactGridLayout = WidthProvider(RGL);

const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 1},
    {i: 'b', x: 0, y: 0, w: 1, h: 1},
    {i: 'c', x: 0, y: 0, w: 1, h: 1},
    {i: 'd', x: 0, y: 0, w: 1, h: 1},
];


const Test = () => {
    const classes = useStyles();

    return (
        <ReactGridLayout className="layout" layout={layout} cols={4} rowHeight={280} isBounded={true} isResizable={false} autoSize={true} margin={[30,40]}>
            <div key="a"><Favorite/></div>
            <div key="b"><Favorite/></div>
            <div key="c"><Favorite/></div>
            <div key="d"><Favorite/></div>
        </ReactGridLayout>
    );
}

export default Test;