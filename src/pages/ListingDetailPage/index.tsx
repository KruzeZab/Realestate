import { Container } from "@chakra-ui/react";
import ImageCarousel from "../../components/carousel/ImageCarousel";

const ListingDetailPage = () => {
  return (
    <Container maxW="container.xl" pt={8}>
      <ImageCarousel />
    </Container>
  );
};

export default ListingDetailPage;
