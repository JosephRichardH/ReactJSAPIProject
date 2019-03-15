import React, { Component } from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';

class Navigation extends Component {

    logout = () => {
        this.props.postSignout();
    }
  
    render() {
        const isLogin = this.props.isLogin;
        if(isLogin === false){
            return (
                <header className="bg-secondary py-4">
                    <div className="wrapper mx-auto">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <Link to="/">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile">PROFILE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login">LOGIN</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            
            );
        }else{
            return (
                <header className="bg-secondary py-4">
                    <div className="wrapper mx-auto">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <Link to="/">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile">PROFILE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={() => this.logout()} to="/">LOGOUT</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            
            );
        }
        
    }
}

export default connect("isLogin",actions)(withRouter(Navigation));
