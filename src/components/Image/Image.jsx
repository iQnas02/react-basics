import React from 'react';
import './Image.css'; // Optional: for styling

const ImageCard = ({ imageSrc, text }) => (
    <div className="image-card">
        <img src={imageSrc} alt={text} className="image" />
        <p>{text}</p>
    </div>
);

export default ImageCard;