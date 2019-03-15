import React, { Component } from 'react';
import './Container.css';
import {connect} from 'unistore/react';
import {actions} from '../store';
import {withRouter} from 'react-router-dom';


class ContainerProfile extends Component {  
  render() {
    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-2">
                    <img className="img-fluid" src={this.props.imgProfile} alt="Foto Profile" />
                </div>
                <div className="col-md-3">
                    <h3><b>Name : {this.props.username}</b></h3>
                    <p>Email : {this.props.email}</p>
                </div>
            </div>
        </div>
    
    );
  }
}

export default connect("imgProfile,email,username",actions)(withRouter(ContainerProfile));
