import { Box } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { LeftArrow, RightArrow } from "../NavButton";

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
      renderRightNav={(onClick, disabled) => (
        <Box
          position="absolute"
          display={{ base: "none", md: "block" }}
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
          display={{ base: "none", md: "block" }}
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
