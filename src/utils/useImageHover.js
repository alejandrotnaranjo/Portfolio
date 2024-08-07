import { useState } from "react";

const useImageHover = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage(null);
  };

  return {
    currentImage,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useImageHover;
