import './App.css';
import React, {Suspense} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#111B47',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes/>
                </Router>
            </ThemeProvider>
        </Suspense>
    );
};

export default App;
