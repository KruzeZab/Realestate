import { Box, Container, SimpleGrid } from "@chakra-ui/react";

import Listing from "../../components/Listing";
import SearchFilter from "../../components/SearchFilter";

const ListingPage = () => {
  return (
    <>
      <Container maxW="container.2xl" mb={10}>
        <Box pb={4} pt={3}>
          <SearchFilter />
        </Box>
        <Box>
          <SimpleGrid minChildWidth={"400px"} spacing="20px">
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default ListingPage;
