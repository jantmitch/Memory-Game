import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";
import imageList from "./images.json";


const App = () => 
<div>
{imageList.map(image => (
<ImageCard 

key={image.id}
image={image.image} 
name={image.name} 
/>

))}
</div>
export default App;