import React from 'react';

const Gallery = ({ gallery, height }) => (
    <div className="galleryWrapper">
        {gallery.map(galleryImage => (
            <div className="galleryWrapper__image" key={galleryImage.id}>
                <img src={galleryImage.image} alt={galleryImage.alt} height="100%" width="100%" />
            </div>
        ))}
    </div>
);

export default Gallery;