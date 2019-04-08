import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = props => {

  const images = props.images.map((image) => <ImageCard key={image.id} image={image}/>);

  if (props.images.length > 1) {
    return <div className="image-list">{images}</div>
  } else {
    return <h2 style={{textAlign: 'center'}}>Sorry. No images.</h2>
  }

};

export default ImageList;
