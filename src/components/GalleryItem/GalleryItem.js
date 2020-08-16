import React, {Component} from 'react';
import axios from 'axios';


class GalleryItem extends Component {

   // state = {
       // desc: false,
   // };
   //showDescription = () {
       //this.setState({
           //desc : !this.state.desc
     //  })
 //  }
    



    render(){ 
        console.log(this.props.galleryItems);
        return(
            <>
            <p>{this.props.galleryItems}</p>
            {/*<img src={require("../../public/images/panda.jpg")} alt=""/>*/}
            </>
        )
    }
}

export default GalleryItem;