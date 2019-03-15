import React, { Component } from 'react';
import './Container.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from '../store';


class Container extends Component {
    
    componentDidMount(){
        
    }


    cekImg(e){
        // alert(123);
        const imgUrl = this.props.imgUrl;
        const url = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion,age"
        let self = this;
        let reqHeaders = {
            method:'post',
            url: url,
            headers: {
                'Content-Type' : 'application/json',
                'Ocp-Apim-Subscription-Key': '379f273a2cc14c1fbfd96a7dad3cadf3'

            },
            data: {
               
                "url": "https://www.pinerest.org/media/Raw-Face-I.jpg" //ganti dengan imgURL
               
              }
          };
        axios(reqHeaders).then(function(response){
            let tmpFace = response.data[0].faceAttributes;
            let age = tmpFace.age;
            let emotion = "";
            let maxEmotion = -1;
            let emotionList = [
                ['anger', tmpFace.emotion.anger],
                ['contempt', tmpFace.emotion.contempt],
                ['disgust', tmpFace.emotion.disgust],
                ['fear', tmpFace.emotion.fear],
                ['happines', tmpFace.emotion.happiness],
                ['neutral', tmpFace.emotion.neutral],
                ['sadness', tmpFace.emotion.sadness],
                ['surprise', tmpFace.emotion.surprise],
            ]
            for(var i = 0; i< emotionList.length;i++){
                if(emotionList[i][1] > maxEmotion){
                    maxEmotion = emotionList[i][1];
                    emotion = emotionList[i][0];
                }
            }
            
            this.props.setAgeEmotion(age, emotion);
            
        })
        .catch(function(error){
            console.log(error);
        });
    }


    handleChange(e){
        this.props.setImgUrl(e.target.value);
    }
  
  render() {
      
    return (
        <div className="container">
            <div className="row justify-content-center">
                <input type="text" onChange={(e) => this.handleChange(e)} name="imgUrl" placeholder="Masukkan URL img anda" />
                <button onClick={(e) => this.cekImg(e)}>CLICK ME</button>
            </div>
            <div className="row mt-5">
                <div className="col-md-3">
                    <div className="m-1 p-link text-center">
                        <h3>Romance</h3>
                        <img className="img-fluid w-100" src={require('../images/romance.jpg')} alt="" />
                        <Link to="/romance">READ MORE</Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="m-1 p-link text-center">
                        <h3>Fiction</h3>
                        <img className="img-fluid w-100" src={require('../images/fiction.jpg')} alt="" />
                        <Link to="/fiction">READ MORE</Link>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="m-1 p-link">
                        <h3>Action</h3>
                        <img className="img-fluid w-100" src={require('../images/action.jpg')} alt="" />
                        <Link to="/action">READ MORE</Link>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="m-1 p-link">
                        <h3>Comedy</h3>
                        <img className="img-fluid w-100" src={require('../images/comedy.jpg')} alt="" />
                        <Link to="/comedy">READ MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    
    );
  }
}

export default connect("imgUrl",actions)(withRouter(Container));

