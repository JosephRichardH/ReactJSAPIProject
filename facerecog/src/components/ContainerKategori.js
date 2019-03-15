import React, { Component } from 'react';
import './Container.css';
import MovieItem from './MovieItem';

class Navigation extends Component {
  
  render() {
      let baseUrlImg = "http://image.tmdb.org/t/p/w300";
        let tmpMovies = this.props.listMovies.map(item => {
        return <MovieItem adult={item.adult} genre={item.genre_ids} img={baseUrlImg + item.poster_path} title={item.title} year={item.release_date} deskripsi={item.overview} />
    });
    if(tmpMovies.length > 0){
        return (
            <div className="container">
                <div className="row mt-4 justify-content-center">
                    <h3><b>Rekomendasi Film</b></h3>
                </div>
                <div className="row mt-md-5 mt-2">
                    {tmpMovies}
                </div>
            </div>
        
        );
    }else{
        return (
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <h3>Not Found</h3>
                </div>
            </div>
        
        );
    }
    
  }
}

export default Navigation;
