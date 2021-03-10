import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import './App.css';
import Loading from './components/Loading'
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
        <Suspense fallback={<Loading/>}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes/>
                </Router>
            </ThemeProvider>
        </Suspense>
    );
};

export default App;
