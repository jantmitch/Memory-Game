import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import "./App.css";
import imageList from "./images.json";

class App extends Component {
  state = {
    imageList
  };

  shuffleImages = id => {
    const imageCard = this.setState.imageList.onClick(imageList =>(id)
    );
    this.setState({ imageList });
  };

  render() {
    return (
     
      <div>
         <Navbar />
        {this.state.imageList.map(image => (
          <ImageCard 
          shuffleImages={this.shuffleImages}
          key={image.id} 
          image={image.image} 
          name={image.name} />
        ))}
      </div>
    );
  }
}

export default App;
