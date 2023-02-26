import { Container } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import HomeCTA from "../../components/CTA/HomeCTA";
import Hero from "../../components/Hero";
import Testimonial from "../../components/Testimonial";
// import ListingCarousel from "../../components/carousel/ListingCarousel";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <ListingCarousel /> */}

      <Container maxW="container.xl" pt={10}>
        <HomeCTA />

        <Testimonial />
      </Container>
    </>
  );
};

export default HomePage;
