import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import logo from './logo.svg';

const businesses = [
  this.props,
  this.props,
  this.props,
  this.props,
  this.props,
  this.props
];

class Business extends React.Component {
  render() {
    return ( 
    <div className="Business">
      <div className="image-container">
        <img src={this.props.imageSrc} alt=''/>
      </div>
      <h2>{this.props.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{this.props.address}</p>
          <p>{this.props.city}</p>
          <p>{this.props.state} {this.props.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{this.props.category}</h3>
          <h3 className="rating">{this.props.rating} stars</h3>
          <p>{this.props.reviewCount} reviews</p>
        </div>
      </div>
    </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList propName={businesses}/>
      </div>
    );
  }
}

export default App;