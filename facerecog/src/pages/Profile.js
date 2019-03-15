import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Navigation from '../components/Navigation';
import ContainerKategori from '../components/ContainerKategori';
import axios from 'axios';
import {connect} from 'unistore/react';
import {actions} from '../store';

class Profile extends Component {
    
    
    render(){
    
//     const isLogin = this.props.isLogin;
//         if(isLogin === false){
//             return <Redirect to={{pathname : "/login"}} />
//         }else{
//             return (
//                 <div>
//                     <Navigation />
//                     <ContainerProfile />
//                 </div>
//             );
    
    <html>
    <head>
        <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="assets/css/main-about.css" rel="stylesheet" type="text/css"/>
        <script src="assets/js/bootstrap.min.js"></script>
    </head>
    <body>
        <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">Navbar w/ text</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                          <ul class="navbar-nav mr-auto">
                            <li class="nav-item active listnav">
                              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item listnav">
                              <a class="nav-link" href="#">Profile</a>
                            </li>
                            <li class="nav-item listnav">
                              <a class="nav-link" href="#">Sign In</a>
                            </li>
                            <li class="nav-item listnav">
                                <a class="nav-link" href="#">Sign Out</a>
                            </li>
                            </ul>
                          <span class="listnav navbar-text ratakanan">
                            Logged in as vraaja@vraaja.vraaja
                          </span>
                        </div>
                      </nav>
        </header>
        <div class="banner">
            <div class="container">
            <div class="row">
                <img class="profile" src="assets/img/jokowi.jpeg"/>
            </div>
            <div class="row nama">
                <p class="nama">Username</p>
            </div >
            <div class="row nama">
                    <p class="nama">Email</p>
            </div >
        </div>
        </div>
        <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 rowfoot">
                                <span class="copyright">&copy; Copyright Doni, Dzinsyah, Joseph</span>
                        </div>
                    </div>
                    </div>
                </footer>    
        </body>    
</html>
}
}
export default connect("isLogin",actions)(withRouter(Profile));