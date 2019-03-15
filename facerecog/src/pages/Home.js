import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Container from '../components/Container';

import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';



class Home extends Component {
  render() {
    return (
        <div>
            <Navigation />
            <Container />
        </div>
    );
  }
}

export default connect("isLogin",actions)(withRouter(Home));

