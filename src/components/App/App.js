import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import GalleryItem from '../GalleryItem/GalleryItem.js';
import GalleryList from '../GalleryList/GalleryList.js';

class App extends Component {
  //right now images hard coded will research how to change
  //hard coded moved to bogus file because even commented out made it mad
  state = {
    galleryItems: [
     
   ]
} 
  componentDidMount(){
    this.getGallery()
  }

  getGallery = () => {
    console.log('getting gallery');
    axios.get('/gallery')
   .then(response => {
      console.log('response', response.data);
     this.setState({
       galleryList[...this.state.galleryList]
     })
   }).catch(error =>(
      alert('error in getting', error)
   ))
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        
        <GalleryItem/>
        <GalleryList
          getGallery={this.getGallery}
          listOfPics={this.state.galleryItems}
        />
        
      </div>
    );
  }
}

export default App;
