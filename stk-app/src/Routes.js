import React, {lazy} from "react";
import {Switch, Route} from "react-router-dom";

const Landing = lazy(() => import("./views/Landing"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const NotFound = lazy(() => import("./views/NotFound"));
const Loading = lazy(() => import("./components/Loading"));

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/Loading" component={Loading} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routes;