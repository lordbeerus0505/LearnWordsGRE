import LearnWords from './components/LearnWords';
import FlaggedWords from './components/FlaggedWords';
import Main from './components/Main';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import LearntWords from './components/LearntWords';

var React = require('react');
var {Route, HashRouter} = require('react-router-dom');

var Routes = (props) => {
    return (
        <HashRouter>
            <Route path="/" exact component={Main} />
            <Route path="/auth" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/chat" component={Chat} />
            <Route path='/learn' component={LearnWords} />
            <Route path='/flagged' component={FlaggedWords} />
            <Route path='/learnt' component={LearntWords} />
        </HashRouter>
    );
}

export default Routes;
