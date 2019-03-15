import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import MainRoute from './MainRoute';


import {connect} from 'unistore/react';
import {actions} from '../store';



class AppRouter extends Component {
  render() {
    return (
        <div>
            <MainRoute />
        </div>
    );
  }
}

export default connect("",actions)(withRouter(AppRouter));

