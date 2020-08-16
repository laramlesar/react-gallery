import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';


class GalleryList extends Component {

    
//render images with if/else?
    render(){
        console.log('boo',this.props.listOfPics.path);  
        return(
            <>
            {this.props.listOfPics.map((pic)=>{
                console.log(pic.id)
                console.log(pic.path);
                return(
                    <GalleryItem key={pic.id} pic={pic.path}
                    description={pic.description}
                    />    
                )
            })}
            
            </>
        )
    }
}

export default GalleryList;