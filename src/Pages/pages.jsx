import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home';
import Job from './job';
import Candidate from './candidate';
import Interview from './interview';
import Hr from './hr';
import Signin from './signin';
import Signup from './signup';

export default function Pages(props) {


    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/job" component={Job} />
                <Route path='/candidate' component={Candidate} />
                <Route path='/hr' component={Hr} />
                <Route path='/interview' component={Interview} />
                <Route path = '/signin' component={Signin}/>
                <Route path = '/signup' component={Signup}/>
            </Switch>
        </Router>
    )
}
