import React, { Component } from 'react';
import ContainerLogin from '../components/ContainerLogin';

import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';



class Login extends Component {
  render() {
    return (
        <div>
            <ContainerLogin />
        </div>
    );
  }
}

export default connect("",actions)(withRouter(Login));

