import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import VenueContent from '../components/venue';
import '../style/venue.css';
import Search from '../components/searchVenues';

const urlMovie = "https://api-todofancy.herokuapp.com/api/movies";
const baseVenue = 'https://api.foursquare.com/v2/venues/search?';
const clientId ='QVQ2OLZYOX5432RD40PZY02GPNZHACSG430JTWCOTB3CAZRA';
const clientSecret ='YTH2VHNDJ4Z3RJD1HR53RLHDUA3IYV3ELRS1U1DCYJMQ2314'; 
const date='20190314';
const location ='malang';
const search = 'coffe';
const limit = 12;
const urlVenue = baseVenue + "client_id=" + clientId +  "&client_secret=" + clientSecret + "&v=" + date + "&near=" + location + "&query=" + search + "&limit=" + limit;
const baseWeather = "https://api.openweathermap.org/data/2.5/weather?";
const keyWeather = "8b005ee354d652e52665d9c2a36040d8";
const urlWeather = baseWeather + "APPID=" + keyWeather + "&q=" + location;

class VenuePage extends Component {
    constructor (props){
        super(props);
        this.state  = {
            daftarVenue:[],
            weather:[],
            search:""
        }
    }
    componentDidMount = () => {
        const self = this;
        axios
        .get(urlVenue)
        .then(function(response){
            self.setState({daftarVenue: response.data.response.venues});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
        axios
        .get(urlWeather)
        .then(function(response){
            self.setState({weather: response.data.weather[0].main});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });        
        };

        handleInputChange = e => {
        console.log("event", e.target.value);
        let value = e.target.value;
        this.props.changeInput(e)
        this.props.searchNews(value);
        };
        handleInputChange = e => {
            console.log("event", e.target.value);
            let value = e.target.value;
            this.setState(
                {
                    search:value
                },
                () => {
                    this.searchVenue(value);
                }
            );
        };
        searchVenue = async keyword => {
            console.log("seachVenue", keyword);
            const self = this;
            if (keyword.length >2) {
                try {
                    const response = await axios.get(
                        baseVenue + "client_id=" + clientId +  "&client_secret=" + clientSecret + "&v=" + date + "&near=" + keyword + "&query=" + search + "&limit=" + limit
                    );
                    console.log(response);
                    self.setState ({daftarVenue: response.data.response.venues})
                } catch (error){
                    console.error(error);
                }
            }
            if (keyword.length >2) {
                try {
                    const response = await axios.get(
                        baseWeather + "APPID=" + keyWeather + "&q=" + keyword
                    );
                    console.log(response);
                    self.setState ({weather: response.data.weather[0].main})
                } catch (error){
                    console.error(error);
                }
            }
        };

    render() {
        if (this.props.is_login === false){
            return <Redirect to ={{ pathname: "/signin"}} />;
        }else{
            return (
                <div>
                    <div className="container-fluid">
                    <div className="row text-center justify-content-center">
                            <h3 className="mb-1">Place recomendation</h3><br/>
                    </div>
                    <div className="row text-center justify-content-center">
                        <h3 className="mb-1">--------------------------------------------------------------------------------</h3><br/> 
                    </div>
                    <div className="row text-center justify-content-center">
                    <h4> weather on your location is <span className="red">{this.state.weather}</span>, prepare your next activity guys !</h4>
                    </div>
                    <div className="row text-center justify-content-center">
                        <h3 className="mb-1">--------------------------------------------------------------------------------</h3><br/>
                    </div>
                        <div className="row justify-content-start">                       
                        <div className="row">
                            <Search 
                            placeholder = "type keyword ...."
                            doSearch = {this.handleInputChange}
                            keyword = {this.state.search}/>
                        </div>
                        <div className="row justify-content-start marginAuto boardimage">
                                    {this.state.daftarVenue.map((item, key) => {
                                        const category = item.categories.length === 0 ? "none" : item.categories[0].name;
                                        return <VenueContent key={key} nama ={item.name} location = {item.location.formattedAddress} category = {category}  />; 
                                    }
                                    )}
                        </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                        <Footer />
                        </div>
                    </div>
                </div>
                );
        }
        
        
      }
    }
export default connect(
    "is_login, full_name, email, username", actions)
    (withRouter(VenuePage))
