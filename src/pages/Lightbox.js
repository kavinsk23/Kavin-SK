import React from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const Lightbox = ({ images, photoIndex, setPhotoIndex, onClose }) => {
  const nextImage = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const prevImage = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <button onClick={onClose} className="absolute top-5 right-5 text-white text-3xl">
        <FaTimes />
      </button>
      <button onClick={prevImage} className="absolute left-5 text-white text-3xl">
        <FaArrowLeft />
      </button>
      <img src={images[photoIndex]} alt={`Lightbox Image ${photoIndex + 1}`} className="max-w-full max-h-full" />
      <button onClick={nextImage} className="absolute right-5 text-white text-3xl">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Lightbox;
