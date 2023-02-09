import React, { useState } from "react";
import ImageMagnify from "react-image-magnify";

import image1Before from "../../data/gallery/IMG_4341_before.jpg";
import image1After from "../../data/gallery/IMG_4341_after.jpg";

const images = [
  {
    id: 1,
    alt: "Image 1 before edit",
    beforeEditSrc: image1Before,
    afterEditSrc: image1After
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map(image => (
        <div
          key={image.id}
          className="cursor-pointer p-4 overflow-hidden relative"
          onClick={() => setSelectedImage(image)}
        >
          <img src={image.afterEditSrc} alt={image.alt} className="w-full h-64 object-cover" />
        </div>
      ))}
      {selectedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 flex items-center justify-center">
          <ImageMagnify
            {...{
              smallImage: {
                alt: selectedImage.alt,
                src: selectedImage.beforeEditSrc,
                isFluidWidth: true
              },
              largeImage: {
                src: selectedImage.beforeEditSrc,
                width: 1200,
                height: 1800
              },
              lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
              isHintEnabled: true,
              hintComponent: (
                <div className="p-4 bg-white absolute bottom-0 left-0 right-0">
                  Move the cursor over the photo to compare before and after edit
                </div>
              )
            }}
          />
          <button
            className="p-4 text-white absolute top-0 right-0"
            onClick={() => setSelectedImage(null)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;