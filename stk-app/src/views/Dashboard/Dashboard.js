import React, {useState} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Tabs, Tab, Box, Fade, Modal, Backdrop} from "@material-ui/core";
import {News, Stocks, Header, UserModal} from './components';
import PropTypes from 'prop-types';

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#111B47',
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
    const {children, value, index, ...other} = props;

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
                    {children}
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
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    return (
        <div style={{height: '100vh', background: "#F5F5F5"}}>
            <Header handleModalOpen={handleModalOpen}/>
            <Modal open={open}
                   onClose={handleModalClose}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{
                       timeout: 500
                   }}>
                <Fade in={open}>
                    <UserModal/>
                </Fade>
            </Modal>
            <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label="Home" {...a11yProps(0)} />
                <StyledTab label="All Stocks" {...a11yProps(1)} />
                <StyledTab label="News" {...a11yProps(2)} />
            </StyledTabs>
            <TabPanel value={value} index={0}>
                <Stocks/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Stocks/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <News/>
            </TabPanel>
        </div>
    );

}

export default Dashboard;