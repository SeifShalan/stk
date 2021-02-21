import React from "react";
import {Box, Grid, Typography, Link, Container, TextField, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    box: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 225,
        background: "#111B47",
        color: "white",
    },
    image: {
        height: 28,
    },
});

const useStylesField = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        marginTop: 5,
        marginBottom: 2,
        height: 35,
        borderRadius: 0,
        backgroundColor: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            borderColor: '#3A5FFF',
        },
        '&$focused': {
            backgroundColor: '#FFFFFF',
            borderColor: '#3A5FFF',
        },
    },
}));

function NewsLetterField(props) {
    const classes = useStylesField();

    return <TextField InputProps={{classes, disableUnderline: true}} {...props} />;
}

const Footer = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Box className={classes.box}>
            <Container style={{maxWidth: '85vw', paddingTop: 40}}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container direction="row" justify="space-between" alignItems="flex-start">
                            <Grid item>
                                <img
                                    alt="Logo"
                                    className={classes.image}
                                    src="/images/logo.svg"
                                />
                                <Typography style={{fontSize: 14, fontWeight: 300}}>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing.</Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    style={{fontSize: 15, fontWeight: 500, marginBottom: 5}}>Explore</Typography>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    Services<br/>
                                </Link>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    About<br/>
                                </Link>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    Support<br/>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Typography
                                    style={{fontSize: 15, fontWeight: 500, marginBottom: 5}}>Explore</Typography>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    Services<br/>
                                </Link>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    About<br/>
                                </Link>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    Support<br/>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Typography
                                    style={{fontSize: 15, fontWeight: 500, marginBottom: 5}}>Explore</Typography>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    Services<br/>
                                </Link>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    About<br/>
                                </Link>
                                <Link href="#" onClick={preventDefault} color="inherit" style={{fontSize: 14}}>
                                    Support<br/>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Typography
                                    style={{fontSize: 15, fontWeight: 500, marginBottom: 5}}>Newsletter</Typography>
                                <NewsLetterField id="newsletter" placeholder="Email Address" variant="outlined"/>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                >
                                    <SendIcon />
                                </Button>
                                <Typography style={{fontSize: 14, fontWeight: 300}}>Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography style={{fontSize: 14, fontWeight: 300}}>© 2021 stk. All Rights
                            Reserved.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;