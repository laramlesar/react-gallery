import React, { Component }	from 'react';
import GalleryList from '../GalleryList/GalleryList.js';
import axios from 'axios';

class GalleryItem extends Component {

    state = {
        desc: false,
    };
        showDescription = () => {
        this.setState({
        desc: !this.state.desc,
        });
        };
        
        likePic = () => (event) => {
        axios({
        method: 'PUT',
        url: 'gallery/like/' + this.props.pic.id,
        })
        .then((response) => {
       
        this.props.getGallery();
        })
        .catch((error) => {
        console.log('error in itemjs like', error);
        alert('error in likes no one likes');
        });
        }
        render() {
        let showPic = (
        <img src={this.props.pic.path} alt={this.props.pic.description} />
        );
        //let showPic =(<img src='images/baptism_river.jpg' alt="poop nuggets" />);
        if (this.state.showDescription === true) {
            showPic = <p>{this.props.item.description}</p>;
        }
        return (
            <div className="divdisplay">
            <div onClick={this.showDescription}>{showPic}</div>
            <button onClick={this.likePic(this.props.pic.id)}>Like</button>
            {/*<button onClick={this.likePic('1')}>Like</button>*/}
            <p>{this.props.pic.likes} likes</p>
           
            </div>
        );
        }
        }
        
        export default GalleryItem;