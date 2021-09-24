import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home';
import Job from './job';
import Candidate from './candidate';
import Interview from './interview';
import Signin from './signin';
import Signup from './signup';
import Infouser from './infoUser';
import JobDetail from './job-detail';
import Quanlyjob from './quanlyjob';

export default function Pages(props) {


    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/job" component={Job} />
                <Route path='/candidate' component={Candidate} />
                <Route path='/jobdetail/:id' component={JobDetail} />
                <Route path='/quanlyjob' component={Quanlyjob} />
                <Route path='/interview' component={Interview} />
                <Route path = '/signin' component={Signin}/>
                <Route path = '/signup' component={Signup}/>
                <Route path = '/info' component = {Infouser}/>
            </Switch>
        </Router>
    )
}
