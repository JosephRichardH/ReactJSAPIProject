import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Navigation from '../components/Navigation';
import ContainerKategori from '../components/ContainerKategori';
import axios from 'axios';
import {connect} from 'unistore/react';
import {actions} from '../store';


const OcpApimSubscriptionKey="379f273a2cc14c1fbfd96a7dad3cadf3";
const baseUrl = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion,age";
const urlHeadLine = baseUrl + "/top-headlines?country=id&apikey=" + apiKey;
const urlHeadLine1 = baseUrl + "/everything?q=Trade War&apikey=" + apiKey;


class FaceRecog extends Component {

  constructor (props){
    super(props);
    this.state = {
        muka:[],
        listNews1:[],
        username: "",
        isLogin: false,
    }
    // this.top5 = this.top5.bind(this);
}
  
    searchNews = async urls => {
      console.log("link Gambar",urls);
      const self = this;
      var headers = {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '379f273a2cc14c1fbfd96a7dad3cadf3' 
      }
        try{
            const response = 
            await axios
            
            .post("https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion,age", data, {headers: headers})

            .then((responMuka) => {
                self.setState({data: responMuka.data.faceAttributes})
            })
          }
        catch(error){
            console.log(error);
      };
  }; 
    SetorMuka = inputan => {
      this.props.searchNews('')
    };

    handleInput(inputan){
      console.log("event", inputan.target.value);
      let value = inputan.target.value
        this.setState(
            {
                search:value
            },
            () => {
                this.props.searchNews(value);
            }
        );
    }




    render(){
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
                  <p class="nama">Uploaded Picture</p>
              </div >
              <form class="row">
                  <input type="name" name="gender" id="url" onChange={(e) => this.handleInput(e)} placeholder="Your profile picture url here :D" class="job"/>
              </form>
              <div class = "row atasnyacv">
              <button class="cv row" onClick={() => this.SetorMuka()} >Upload Profile</button>
              </div>
          </div>
          </div>
          <div class=" isidalam">
                  Your mood is: <br/>
                  Happy <img/>
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
export default FaceRecog;