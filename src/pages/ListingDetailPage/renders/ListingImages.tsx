import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const ListingImages = () => {
  return (
    <>
      <Text mt={2} mb={3} fontWeight="600" fontSize="lg">
        More Images:
      </Text>
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
    </>
  );
};

export default ListingImages;
