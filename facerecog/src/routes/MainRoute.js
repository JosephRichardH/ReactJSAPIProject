import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Kategori from '../pages/Kategori';
import Profile from '../pages/Profile';
import Login from '../pages/Login';


class MainRoute extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} /> */}
            <Route path="/:kategori" component={Kategori} />
        </Switch>
    );
  }
}

export default MainRoute;
