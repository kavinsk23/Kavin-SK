import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Lightbox from './Lightbox';

const imageSets = {
  gallery1: [
    "https://via.placeholder.com/800x600",
    "https://via.placeholder.com/600x800",
    "https://via.placeholder.com/1200x900",
    "https://via.placeholder.com/900x1200"
  ],
  gallery2: [
    "https://via.placeholder.com/800x600/0000FF",
    "https://via.placeholder.com/600x800/FF0000",
    "https://via.placeholder.com/1200x900/00FF00",
    "https://via.placeholder.com/900x1200/FFFF00"
  ],
  // Add more gallery image sets here
  gallery3: [
    // images for gallery 3
  ],
  gallery4: [
    // images for gallery 4
  ],
  gallery5: [
    // images for gallery 5
  ],
  gallery6: [
    // images for gallery 6
  ],
  gallery7: [
    // images for gallery 7
  ],
  gallery8: [
    // images for gallery 8
  ],
  gallery9: [
    // images for gallery 9
  ],
  gallery10: [
    // images for gallery 10
  ],
  gallery11: [
    // images for gallery 11
  ]
};

export default function GalleryPage() {
  const { galleryId } = useParams();
  const location = useLocation();
  const images = imageSets[galleryId] || [];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">{location.state?.workName || 'Gallery Page'}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          images={images}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
