import React, { Component } from 'react';	
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
	
	class App extends Component {
    //hardcoded images moved
	state = {
    galleryItems: [
      /*
      { id: 1, path: 'images/baptism_river.jpg', description: 'Photo of the trail leading to the Baptism River', likes: 0 },
      { id: 2, path: 'images/my_dad.jpg', description: 'Not a goat.', likes: 0 },
      { id: 3, path: 'images/old_work_car.jpg', description: 'My Grandpas work car that is in a museum now, he did not work with goats.', likes: 0 },
      { id: 4, path: 'images/panda.jpg', description: 'Photo of a panda taken at National Zoo, I did not see goats', likes: 0 },
      { id: 5, path: 'images/park_point.jpg', description: 'Park Point in the winter, too cold for goats', likes: 0 },
      { id: 6, path: 'images/shovel_point.jpg', description: 'Shovel Point, i think billy goats would do well here', likes: 0 },
      { id: 7, path: 'images/sunglasses.jpg', description: 'I have a small addiction...Prada, Tom Ford, Chanel, Miu Miu, Dolce, Valentino...', likes: 0 }
      */
    ]
	}


	
	componentDidMount() {
	this.getGallery();
	}
	
	getGallery = () => {
	axios({
	  method: 'GET',
	  url: '/gallery',
	})
	.then((response) => {
	  this.setState({
	  galleryItems: response.data,
	});
	})
	.catch((error) => {
	console.log('Error in getGallery', error);
	alert('Error in getGallery');
	});
	};
	render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList
          listOfPics={this.state.galleryItems}
          getGallery={this.getGallery}/>
      </div>
	  );
	}
}
  
  export default App;
