import React, { Component }	from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';
//import axios from 'axios';
	
//import GalleryItem from '../GalleryItem/GalleryItem';	
	
class GalleryList extends Component {
    //render images with if/else?
    render(){
        return(
            <>
            <p>hello</p>
            {this.props.listOfPics.map( (pic)=>{
                return(
                    <GalleryItem key={pic.id}pic={pic}
                    getGallery={this.props.getGallery} />
            
                )
            })}
            </>
        )
    }
}
    
export default GalleryList;