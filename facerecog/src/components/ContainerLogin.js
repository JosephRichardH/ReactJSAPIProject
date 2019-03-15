import React, { Component } from 'react';
import './ContainerLogin.css';
import {connect} from 'unistore/react';
import {actions} from '../store';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class ContainerProfile extends Component {
    
    postLogin = (e) => {
        e.preventDefault();
        const username = this.props.username;
        const password = this.props.password;
        
        const data = {
            username : username,
            password : password
        };
        const self = this;
        axios
            .post("https://api-todofancy.herokuapp.com/api/auth")
            .then(function(response){
                const {username, email, avatar} = response.data.user_data;
                self.props.setLogin(username, email, avatar);
                self.props.history.push("/");
            })
            .catch(function(error){
                console.log(error);
            });
    }

    changeInput = (e) => {
        this.props.setUserPassword(e);
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-5 box-login">
                        <div className="text-center">
                            <h3>MOVIES</h3>
                            <form>
                                <p>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        onChange = {e => this.changeInput(e)}
                                    />
                                </p>
                                <p>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange = {e => this.changeInput(e)}
                                    />
                                </p>
                                <button className="mr-3" onClick={(e) => this.postLogin(e)}>LOGIN</button>
                                <button type="reset">RESET</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default connect("imgProfile,email,username,password",actions)(withRouter(ContainerProfile));
