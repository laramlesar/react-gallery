import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';


class GalleryList extends Component {

    
//render images with if/else?
    render(){
        console.log('yo yo yo', this.props.listOfPics);
        //console.log('boo',this.props.listOfPics.path);  
        //not told to loop that's why doesn't wotrk
        return(
            <>
            {this.props.listOfPics.map((pic, index)=>{
                console.log(pic.id)
                console.log('yo', pic.path);
                return(
                    <GalleryItem key={pic.id} 
                    getGallery={this.props.getGallery}
                    />    
                )
            })}
            
            </>
        )
    }
}

export default GalleryList;