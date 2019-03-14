import React, { Component } from 'react';
import './Container.css';

class MovieItem extends Component {
  
  render() {
    let genreIds = this.props.genre;
    let genreString = ""; 
    for(var i = 0; i < genreIds.length;i++){
        let tmpGenre = "";
        if(genreIds[i] === 28){
            tmpGenre = 'Action';
        }else if(genreIds[i] === 12){
            tmpGenre = 'Adventure';
        }else if(genreIds[i] === 16){
            tmpGenre = 'Animation';
        }else if(genreIds[i] === 35){
            tmpGenre = 'Comedy';
        }else if(genreIds[i] === 10751){
            tmpGenre = 'Family';
        }else if(genreIds[i] === 27){
            tmpGenre = 'Horror';
        }else if(genreIds[i] === 10749){
            tmpGenre = 'Romance';
        }else if(genreIds[i] === 878){
            tmpGenre = 'Science-Fiction';
        }else{
            continue;
        }

        if(i == genreIds.length - 1){
            genreString += tmpGenre
        }else{
            genreString += tmpGenre + ", "
        }
    }

    const umurKategori = this.props.adult;
    const umurFlag = "Semua Umur";
    if(umurKategori === true){
        umurFlag = "Khusus Dewasa";
    }
    return (
        <div className="col-md-12">
            <div className="row mt-3">
                <div className="col-md-3">
                    <img className="img-fluid" src={this.props.img} alt="" />
                </div>
                <div className="col-md-9">
                    <div>
                        <p><b>{this.props.title}</b></p>
                        <p>Release : {this.props.year}</p>
                        <p>Genre : {genreString}</p>
                        <p>Kategori Umur : {umurFlag}</p>
                        <p>{this.props.deskripsi}</p>
                    </div>
                </div>
            </div>
            <hr className="w-100"/>
        </div>
    
    );
  }
}

export default MovieItem;
