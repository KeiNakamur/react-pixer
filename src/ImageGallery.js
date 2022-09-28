import React from 'react';
import "./ImageGallery.css";
import App from './App';

//{fetchData}でApp.jsからpropsデータを受け取る
const ImageGallery = ({ fetchData }) => {
  return (
    <div>
        <div className="images-wrapper">
            {fetchData.map((data) => (
                <div className='image' key={data.id}>
                    <img src={data.largeImageURL} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageGallery;