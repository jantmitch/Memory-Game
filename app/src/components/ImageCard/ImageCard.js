import React from 'react';
import './ImageCard.css';
import images from '../../images.json';

const ImageCard = props => (
    <div className="panel">
    
      <div className="container">
        <img className="image" alt={props.name} src={props.image} />
      </div>
      </div>

    
)

export default ImageCard;

