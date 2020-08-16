import React, {Component} from 'react';
//import GalleryList from '../GalleryList/GalleryList.js',
//import axios from 'axios';


class GalleryItem extends Component {

   // state = {
       // desc: false,
   // };
   //showDescription = () {
       //this.setState({
           //desc : !this.state.desc
     //  })
 //  } 
 //like button function will also go in here
 //conditional rendering   



    render(){ 
        //console.log('lol',this.props.pics.path);
        return(
            <>
            <p>{this.props.galleryItems}</p>
            {/*{<img src={require("../../public/images/panda.jpg")} alt=""/>}*/}
            </>
        )
    }
}

export default GalleryItem;