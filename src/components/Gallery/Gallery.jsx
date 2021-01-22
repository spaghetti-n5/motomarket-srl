import React from 'react';

const Gallery = ({ gallery }) => (
    <div className="galleryWrapper">
        {gallery.map(galleryImage => (
            <div className="galleryWrapper__image" key={galleryImage.id}>
                <img src={galleryImage.image} alt={galleryImage.alt} height="300px" />
            </div>
        ))}
    </div>
);

export default Gallery;