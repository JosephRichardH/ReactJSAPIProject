import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Navigation from '../components/Navigation';
import ContainerProfile from '../components/ContainerProfile';

import {connect} from 'unistore/react';
import {actions} from '../store';


class Profile extends Component {
    render() {
        const isLogin = this.props.isLogin;
        if(isLogin === false){
            return <Redirect to={{pathname : "/login"}} />
        }else{
            return (
                <div>
                    <Navigation />
                    <ContainerProfile />
                </div>
            );
        }
        
    }
}

export default connect("isLogin",actions)(withRouter(Profile));

