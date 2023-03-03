import { Box, IconButton } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const LeftArrow = ({ onClick }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      size="sm"
      isRound
      aria-label="previous items carousel"
      icon={<MdArrowBackIos />}
      position="absolute"
      onClick={onClick}
    />
  );
};

export const RightArrow = ({ onClick }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      size="sm"
      isRound
      aria-label="next items carousel"
      icon={<MdArrowForwardIos />}
      position="absolute"
      right="0"
      onClick={onClick}
    />
  );
};

const images = [
  {
    original: "https://picsum.photos/id/1018/600/200",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/600/200",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/600/200",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ImageCarousel = () => {
  return (
    <ImageGallery
      items={images}
      useBrowserFullscreen={false}
      showFullscreenButton={false}
      renderRightNav={(onClick, disabled) => (
        <Box
          position="absolute"
          zIndex={1}
          top="40%"
          right="5px"
          transform="translate('-50%, -50%')"
        >
          <RightArrow onClick={onClick} disabled={disabled} />
        </Box>
      )}
      showPlayButton={false}
      renderLeftNav={(onClick, disabled) => (
        <Box
          position="absolute"
          zIndex={1}
          top="40%"
          left="5px"
          transform="translate('-50%, -50%')"
        >
          <LeftArrow onClick={onClick} disabled={disabled} />
        </Box>
      )}
    />
  );
};

export default ImageCarousel;
