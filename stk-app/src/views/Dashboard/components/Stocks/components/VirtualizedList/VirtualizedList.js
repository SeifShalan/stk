import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import List from 'devextreme-react/list';

const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: 20,
    },
}));

function ItemTemplate(data) {
    return (
        <div>
            <Typography style={{fontSize: 14}}>{data.Ticker}</Typography>
            <Typography style={{fontSize: 10}}>{data.Name}</Typography>
        </div>
    );
}

export const products = [
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
    {
        'Ticker': 'AMER',
        'Name': 'AMER GROUP HOLDING CO SAE',
    },
];


const VirtualizedList = () => {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <List
                dataSource={products}
                height={400}
                itemRender={ItemTemplate}
                searchExpr="Name"
                searchEnabled={true}
                searchMode={'contains'}/>
        </div>
    );
}

export default VirtualizedList;