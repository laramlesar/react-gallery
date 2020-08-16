import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';


class GalleryList extends Component {

    
//render images with if/else?
    render(){
       // console.log('yo yo yo', this.props.listOfPics);
        //console.log('boo',this.props.listOfPics.path);  
        //not told to loop that's why doesn't wotrk
        return(
           <ul>
           {this.props.listOfPics.map((pic)=>{
            <li key={pic.id}> 
           <GalleryItem pic={pic} getGallery={this.props.getGallery} />
            </li>
            })}
           </ul>
           
        );
    }
}

export default GalleryList;