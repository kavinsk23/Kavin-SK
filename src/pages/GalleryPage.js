import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from './Lightbox';
import eLearningdesktop1 from "../assets/images/eLearning-desktop1.png";
import eLearningdesktop2 from "../assets/images/eLearning-desktop2.png";
import eLearningdesktop3 from "../assets/images/eLearning-desktop3.png";
import eLearningdesktop4 from "../assets/images/eLearning-desktop4.png";
import eLearningdesktop5 from "../assets/images/eLearning-desktop5.png";
import eLearningmob1 from "../assets/images/eLearning-mob1.png";
import eLearningmob2 from "../assets/images/eLearning-mob2.png";
import eLearningmob3 from "../assets/images/eLearning-mob3.png";
import eLearningmob4 from "../assets/images/eLearning-mob4.png";
import eLearningmob5 from "../assets/images/eLearning-mob5.png";
import softwareCompany1 from "../assets/images/softwareCompany1.png";
import softwareCompany2 from "../assets/images/softwareCompany2.png";
import softwareCompany3 from "../assets/images/softwareCompany3.png";
import softwareCompany4 from "../assets/images/softwareCompany4.png";
import softwareCompany5 from "../assets/images/softwareCompany5.png";
import fuellApp1 from "../assets/images/fuel-1.png";
import fuellApp2 from "../assets/images/fuel-2.png";
import fuellApp3 from "../assets/images/fuel-3.png";
import furnitureshop from "../assets/images/furnitureshop.png";
import plantshop from "../assets/images/plantshop.png";
import nftplace from "../assets/images/nft-market.png";
import realstate from "../assets/images/real-estate.png";
import resturantimg1 from "../assets/images/resturant1.png";
import resturantimg2 from "../assets/images/resturant2.png";
import businesscardImplemented from "../assets/images/businesscardDesign.png";
import airbnb from "../assets/images/airbnbimplemented.jpg";
import bodimkarayo1 from "../assets/images/bodimkarayo1.png";
import bodimkarayo2 from "../assets/images/bodimkarayo2.png";
import bodimkarayo3 from "../assets/images/bodimkarayo3.png";
import bodimkarayo4 from "../assets/images/bodimkarayo4.png";
import bodimkarayo5 from "../assets/images/bodimkarayo5.png";
import bodimkarayo6 from "../assets/images/bodimkarayo6.png";
import bodimkarayo7 from "../assets/images/bodimkarayo7.png";
import bodimkarayo8 from "../assets/images/bodimkarayo8.png";
import bodimkarayo9 from "../assets/images/bodimkarayo9.png";
import bodimkarayo10 from "../assets/images/bodimkarayo10.png";
import pos1 from "../assets/images/pos1.png";
import pos2 from "../assets/images/pos2.png";
import pos3 from "../assets/images/pos3.png";
import pos4 from "../assets/images/pos4.png";
import pos5 from "../assets/images/pos5.png";
import pos6 from "../assets/images/pos6.png";
import pos7 from "../assets/images/pos7.png";

const imageSets = {
  gallery1: {
    images: [
      eLearningdesktop1,
      eLearningdesktop2,
      eLearningdesktop3,
      eLearningdesktop4,
      eLearningdesktop5,
      eLearningmob1,
      eLearningmob2,
      eLearningmob3,
      eLearningmob4,
      eLearningmob5,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery2: {
    images: [
      softwareCompany1,
      softwareCompany2,
      softwareCompany3,
      softwareCompany4,
      softwareCompany5,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  // Add more gallery image sets here
  gallery3: {
    images: [
      fuellApp1,
      fuellApp2,
      fuellApp3,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery4: {
    images: [
      plantshop,
      furnitureshop,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery5: {
    images: [
      nftplace,
      realstate,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery6: {
    images: [],
    text: "Visit",
    links: [
      { url: "https://kavinsk.com/", label: "Kavin SK" },
    ]
  },
  gallery7: {
    images: [
      resturantimg1,
      resturantimg2,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery8: {
    images: [
      businesscardImplemented,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery9: {
    images: [
      airbnb,
    ],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery10: {
    images: [],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery11: {
    images: [],
    text: "",
    links: [
      { url: "", label: "" },
    ]
  },
  gallery12: {
    images: [
      bodimkarayo1,
      bodimkarayo2,
      bodimkarayo3,
      bodimkarayo4,
      bodimkarayo5,
      bodimkarayo6,
      bodimkarayo7,
      bodimkarayo8,
      bodimkarayo9,
      bodimkarayo10,
    ],
    text: "Visit",
    links: [
      { url: "https://bodimkarayo.lk/", label: "Bodimkarayo" },
    ]
  },
  gallery13: {
    images: [
      pos1,
      pos2,
      pos3,
      pos4,
      pos5,
      pos6,
      pos7,
    ],
    text: "Visit (Admin Only)",
    links: [
      { url: "http://happysales.lk", label: "Happy Sales" },
    ]
  }
};

export default function GalleryPage() {
  const { galleryId } = useParams();
  const gallery = imageSets[galleryId] || { images: [], text: '', links: [] };
  const images = gallery.images;
  const galleryText = gallery.text;
  const galleryLinks = gallery.links;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto py-10 bg-secondary-100">
      {galleryText && (
        <p className="text-center text-white font-bold text-xl pb-10">
          {galleryText}
          {galleryLinks.map((link, index) => (
            <span key={index}>
              {" "}
              <a href={link.url} className="text-blue-500 underline">{link.label}</a>
            </span>
          ))}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt="" // Empty alt for decorative images
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
