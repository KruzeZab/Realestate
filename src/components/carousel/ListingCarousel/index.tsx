import { Box, IconButton } from "@chakra-ui/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Listing from "../../Listing";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const LeftArrow = ({ onClick, ...rest }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      display={{ base: "none", md: "flex" }}
      isRound
      aria-label="previous listing carousel"
      icon={<MdArrowBackIos />}
      position="absolute"
      colorScheme={"blue"}
      onClick={onClick}
    />
  );
};

const RightArrow = ({ onClick, ...rest }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      display={{ base: "none", md: "flex" }}
      isRound
      aria-label="previous listing carousel"
      icon={<MdArrowForwardIos />}
      position="absolute"
      right="0"
      colorScheme={"blue"}
      onClick={onClick}
    />
  );
};

const ListingCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
      partialVisbile
    >
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
      <Box pr={4}>
        <Listing />
      </Box>
    </Carousel>
  );
};

export default ListingCarousel;
