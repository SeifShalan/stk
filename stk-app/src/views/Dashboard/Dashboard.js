import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Header} from './components'
import {Tabs, Tab, Box, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        background: "#F5F5F5",
    },

});

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#3A5FFF',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#000',
        fontWeight: 500,
        fontSize: theme.typography.pxToRem(15),
        marginTop: 20,
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Dashboard = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Header/>
            <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label="Stocks" {...a11yProps(0)} />
                <StyledTab label="Best Picks" {...a11yProps(1)} />
                <StyledTab label="News" {...a11yProps(2)} />
            </StyledTabs>
            <TabPanel value={value} index={0}>
                Page One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Page Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Page Three
            </TabPanel>
        </>
    );

}

export default Dashboard;