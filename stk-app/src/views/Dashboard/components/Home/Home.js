import {Grid} from "@material-ui/core";
import React from "react";
import {Calculator, Favorite} from "./components";

const Home = () => {
    return (
        <Grid container direction="row" alignItems="flex-start" justify="center" spacing={4}>
            <Grid item xs={4}>
                <Calculator/>
            </Grid>
            <Grid item xs={8}>
                <Grid container direction="row" alignItems="flex-start" justify="space-between" spacing={4}>
                    <Grid item xs={4}>
                        <Favorite/>
                    </Grid>
                    <Grid item xs={4}>
                        <Favorite/>
                    </Grid>
                    <Grid item xs={4}>
                        <Favorite/>
                    </Grid>
                    <Grid item xs={4}>
                        <Favorite/>
                    </Grid>
                    <Grid item xs={4}>
                        <Favorite/>
                    </Grid>
                    <Grid item xs={4}>
                        <Favorite/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Home;