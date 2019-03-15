import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Navigation from '../components/Navigation';
import ContainerKategori from '../components/ContainerKategori';
import axios from 'axios';
import {connect} from 'unistore/react';
import {actions} from '../store';



class Kategori extends Component {
    genreToId(genre){
        let genreId = 0
        if(genre === 'Action'){
            genreId = 28;
        }else if(genre === 'Adventure'){
            genreId = 12;
        }else if(genre === 'Animation'){
            genreId = 16;
        }else if(genre === 'Comedy'){
            genreId = 35;
        }else if(genre === 'Family'){
            genreId = 10751;
        }else if(genre === 'Horror'){
            genreId = 27;
        }else if(genre === 'Romance'){
            genreId = 10749;
        }else{
            genreId = 878;
        }

        return genreId;
    }

    emotionToGenre(emotion){
        let genre = "";
        if(emotion === 'anger'){
            genre = "Family";
        }else if(emotion === 'contempt'){
            genre = "Adventure";
        }else if(emotion === 'disgust'){
            genre = "Horror";
        }else if(emotion === 'fear'){
            genre = "Animation";
        }else if(emotion === 'happiness'){
            genre = "Romance";
        }else if(emotion === 'neutral'){
            genre = "Action";
        }else if(emotion === 'sadness'){
            genre = "Comedy";
        }else{
            genre = "Others";
        }
        return genre;
    }


    componentDidMount(){
        let keyword = this.props.match.params.kategori;
        let adultFlag = true;
        
        let emotion = keyword;
        let age = 20;
        let genre = this.emotionToGenre(emotion);
        let genreFlag = this.genreToId(genre);
        
        if(age < 18){
            adultFlag = true;
        }

        let baseUrl = "https://api.themoviedb.org/3/movie/popular?";
        let api_key = "26260af1e1d1266dfa51dbb066992730";
        let page  = 1;

        const url = baseUrl + "api_key=" + api_key + "&language=en-US&page=";

        let self = this;

        axios.get(url + page).then(function(response){
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
                        break;
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

export default connect("listMovies",actions)(withRouter(Kategori));

