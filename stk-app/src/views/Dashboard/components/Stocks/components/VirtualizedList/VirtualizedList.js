import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {ListItem, ListItemText, Divider} from '@material-ui/core';
import {FixedSizeList} from 'react-window';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 400,
        backgroundColor: theme.palette.background.paper,
    },
}));

function renderRow(props) {
    const {index, style} = props;

    return (
        <ListItem button style={style} key={index} divider>
            <ListItemText primary={`Item ${index + 1}`}/>
        </ListItem>
    );
}

renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};

const VirtualizedList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FixedSizeList height={400} itemSize={46} itemCount={50}>
                {renderRow}
            </FixedSizeList>
        </div>
    );
}

export default VirtualizedList;