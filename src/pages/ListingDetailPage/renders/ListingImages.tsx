import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const ListingImages = () => {
  return (
    <SimpleGrid minChildWidth={"200px"} spacing={5}>
      <Box>
        <Image src="https://picsum.photos/200/200" width="100%" />
      </Box>
      <Box>
        <Image src="https://picsum.photos/200/200" width="100%" />
      </Box>
      <Box>
        <Image src="https://picsum.photos/200/200" width="100%" />
      </Box>
      <Box>
        <Image src="https://picsum.photos/200/200" width="100%" />
      </Box>
      <Box>
        <Image src="https://picsum.photos/200/200" width="100%" />
      </Box>
      <Box>
        <Image src="https://picsum.photos/200/200" width="100%" />
      </Box>
      <Box>
        <Image src="https://picsum.photos/200/200" width="100%" />
      </Box>
    </SimpleGrid>
  );
};

export default ListingImages;
