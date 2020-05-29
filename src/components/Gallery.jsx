import React from 'react';

export const Gallery = ({ gallery }) => (
    <div className="galleryWrapper">
        {gallery.map(galleryImage => (
            <div className="galleryWrapper__image" key={galleryImage.id}>
                <img src={galleryImage.image} alt={galleryImage.alt} />
            </div>
        ))}
    </div>
);
