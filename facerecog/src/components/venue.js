import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../style/App.css';
import '../style/venue.css';
// api key news = d59bfb0a933c4a57959b4292bd150e07


const VenueContent = props => {
    return (
<div>

    <div className="">
        <div className= "col-md-10 col-sm-4 col-12 h400w350 justify-content-center margin13 borderproduct">
            <table>
                <tbody>
                <tr>
                    <td className="htable"><span>Name</span></td>
                    <td className="htable"><span>:</span></td>
                    <td className="htable"><span>{props.nama}</span></td>
                </tr>
                <tr>
                    <td className="htable"><span>Address</span></td>
                    <td className="htable"><span>:</span></td>
                    <td className="htable"><span>{props.location}</span></td>
                </tr>
                <tr>
                    <td className="htable"><span>Category</span></td>
                    <td className="htable"><span>:</span></td>
                    <td className="htable"><span>{props.category}</span></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
);
}

export default VenueContent;

