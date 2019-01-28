import React from 'react';
import images from './images.css';


const ImageList = props => {

   

   
    const images = props.images.map((image) => {

        //console.log(image);

        return <img key={image.id} src={image.urls.regular} alt={image.description}/>
        
    });
    return <div className="image-list">{images}</div>



}

export default ImageList;