import React, { Component } from 'react';
import './ImageCard.css';
import images from '../../images.json';

class ImageCard extends Component {

  state = {
    images
  };

  // shuffleImages = id => {
  //   const imageCard = this.setState.images.onClick(images =>(id)
  //   );
  //   this.setState({ images });
  // };

  render() {
    return 
    <div className="panel">
    
      <div className="container">
        <img className="image" alt={images.name} src={images.image} />
      </div>
      </div>

    }  
}

export default ImageCard;

