import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Navigation from '../components/Navigation';
import ContainerKategori from '../components/ContainerKategori';
import axios from 'axios';
import {connect} from 'unistore/react';
import {actions} from '../store';



class Movie extends Component {
    componentDidMount(){
        let keyword = this.props.match.params.kategori;
        let adultFlag = true;
        let genreFlag = 0;

        let age = 20;
        let emotion = 'Comedy';

        if(age < 18){
            adultFlag = true;
        }

        if(emotion === 'Action'){
            genreFlag = 28;
        }else if(emotion === 'Adventure'){
            genreFlag = 12;
        }else if(emotion === 'Animation'){
            genreFlag = 16;
        }else if(emotion === 'Comedy'){
            genreFlag = 35;
        }else if(emotion === 'Family'){
            genreFlag = 10751;
        }else if(emotion === 'Horror'){
            genreFlag = 27;
        }else if(emotion === 'Romance'){
            genreFlag = 10749;
        }else{
            genreFlag = 878;
        }

        const url = "https://api.themoviedb.org/3/movie/popular?api_key=26260af1e1d1266dfa51dbb066992730&language=en-US&page=1"
        let self = this;
        axios.get(url).then(function(response){
            let tmpMovies = response.data.results;
            if(adultFlag){
                    tmpMovies = tmpMovies.filter((item) => {
                    return item.adult === false;
                });
            }
            
            let movieList = []
            for(var i = 0; i < tmpMovies.length ; i++){
                for(var j = 0; j < tmpMovies[i].genre_ids.length;j++){
                    if(tmpMovies[i].genre_ids[j] === genreFlag){
                        movieList.push(tmpMovies[i]);
                    }
                }
            }

            self.props.setListMovies(movieList); 
            
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render() {
        const listMovies = this.props.listMovies;
        return (
            <div>
                <Navigation />
                <ContainerKategori listMovies={listMovies} />
            </div>
        );
    }
}

export default connect("listMovies",actions)(withRouter(Movie));

