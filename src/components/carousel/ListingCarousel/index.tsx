import { Box, IconButton } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "react-multi-carousel/lib/styles.css";

import Listing from "../../Listing";

export const LeftArrow = ({ onClick }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
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
      isRound
      aria-label="next items carousel"
      icon={<MdArrowForwardIos />}
      position="absolute"
      right="0"
      onClick={onClick}
    />
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1240 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1240, min: 600 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
};

const ListingCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      partialVisbile
    >
      <Box pr={4} pb={1}>
        <Listing />
      </Box>
      <Box pr={4}>
        <Listing />
      </Box>
      <Box pr={4}>
        <Listing />
      </Box>
      <Box pr={4}>
        <Listing />
      </Box>
      <Box pr={4}>
        <Listing />
      </Box>
    </Carousel>
  );
};

export default ListingCarousel;
