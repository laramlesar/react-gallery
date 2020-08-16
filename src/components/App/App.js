import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem.js';
import GalleryList from '../GalleryList/GalleryList.js';

class App extends Component {
  //right now images hard coded will research how to change
  state = {
    galleryItems: [
     // {
      //  id : 0,
      //  path : '',
     //  description : '',
     //   likes : 0,
     // }
       { id: 1, path: '../../public/images/baptism_river.jpg', description: 'Photo of the trail leading to the Baptism River', likes: 0 },
       { id: 2, path: '../../public/images/my_dad.jpg', description: 'Not a goat.', likes: 0 },
       { id: 3, path: '../../public/images/old_work_car.jpg', description: 'My Grandpas work car that is in a museum now, he did not work with goats.', likes: 0 },
       { id: 4, path: '../../public/images/panda.jpg', description: 'Photo of a panda taken at National Zoo, I did not see goats', likes: 0 },
       { id: 5, path: '../../public/images/park_point.jpg', description: 'Park Point in the winter, too cold for goats', likes: 0 },
       { id: 6, path: '../../public/images/shovel_point.jpg', description: 'Shovel Point, i think billy goats would do well here', likes: 0 },
       { id: 7, path: '../../public/images/sunglasses.jpg', description: 'I have a small addiction...Prada, Tom Ford, Chanel, Miu Miu, Dolce, Valentino...', likes: 0 }
       
       
   ]
} 
  componentDidMount(){
    this.getGallery()
  }

  getGallery = () => {
    console.log('getting gallery');
    axios.get('/gallery')
   .then(response => {
      //response.data where gallery lives
     this.setState({
       galleryList: response.data
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
          listOfPics={this.state.galleryItems}
          getGallery={this.getGallery}
        />
        
      </div>
    );
  }
}

export default App;
