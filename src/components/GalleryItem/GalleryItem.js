import React, { Component } from 'react';
//import GalleryList from '../GalleryList/GalleryList.js',
import axios from 'axios';


class GalleryItem extends Component {

   state = {
        desc: false
    }


   showDescription = () => {
       this.setState({
           desc: !this.state.desc
       })
    }


    //like button function will also go in here
    //conditional rendering   

   likePic = () => (event) => {
        axios({
           method: 'PUT',
           url: 'gallery/like' + this.props.galleryItems.id,
        }).then((response) => {
            this.props.getGallery()
        }).catch((error) => {
            console.log('error in itemjs', error);
           alert('error in likes no one likes');
       });
    }

    render() {
        const { desc } = this.state;

        //i did not like this method of conditional rendering
    }
    return(

 <>
   //{ desc === true ? <img src={this.props.pic.path} alt={this.props.pic.description} onClick={this.showDescription}></img> : ""}
    { desc === false ? <div className="toggleClass" onClick={this.showDescription}> {this.props.pic.description}</div> : "" }
   <button onClick={this.likePic}>LIKE!</button>
   <p>Likes: {this.props.pic.likes}</p>
 </>

         
         
         
        );
    }


export default GalleryItem;