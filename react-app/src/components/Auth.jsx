import Login from './Login';
import SignUp from './SignUp';

var React = require('react');
var {Route, Switch} = require('react-router-dom');

var Auth = (props) => {
    const path = props.match.path;
    console.log(path, " is the path");
    return (
        <Switch>
            <Route path={path + "/login"} component={Login} />
            <Route path={path + "/signup"} component={SignUp} />
        </Switch>
    );
}

export default Auth;
