import { Container, SimpleGrid } from "@chakra-ui/react";
import Listing from "../../../components/Listing";

const ListingPage = () => {
  return (
    <Container maxW="container.2xl" pt={10}>
      <SimpleGrid minChildWidth={"300px"} spacing="20px">
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </SimpleGrid>
    </Container>
  );
};

export default ListingPage;
