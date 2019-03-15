import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../style/App.css';
import '../style/search.css';

class Search extends Component {
  render() {
    return (
    <div className="container-fluid">
        <div className="row margin5 justify-content-center">
          <h4 className="marginCari">Location</h4>
          <form>
            <input type="text" className="tex margin2" placeholder={this.props.placeholder} onChange={this.props.doSearch} value={this.props.keyword} name="search"/>
          </form>    
        </div>
    </div>

    );
  }
}

export default Search;

