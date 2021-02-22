import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import React from "react";
import MUIDataTable from "mui-datatables";

const theme = createMuiTheme({
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
    overrides: {
        MUIDataTable: {
            root: {
            },
            paper: {
                boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
                borderRadius: 10,
                width: '92vw',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingBottom: 40,
                paddingLeft: 40,
                paddingRight: 40,
            }
        },
    },
});

const columns = [
    {
        name: "rank",
        label: "Rank",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ticker",
        label: "Ticker Symbol",
        options: {
            filter: false,
            sort: false,
        }
    },
    {
        name: "name",
        label: "Name",
        options: {
            filter: false,
            sort: false,
        }
    },
    {
        name: "chart",
        label: "Stock Chart",
        options: {
            filter: true,
            sort: false,
        }
    },
];

const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
    filterType: 'dropdown',
    print: 'false',
    selectableRows: 'none',
    download: 'false',
};

const Picks = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <MUIDataTable
                data={data}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
    )
        ;
}


export default Picks;