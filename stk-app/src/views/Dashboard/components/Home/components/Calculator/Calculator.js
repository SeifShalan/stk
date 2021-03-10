import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Button,
    ButtonGroup,
    Grid,
    InputAdornment,
    Paper,
    Slider,
    TextField,
    Tooltip,
    Typography
} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import MultiSelect from "react-multi-select-component";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    paper: {
        boxShadow: '0px 5px 30px 0px rgba(50, 50, 50, 0.2)',
        borderRadius: 10,
        height: 545,
        padding: 40,
    },
    button: {
        color: '#fff',
        background: '#111B47',
        marginTop: 10,
        height: 50,
        fontSize: "inherit",
        fontWeight: "inherit",
        textTransform: 'capitalize',
        fill: 'white',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        },
    },
    selected: {
        color: '#fff',
        background: '#111B47',
        fontSize: 12,
        fontWeight: "inherit",
        textTransform: 'capitalize',
        fill: 'white',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#111B47',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#111B47',
        },
    },
    unselected: {
        color: '#111B47',
        background: '#F1F1F1',
        fontSize: 12,
        fontWeight: "inherit",
        textTransform: 'capitalize',
        fill: 'white',
        borderColor: '#F1F1F1',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            color: '#111B47',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#111B47',
        },
    },
}));

const useStylesField = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        borderRadius: 5,
        border: 'none',
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#ffffff',
            border: 'none',
        },
        '&$focused': {
            backgroundColor: '#ffffff',
            border: 'none',
        },
    },
}));

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            decimalScale="2"
            allowNegative={false}
            fixedDecimalScale={true}
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function NumberField(props) {
    const classes = useStylesField();

    return <TextField InputProps={{classes, inputComponent: NumberFormatCustom, startAdornment: <InputAdornment position="start">EGP </InputAdornment>}} {...props} />;
}

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const marks = [
    {
        value: 0,
        label: '0%',
    },
    {
        value: 100,
        label: '100%',
    },
];

const options = [
    {label: "AMER", value: "AMER"},
    {label: "ABED", value: "ABED"},
    {label: "AMER", value: "AMER"},
    {label: "AMER", value: "AMER"},
    {label: "AMER", value: "AMER"},
    {label: "AMER", value: "AMER"},
];

const Calculator = () => {
    const classes = useStyles();
    const [selectedBtn, setSelectedBtn] = React.useState(1);
    const [slider, setSlider] = React.useState([80, 100]);
    const [selected, setSelected] = React.useState([]);
    const [values, setValues] = React.useState({
        number: '100000',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSliderChange = (event, newValue) => {
        setSlider(newValue);
    };

    return (
        <Paper className={classes.paper}>
            <Grid container direction='column' spacing={3}>
                <Grid item>
                    <Typography
                        style={{fontSize: 20, fontWeight: 500, textTransform: "capitalize"}}>Investment Calculator</Typography>
                    <Typography style={{fontSize: 14, fontWeight: 400}}>Lorem ipsum dolor sit amet.</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize: 14, fontWeight: 400, marginBottom: 3, color: '#6f6f6f'}}>Select Companies</Typography>
                    <MultiSelect
                        options={options}
                        value={selected}
                        disableSearch={true}
                        onChange={setSelected}
                        labelledBy={"Select"}
                        overrideStrings={{
                            "allItemsAreSelected": "All Companies",
                        }}
                    />
                </Grid>
                <Grid item>
                    <Typography style={{fontSize: 14, fontWeight: 400, marginBottom: 3, color: '#6f6f6f'}}>Investment Amount</Typography>
                    <NumberField
                        id="money"
                        name="number"
                        variant="outlined"
                        fullWidth
                        value={values.number}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    <Typography style={{fontSize: 14, fontWeight: 400, marginBottom: 7, color: '#6f6f6f'}}>Investment Duration</Typography>
                    <ButtonGroup disableElevation fullWidth>
                        <Button className={selectedBtn === 1 ? classes.selected : classes.unselected} onClick={()=>setSelectedBtn(1)}>One Week</Button>
                        <Button className={selectedBtn === 2 ? classes.selected : classes.unselected} onClick={()=>setSelectedBtn(2)}>Two Weeks</Button>
                        <Button className={selectedBtn === 3 ? classes.selected : classes.unselected} onClick={()=>setSelectedBtn(3)}>Three Weeks</Button>
                        <Button className={selectedBtn === 4 ? classes.selected : classes.unselected} onClick={()=>setSelectedBtn(4)}>Four Weeks</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize: 14, fontWeight: 400, marginBottom: 2, color: '#6f6f6f'}}>Prediction Accuracy</Typography>
                    <Slider
                        value={slider}
                        onChange={handleSliderChange}
                        ValueLabelComponent={ValueLabelComponent}
                        marks={marks}
                    />
                </Grid>
                <Grid item>
                    <Button className={classes.button} variant="contained" fullWidth>Calculate</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
export default Calculator;
